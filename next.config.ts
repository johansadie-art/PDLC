import type { NextConfig } from "next";

// When building for GitHub Pages (a project site served from /<repo>),
// the app is hosted under a sub-path. The deploy workflow sets GITHUB_PAGES=true.
const isPages = process.env.GITHUB_PAGES === "true";
const repoBasePath = "/PDLC";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` so it can be served by GitHub Pages.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath: isPages ? repoBasePath : undefined,
  assetPrefix: isPages ? `${repoBasePath}/` : undefined,
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
