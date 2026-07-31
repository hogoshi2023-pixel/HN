import type { NextConfig } from "next";

const isStaticExport = process.env.GH_PAGES === "1";

const nextConfig: NextConfig = {
  /* GitHub Pages static export.
     GitHub Pages serves at https://<user>.github.io/<repo>/ so we need basePath + assetPrefix. */
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
