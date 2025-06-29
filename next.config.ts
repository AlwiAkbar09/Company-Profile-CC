import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn-site.gojek.com'], // Tambahkan domain ini di sini
  },
  // Konfigurasi Next.js lainnya bisa diletakkan di sini
};

module.exports = nextConfig;
