// SCRAPE-1: Scrape complete Rolls product catalog (46 products across 4 list pages)
// Single ZAI instance. Sequential fetches with skip-if-exists for resumability.
// Output: /tmp/rolls-products.json
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const BASE = 'http://www.rolls7.cn';
// Verified pagination pattern: /index.php/list/rolls/1/cn/12511/12511/N.html
// Pages 1-4 contain 12+12+12+10 = 46 products total.
const LIST_URLS = [
  `${BASE}/index.php/list/rolls/1/cn/12511/12511.html`,
  `${BASE}/index.php/list/rolls/1/cn/12511/12511/2.html`,
  `${BASE}/index.php/list/rolls/1/cn/12511/12511/3.html`,
  `${BASE}/index.php/list/rolls/1/cn/12511/12511/4.html`,
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Force-flushed log so output appears immediately when redirected to a file.
function log(msg) {
  process.stdout.write(msg + '\n');
}

// ---- Helpers ----
function readJsonIfExists(p) {
  if (fs.existsSync(p) && fs.statSync(p).size > 0) {
    try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch {}
  }
  return null;
}

// Extract product card links from a list page's HTML.
// Product cards use: <a href="/index.php/wareshow/rolls/1/cn/<ID>,12511/12511.html" target="_blank">NAME</a>
function extractProductCards(html) {
  const re = /<a\s+href="(\/index\.php\/wareshow\/rolls\/1\/cn\/(\d+),12511\/12511\.html)"\s+target="_blank"[^>]*>([^<]+)<\/a>/g;
  const seen = new Map();
  let m;
  while ((m = re.exec(html))) {
    const id = m[2];
    const name = m[3].replace(/&nbsp;/g, '').replace(/\s+/g, ' ').trim();
    if (!seen.has(id)) seen.set(id, { id, name, url: BASE + m[1] });
  }
  return [...seen.values()];
}

// Strip HTML tags, decode entities, normalize whitespace; preserve <br> as newline first.
function stripHtml(html) {
  if (!html) return '';
  let s = String(html);
  // Convert <br> and <br/> to newline
  s = s.replace(/<br\s*\/?>/gi, '\n');
  // Convert </p> to newline
  s = s.replace(/<\/p>/gi, '\n');
  // Convert <p> to nothing (already have newline)
  s = s.replace(/<p[^>]*>/gi, '');
  // Remove all other tags
  s = s.replace(/<[^>]+>/g, '');
  // Decode common entities
  s = s.replace(/&nbsp;/g, ' ')
       .replace(/&amp;/g, '&')
       .replace(/&lt;/g, '<')
       .replace(/&gt;/g, '>')
       .replace(/&quot;/g, '"')
       .replace(/&#39;/g, "'")
       .replace(/&hellip;/g, '…')
       .replace(/&mdash;/g, '—')
       .replace(/&ndash;/g, '–')
       .replace(/&times;/g, '×')
       .replace(/&deg;/g, '°');
  // Normalize: collapse spaces but preserve newlines
  s = s.split('\n').map(line => line.replace(/[ \t]+/g, ' ').trim()).join('\n');
  // Collapse 3+ newlines to 2
  s = s.replace(/\n{3,}/g, '\n\n').trim();
  return s;
}

// Parse a detail page HTML into structured fields.
function parseDetail(html, meta) {
  const out = {
    id: meta.id,
    name: meta.name,
    category: '',
    url: meta.url,
    overview: '',
    application: '',
    physicalParams: '',
    construction: '',
    recommendedSystem: '',
    notes: '',
    safety: '',
  };

  // 1) Extract category = first sortid link inside 同系列产品 section.
  //    Pattern: <a href="/?action=list|rolls|1|cn|12511|12511&amp;sortid=...">CATEGORY_NAME</a>
  //    that appears AFTER the "同系列产品" marker.
  const seriesIdx = html.indexOf('同系列产品');
  if (seriesIdx >= 0) {
    const after = html.slice(seriesIdx);
    const catRe = /<a\s+href="\/(?:index\.php)?\?action=list\|rolls\|1\|cn\|12511\|12511&amp;sortid=\d+\|\d+"[^>]*>([^<]+)<\/a>/;
    const cm = after.match(catRe);
    if (cm) out.category = cm[1].replace(/&nbsp;/g, '').trim();
  }
  // Fallback: if category still empty, try the first sortid link in the entire doc (sidebar).
  if (!out.category) {
    const catRe = /<a\s+href="\/(?:index\.php)?\?action=list\|rolls\|1\|cn\|12511\|12511&amp;sortid=\d+\|\d+"[^>]*>&nbsp;&nbsp;&nbsp;([^<]+)<\/a>/;
    const cm = html.match(catRe);
    if (cm) out.category = cm[1].trim();
  }

  // 2) Extract sections. The pattern is:
  //    <p><strong>SECTION_NAME<br></strong> CONTENT</p>
  //    We scan the HTML for these markers and capture content until next marker or end.
  const SECTIONS = [
    ['产品概述', 'overview'],
    ['适用范围', 'application'],
    ['物理参数', 'physicalParams'],
    ['施工说明', 'construction'],
    ['建议油漆配套', 'recommendedSystem'],
    ['注意事项', 'notes'],
    ['安全守则', 'safety'],
  ];

  // Find all marker positions: <strong>SECTION_NAME<br></strong>
  // Use a regex that captures the section name and the start index of content.
  const markerRe = /<strong>\s*(产品概述|适用范围|物理参数|施工说明|建议油漆配套|注意事项|安全守则)\s*<br\s*\/?><\/strong>/g;
  const markers = [];
  let mm;
  while ((mm = markerRe.exec(html))) {
    markers.push({ name: mm[1], contentStart: mm.index + mm[0].length });
  }
  // For each marker, content ends at the next marker or at next </p> or end of html.
  for (let i = 0; i < markers.length; i++) {
    const start = markers[i].contentStart;
    const endPos = (i + 1 < markers.length) ? markers[i + 1].name : null;
    // We need to find the END of this content.
    // Strategy: take substring from start to (start of next marker's <p><strong> OR end of html).
    let end = html.length;
    if (i + 1 < markers.length) {
      end = markers[i + 1].markerStart ?? html.indexOf('<p><strong>', start);
      if (end < 0) end = html.length;
    } else {
      // last section: end at next </td> or </tr>
      const tdEnd = html.indexOf('</td>', start);
      if (tdEnd > 0) end = tdEnd;
    }
    // Also clamp at next <strong> to be safe
    const nextStrong = html.indexOf('<strong>', start);
    if (nextStrong > 0 && nextStrong < end) end = nextStrong;
    let raw = html.slice(start, end);
    // Trim trailing </p> etc.
    raw = raw.replace(/<\/p>\s*$/i, '').trim();
    const text = stripHtml(raw);
    const sec = SECTIONS.find(([n]) => n === markers[i].name);
    if (sec) out[sec[1]] = text;
  }

  return out;
}

// ---- Main ----
(async () => {
  console.log('🚀 Initializing ZAI SDK...');
  const zai = await ZAI.create();

  // ---- Step 1: Fetch 4 list pages ----
  console.log('\n=== Step 1: Fetching list pages ===');
  const listPages = [];
  for (let i = 0; i < LIST_URLS.length; i++) {
    const cacheFile = `/tmp/rolls-list-${i + 1}.json`;
    let data = readJsonIfExists(cacheFile);
    if (data) {
      console.log(`  [page ${i + 1}] cached → ${cacheFile}`);
    } else {
      console.log(`  [page ${i + 1}] fetching ${LIST_URLS[i]}`);
      let attempt = 0;
      while (attempt < 3) {
        try {
          const result = await zai.functions.invoke('page_reader', { url: LIST_URLS[i] });
          fs.writeFileSync(cacheFile, JSON.stringify(result));
          data = result;
          break;
        } catch (e) {
          attempt++;
          console.log(`    attempt ${attempt} failed: ${e.message}`);
          await sleep(3000);
        }
      }
      if (!data) { console.error(`  ✖ page ${i + 1} failed after retries`); continue; }
      await sleep(2000);
    }
    listPages.push(data);
  }

  // ---- Step 2: Parse product cards from each list page ----
  console.log('\n=== Step 2: Parse product cards ===');
  const productMap = new Map();
  listPages.forEach((data, idx) => {
    if (!data || !data.data || !data.data.html) return;
    const cards = extractProductCards(data.data.html);
    console.log(`  [page ${idx + 1}] ${cards.length} product cards`);
    cards.forEach(c => {
      if (!productMap.has(c.id)) productMap.set(c.id, c);
    });
  });
  const products = [...productMap.values()];
  console.log(`  ✓ Total unique products: ${products.length}`);

  // ---- Step 3: Fetch each detail page (with cache + delay) ----
  log('\n=== Step 3: Fetch detail pages ===');
  const details = [];
  let failCount = 0;
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const cacheFile = `/tmp/rolls-detail-${p.id}.json`;
    let data = readJsonIfExists(cacheFile);
    if (data) {
      log(`  [${i + 1}/${products.length}] ${p.id} cached`);
    } else {
      log(`  [${i + 1}/${products.length}] ${p.id} fetching ...`);
      let attempt = 0;
      let ok = false;
      while (attempt < 3 && !ok) {
        try {
          const result = await zai.functions.invoke('page_reader', { url: p.url });
          if (!result || !result.data || !result.data.html) throw new Error('empty result');
          fs.writeFileSync(cacheFile, JSON.stringify(result));
          data = result;
          ok = true;
        } catch (e) {
          attempt++;
          log(`    attempt ${attempt} failed: ${e.message}`);
          await sleep(3000);
        }
      }
      if (!ok) { failCount++; log(`  ✖ ${p.id} FAILED after retries`); }
      await sleep(2000); // rate-limit between detail fetches
    }
    if (data) details.push({ meta: p, data });
  }
  log(`  ✓ Fetched ${details.length}/${products.length} detail pages (${failCount} failed)`);

  // ---- Step 4: Parse detail pages ----
  console.log('\n=== Step 4: Parse detail pages ===');
  const parsed = [];
  let missingSections = 0;
  for (const { meta, data } of details) {
    if (!data || !data.data || !data.data.html) {
      console.log(`  ✖ ${meta.id} no html`);
      continue;
    }
    const obj = parseDetail(data.data.html, meta);
    // Update name from page title if empty
    if (!obj.name && data.data.title) obj.name = data.data.title.split(' - ')[0].trim();
    // Diagnostics
    const filled = ['overview','application','physicalParams','construction','recommendedSystem','notes','safety']
      .filter(k => obj[k]).length;
    if (filled < 7) {
      missingSections++;
      console.log(`  ⚠ ${meta.id} ${meta.name}: ${filled}/7 sections filled`);
    }
    parsed.push(obj);
  }
  console.log(`  ✓ Parsed ${parsed.length} products, ${missingSections} with missing sections`);

  // ---- Step 5: Write final output ----
  const out = { totalProducts: parsed.length, products: parsed };
  const outPath = '/tmp/rolls-products.json';
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  console.log(`\n✅ Wrote ${outPath} (${parsed.length} products)`);

  // Print summary
  console.log('\n=== Product list ===');
  parsed.forEach((p, i) => {
    console.log(`  ${(i + 1).toString().padStart(2, '0')}. [${p.id}] ${p.name} — category: ${p.category || '(none)'}`);
  });
})().catch((e) => {
  console.error('FATAL:', e);
  process.exit(1);
});
