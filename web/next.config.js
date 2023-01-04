/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.prismic.io']
  },
  pageExtensions: [
    'page.tsx',
    'api.ts',
    'api.tsx'
  ],//extensão de arquivos usada para criar rotas assim da para usar o styles.ts
}

module.exports = nextConfig
