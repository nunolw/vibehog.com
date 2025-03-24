/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/vibehog.com',
  assetPrefix: '/vibehog.com/',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig 