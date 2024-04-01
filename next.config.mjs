/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.iconscout.com',
      },
    ],
  },
};

export default nextConfig;
