import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/terms", destination: "/tos", permanent: true },
      { source: "/legal/terms", destination: "/tos", permanent: true },
      { source: "/legal/tos", destination: "/tos", permanent: true },
      { source: "/legal/privacy", destination: "/privacy", permanent: true },
      { source: "/legal/cookies", destination: "/cookies", permanent: true },
      { source: "/w/bedrock/bedrock-sugar-cane-b172", destination: "/w/bedrock/sugar-cane-farm-troubleshooting", permanent: true },
    ];
  },
};

export default nextConfig;
