import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow all local network IPs as requested by Next.js dev server
  allowedDevOrigins: ['192.168.137.1', 'localhost'],
  images: {
    qualities: [25, 50, 75, 85, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cyberiumx.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  }
};

export default nextConfig;
