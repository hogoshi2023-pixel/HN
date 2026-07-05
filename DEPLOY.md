# HONG NGUYEN Co. - Netlify Deployment Guide

**Target site**: `https://hn-paint.netlify.app`

---

## One-time setup (10 min)

### 1. Register GitHub account
- https://github.com/signup
- Use your email

### 2. Register Netlify account
- https://app.netlify.com/signup
- Login with GitHub (recommended)

### 3. Install GitHub Desktop
- Download: https://desktop.github.com
- Login to your GitHub account

---

## Upload code to GitHub (5 min)

### Method A: GitHub Desktop (easiest)

1. Open GitHub Desktop -> File -> New Repository
   - Name: `hongnguyen-site`
   - Local path: e.g. `D:\hongnguyen-site`
   - Click Create Repository

2. Copy entire `hongyuan-b2b/` folder contents to `D:\hongnguyen-site`
   - Include: `admin/`, `content/`, `en/`, `zh/`, `assets/`, `index.html`, `netlify.toml`

3. Back in GitHub Desktop:
   - Commit message: `Initial site upload`
   - Click Commit to main

4. Top menu Repository -> Publish to GitHub
   - Select your GitHub account
   - Make sure repo is **Public**
   - Click Publish

### Method B: Command line

```bash
cd hongyuan-b2b
git init
git add .
git commit -m "Initial site upload"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/hongnguyen-site.git
git push -u origin main
```

---

## Netlify deployment (3 min)

1. Login to https://app.netlify.com
2. Add new site -> Import an existing project
3. Select GitHub -> authorize Netlify -> select `hongnguyen-site` repo
4. Settings:
   - Branch to deploy: `main`
   - Build command: (leave empty)
   - Publish directory: (leave empty)
5. Click Deploy
6. Wait 30-60 seconds for deploy to complete

---

## Set site name to `hn-paint`

1. Site dashboard -> Site settings -> Change site name
2. Enter `hn-paint`
3. Save
4. URL becomes: `https://hn-paint.netlify.app`

---

## Enable Decap CMS admin (5 min)

1. Netlify site dashboard -> Site settings -> Identity -> Enable Identity

2. Registration preferences:
   - Select **Invite only**
   - Only your email can register

3. Identity -> Services -> Enable Git Gateway

4. Register first user:
   - Top-right Identity -> click your email -> Send invite
   - Check email for invitation link
   - Set password

---

## Access admin

Open: `https://hn-paint.netlify.app/admin/`

- Login with your email + password
- See 5 collections: News / Cases / Products / FAQs / Settings
- Click any collection -> see existing content from sample markdown
- Click New Article or New Case -> fill in -> Publish
- Backend auto-commits to GitHub -> Netlify redeploys -> site updates in 30-60 sec

---

## Common issues

### Q1: Chinese characters garbled?
**A**: Should not happen (files are UTF-8). Hard refresh browser (Ctrl+Shift+R).

### Q2: Admin login says "Identity not found"?
**A**: Step "Enable Decap CMS admin" not done. Go to Netlify -> Site settings -> Identity -> Enable Identity.

### Q3: Saved content not showing?
**A**: `editorial_workflow` requires manual Publish. For instant publish, change `admin/config.yml`:
```yaml
publish_mode: simple
```
Then commit the change.

### Q4: Site images or text not updating?
**A**: Netlify redeploy takes time. Check deploy log, wait 30-60 sec.

### Q5: Want custom domain like hn-paint.com?
**A**: First run with `hn-paint.netlify.app`. Later buy domain from https://porkbun.com (~$10/year), then Netlify -> Domain settings -> Add custom domain. Free automatic HTTPS.