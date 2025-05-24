import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["search1.kakaocdn.net"],
  },
  compiler: {
    emotion: true,
  },
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
