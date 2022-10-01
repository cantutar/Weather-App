/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  swcMinify: true,
  images: {
    domains: ["openweathermap.org"],
  },
};

module.exports = nextConfig;
