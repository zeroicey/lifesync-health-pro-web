import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ["source.unsplash.com", "picsum.photos"],
  },
};

export default nextConfig;
