import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // Temporarily skip type check to test build
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip linting during build
  },
};

export default nextConfig;
