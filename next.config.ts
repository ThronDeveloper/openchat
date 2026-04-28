import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      include: [],
      exclude: []
    }
  }
};

export default nextConfig;
