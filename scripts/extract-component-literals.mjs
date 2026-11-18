// 提取 src/components + src/app 里内联三语字面量（en 文本），并对照已有词典查缺
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROOT = "C:/Users/Administrator/ZCodeProject/HN-website/src";
const TR_ES = (await import("file:///C:/Users/Administrator/ZCodeProject/HN-website/scripts/locales-es.mjs")).TR;
const TR_AR = (await import("file:///C:/Users/Administrator/ZCodeProject/HN-website/scripts/locales-ar.mjs")).TR;

// 扫描 tsx：抓 { en: "..." 或 `...`, zh: ..., vi: ... } 的 en 值（含跨行）
const files = [];
(function walk(d) {
  for (const f of readdirSync(d)) {
    const fp = join(d, f);
    if (statSync(fp).isDirectory()) walk(fp);
    else if (/\.tsx$/.test(f)) files.push(fp);
  }
})(ROOT);

const re = /\{\s*en:\s*(?:"((?:[^"\\]|\\.)*)"|`([^`]*`?)`)\s*,\s*zh:/gs;
const found = new Map(); // en -> [file:line]
for (const fp of files) {
  const s = readFileSync(fp, "utf8");
  for (const m of s.matchAll(re)) {
    const en = m[1] !== undefined ? JSON.parse(`"${m[1]}"`) : m[2];
    const line = s.slice(0, m.index).split("\n").length;
    const rel = fp.split(/HN-website[\\\/]/)[1];
    if (!found.has(en)) found.set(en, []);
    found.get(en).push(`${rel}:${line}`);
  }
}

const have = [], missing = [];
for (const [en, locs] of found) {
  if (TR_ES[en] !== undefined && TR_AR[en] !== undefined) have.push([en, locs]);
  else missing.push([en, locs]);
}
console.log("inline literals total:", found.size, "| already in TR:", have.length, "| missing:", missing.length);
console.log("\n== MISSING (need translation) ==");
missing.forEach(([en, locs]) => console.log("- " + JSON.stringify(en) + "  @" + locs[0]));
writeFileSync(
  "C:/Users/Administrator/ZCodeProject/HN-website/component-literals.json",
  JSON.stringify({ all: Object.fromEntries(found), missing: Object.fromEntries(missing.map(([en, l]) => [en, l])) }, null, 1),
  "utf8"
);
