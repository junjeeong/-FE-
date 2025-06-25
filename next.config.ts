import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false, // 두번 렌더링 되어 refreshToken이 자꾸만 401에러가 뜨는 부수효과가 발생하여 어쩔 수 없이 true로 설정함
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
