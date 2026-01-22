import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["cdn.nba.com"],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
