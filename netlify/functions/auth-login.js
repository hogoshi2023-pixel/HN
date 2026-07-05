// Netlify Function: /.netlify/functions/auth-login
// Simple password-based auth — bypasses Netlify Identity entirely.
// Set ADMIN_PASSWORD in Netlify environment variables.

const crypto = require('crypto');

function b64urlEncode(buf) {
  return Buffer.from(buf).toString('base64').replace(/=+$/,'').replace(/\+/g,'-').replace(/\//g,'_');
}
function b64urlDecode(s) {
  s = s.replace(/-/g,'+').replace(/_/g,'/');
  while (s.length % 4) s += '=';
  return Buffer.from(s,'base64').toString('utf-8');
}

function jwtSign(payload, secret) {
  const h = b64urlEncode(JSON.stringify({alg:'HS256',typ:'JWT'}));
  const p = b64urlEncode(JSON.stringify(payload));
  const sig = b64urlEncode(crypto.createHmac('sha256', secret).update(`${h}.${p}`).digest());
  return `${h}.${p}.${sig}`;
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'POST only' };
  const pwd = (process.env.ADMIN_PASSWORD || '').trim();
  const secret = (process.env.ADMIN_JWT_SECRET || process.env.ADMIN_PASSWORD || 'change-me').trim();
  if (!pwd) return { statusCode: 500, body: JSON.stringify({ error: 'ADMIN_PASSWORD env var not set in Netlify.' }) };

  let body; try { body = JSON.parse(event.body || '{}'); } catch { return { statusCode: 400, body: JSON.stringify({ error: 'Bad JSON' }) }; }
  const submitted = (body.password || '').trim();
  if (!submitted) return { statusCode: 400, body: JSON.stringify({ error: 'Password required.' }) };

  const a = Buffer.from(submitted);
  const b = Buffer.from(pwd);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Wrong password.' }) };
  }

  const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30;
  const payload = { sub:'admin', email:(process.env.ADMIN_EMAIL || 'admin@local'), role:'admin', iat: Math.floor(Date.now()/1000), exp };
  const token = jwtSign(payload, secret);
  return { statusCode: 200, headers: { 'Content-Type':'application/json' }, body: JSON.stringify({ token, expiresAt: exp*1000, email: payload.email }) };
};