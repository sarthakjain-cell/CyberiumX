import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.137.1', 'localhost'],
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [50, 75, 85],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cyberiumx.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/faq',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/my-courses',
        destination: '/courses',
        permanent: true,
      },
      {
        source: '/reviews-and-faqs',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/7-layer-cybersecurity-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/courses-in-us',
        destination: '/global-services?region=usa&view=courses',
        permanent: true,
      },
      {
        source: '/cybersecurity-courses-in-us',
        destination: '/global-services?region=usa&view=courses',
        permanent: true,
      },
      {
        source: '/cybersecurity-courses-in-australia',
        destination: '/global-services?region=australia&view=courses',
        permanent: true,
      },
      {
        source: '/cybersecurity-courses-in-uk',
        destination: '/global-services?region=uk&view=courses',
        permanent: true,
      },
      {
        source: '/cybersecurity-courses-in-canada',
        destination: '/global-services?region=canada&view=courses',
        permanent: true,
      },
      {
        source: '/cybersecurity-courses-in-germany',
        destination: '/global-services?region=germany&view=courses',
        permanent: true,
      },
      {
        source: '/cybersecurity-services-in-usa',
        destination: '/global-services?region=usa',
        permanent: true,
      },
      {
        source: '/cybersecurity-services-in-australia',
        destination: '/global-services?region=australia',
        permanent: true,
      },
      {
        source: '/cybersecurity-services-in-the-uk',
        destination: '/global-services?region=uk',
        permanent: true,
      },
      {
        source: '/cybersecurity-services-in-the-canada',
        destination: '/global-services?region=canada',
        permanent: true,
      },
      {
        source: '/cybersecurity-services-in-the-germany',
        destination: '/global-services?region=germany',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'all, index, follow',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
