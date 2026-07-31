import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Netlify deployment — no standalone output, the @netlify/plugin-nextjs handles SSR. */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  images: {
    // Allow next/image to work on Netlify without the sharp optimization server
    unoptimized: true,
  },
};

export default nextConfig;
