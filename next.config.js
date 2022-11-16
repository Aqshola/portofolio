/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ['www.datocms-assets.com'],
  },
  experimental:{
    fontLoaders:[
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ]
  }
}

module.exports = nextConfig
