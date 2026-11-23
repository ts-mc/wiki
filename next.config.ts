import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/w/bedrock/bedrock-sugar-cane-b172", destination: "/w/bedrock/sugar-cane-farm-troubleshooting", permanent: true },
      { source: "/cookies", destination: "/legal/cookies", permanent: true },
      { source: "/privacy", destination: "/legal/privacy", permanent: true },
      { source: "/terms", destination: "/legal/terms", permanent: true },
      { source: "/tos", destination: "/legal/terms", permanent: true },
    ];
  },
};

export default nextConfig;
