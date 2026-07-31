// IMG-4: Regenerate epoxy floor (colored) + tone down AI amber style across key images.
// New style: authentic documentary industrial photography, natural realistic color grading,
// neutral grays/steel/concrete tones, warm accents only where light actually falls.
// Epoxy floors MUST show a clearly COLOURED glossy surface (amber/honey or green-grey),
// NOT bare grey concrete.
//
// Single ZAI instance, sequential generation with retry-once and 2s delay to avoid 429.
// Skip-if-exists (file > 10KB) so timeouts can be resumed by re-running this script.
// (Run `rm -f` on the 10 target files first to force a fresh regeneration pass.)
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/images';
fs.mkdirSync(OUT_DIR, { recursive: true });

// Shared style prefix + suffix per task spec.
const STYLE_PREFIX =
  'authentic documentary industrial photography, realistic, natural lighting, neutral color grading';
const STYLE_SUFFIX =
  'photorealistic, no text, no logos, no watermarks, not amber-drenched';

// [filename, size, prompt]
const ENTRIES = [
  // === CRITICAL FIX: epoxy floor must show COLORED epoxy (4:3, 1152x864) ===
  [
    'product-epoxy-floor.jpg',
    '1152x864',
    `${STYLE_PREFIX}. A clean modern warehouse interior with a COLORED self-leveling epoxy floor — the floor is a clearly COLOURED glossy honey-amber surface with a visible glossy reflection of overhead fluorescent tube lights on the polished coating. The floor is obviously a coated surface, NOT bare grey concrete — the amber epoxy coating is unmistakable. Strong perspective lines down a long aisle, a forklift in the distance, metal storage racks along the walls. Natural cool daylight from skylights above, realistic concrete tilt-up walls, neutral industrial palette with the warm amber floor providing the only color. Realistic imperfections and depth of field. ${STYLE_SUFFIX}.`,
  ],
  // === Epoxy-related duplicates (same colored-epoxy requirement) ===
  [
    'app-floor-systems.jpg',
    '1152x864',
    `${STYLE_PREFIX}. Industrial floor systems showcase: a COLOURED glossy self-leveling epoxy floor in a clean modern warehouse — the floor is a clearly COLOURED amber/honey coated surface, NOT bare grey concrete, with visible wet-look gloss reflecting overhead linear light fixtures. Perspective vanishing point down a long aisle, a parked forklift mid-frame, racks of inventory either side. Natural cool daylight from skylights, neutral grey concrete tilt-up walls. The colored epoxy coating is the obvious feature. Realistic documentary photo. ${STYLE_SUFFIX}.`,
  ],
  [
    'sol-flooring.jpg',
    '1344x768',
    `${STYLE_PREFIX}. Vast modern warehouse interior with a coloured self-leveling epoxy floor — the floor is a clearly COLOURED medium green-grey glossy coating (NOT bare concrete), with a visible mirror-like reflection of overhead LED high-bay lights on the polished surface. Wide perspective down a long aisle, high ceiling with skylights, pallet racks on either side filled with boxed inventory. Clean, realistic, natural cool daylight, neutral steel and concrete tones. The colored glossy epoxy coating is unmistakable. Documentary editorial photography. ${STYLE_SUFFIX}.`,
  ],
  [
    'case-warehouse.jpg',
    '1344x768',
    `${STYLE_PREFIX}. Logistics warehouse interior with a COLOURED epoxy floor — the floor is a clearly COLOURED honey-amber glossy self-leveling coating (NOT bare concrete), with visible wet-look gloss reflecting overhead light fixtures. Rows of tall metal shelving loaded with shrink-wrapped pallets, a forklift working in the distance, high-bay layout. Natural light streaming from high strip windows, realistic concrete tilt-up walls and exposed steel structure, neutral industrial palette with the warm amber floor providing the main color. Realistic documentary photo. ${STYLE_SUFFIX}.`,
  ],
  // === Tone down amber: regenerate for more natural look ===
  [
    'hero.jpg',
    '1344x768',
    `${STYLE_PREFIX}. A massive real industrial steel structure — a large offshore oil-and-gas platform or a long cable-stayed steel bridge — with workers in safety gear (hard hats, hi-vis vests) applying a fresh anti-corrosion coating via spray equipment, visible spray mist and a few sparks from grinding work. Natural overcast sky or very subtle late golden-hour light — NOT a global orange wash. Realistic steel-grey and rust-tinged neutrals, neutral sky, cool ambient light with only a SUBTLE warm hint where the sun catches the steel. Documentary photojournalism style, depth of field, real-world imperfections. ${STYLE_SUFFIX}.`,
  ],
  [
    'why-us-bg.jpg',
    '1344x768',
    `${STYLE_PREFIX}. Interior of a real paint manufacturing plant: large stainless-steel mixing vats and reaction kettles, rows of paint drums on the floor, two workers in safety gear (hard hats, hi-vis vests, safety glasses) inspecting a control panel. Natural overhead fluorescent lighting mixed with cool skylight from a sawtooth roof. Neutral industrial tones — greys, brushed steel, concrete floor — with realistic surface imperfections, slight haze, and subtle depth of field. Documentary editorial photography, suitable as a section background. ${STYLE_SUFFIX}.`,
  ],
  [
    'product-anticorrosion.jpg',
    '1152x864',
    `${STYLE_PREFIX}. Close-up macro of an anti-corrosion coating on a large steel pipeline or I-beam. The coating is a realistic industrial color — a dark charcoal-grey topcoat OR a deep red-oxide primer — with a freshly sprayed, slightly textured finish. Outdoor industrial setting (a pipe yard or steel construction site), natural overcast daylight, neutral steel and concrete background, realistic surface texture and depth of field. Cool neutral color grading. ${STYLE_SUFFIX}.`,
  ],
  [
    'sol-oil-gas.jpg',
    '1344x768',
    `${STYLE_PREFIX}. Large oil storage tank farm or refinery — rows of big cylindrical steel storage tanks with protective coating, pipework, walkway platforms, and a flare stack in the distance. Natural overcast sky or late-afternoon light, neutral industrial palette (steel grey, concrete, muted sky). Documentary wide shot, realistic textures and subtle depth of field. No orange wash — the warm color appears only as a subtle horizon glow if at all. ${STYLE_SUFFIX}.`,
  ],
  [
    'sol-marine.jpg',
    '1344x768',
    `${STYLE_PREFIX}. A large ship hull in a dry dock being coated with anti-corrosion paint — workers in safety gear, scaffolding against the towering steel hull, spray rigs and hoses visible. Realistic overcast harbour light, steel-grey and rust-tinged neutrals, subtle cool tones, grey water and distant cranes in the background. Documentary editorial photography, depth of field, real-world imperfections. ${STYLE_SUFFIX}.`,
  ],
  [
    'contact-bg.jpg',
    '1344x768',
    `${STYLE_PREFIX}. Paint drums and barrels stacked neatly in long rows inside a warehouse, the drums themselves providing the main color (industrial grey drums, green drums, red drums, blue drums mixed naturally). Natural warehouse lighting — overhead fluorescent tubes mixed with skylight from above. Neutral steel and concrete tones as backdrop, the drums themselves carry the color. Wide perspective down an aisle, realistic documentary photo. Suitable as a header background. ${STYLE_SUFFIX}.`,
  ],
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function genOne(zai, fname, size, prompt) {
  const out = path.join(OUT_DIR, fname);
  if (fs.existsSync(out) && fs.statSync(out).size > 10240) {
    console.log(
      `--- skip ${fname} (already exists, ${fs.statSync(out).size} bytes)`
    );
    return { fname, ok: true, skipped: true };
  }
  const t0 = Date.now();
  try {
    const resp = await zai.images.generations.create({ prompt, size });
    const b64 = resp.data[0].base64;
    if (!b64) throw new Error('empty base64 in response');
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
      const simple = `${STYLE_PREFIX}. Industrial scene. ${prompt
        .split(', photorealistic')[0]
        .slice(STYLE_PREFIX.length)
        .trim()}. ${STYLE_SUFFIX}`;
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
