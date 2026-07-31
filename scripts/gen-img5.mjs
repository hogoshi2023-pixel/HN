// IMG-5: Regenerate 20 amber-AI-tinted images with a natural realistic
// documentary-photography style. Cool/neutral palette, overcast/fluorescent/
// skylight lighting, NO global amber/orange wash, NO text/logos/watermarks.
//
// Style guide applied to ALL prompts:
//   PREFIX = "authentic documentary industrial photography, realistic, natural
//             overcast daylight, neutral color grading, no amber tint,
//             no orange wash"
//   SUFFIX = "photorealistic, no text, no logos, no watermarks"
//
// SDK accepts `size` as a string enum from:
//   '1024x1024' | '768x1344' | '864x1152' | '1344x768' | '1152x864' |
//   '1440x720' | '720x1440'
// We use '1344x768' (16:9) and '1152x864' (4:3) — both multiples of 32.
//
// Single ZAI.create() instance, sequential loop, 2s delay between calls,
// try/catch per image with retry-once using a simplified prompt, 9-min
// tool-timeout safety via skip-if-exists (file > 15KB) on resume.
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/images';
fs.mkdirSync(OUT_DIR, { recursive: true });

const STYLE_PREFIX =
  'authentic documentary industrial photography, realistic, natural overcast daylight, neutral color grading, no amber tint, no orange wash';
const STYLE_SUFFIX = 'photorealistic, no text, no logos, no watermarks';

// { filename, width, height, prompt }
const ENTRIES = [
  // === 16:9 (1344x768) — 7 images ===
  {
    filename: 'hero.jpg',
    width: 1344, height: 768,
    prompt: `${STYLE_PREFIX}. A massive real industrial steel structure — a large steel bridge or offshore platform mid-construction — with workers in safety gear (hard hats, hi-vis vests) applying a fresh anti-corrosion coating via spray equipment; visible spray mist and a few sparks from grinding work. Heavy overcast grey sky, cool ambient light, steel-grey and rust-tinged neutrals, neutral concrete and metal tones. No global warm wash. Documentary photojournalism style, depth of field, real-world imperfections, mid-shot wide angle. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'cta-bg.jpg',
    width: 1344, height: 768,
    prompt: `${STYLE_PREFIX}. Abstract dark industrial texture: extreme close-up macro of a brushed / painted steel surface, dark charcoal-grey with subtle cool natural highlights catching fine grain and micro-scratches. Moody but realistic, neutral grey palette, no warm color cast. Suitable as a darkened header / CTA background. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'sol-power.jpg',
    width: 1344, height: 768,
    prompt: `${STYLE_PREFIX}. A large coal or biomass power plant with tall concrete smokestacks and steel boiler structures, faint heat haze rising from the stacks. Natural overcast industrial light, neutral steel-grey and concrete tones, muted grey sky. Wide documentary shot, realistic textures, slight depth of field. No orange wash. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'sol-infrastructure.jpg',
    width: 1344, height: 768,
    prompt: `${STYLE_PREFIX}. A long-span steel truss bridge with freshly coated structural members — a wide establishing shot of the full bridge crossing a grey river estuary under a flat overcast sky. Neutral steel and concrete tones, muted grey water, cool ambient daylight. Documentary editorial photography, depth of field, real-world imperfections. No amber tint. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'sol-architecture.jpg',
    width: 1344, height: 768,
    prompt: `${STYLE_PREFIX}. A modern commercial high-rise tower facade with premium coated metal / glass curtain-wall panels, low-angle exterior architectural shot. Flat neutral daylight, realistic architectural photography, neutral concrete/glass/steel palette, no warm color grading. Documentary editorial style, slight depth of field. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'faq-bg.jpg',
    width: 1344, height: 768,
    prompt: `${STYLE_PREFIX}. Abstract macro close-up of an industrial coated steel surface texture — dark charcoal-grey painted steel with subtle natural cool highlights, fine orange-peel texture, and faint brush marks. Moody but realistic, neutral palette, no warm cast. Suitable as a darkened header background. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'case-warehouse.jpg',
    width: 1344, height: 768,
    prompt: `${STYLE_PREFIX}. A large modern logistics warehouse interior with a clearly COLOURED glossy epoxy floor — the floor coating is a realistic MUTED GREEN-GREY (sage grey) glossy self-leveling surface, NOT bare concrete and NOT amber/honey. Visible wet-look gloss reflection of overhead LED high-bay lights on the polished coating. Rows of tall metal shelving loaded with shrink-wrapped pallets, a forklift in the mid-distance. Natural cool daylight from high strip windows, neutral grey tilt-up concrete walls and exposed steel structure. Realistic documentary photo. ${STYLE_SUFFIX}.`,
  },

  // === 4:3 (1152x864) — 13 images ===
  {
    filename: 'product-hightemp.jpg',
    width: 1152, height: 864,
    prompt: `${STYLE_PREFIX}. An industrial smokestack / boiler exhaust stack with a freshly applied high-temperature silicone coating on its dark metallic surface, faint heat haze shimmer rising from the top. Natural overcast industrial light, neutral steel-grey and graphite tones, muted grey sky. Mid-shot documentary photo, realistic surface texture and depth of field. No amber wash. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'product-architectural.jpg',
    width: 1152, height: 864,
    prompt: `${STYLE_PREFIX}. Architectural wall coatings showcase: a modern mid-rise building facade with a textured wall-paint finish (smooth matte panels with subtle relief), shot from a 3/4 exterior angle. Natural flat daylight, neutral realistic architectural photography, concrete/glass/metal palette with no warm color grading. Documentary editorial style, depth of field. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'app-steel-structure.jpg',
    width: 1152, height: 864,
    prompt: `${STYLE_PREFIX}. A large steel structural framework — factory shed or bridge truss — with members freshly coated in a neutral grey anti-corrosion topcoat; rivets, bolts and welded connections visible. Natural overcast daylight, neutral steel-grey tones, muted grey sky background. Mid-shot documentary photo, realistic texture and depth of field. No orange wash. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'app-outdoor-equipment.jpg',
    width: 1152, height: 864,
    prompt: `${STYLE_PREFIX}. Large outdoor industrial equipment — harbor cranes, machinery, storage tanks — with protective weatherproof coating, shot at an industrial yard. Natural overcast or flat neutral daylight, neutral steel-grey and rust-tinged neutrals, muted grey sky. Wide documentary photo, realistic texture and depth of field. No amber tint. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'app-building-facade.jpg',
    width: 1152, height: 864,
    prompt: `${STYLE_PREFIX}. A commercial building facade — modern tower with coated metal / glass spandrel panels — low-angle exterior architectural shot. Natural flat daylight, neutral realistic architectural photography, concrete/glass/steel palette with no warm color grading. Documentary editorial style, depth of field, real-world imperfections. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'app-ship-hull.jpg',
    width: 1152, height: 864,
    prompt: `${STYLE_PREFIX}. A large cargo ship hull in a dry dock being painted with anti-corrosion coating — workers in safety gear, scaffolding against the towering steel hull, spray rigs and hoses visible. Realistic overcast harbour light, steel-grey and rust-tinged neutrals, cool grey water and distant cranes. Documentary editorial photography, depth of field, real-world imperfections. No amber wash. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'app-bridge.jpg',
    width: 1152, height: 864,
    prompt: `${STYLE_PREFIX}. A long steel truss bridge with freshly coated structural members, shot from the side showing the full span crossing a grey river under a flat overcast sky. Neutral steel and concrete tones, muted grey water, cool ambient daylight. Documentary editorial photography, depth of field, real-world imperfections. No amber tint. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'news-1.jpg',
    width: 1152, height: 864,
    prompt: `${STYLE_PREFIX}. A coatings R&D lab bench with a paint sample panel finished in a fluorocarbon topcoat being tested — a gloved technician's hands holding the panel under a gloss meter or weathering lamp, lab glassware and sample jars in the background. Natural cool fluorescent lab lighting, neutral whites / greys / steel, realistic documentary photo, depth of field. No warm tint. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'news-2.jpg',
    width: 1152, height: 864,
    prompt: `${STYLE_PREFIX}. A project milestone at a steel plant: a freshly coated steel plant structure — gantry, conveyor trusses, ductwork — with a few workers in safety gear (hard hats, hi-vis vests, safety glasses) inspecting the work. Natural overcast daylight, neutral steel-grey and concrete tones, muted grey sky. Documentary editorial photography, depth of field, real-world imperfections. No amber wash. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'news-3.jpg',
    width: 1152, height: 864,
    prompt: `${STYLE_PREFIX}. A clean modern paint factory interior for an ISO 14001 environmental-certification concept — mixing vessels, filling lines, paint drums staged neatly, a few indoor plants / green accents on the periphery. Natural cool fluorescent + skylight lighting, neutral whites / greys / steel, realistic documentary photo, depth of field. No warm color grading. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'news-4.jpg',
    width: 1152, height: 864,
    prompt: `${STYLE_PREFIX}. A port export scene: stacked shipping containers in naturally varied colors (some blue, some green, some red, some grey) with rows of paint drums on pallets in the foreground, a gantry crane and ship in the background. Natural overcast / flat neutral daylight, neutral industrial palette, realistic documentary photo, depth of field. Containers carry natural varied color — no global amber wash. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'about-rd.jpg',
    width: 1152, height: 864,
    prompt: `${STYLE_PREFIX}. A coatings chemist in a modern R&D lab — wearing a white lab coat and safety glasses, reviewing a formulation on a tablet beside glass beakers of colored paint samples and a color-matching spectrophotometer. Natural cool fluorescent lab lighting, neutral whites / greys / steel, realistic documentary editorial photo, depth of field. No warm tint. ${STYLE_SUFFIX}.`,
  },
  {
    filename: 'app-floor-systems.jpg',
    width: 1152, height: 864,
    prompt: `${STYLE_PREFIX}. An industrial warehouse floor with a clearly COLOURED glossy epoxy coating — the floor is a realistic MUTED GREEN-GREY (sage grey) glossy self-leveling surface, NOT bare concrete and NOT amber/honey, with a visible wet-look gloss reflection of overhead linear LED light fixtures on the polished coating. Strong perspective lines down a long aisle, a parked forklift mid-frame, metal storage racks along the walls. Natural cool daylight from skylights above, neutral grey concrete tilt-up walls. Realistic documentary photo, depth of field. ${STYLE_SUFFIX}.`,
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function genOne(zai, entry) {
  const { filename, width, height, prompt } = entry;
  const out = path.join(OUT_DIR, filename);
  const size = `${width}x${height}`;
  if (fs.existsSync(out) && fs.statSync(out).size > 15360) {
    console.log(
      `--- skip ${filename} (already exists, ${fs.statSync(out).size} bytes)`
    );
    return { filename, ok: true, skipped: true };
  }
  // Force fresh regeneration: delete any stale file first.
  if (fs.existsSync(out)) {
    try { fs.unlinkSync(out); } catch (_) {}
  }
  const t0 = Date.now();
  try {
    const resp = await zai.images.generations.create({ prompt, size });
    const b64 = resp.data[0].base64;
    if (!b64) throw new Error('empty base64 in response');
    const buf = Buffer.from(b64, 'base64');
    fs.writeFileSync(out, buf);
    const ms = Date.now() - t0;
    console.log(`    OK -> ${filename} (${buf.length} bytes, ${ms}ms)`);
    return { filename, ok: true, bytes: buf.length, ms };
  } catch (e) {
    console.log(`    FAIL -> ${filename}: ${e.message}`);
    return { filename, ok: false, error: e.message };
  }
}

function simplify(prompt) {
  // Drop most adjectives / keep noun phrases. Strip the prefix/suffix wrappers.
  const core = prompt.slice(STYLE_PREFIX.length).split(', photorealistic')[0].trim();
  // Aggressive trim: keep first 90 chars of core, append suffix.
  const trimmed = core.length > 90 ? core.slice(0, 90) : core;
  return `${STYLE_PREFIX}. ${trimmed}. ${STYLE_SUFFIX}`;
}

(async () => {
  console.log('Initializing ZAI...');
  const zai = await ZAI.create();
  console.log(`ZAI ready. Generating ${ENTRIES.length} images sequentially.\n`);

  const results = [];
  for (const entry of ENTRIES) {
    console.log(`>>> ${entry.filename} (${entry.width}x${entry.height})`);
    let r = await genOne(zai, entry);
    if (!r.ok) {
      // Retry once with a simplified prompt after a delay.
      console.log('    retrying in 5s with simplified prompt...');
      await sleep(5000);
      const simpleEntry = { ...entry, prompt: simplify(entry.prompt) };
      r = await genOne(zai, simpleEntry);
    }
    results.push(r);
    await sleep(2000);
  }

  console.log('\n================= RESULTS =================');
  let ok = 0, fail = 0, skip = 0;
  for (const r of results) {
    const tag = r.ok ? (r.skipped ? 'SKIP' : 'OK  ') : 'FAIL';
    console.log(`${tag}  ${r.filename}`);
    if (r.ok && !r.skipped) ok++;
    else if (r.skipped) skip++;
    else fail++;
  }
  console.log('===========================================');
  console.log(`OK=${ok}  SKIP=${skip}  FAIL=${fail}`);
  process.exit(0);
})();
