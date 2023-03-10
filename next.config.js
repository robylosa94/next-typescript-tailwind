/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: false,
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    scrollRestoration: true,
  },
}

module.exports = nextConfig
