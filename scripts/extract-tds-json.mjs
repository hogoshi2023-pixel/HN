// 抽取 5 个拳头型号的英文 TDS 数据 → tds-data.json（供 PDF 生成）
import { readFileSync, writeFileSync } from "node:fs";
const s = readFileSync("C:/Users/Administrator/ZCodeProject/HN-website/src/lib/data.ts", "utf8");
const CODES = ["HN-AC-201", "HN-AC-302", "HN-AC-405", "HN-HT-200", "HN-FL-101"];

const grab = (from, re) => { const m = from.match(re); return m ? m[1] : ""; };
const out = [];
for (const code of CODES) {
  const i = s.indexOf(`model: "${code}"`);
  if (i === -1) throw new Error(code + " not found");
  const chunk = s.slice(i, i + 9000);
  const descEn = grab(chunk, /desc: \{ en: (?:`([^`]*)`|"((?:[^"\\]|\\.)*)")/);
  const detEn = grab(chunk, /details: \{ en: `([^`]*)`/);
  // 类目：往前找最近的 code: "CAT-xx" 与其 title en
  const before = s.slice(0, i);
  const catIdx = before.lastIndexOf('code: "CAT-');
  const catChunk = s.slice(catIdx, catIdx + 400);
  const catEn = grab(catChunk, /title: \{ en: "([^"]*)"/);
  out.push({ code, cat: catEn, name: descEn, details: detEn });
}
writeFileSync("C:/Users/Administrator/ZCodeProject/HN-website/tds-data.json", JSON.stringify(out, null, 1), "utf8");
console.log(out.map((o) => `${o.code} | ${o.cat} | ${o.name.slice(0, 50)} | details ${o.details.length} chars`).join("\n"));
