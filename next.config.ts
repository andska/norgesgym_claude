import type { NextConfig } from "next";

const isPreview = process.env.NEXT_PUBLIC_PREVIEW === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isPreview ? "/norgesgym_claude" : "",
  assetPrefix: isPreview ? "/norgesgym_claude" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
