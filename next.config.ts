import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isGithubPages ? "/norgesgym_claude" : "",
  assetPrefix: isGithubPages ? "/norgesgym_claude/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
