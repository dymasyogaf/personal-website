import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ⚡ ini yang mengaktifkan static export
  images: {
    unoptimized: true, // biar gambar gak error waktu export
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  reactStrictMode: true,
  // Optimasi performa
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Note: headers tidak kompatibel dengan output: export
  // Headers akan dihandle oleh Cloudflare Pages saat deployment
};

export default nextConfig;
