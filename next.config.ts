import type { NextConfig } from "next";

const nextConfig = {
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
} as NextConfig;

export default nextConfig;
