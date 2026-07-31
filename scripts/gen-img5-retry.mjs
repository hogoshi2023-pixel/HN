// IMG-5 retry pass: regenerate the 2 images still flagged as amber by VLM
// (app-ship-hull.jpg, sol-power.jpg) with an even more explicit prompt:
// "extremely desaturated, cool neutral grey tones, overcast, NO warm colors at all".
import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/z/my-project/public/images';
const PREFIX =
  'extremely desaturated, cool neutral grey tones, overcast, NO warm colors at all, authentic documentary industrial photography, realistic, neutral color grading, no amber tint, no orange wash';
const SUFFIX = 'photorealistic, no text, no logos, no watermarks';

const ENTRIES = [
  {
    filename: 'app-ship-hull.jpg',
    width: 1152, height: 864,
    prompt: `${PREFIX}. A large cargo ship hull in a dry dock being painted with anti-corrosion coating — workers in safety gear, scaffolding against the towering steel hull, spray rigs and hoses visible. Heavy overcast harbour light, pure cool grey steel and rust-tinged neutrals, grey water, distant grey cranes against a flat grey sky. NO warm color anywhere — the entire image is cool desaturated grey. Documentary editorial photography, depth of field, real-world imperfections. ${SUFFIX}.`,
  },
  {
    filename: 'sol-power.jpg',
    width: 1344, height: 768,
    prompt: `${PREFIX}. A large coal or biomass power plant with tall concrete smokestacks and steel boiler structures, faint heat haze rising from the stacks. Heavy overcast grey sky, cool neutral steel-grey and concrete tones throughout — no warm light, no sunset glow, no amber anywhere. Wide documentary shot, realistic textures, slight depth of field. ${SUFFIX}.`,
  },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  const zai = await ZAI.create();
  for (const { filename, width, height, prompt } of ENTRIES) {
    const out = path.join(OUT_DIR, filename);
    const size = `${width}x${height}`;
    if (fs.existsSync(out)) { try { fs.unlinkSync(out); } catch (_) {} }
    console.log(`>>> retry ${filename} (${size})`);
    const t0 = Date.now();
    try {
      const resp = await zai.images.generations.create({ prompt, size });
      const b64 = resp.data[0].base64;
      if (!b64) throw new Error('empty base64');
      const buf = Buffer.from(b64, 'base64');
      fs.writeFileSync(out, buf);
      console.log(`    OK -> ${filename} (${buf.length} bytes, ${Date.now()-t0}ms)`);
    } catch (e) {
      console.log(`    FAIL -> ${filename}: ${e.message}`);
      // one more retry after a longer wait
      await sleep(15000);
      try {
        const resp = await zai.images.generations.create({ prompt, size });
        const b64 = resp.data[0].base64;
        const buf = Buffer.from(b64, 'base64');
        fs.writeFileSync(out, buf);
        console.log(`    OK(retry2) -> ${filename} (${buf.length} bytes)`);
      } catch (e2) {
        console.log(`    FAIL2 -> ${filename}: ${e2.message}`);
      }
    }
    await sleep(3000);
  }
  process.exit(0);
})();
