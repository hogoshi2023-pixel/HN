// deploy-main.mjs — 把 HN-website 源码整树推到 hogoshi2023-pixel/HN 的 main 分支
// （GitHub Git Data API，无需本地 git）。push 后 .github/workflows/deploy.yml
// 自动构建并发布 GitHub Pages。整树替换 = main 上的历史垃圾（prisma/api/admin/
// netlify 备份等）一并清除，仓库源码与线上部署从此一一对应。
// 用法: set GITHUB_TOKEN=github_pat_xxx && node scripts/deploy-main.mjs
// 令牌要求：Fine-grained PAT，仅授权仓库 hogoshi2023-pixel/HN，权限 Contents: Read and write
import { readFileSync, readdirSync, writeFileSync as wfSync, existsSync } from "node:fs";
import { join, relative, posix } from "node:path";
import { createHash } from "node:crypto";

const OWNER = "hogoshi2023-pixel", REPO = "HN", BRANCH = "main";
const TOKEN = process.env.GITHUB_TOKEN;
if (!TOKEN) { console.error("缺少 GITHUB_TOKEN 环境变量"); process.exit(1); }
const H = {
  "Accept": "application/vnd.github+json",
  "Authorization": `Bearer ${TOKEN}`,
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "hn-deploy",
};
const api = async (path, init = {}) => {
  const r = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}${path}`, { ...init, headers: { ...H, ...(init.headers || {}) } });
  if (!r.ok) throw new Error(`${path} → HTTP ${r.status}: ${(await r.text()).slice(0, 300)}`);
  return r.status === 204 ? null : r.json();
};

// 1. 收集源码文件（白名单目录 + 根文件；排除构建产物与本地缓存）
const ROOT = process.cwd();
const ROOT_FILES = [
  "package.json", "package-lock.json", "next.config.ts", "tsconfig.json",
  "tailwind.config.ts", "postcss.config.mjs", "components.json",
  "eslint.config.mjs", "next-env.d.ts", ".gitignore", "README.md",
];
const DIRS = ["src", "public", "scripts", join(".github", "workflows")];
const SKIP = new Set([".blob-cache.json", "dev.log", "server.log"]);

const files = [];
for (const f of ROOT_FILES) if (existsSync(join(ROOT, f))) files.push(f);
for (const d of DIRS) {
  (function walk(dir) {
    for (const f of readdirSync(dir, { withFileTypes: true })) {
      const fp = join(dir, f.name);
      if (f.isDirectory()) walk(fp);
      else if (!SKIP.has(f.name)) files.push(posix.join(...relative(ROOT, fp).split(/[\\/]/)));
    }
  })(join(ROOT, d));
}
console.log(`source files to commit: ${files.length}`);

// 2. main 当前头提交
const ref = await api(`/git/ref/heads/${BRANCH}`);
const parentSha = ref.object.sha;
const parentCommit = await api(`/git/commits/${parentSha}`);
console.log(`current main head: ${parentSha.slice(0, 7)} (${(parentCommit.message || "").split("\n")[0].slice(0, 60)})`);

// 3. 建 blob（内容寻址缓存：断点续传 + 去重；并发 2 + 节流防限流）
const b64 = (buf) => Buffer.from(buf).toString("base64");
const sha256 = (buf) => createHash("sha256").update(buf).digest("hex");
const CACHE_FILE = join(ROOT, "scripts", ".blob-cache.json");
const cache = existsSync(CACHE_FILE) ? JSON.parse(readFileSync(CACHE_FILE, "utf8")) : {};
let cacheDirty = 0;
const saveCache = () => wfSync(CACHE_FILE, JSON.stringify(cache), "utf8");

const contents = new Map();
for (const rel of files) {
  const buf = readFileSync(join(ROOT, rel));
  contents.set(rel, { hash: sha256(buf), b64: b64(buf) });
}
const pending = [...contents.entries()].filter(([, v]) => !cache[v.hash]);
console.log(`blobs needed: ${pending.length} (cache hit: ${contents.size - pending.length})`);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let done = 0, stop = false;
const worker = async (wid) => {
  while (!stop) {
    const item = pending.shift();
    if (!item) return;
    const [rel, v] = item;
    for (let retry = 0; ; retry++) {
      try {
        const blob = await api("/git/blobs", { method: "POST", body: JSON.stringify({ content: v.b64, encoding: "base64" }) });
        cache[v.hash] = blob.sha;
        if (++cacheDirty >= 25) { saveCache(); cacheDirty = 0; }
        break;
      } catch (e) {
        if (String(e.message).includes("403") || String(e.message).includes("429")) {
          const wait = 60000 * (retry + 1);
          console.log(`  worker${wid}: rate-limited, wait ${wait / 1000}s then retry ${rel}`);
          if (retry >= 6) { stop = true; throw new Error(`blob repeatedly rate-limited: ${rel}`); }
          await sleep(wait);
        } else if (retry >= 3) {
          throw new Error(`blob failed ${rel}: ${e.message}`);
        } else {
          await sleep(2000 * (retry + 1));
        }
      }
    }
    if (++done % 50 === 0) { console.log(`blobs ${done}/${pending.length + done}`); saveCache(); cacheDirty = 0; }
    await sleep(300 + wid * 100);
  }
};
await Promise.all([worker(0), worker(1)]);
saveCache();
console.log(`blobs done (unique in cache): ${Object.keys(cache).length}`);

// 4. 整树替换（第一批不带 base_tree = 丢弃 main 旧树上的所有其他文件）
let treeSha = null;
const BATCH = 200;
for (let i = 0; i < files.length; i += BATCH) {
  const batch = files.slice(i, i + BATCH);
  const tree = batch.map((rel) => ({ path: rel, mode: "100644", type: "blob", sha: cache[contents.get(rel).hash] }));
  const t = await api("/git/trees", {
    method: "POST",
    body: JSON.stringify(treeSha ? { base_tree: treeSha, tree } : { tree }),
  });
  treeSha = t.sha;
  console.log(`tree batch ${Math.min(i + BATCH, files.length)}/${files.length} → ${treeSha.slice(0, 7)}`);
}

// 5. 提交并快进 main → 触发 Actions 构建发布
const commit = await api("/git/commits", {
  method: "POST",
  body: JSON.stringify({
    message: [
      "Release full 5-language site source over fix-package snapshot",
      "",
      "- Restores honest data layer (38 verified TDS models, no factory codes,",
      "  no fabricated cases/testimonials/brand marquee, China-exporter identity)",
      "- Multi-route SEO: 240 product pages x5 locales + 5 language homes + certs,",
      "  self-canonical hreflang clusters, sitemap with alternates, OG/JSON-LD",
      "- Inquiry hand-off hardening: defensive whatsapp field, localized summary,",
      "  success screen with WhatsApp/Email/Copy (no silently lost inquiries)",
      "- Hash deep-links (#/contact, #/products/CAT-01) + ?lang= locale param",
      "- Per-language <html lang/dir> post-processing; CI builds via GH Actions",
      "  (no prisma/admin/api dead code)",
    ].join("\n"),
    tree: treeSha,
    parents: [parentSha],
  }),
});
await api(`/git/refs/heads/${BRANCH}`, { method: "PATCH", body: JSON.stringify({ sha: commit.sha, force: false }) });
console.log(`\n✔ pushed to main: ${commit.sha.slice(0, 7)} (${files.length} files)`);
console.log("  Actions 会自动构建并发布 Pages（约 2–4 分钟）：https://hogoshi2023-pixel.github.io/HN/");
console.log("  进度: https://github.com/hogoshi2023-pixel/HN/actions");
