# HONG NGUYEN 官网修复包 — 变更说明

日期：2026-11-07
基准：仓库 `hn-website.zip` 内源码（zip 源码 = main 分支状态）+ **从线上部署 bundle 抢救出的 5 语数据**（线上版源码已丢失，本修复包将其内容完整还原为源码）。

## 已修复的问题

### P0-1 联系表单提交崩溃（线上所有语言全部失效）
- **原因**：线上版 data 的 `company.whatsapp` 字段丢失，提交处理器在 `c.whatsapp.replace(...)` 处抛
  `TypeError: Cannot read properties of undefined (reading 'replace')`，且无任何兜底 → 访客填完 11 个字段点"发送询盘"后**零反馈、询盘全丢**。
- **修复**（`src/components/pages/contact-page.tsx`）：
  - 提交后构造五语询盘摘要文本，自动打开 WhatsApp（`wa.me`，预填内容）；
  - 成功页提供三个按钮：**WhatsApp 重发 / 邮件发送（mailto 预填）/ 复制询盘内容**，弹窗被拦截也能送达；
  - 全路径 try/catch，任何异常都有可见反馈，不会再静默失败。

### P0-2 浏览器后退键直接退出网站 + 子页面无 URL
- **原因**：整站是单路由 SPA（Zustand 切换视图），不写 history。
- **修复**（`src/lib/nav-store.ts` + `src/app/page.tsx`）：
  - 视图同步到 URL hash：`#/products`、`#/contact`、`#/products/<code>`；
  - 监听 `hashchange`，后退/前进/刷新/分享/收藏全部可用；
  - 首次加载按 hash 恢复视图（深链接可用）；
  - `#/admin`、`#admin`、`?admin=1` 三种入口均恢复后台。

### 多语言与数据
- `src/lib/i18n.ts` 重建：**EN / 中文 / Tiếng Việt / Español / العربية** 五语，UI 字典 284 键（233 键从线上 bundle 抢救 + 45 键回退 + 6 个新增键）；
- 默认语言 = 西班牙语（与线上行为一致，localStorage `hn-lang`）；
- 阿语 RTL：`<html dir="rtl">`、`lang`、`ar` 日期区域设置（对齐线上行为）；
- `src/lib/data.ts` 重建（449KB）：产品目录（6 类 38 型号含 5 语 TDS）、新闻、FAQ、案例、方案等全部内容取自线上 bundle；电话统一为线上的 +86；每页 `document.title` 对齐线上。

### 死链接
- 微信卡片：点击**复制微信号 hogo13**（带 toast 提示），不再是无反应的 `#`；
- 地址卡片：跳转 **Google Maps**（新窗口）。

### SEO 元数据
- `layout.tsx` 的 title/description/OG 对齐线上版文案。

## 部署（重要 —— 根治"源码与线上脱节"）

之前的部署方式是手工上传 zip，导致线上跑的代码仓库里根本没有。本包加入
`.github/workflows/deploy.yml`，改为 **GitHub Actions 自动构建部署**：

1. 用本目录内容**替换**仓库 `hogoshi2023-pixel/HN` main 分支的全部文件
   （保留 `public/images/`，删除旧的 `hn-website.zip`）；
2. GitHub 仓库 → Settings → Pages → Source 选 **GitHub Actions**；
3. push 到 main 即自动构建发布，之后**改源码即可上线**，不再需要手工传包。

> 注意：`out/` 是构建产物请勿手工提交；`?admin=1` 后台在纯静态托管下无法读取
> 数据库（接口不存在），属已知限制；若需真正后台，把仓库接入 Netlify
> （`netlify.toml` 已就绪）或 Vercel 即可获得服务端 API。

## 构建方式（本地验证）

```bash
npm install
npx prisma generate
GH_PAGES=1 npx next build     # Windows: $env:GH_PAGES='1'; npx next build
# 产物在 out/，需以 /HN/ 为 basePath 托管
```
