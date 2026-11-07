// Minimal static server: maps http://127.0.0.1:8080/HN/* -> ../local-test/HN/*
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(here, "..", "local-test");
const PORT = 8080;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".woff2": "font/woff2",
};

const server = http.createServer((req, res) => {
  try {
    const u = new URL(req.url, "http://x");
    let p = decodeURIComponent(u.pathname);
    if (p.startsWith("/HN")) p = p.slice(3) || "/";
    if (p.endsWith("/")) p += "index.html";
    let file = path.join(root, "HN", p);
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      // GH Pages-like fallback: serve 404.html for unknown paths
      file = path.join(root, "HN", "404.html");
      res.writeHead(404, { "Content-Type": MIME[".html"] });
      fs.createReadStream(file).pipe(res);
      return;
    }
    res.writeHead(200, { "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  } catch (e) {
    res.writeHead(500);
    res.end("server error");
  }
});
server.listen(PORT, "127.0.0.1", () => console.log(`serving on http://127.0.0.1:${PORT}/HN/`));
