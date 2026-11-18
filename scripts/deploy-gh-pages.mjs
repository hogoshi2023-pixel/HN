// deploy-gh-pages.mjs — 把 out/ 全量发布到 hogoshi2023-pixel/HN 的 gh-pages 分支（GitHub Git Data API，无需本地 git）
// 用法: set GITHUB_TOKEN=github_pat_xxx && node scripts/deploy-gh-pages.mjs
// 令牌要求：Fine-grained PAT，仅授权仓库 hogoshi2023-pixel/HN，权限 Contents: Read and write
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, posix } from "node:path";

const OWNER = "hogoshi2023-pixel", REPO = "HN", BRANCH = "gh-pages";
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

// 1. 收集 out/ 全部文件（posix 路径）
const ROOT = join(process.cwd(), "out");
const files = [];
(function walk(d) {
  for (const f of readdirSync(d, { withFileTypes: true })) {
    const fp = join(d, f.name);
    if (f.isDirectory()) walk(fp);
    else files.push(posix.join(...relative(ROOT, fp).split(/[\\/]/)));
  }
})(ROOT);
files.push(".nojekyll"); // Pages 需要（out/ 里没有）
console.log(`files to deploy: ${files.length}`);

// 2. 当前 gh-pages 头提交
const ref = await api(`/git/ref/heads/${BRANCH}`);
const parentSha = ref.object.sha;
const parentCommit = await api(`/git/commits/${parentSha}`);
console.log(`current gh-pages head: ${parentSha.slice(0, 7)} (${(parentCommit.message || "").split("\n")[0].slice(0, 50)})`);

// 3. 所有文件先建 blob（blobs API 正确处理 base64；trees API 的内联 encoding 字段不可靠），树里只引用 sha
//    内容寻址缓存：可断点续传 + 相同内容去重；并发 2 + 间隔节流，避免次级限流
import { createHash } from "node:crypto";
import { writeFileSync as wfSync, existsSync } from "node:fs";
const b64 = (buf) => Buffer.from(buf).toString("base64");
const sha256 = (buf) => createHash("sha256").update(buf).digest("hex");
const CACHE_FILE = join(process.cwd(), "scripts", ".blob-cache.json");
const cache = existsSync(CACHE_FILE) ? JSON.parse(readFileSync(CACHE_FILE, "utf8")) : {}; // hash -> blob sha
let cacheDirty = 0;
const saveCache = () => wfSync(CACHE_FILE, JSON.stringify(cache), "utf8");

const contents = new Map(); // rel -> {hash, b64}
for (const rel of files) {
  if (rel === ".nojekyll") continue;
  const buf = readFileSync(join(ROOT, rel));
  contents.set(rel, { hash: sha256(buf), b64: b64(buf) });
}
const pending = [...contents.entries()].filter(([, v]) => !cache[v.hash]);
console.log(`blobs needed: ${pending.length} (dedup+cache hit: ${contents.size - pending.length})`);

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
    await sleep(300 + wid * 100); // 节流
  }
};
await Promise.all([worker(0), worker(1)]);
saveCache();
console.log(`blobs done (unique): ${Object.keys(cache).length}`);

// 4. 逐批建树（第一批不带 base_tree = 整树替换旧部署）
let treeSha = null;
const BATCH = 200;
for (let i = 0; i < files.length; i += BATCH) {
  const batch = files.slice(i, i + BATCH);
  const tree = batch.map((rel) =>
    rel === ".nojekyll"
      ? { path: rel, mode: "100644", type: "blob", content: "" }
      : { path: rel, mode: "100644", type: "blob", sha: cache[contents.get(rel).hash] }
  );
  const t = await api("/git/trees", {
    method: "POST",
    body: JSON.stringify(treeSha ? { base_tree: treeSha, tree } : { tree }),
  });
  treeSha = t.sha;
  console.log(`tree batch ${Math.min(i + BATCH, files.length)}/${files.length} → ${treeSha.slice(0, 7)}`);
}

// 4. 提交并更新分支
const commit = await api("/git/commits", {
  method: "POST",
  body: JSON.stringify({
    message: "Deploy 2026-10-24: 5-language multi-route build (244 pages, product SEO pages + hreflang, TDS PDFs, certs)",
    tree: treeSha,
    parents: [parentSha],
  }),
});
await api(`/git/refs/heads/${BRANCH}`, { method: "PATCH", body: JSON.stringify({ sha: commit.sha, force: false }) });
console.log(`\n✔ deployed: gh-pages ${commit.sha.slice(0, 7)} (${files.length} files)`);
console.log("  Pages 生效一般 1–3 分钟：https://hogoshi2023-pixel.github.io/HN/");
