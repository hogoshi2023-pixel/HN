// Netlify Function: /.netlify/functions/save-content
// Validates the user's auth token (either Netlify Identity JWT OR custom JWT from auth-login)
// then commits the file to GitHub.
//
// Token sources supported:
//   1. Netlify Identity JWT (Authorization: Bearer <jwt>) — verified via /.netlify/identity/user
//   2. Custom JWT signed with ADMIN_JWT_SECRET — verified via HMAC + JSON parse
//
// Backend commit modes:
//   A. Git Gateway: POST /.netlify/git/token with user JWT → use returned token to call GitHub API
//   B. GITHUB_TOKEN env var fallback (if Git Gateway unavailable)

const https = require('https');
const crypto = require('crypto');

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

function b64urlDecode(s) {
  s = s.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  return Buffer.from(s, 'base64').toString('utf-8');
}

function b64urlEncode(buf) {
  return Buffer.from(buf).toString('base64').replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
}

function jwtVerify(token, secret) {
  try {
    const parts = token.split('.');
    if (parts.length !== 3) return null;
    const expectedSig = b64urlEncode(crypto.createHmac('sha256', secret).update(`${parts[0]}.${parts[1]}`).digest());
    if (expectedSig !== parts[2]) return null;
    const payload = JSON.parse(b64urlDecode(parts[1]));
    if (payload.exp && Math.floor(Date.now() / 1000) > payload.exp) return null;
    return payload;
  } catch { return null; }
}

function getToken(event) {
  const h = event.headers || {};
  const auth = h.authorization || h.Authorization;
  if (auth && auth.startsWith('Bearer ')) return auth.slice(7);
  const cookie = h.cookie || h.Cookie || '';
  const m = cookie.match(/nf_jwt=([^;]+)/) || cookie.match(/hn_admin=([^;]+)/);
  if (m) return m[1];
  return null;
}

async function identifyUser(event, context) {
  // Try Netlify Identity auto-context first (when client sends Authorization: Bearer)
  const ctxIdentity = context && context.clientContext && context.clientContext.identity;
  if (ctxIdentity && ctxIdentity.token) {
    return { token: ctxIdentity.token, email: ctxIdentity.email || '(via-context)', kind: 'identity' };
  }
  const token = getToken(event);
  if (!token) return null;

  // Try custom JWT first (matches our auth-login signing)
  const secret = process.env.ADMIN_JWT_SECRET || process.env.ADMIN_PASSWORD || 'change-me';
  const custom = jwtVerify(token, secret);
  if (custom && custom.role === 'admin') {
    return { token, email: custom.email, kind: 'custom' };
  }

  // Fall back to Identity JWT (try Identity user endpoint to validate)
  const siteOrigin = process.env.URL || `https://${event.headers.host}`;
  try {
    const r = await fetch(`${siteOrigin}/.netlify/identity/user`, { headers: { 'Authorization': 'Bearer ' + token } });
    if (r.ok) {
      const u = await r.json();
      return { token, email: u.email, kind: 'identity' };
    }
  } catch {}
  return null;
}

async function getGitGatewayToken(userToken, siteOrigin) {
  const resp = await fetch(`${siteOrigin}/.netlify/git/token`, {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + userToken }
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`git/token HTTP ${resp.status}: ${text.substring(0, 200)}`);
  }
  const data = await resp.json();
  if (!data || !data.token) throw new Error('git/token returned no token: ' + JSON.stringify(data).substring(0, 200));
  return data.token;
}

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: JSON.stringify({ error: 'Use POST' }) };

  const user = await identifyUser(event, context);
  if (!user) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Unauthenticated. Please sign in again.' }) };
  }

  // Optional allowlist by email
  const allowed = (process.env.ALLOWED_USERS || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  if (allowed.length && !allowed.includes((user.email || '').toLowerCase())) {
    return { statusCode: 403, body: JSON.stringify({ error: 'Email not allowed: ' + user.email }) };
  }

  let payload;
  try { payload = JSON.parse(event.body || '{}'); } catch { return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON' }) }; }
  const { path, content, message, branch = 'main' } = payload;
  if (!path || typeof content !== 'string') return { statusCode: 400, body: JSON.stringify({ error: 'Missing path or content' }) };
  if (path.includes('..') || path.startsWith('/')) return { statusCode: 400, body: JSON.stringify({ error: 'Invalid path' }) };

  const allowedFolders = ['content/', 'assets/images/uploads/'];
  if (!allowedFolders.some(f => path.startsWith(f))) {
    return { statusCode: 403, body: JSON.stringify({ error: 'Path not in allowlist: ' + path }) };
  }

  const siteOrigin = process.env.URL || `https://${event.headers.host}`;

  // Get a Git provider token
  let ghToken = null;
  let gwError = null;
  // Only Identity tokens can use Git Gateway; custom JWTs must use the env var path
  if (user.kind === 'identity') {
    try { ghToken = await getGitGatewayToken(user.token, siteOrigin); }
    catch (e) { gwError = e.message; }
  }
  if (!ghToken && process.env.GITHUB_TOKEN && process.env.GITHUB_REPO) {
    ghToken = { token: process.env.GITHUB_TOKEN, repo: process.env.GITHUB_REPO };
  }
  if (!ghToken) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'No git commit token available.',
        detail: gwError ? 'Git Gateway error: ' + gwError : '',
        hint: 'Set GITHUB_TOKEN and GITHUB_REPO in Netlify env vars OR use the Netlify Identity login (top button) so Git Gateway works.'
      })
    };
  }

  const TOKEN = typeof ghToken === 'string' ? ghToken : ghToken.token;
  const REPO = (typeof ghToken === 'object' && ghToken.repo) ? ghToken.repo : process.env.GITHUB_REPO;

  let sha;
  try {
    const ex = await ghRequest('GET', `/repos/${REPO}/contents/${encodeURI(path)}?ref=${branch}`, null, TOKEN);
    if (ex && ex.sha) sha = ex.sha;
  } catch (e) {
    if (e.status !== 404) return { statusCode: 500, body: JSON.stringify({ error: 'GitHub GET failed: ' + (e.body && e.body.message) }) };
  }

  const body = { message: message || `Update ${path} via admin`, content: b64(content), branch };
  if (sha) body.sha = sha;

  try {
    const resp = await ghRequest('PUT', `/repos/${REPO}/contents/${encodeURI(path)}`, body, TOKEN);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ok: true, sha: resp.content && resp.content.sha, path: resp.content && resp.content.path,
        commit: resp.commit && resp.commit.sha, message: 'Saved. Netlify will deploy in ~30s.', authKind: user.kind
      })
    };
  } catch (e) {
    return { statusCode: e.status || 500, body: JSON.stringify({ error: 'GitHub PUT failed: ' + ((e.body && e.body.message) || e.body || 'unknown') }) };
  }
};