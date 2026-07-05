// Netlify Function: /.netlify/functions/save-content
// Validates user's Netlify Identity JWT, then commits to GitHub.
//
// TWO BACKEND MODES — tries Git Gateway first (no env vars needed if connected):
//   Mode A (preferred): Use Git Gateway → /.netlify/git/token → GitHub API
//   Mode B (fallback):  Use GITHUB_TOKEN env var for direct GitHub API access
//
// Netlify auto-injects `process.env.URL` and `event.headers.host` for site URL.

const https = require('https');

function ghRequest(method, apiPath, body, token) {
  return new Promise((resolve, reject) => {
    const opts = {
      hostname: 'api.github.com',
      path: apiPath,
      method,
      headers: {
        'Authorization': 'Bearer ' + token,
        'Accept': 'application/vnd.github+json',
        'User-Agent': 'hn-admin-fn',
        'X-GitHub-Api-Version': '2022-11-28'
      }
    };
    if (body) {
      const json = JSON.stringify(body);
      opts.headers['Content-Type'] = 'application/json';
      opts.headers['Content-Length'] = Buffer.byteLength(json);
    }
    const req = https.request(opts, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        let parsed; try { parsed = JSON.parse(data); } catch { parsed = { raw: data }; }
        if (res.statusCode >= 200 && res.statusCode < 300) resolve(parsed);
        else reject({ status: res.statusCode, body: parsed });
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

const b64 = (s) => Buffer.from(s, 'utf-8').toString('base64');

function getUserJWT(event) {
  const h = event.headers || {};
  const auth = h.authorization || h.Authorization;
  if (auth && auth.startsWith('Bearer ')) return { token: auth.slice(7), viaHeader: true };
  // Cookie fallback (when client uses fetch with credentials)
  const cookie = h.cookie || h.Cookie || '';
  const m = cookie.match(/nf_jwt=([^;]+)/);
  if (m) return { token: m[1], viaCookie: true };
  return null;
}

async function getGitGatewayToken(userJWT, siteOrigin) {
  // Netlify's internal endpoint: /.netlify/git/token
  // Requires the user JWT in Authorization header
  const resp = await fetch(`${siteOrigin}/.netlify/git/token`, {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + userJWT }
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`git/token HTTP ${resp.status}: ${text.substring(0, 200)}`);
  }
  const data = await resp.json();
  if (!data || !data.token) throw new Error('git/token returned no token: ' + JSON.stringify(data).substring(0, 200));
  return data.token;  // This is a short-lived Git provider token (usually GitHub OAuth)
}

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Use POST' }) };
  }

  // 1. Identify user
  const auth = getUserJWT(event);
  if (!auth) {
    return { statusCode: 401, body: JSON.stringify({ error: 'No Identity token in request.' }) };
  }

  // 2. Verify the JWT is valid against Identity
  const siteOrigin = process.env.URL || `https://${event.headers.host}`;
  let userEmail = '(unknown)';
  try {
    const vr = await fetch(`${siteOrigin}/.netlify/identity/user`, {
      headers: { 'Authorization': 'Bearer ' + auth.token }
    });
    if (!vr.ok) {
      return { statusCode: 401, body: JSON.stringify({ error: 'Identity session expired. Sign in again.' }) };
    }
    const u = await vr.json();
    userEmail = u.email || userEmail;
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Identity verify error: ' + e.message }) };
  }

  // 3. (Optional) ALLOWED_USERS gate
  const allowed = (process.env.ALLOWED_USERS || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  if (allowed.length && !allowed.includes(userEmail.toLowerCase())) {
    return { statusCode: 403, body: JSON.stringify({ error: 'Email not allowed: ' + userEmail }) };
  }

  // 4. Parse payload
  let payload;
  try { payload = JSON.parse(event.body || '{}'); } catch { return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) }; }
  const { path, content, message, branch = 'main' } = payload;
  if (!path || typeof content !== 'string') return { statusCode: 400, body: JSON.stringify({ error: 'Missing path or content' }) };
  if (path.includes('..') || path.startsWith('/')) return { statusCode: 400, body: JSON.stringify({ error: 'Invalid path' }) };

  // Allowlist of top-level folders the admin can write to
  const allowedFolders = ['content/', 'assets/images/uploads/'];
  if (!allowedFolders.some(f => path.startsWith(f))) {
    return { statusCode: 403, body: JSON.stringify({ error: 'Path not in allowlist: ' + path }) };
  }

  // 5. Try Git Gateway first; if fails, fall back to GITHUB_TOKEN env var
  let ghToken = null;
  let gwError = null;
  try {
    ghToken = await getGitGatewayToken(auth.token, siteOrigin);
  } catch (e) {
    gwError = e.message;
  }
  if (!ghToken) {
    if (process.env.GITHUB_TOKEN && process.env.GITHUB_REPO) {
      ghToken = { token: process.env.GITHUB_TOKEN, repo: process.env.GITHUB_REPO };
    } else {
      return { statusCode: 500, body: JSON.stringify({ error: 'No git token available.', detail: 'Git Gateway failed: ' + gwError + '. Set GITHUB_TOKEN + GITHUB_REPO env vars to fall back.' }) };
    }
  }
  const TOKEN = typeof ghToken === 'string' ? ghToken : ghToken.token;
  const REPO = typeof ghToken === 'object' && ghToken.repo ? ghToken.repo : process.env.GITHUB_REPO;
  if (!REPO) {
    // Repo can be inferred from the Git Gateway URL response; for safety use known env or hardcoded default
    return { statusCode: 500, body: JSON.stringify({ error: 'GITHUB_REPO env var required when not using Git Gateway.' }) };
  }

  // 6. Get current SHA (if file exists)
  let sha;
  try {
    const ex = await ghRequest('GET', `/repos/${REPO}/contents/${encodeURI(path)}?ref=${branch}`, null, TOKEN);
    if (ex && ex.sha) sha = ex.sha;
  } catch (e) {
    if (e.status !== 404) {
      return { statusCode: 500, body: JSON.stringify({ error: 'GitHub GET failed: ' + (e.body && e.body.message) }) };
    }
  }

  // 7. Commit
  const body = { message: message || `Update ${path} via admin`, content: b64(content), branch };
  if (sha) body.sha = sha;

  try {
    const resp = await ghRequest('PUT', `/repos/${REPO}/contents/${encodeURI(path)}`, body, TOKEN);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ok: true,
        sha: resp.content && resp.content.sha,
        path: resp.content && resp.content.path,
        commit: resp.commit && resp.commit.sha,
        message: 'Saved. Netlify will deploy in ~30s.'
      })
    };
  } catch (e) {
    return { statusCode: e.status || 500, body: JSON.stringify({ error: 'GitHub PUT failed: ' + ((e.body && e.body.message) || e.body || 'unknown') }) };
  }
};
