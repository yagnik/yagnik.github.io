/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  pageExtensions: ['tsx'],
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  }
}

export default nextConfig
