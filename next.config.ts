import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ⚡ ini yang mengaktifkan static export
  images: {
    unoptimized: true, // biar gambar gak error waktu export
  },
  reactStrictMode: true,
};

export default nextConfig;
