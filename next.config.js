/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages 子路径配置
  basePath: '/my_page',
  assetPrefix: '/my_page',
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  eslint: {
    dirs: ['app', 'components', 'lib', 'types'],
  },
}

module.exports = nextConfig
