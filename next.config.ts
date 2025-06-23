import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s.pstatic.net",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
