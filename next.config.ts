import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["vipulsc.com"],
  },
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
