/** Prefix site image paths with the deployment basePath (GH_PAGES build sets
 *  NEXT_PUBLIC_BASE_PATH=/HN; next/image does not add basePath itself when
 *  images are unoptimized, so we do it here). */
export function withBasePath(src: string): string {
  if (!src) return src;
  if (/^(https?:)?\/\//.test(src) || src.startsWith("data:")) return src;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return src.startsWith(base) ? src : `${base}${src}`;
}
