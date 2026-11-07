// Base-path-aware image src helper (mirrors the original site's runtime prefix helper).
// NEXT_PUBLIC_BASE_PATH is set at build time ("/HN" for GitHub Pages, empty for root deploys).
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function imgSrc(src?: string): string {
  if (!src) return "";
  if (
    !BASE ||
    /^(https?:)?\/\//.test(src) ||
    src.startsWith("data:") ||
    src.startsWith(BASE + "/")
  ) {
    return src;
  }
  return BASE + src;
}
