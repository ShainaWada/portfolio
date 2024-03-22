/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = {
  nextConfig,
  trailingSlash: true,
  experimental: {
    images: {
      unoptimized: true,
    },
    optimizeFonts: true,
  },
};
