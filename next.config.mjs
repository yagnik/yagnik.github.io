/** @type {import('next').NextConfig} */

const nextConfig = {
  pageExtensions: ['tsx'],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  }
}

export default nextConfig
