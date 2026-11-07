import type { NextConfig } from "next";

const isStaticExport = process.env.GH_PAGES === "1";

const nextConfig: NextConfig = {
  /* GitHub Pages static export: served at https://<user>.github.io/<repo>/ so
     basePath + assetPrefix are required. Build with GH_PAGES=1.
     Without GH_PAGES (e.g. Netlify) the app builds as a normal server app. */
  ...(isStaticExport
    ? {
        output: "export" as const,
        basePath: "/HN",
        assetPrefix: "/HN/",
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {
        images: { unoptimized: true },
      }),
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
