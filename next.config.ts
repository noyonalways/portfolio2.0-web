import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
      { hostname: "api.microlink.io" },
    ],
  },
};

export default nextConfig;
