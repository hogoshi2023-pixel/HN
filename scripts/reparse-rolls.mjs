// SCRAPE-1 (re-parse): Re-parse all cached detail pages with a more robust parser.
// Reads /tmp/rolls-detail-<ID>.json + list pages, writes /tmp/rolls-products.json.
// No network calls. Idempotent — safe to re-run.
import fs from 'fs';

const BASE = 'http://www.rolls7.cn';
// Section variants — order matters: longer/more-specific names first within each field
// so that "施工说明" wins over "施工", "注意事项" wins over "注意", etc.
const SECTIONS = [
  ['overview',        ['产品概述', '产品简介', '产品介绍', '产品描述', '简介']],
  ['application',     ['适用范围', '产品用途', '应用范围', '用途']],
  ['physicalParams',  ['物理参数', '基本参数', '施工参数', '技术参数', '技术指标']],
  ['construction',    ['施工说明', '施工条件', '涂装施工', '施工']],
  ['recommendedSystem', ['建议油漆配套', '典型油漆系统', '配套油漆系统', '施工配套', '后道配套涂料', '配套涂料', '前道配套']],
  ['notes',           ['注意事项', '注意']],
  ['safety',          ['安全守则', '安全事项', '安全防护', '注意安全', '安全']],
];
// Build a flat list of (name, field) pairs, sorted by name length DESC so longer names match first.
const SECTION_FIELD_PAIRS = SECTIONS.flatMap(([field, names]) => names.map(name => ({ name, field })));
SECTION_FIELD_PAIRS.sort((a, b) => b.name.length - a.name.length);
const ALL_SECTION_NAMES = SECTION_FIELD_PAIRS.map(p => p.name);
const NAME_TO_FIELD = new Map(SECTION_FIELD_PAIRS.map(p => [p.name, p.field]));

function readJsonIfExists(p) {
  if (fs.existsSync(p) && fs.statSync(p).size > 0) {
    try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch {}
  }
  return null;
}

// Strip HTML tags, decode entities, normalize whitespace; preserve <br> as newline first.
function stripHtml(html) {
  if (!html) return '';
  let s = String(html);
  s = s.replace(/<br\s*\/?>/gi, '\n');
  s = s.replace(/<\/p>/gi, '\n');
  s = s.replace(/<p[^>]*>/gi, '');
  s = s.replace(/<[^>]+>/g, '');
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
  s = s.split('\n').map(line => line.replace(/[ \t]+/g, ' ').trim()).join('\n');
  s = s.replace(/\n{3,}/g, '\n\n').trim();
  return s;
}

// Find all section markers in the HTML. A marker is a section name that's either:
//   (a) preceded by <strong> (with optional <br>/whitespace/Chinese-prefix between) — bolded form
//   (b) preceded by <br> AND followed by : or ：— inline form
// Longer section names are checked first so "施工说明" wins over "施工".
function findSectionMarkers(html) {
  const markers = [];
  const used = new Set(); // track (idx) ranges already covered by a longer match
  for (const { name, field } of SECTION_FIELD_PAIRS) {
    let pos = 0;
    while (true) {
      const idx = html.indexOf(name, pos);
      if (idx < 0) break;
      pos = idx + 1;
      // Skip if this position is already inside a longer marker match.
      if ([...used].some(u => idx >= u.start && idx < u.end)) continue;
      const before = html.substring(Math.max(0, idx - 100), idx);
      const after = html.substring(idx + name.length, idx + name.length + 30);
      // Bolded form: <strong>...SECTION_NAME (allow <br> and other chars between <strong> and name)
      const isBolded = /<strong>[^<]*(?:<br\s*\/?>[^<]*)*$/.test(before);
      // Inline form: preceded by <br> AND followed by : or ：
      const isInline = /<br\s*\/?>\s*$/.test(before) && /^\s*[:：]/.test(after);
      if (!isBolded && !isInline) continue;

      let contentStart = idx + name.length;
      // Skip optional colon (full-width or half-width)
      if (html[contentStart] === '：' || html[contentStart] === ':') contentStart++;
      // Skip leading whitespace
      while (html[contentStart] === ' ' || html[contentStart] === '\t' || html[contentStart] === '\n') contentStart++;
      // Skip optional <br>
      const brMatch = /^<br\s*\/?>/.exec(html.substring(contentStart, contentStart + 10));
      if (brMatch) contentStart += brMatch[0].length;
      // Skip optional </strong>
      if (html.substring(contentStart, contentStart + 9) === '</strong>') contentStart += 9;
      // Skip optional <br> after </strong>
      const brMatch2 = /^<br\s*\/?>/.exec(html.substring(contentStart, contentStart + 10));
      if (brMatch2) contentStart += brMatch2[0].length;

      markers.push({ name, field, idx, contentStart });
      used.add({ start: idx, end: idx + name.length });
    }
  }
  markers.sort((a, b) => a.idx - b.idx);
  return markers;
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

  // 1) Find all section markers (do NOT filter by series section bounds —
  //    the 同系列产品 marker comes BEFORE the content markers in this site's layout).
  const markers = findSectionMarkers(html);

  // 2) Category = first sortid link inside the 同系列产品 section.
  //    The section starts at `seriesIdx` and ends at the first content marker
  //    (or at seriesIdx + 5000 chars if no content marker is found, as a safety bound).
  const seriesIdx = html.indexOf('同系列产品');
  if (seriesIdx >= 0) {
    const firstMarkerIdx = markers.length ? markers[0].idx : -1;
    let catEnd;
    if (firstMarkerIdx > seriesIdx) {
      catEnd = firstMarkerIdx;
    } else {
      // Content markers come before series section (unusual); bound to 5000 chars.
      catEnd = seriesIdx + 5000;
    }
    const slice = html.slice(seriesIdx, catEnd);
    const catRe = /<a\s+href="\/(?:index\.php)?\?action=list\|rolls\|1\|cn\|12511\|12511&amp;sortid=\d+\|\d+"[^>]*>([^<]+)<\/a>/;
    const cm = slice.match(catRe);
    if (cm) out.category = cm[1].replace(/&nbsp;/g, '').trim();
  }

  // 3) Sections: extract content between consecutive markers.
  //    For the LAST marker, content ends at the next </td> or </p></td> (end of content cell)
  //    or at the start of the "打印本网页" (print) area, whichever comes first.
  //    Each field maps to at most one section; if multiple markers map to the same field,
  //    the FIRST one wins (subsequent ones are ignored to avoid overwriting).
  const printIdx = html.indexOf('打印本网页');
  const hardEnd = printIdx > 0 ? printIdx : html.length;
  const filledFields = new Set();

  for (let i = 0; i < markers.length; i++) {
    const m = markers[i];
    if (filledFields.has(m.field)) continue; // first match wins
    let end;
    if (i + 1 < markers.length) {
      end = markers[i + 1].idx;
    } else {
      // Last marker: find end of content cell.
      const tdClose = html.indexOf('</td>', m.contentStart);
      end = (tdClose > 0 && tdClose < hardEnd) ? tdClose : hardEnd;
    }
    const raw = html.substring(m.contentStart, end);
    const text = stripHtml(raw);
    out[m.field] = text;
    filledFields.add(m.field);
  }

  return out;
}

// ---- Main ----
// 1) Parse list pages to get all products
const products = [];
const seenIds = new Set();
for (let i = 1; i <= 4; i++) {
  const data = readJsonIfExists(`/tmp/rolls-list-${i}.json`);
  if (!data || !data.data || !data.data.html) {
    console.error(`list page ${i} missing`);
    continue;
  }
  const re = /<a\s+href="(\/index\.php\/wareshow\/rolls\/1\/cn\/(\d+),12511\/12511\.html)"\s+target="_blank"[^>]*>([^<]+)<\/a>/g;
  let m;
  while ((m = re.exec(data.data.html))) {
    const id = m[2];
    if (seenIds.has(id)) continue;
    seenIds.add(id);
    const name = m[3].replace(/&nbsp;/g, '').replace(/\s+/g, ' ').trim();
    products.push({ id, name, url: BASE + m[1] });
  }
}
console.log(`Found ${products.length} products from 4 list pages`);

// 2) Parse each detail page
const parsed = [];
let missingOverview = 0;
let missingCategory = 0;
let missingAnySection = 0;
for (const p of products) {
  const detail = readJsonIfExists(`/tmp/rolls-detail-${p.id}.json`);
  if (!detail || !detail.data || !detail.data.html) {
    console.error(`  ✖ ${p.id} no detail cache`);
    continue;
  }
  const obj = parseDetail(detail.data.html, p);
  if (!obj.name && detail.data.title) obj.name = detail.data.title.split(' - ')[0].trim();
  if (!obj.overview) missingOverview++;
  if (!obj.category) missingCategory++;
  const filled = ['overview','application','physicalParams','construction','recommendedSystem','notes','safety']
    .filter(k => obj[k]).length;
  if (filled < 5) {
    missingAnySection++;
    console.log(`  ⚠ ${p.id} ${p.name}: ${filled}/7 sections, category="${obj.category}"`);
  }
  parsed.push(obj);
}

// 3) Write output
const out = { totalProducts: parsed.length, products: parsed };
fs.writeFileSync('/tmp/rolls-products.json', JSON.stringify(out, null, 2));
console.log(`\n✅ Wrote /tmp/rolls-products.json (${parsed.length} products)`);
console.log(`  Missing overview: ${missingOverview}`);
console.log(`  Missing category: ${missingCategory}`);
console.log(`  Products with <5 sections filled: ${missingAnySection}`);

console.log('\n=== Product list ===');
parsed.forEach((p, i) => {
  console.log(`  ${(i + 1).toString().padStart(2, '0')}. [${p.id}] ${p.name} — category: ${p.category || '(none)'}`);
});
