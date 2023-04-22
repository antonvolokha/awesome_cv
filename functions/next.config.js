/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'next',
  webpack: (config, options) => {
    return config;
  },
}

module.exports = nextConfig
