# HONG NGUYEN 独立站（重构版）

Next.js 16 静态导出（GitHub Pages 部署，basePath `/HN`）。2026-10-24 合规重构：中国出口商定位、HN-xxx 对外型号、真实 TDS 参数多语化、虚构内容下架。2026-11-18 增强：五语静态首页、hash 深链、询盘交接加固、self-canonical hreflang、CI 构建。

**五语**：English / 中文 / Tiếng Việt / Español / العربية（阿语自动 RTL；缺译自动回退英文）。

## 开发与构建

```bash
npm install
npm run dev                      # 开发 http://localhost:3000/HN
# GitHub Pages 静态导出（Windows cmd）：
set GH_PAGES=1&& npx next build  # 产物在 out/（254 页）
node scripts/fix-html-lang.mjs   # 构建后必须跑：给各语言页设置 <html lang/dir>
```

## 内容维护（重要）

- **所有产品/公司内容不要直接改 `src/lib/data.ts`**——它是生成文件。
- 单一事实源：`scripts/build-data.mjs`。改产品参数/文案/型号后运行：

```bash
node scripts/build-data.mjs      # 重新生成 src/lib/data.ts
```

- 界面文案（导航/标题/表单）在 `src/lib/i18n.ts`（en/zh/vi 三语 + `src/lib/ui-locales.ts` 的 es/ar 按键译文；新增键可直接内联五语）。

### es/ar 译文管线

- es/ar 全部译文按**英文原文**索引，存于 `scripts/locales-es.mjs` / `scripts/locales-ar.mjs`（生成文件，勿手改）；TDS 长文由 `renderDetails` + 术语词典机械渲染，模板字面量由 `injectLocales` 后处理注入。
- 新增/修改英文文案后，跑 `node scripts/build-data.mjs --dump-strings` 导出待译清单 → 人工/代理翻译 → 合并回 `apply-locales.mjs` 识别的文件 → `node scripts/apply-locales.mjs && node scripts/build-data.mjs`。
- 未翻译的串自动回退英文（与原站行为一致），不会构建失败。

- ⚠️ `build-data.mjs` 里的 `factory` 字段是**内部原厂型号对照，绝不对外**（不写入 data.ts、不进 TDS、不进报价单）。对外型号映射表归档于工作区 `business-roles/factory-liaison/型号映射-HN对外.md`。

## 结构

- **双层结构**：`/` SPA（8 视图，Zustand 切换 + **URL hash 同步**：`#/contact`、`#/products/CAT-01` 可深链，浏览器前进后退可用）+ **静态多路由 SEO 层**：
  - `/[locale]/` — **五语静态首页**（独立 title/desc/canonical + hreflang + JSON-LD）
  - `/[locale]/products/[model]/` — 48 型号 × 5 语 = 240 页，每页独立 title/description/**self-canonical** + **hreflang 五语互链 + x-default** + Product/Breadcrumb JSON-LD，阿语页 RTL；页内**"询盘此型号" mailto/WhatsApp 按钮**（主题自动带型号）
  - `/[locale]/certs/` — 证书专页 ×5
  - `src/app/sitemap.ts` — 构建时生成 sitemap（59 URL + 300 条 xhtml:link 语言 alternate）；`public/robots.txt` 带 Sitemap 行
- **TDS PDF 下载**：5 个拳头型号（HN-AC-201/302/405、HN-HT-200、HN-FL-101）英文版单页 TDS，`public/tds/`；挂载清单在 build-data 的 `tdsPdfs`（⚠️ 必须与 public/tds/ 实际 PDF 一致，否则按钮 404）
- **联系表单**：mailto 主渠道 + 成功页三兜底（WhatsApp 预填 / 邮件 / 复制文本），`whatsappDigits()` 防字段缺失崩溃，询盘摘要按访客语言本地化——询盘永不静默丢失
- **语言深链**：SPA 支持 `?lang=xx` 覆盖 localStorage 语言（静态页 CTA 用它带语言跳转）
- 注意：多路由静态页的界面文案在 `src/lib/ssr-i18n.ts`（独立于客户端 i18n.ts）

## 部署（GitHub Actions 构建 main → Pages）

- 源码整树推到 main（替换全部旧文件，清除历史垃圾），push 触发 `.github/workflows/deploy.yml` 自动构建发布。需 Fine-grained PAT（仅本仓库，Contents: Read and write）：

```bash
set GITHUB_TOKEN=github_pat_xxx&& node scripts/deploy-main.mjs
```

- Actions 进度：https://github.com/hogoshi2023-pixel/HN/actions ；线上 2–4 分钟生效。
- 本地想直接发产物（备用）：`set GH_PAGES=1&& npx next build && node scripts/fix-html-lang.mjs && set GITHUB_TOKEN=...&& node scripts/deploy-gh-pages.mjs`（需 Pages 源为 gh-pages 分支）。
- ⚠️ 原仓库历史提交含原厂型号与旧版虚构内容——仓库现为 Public，建议改 Private 或重写历史。
