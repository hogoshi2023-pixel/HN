// fix-html-lang.mjs — 静态导出后处理：给 out/ 里各语言的 HTML 设置正确的
// <html lang>（和阿拉伯语的 dir="rtl"）。Next 静态导出对非根路由也输出
// lang="en"（框架限制，见根 layout），搜索引擎靠它识别页面语言，必须修正。
// 用法: node scripts/fix-html-lang.mjs   （在 next build 之后运行）
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const LOCALES = new Set(["en", "zh", "vi", "es", "ar"]);
const HTML_LANG = { en: "en", zh: "zh-CN", vi: "vi", es: "es", ar: "ar" };

const ROOT = join(process.cwd(), "out");
let changed = 0;
let scanned = 0;

(function walk(dir) {
  for (const f of readdirSync(dir, { withFileTypes: true })) {
    const fp = join(dir, f.name);
    if (f.isDirectory()) {
      walk(fp);
      continue;
    }
    if (!f.name.endsWith(".html")) continue;
    const rel = relative(ROOT, fp).split(sep);
    // 语言由路径首段决定；根 index.html / 404.html 保持 en
    const locale = LOCALES.has(rel[0]) ? rel[0] : "en";
    scanned++;
    if (locale === "en") continue; // 默认已是 en，无需处理

    let html = readFileSync(fp, "utf8");
    const lang = HTML_LANG[locale];
    const isAr = locale === "ar";
    const next = isAr
      ? html.replace('<html lang="en"', `<html lang="${lang}" dir="rtl"`)
      : html.replace('<html lang="en"', `<html lang="${lang}"`);
    if (next !== html) {
      writeFileSync(fp, next, "utf8");
      changed++;
    }
  }
})(ROOT);

console.log(`fix-html-lang: scanned ${scanned} html, updated ${changed} (non-en locales)`);
