import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/bouillonnantes", // PLACEHOLDER — replace with actual GitHub repo name before first deploy
  images: { unoptimized: true },
};

export default nextConfig;
