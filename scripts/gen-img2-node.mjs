// IMG-2 resume: generate remaining images in a single ZAI process.
// Sequential generation with 2s delay between calls to avoid 429.
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/images';
fs.mkdirSync(OUT_DIR, { recursive: true });

const STYLE = 'photorealistic cinematic B2B industrial photography, dark moody high-contrast, amber orange accent lighting, no text, no logos, no watermarks';

const ENTRIES = [
  ['news-1.jpg', '1152x864', `Close-up of paint sample panels with fluorocarbon topcoat undergoing weatherability testing in a lab, coated steel coupons under heat lamp, amber accent lighting, ${STYLE}`],
  ['news-2.jpg', '1152x864', `Wide shot of a steel plant structure freshly coated with anti-corrosion paint, workers in safety gear and hardhats inspecting, industrial site, amber sunset light, ${STYLE}`],
  ['news-3.jpg', '1152x864', `Clean modern paint manufacturing facility with indoor greenery and eco-friendly elements, large windows, natural light, sustainable industrial design, amber warm tones, ${STYLE}`],
  ['news-4.jpg', '1152x864', `Stacked shipping containers at a busy port with rows of industrial paint drums ready for export, cranes in background, amber sunset light, global trade logistics, ${STYLE}`],
  ['news-5.jpg', '1152x864', `Coatings R&D laboratory with chemists in white coats testing paint samples, spectrophotometer, beakers of colored liquid, modern clean lab equipment, amber accent lighting, ${STYLE}`],
  ['news-6.jpg', '1152x864', `Paint chemist in lab holding up a sample panel of low-VOC eco-friendly coating, beaker of green-tinted paint nearby, clean modern lab, amber warm accent lighting, ${STYLE}`],
  ['about-rd.jpg', '1152x864', `Senior coatings chemist in modern lab reviewing formulation data on a tablet, paint sample swatches and beakers on workbench, focused expression, warm amber lighting, professional industrial portrait photography, ${STYLE}`],
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function genOne(zai, fname, size, prompt) {
  const out = path.join(OUT_DIR, fname);
  if (fs.existsSync(out) && fs.statSync(out).size > 0) {
    console.log(`--- skip ${fname} (already exists, ${fs.statSync(out).size} bytes)`);
    return { fname, ok: true, skipped: true };
  }
  const t0 = Date.now();
  try {
    const resp = await zai.images.generations.create({ prompt, size });
    const b64 = resp.data[0].base64;
    const buf = Buffer.from(b64, 'base64');
    fs.writeFileSync(out, buf);
    const ms = Date.now() - t0;
    console.log(`    OK -> ${fname} (${buf.length} bytes, ${ms}ms)`);
    return { fname, ok: true, bytes: buf.length, ms };
  } catch (e) {
    console.log(`    FAIL -> ${fname}: ${e.message}`);
    return { fname, ok: false, error: e.message };
  }
}

(async () => {
  console.log('Initializing ZAI...');
  const zai = await ZAI.create();
  console.log('ZAI ready. Generating 7 remaining images sequentially.\n');

  const results = [];
  for (const [fname, size, prompt] of ENTRIES) {
    console.log(`>>> ${fname} (${size})`);
    let r = await genOne(zai, fname, size, prompt);
    if (!r.ok) {
      // Retry once with simplified prompt
      console.log('    retrying with simplified prompt in 3s...');
      await sleep(3000);
      const simple = `Industrial scene, ${prompt.split(', photorealistic')[0]}, ${STYLE}`;
      r = await genOne(zai, fname, size, simple);
    }
    results.push(r);
    await sleep(2000);
  }

  console.log('\n================= RESULTS =================');
  for (const r of results) {
    console.log(`${r.ok ? 'OK ' : 'FAIL'}  ${r.fname}${r.skipped ? ' (skipped)' : ''}`);
  }
  console.log('===========================================');
  process.exit(0);
})();
