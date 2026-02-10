import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/oshu-site",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
