// IMG-3: Generate 6 application images (1152x864) + 3 section background images (1344x768).
// Single ZAI instance, sequential generation with retry-once and 2s delay to avoid 429.
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/images';
fs.mkdirSync(OUT_DIR, { recursive: true });

const STYLE = 'photorealistic cinematic B2B industrial photography, dark moody high-contrast, amber orange accent lighting, no text, no logos, no watermarks';

// [filename, size, prompt]
const ENTRIES = [
  // --- 6 application images (1152x864, 4:3) ---
  ['app-steel-structure.jpg', '1152x864',
    `Dramatic low-angle shot of a large steel structural framework — a heavy industrial factory frame being coated with fresh amber anti-corrosion paint, exposed I-beams and bolted connections, scaffolding and rigging, deep shadows with selective amber accent lighting on the freshly coated steel, industrial scale, ${STYLE}`],
  ['app-floor-systems.jpg', '1152x864',
    `Perspective shot down a long modern warehouse aisle with a glossy reflective self-leveling epoxy floor, faint perspective lines and amber ceiling lighting reflections on the polished surface, a forklift parked mid-aisle in soft focus, clean minimalist industrial facility, ${STYLE}`],
  ['app-outdoor-equipment.jpg', '1152x864',
    `Large outdoor industrial equipment — a heavy harbor crane and storage tanks freshly coated with weatherproof protective coating, dramatic overcast sky with a sliver of amber sunset breaking through, weathered but freshly repainted steel surfaces, port industrial scene, ${STYLE}`],
  ['app-building-facade.jpg', '1152x864',
    `Modern commercial high-rise tower facade with premium coated metal and glass panels, golden-hour sunlight raking across the facade highlighting the matte-coated panels, looking up from street level, architectural geometry, warm amber reflections, ${STYLE}`],
  ['app-ship-hull.jpg', '1152x864',
    `Wide shot of a massive cargo ship hull in dry dock being painted with anti-corrosion coating, scaffolding against the towering hull, spray rigs and workers in safety gear, moody ocean backdrop with low amber light, shipyard industrial scene, ${STYLE}`],
  ['app-bridge.jpg', '1152x864',
    `Long cable-stayed steel bridge with freshly coated structural steel, dramatic wide-angle view at golden hour, sweeping support cables and pylons silhouetted against a warm amber sky, river below, infrastructure engineering, ${STYLE}`],

  // --- 3 section background images (1344x768, 16:9) ---
  ['why-us-bg.jpg', '1344x768',
    `Cinematic wide interior shot of a modern industrial paint manufacturing plant — large stainless steel mixing vats and production lines, rows of paint drums, workers in safety gear and hardhats operating equipment, overhead amber accent lighting pooling on the floor, deep shadows at edges, atmospheric haze, dramatic perspective, ${STYLE}, suitable as a darkened section background`],
  ['faq-bg.jpg', '1344x768',
    `Abstract macro close-up of an industrial coated steel surface texture — brushed and coated metal with subtle scratches and orange-peel texture, raking amber accent lighting across the surface, deep shadows, very dark moody tones, no people, ${STYLE}, suitable as a darkened header background`],
  ['contact-bg.jpg', '1344x768',
    `Wide shot of rows of industrial paint drums and barrels neatly stacked in a warehouse, paint canisters with metal lids, soft amber accent lighting along the aisle, deep perspective vanishing point, logistics-ready industrial storage, ${STYLE}, suitable as a darkened header background`],
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
  console.log(`ZAI ready. Generating ${ENTRIES.length} images sequentially.\n`);

  const results = [];
  for (const [fname, size, prompt] of ENTRIES) {
    console.log(`>>> ${fname} (${size})`);
    let r = await genOne(zai, fname, size, prompt);
    if (!r.ok) {
      // Retry once with a slightly simplified prompt after a delay.
      console.log('    retrying in 5s with simplified prompt...');
      await sleep(5000);
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
