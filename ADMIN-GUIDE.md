# HONG NGUYEN · 后台操作说明

新后台于 2026-07-06 完整重写。简单讲：**你 → Identity 邮箱登录 → 编辑器 Markdown → 保存 → 自动提交到 GitHub → Netlify 自动部署**。

## 第一次使用（3 步）

### 1. 邀请自己（Netlify Identity 控制台）

打开 Identity 用户管理：
**https://app.netlify.com/projects/hn-paint/identity/users**

操作：
- 如果列表里已经有用户（特别是 `hogoshi2023@gmail.com`），**先全部删除**——旧账号可能处于坏状态（这就是你之前不能登录的根本原因）
- 点击 **"Invite users"** → 输入 `hogoshi2023@gmail.com` → **Send invitation**

### 2. 接受邀请、设置密码

- 打开邮箱（**包括垃圾邮件夹**），找到来自 `dev-identity@netlify.com` 或类似地址的邀请邮件
- 点击邮件里的链接
- 浏览器会打开邀请页面，要求你**设置新密码**（≥ 8 个字符）
- 提交后你会自动登录到 admin

### 3. 开始编辑

打开：**https://hn-paint.netlify.app/admin/**

界面：
- 左侧：板块切换（News / Cases / FAQ / Settings）+ 文件列表
- 右侧：Markdown 编辑器 + 元数据表单
- 顶栏：右上角"Logout" + "View site" 链接

## 忘记密码 / 登录失败

直接打开 **https://hn-paint.netlify.app/admin/**

页面下方有 **"Forgot password? Send a reset link"** 按钮 → 输入邮箱 → 查邮件 → 点击重置链接 → 设置新密码。

如果完全无法登录（确认邮箱、对密码有信心），最干脆的解法是回第 1 步让 Identity 控制台**删除该账号**、**重新邀请**。

## 编辑器怎么用

### News（行业资讯）
- 标题、日期、作者、分类、语言、封面图、摘要、Markdown 正文
- 封面图：可以传图片 URL（如 `/assets/images/your-image.png`）或直接拖图片

### Cases（工程案例）
- 项目名、编号、国家、年份、行业、客户、封面图、摘要、亮点列表、参数表、Markdown 正文
- 亮点用一行一条写
- 参数用 `标签 = 值` 格式，每行一条

### FAQ（问答）
- 编号（如 `Q17`）、分类、中英文问题、中英文答案

### Settings（站点设置）
- 整个 general.json 文件以 JSON 形式编辑
- 改完保存即可

## 安全说明

- 后台只接受 `hogoshi2023@gmail.com`（或你设置的允许列表）登录后写的请求
- 编辑器保存时通过 Netlify Function 提交到 GitHub
- GitHub 推送走的 Netlify Git Gateway（不需要单独 token）
- 不允许写入 `content/` 和 `assets/images/uploads/` 以外的目录

## 部署节奏

- 保存后立即提交 GitHub
- Netlify 自动开始部署（约 30-60 秒）
- 之后刷新 `/news.html` 或 `/cases.html` 看新内容
- 公开页面可能还有 1-2 分钟 CDN 缓存

## 出错怎么办

| 现象 | 处理 |
|---|---|
| 点"Save"报 401 | Identity session 过期，回到 `/admin/` 重新登录 |
| 报"Git Gateway failed" | 去 Netlify 控制台确认 Git Gateway 已开启：Site settings → Identity → Services → Enable Git Gateway |
| 邮件链接点了没反应 | 邀请邮件可能被识别为垃圾邮件；也可以直接在 admin 登录页点"Forgot password" |
| 保存后页面没更新 | 等 1-2 分钟再刷新（Netlify 部署 + CDN 缓存） |
| 完全不能保存 | 检查该文件路径在 `content/` 或 `assets/images/uploads/` 下 |
