/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // GitHub Pages 子路径配置 - 如果您的仓库名不是 username.github.io，请取消注释并替换仓库名
  // basePath: '/your-repo-name',
  // assetPrefix: '/your-repo-name',
  experimental: {
    mdxRs: true,
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  eslint: {
    dirs: ['app', 'components', 'lib', 'types'],
  },
}

module.exports = nextConfig
