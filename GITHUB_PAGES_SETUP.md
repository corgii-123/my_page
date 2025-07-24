# GitHub Pages 部署指南

本指南将帮助您将 Next.js 项目部署到 GitHub Pages，以便国内用户可以直接访问。

## 已完成的配置

1. ✅ 修改了 `next.config.js` 以支持静态导出
2. ✅ 添加了 GitHub Actions 工作流 (`.github/workflows/deploy.yml`)
3. ✅ 创建了 `.nojekyll` 文件
4. ✅ 更新了 `package.json` 添加导出脚本
5. ✅ 创建了静态 RSS 生成脚本 (`scripts/generate-rss.js`)
6. ✅ 配置构建流程在构建前生成 RSS 文件

## 设置步骤

### 1. 推送代码到 GitHub

确保您的代码已经推送到 GitHub 仓库的 `main` 分支：

```bash
git add .
git commit -m "配置 GitHub Pages 部署"
git push origin main
```

### 2. 启用 GitHub Pages

1. 打开您的 GitHub 仓库页面
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分，选择 **Deploy from a branch**
5. 选择 **gh-pages** 分支和 **/ (root)** 文件夹
6. 点击 **Save**

### 3. 配置 GitHub Actions 权限

1. 在仓库设置中，找到 **Actions** → **General**
2. 在 **Workflow permissions** 部分，选择 **Read and write permissions**
3. 勾选 **Allow GitHub Actions to create and approve pull requests**
4. 点击 **Save**

### 4. 等待自动部署

推送代码后，GitHub Actions 将自动：

1. 安装依赖
2. 构建项目
3. 导出静态文件
4. 部署到 `gh-pages` 分支

您可以在 **Actions** 标签中查看部署进度。

### 5. 访问您的网站

部署完成后，您的网站将在以下地址可用：

```
https://[您的用户名].github.io/[仓库名]/
```

## 本地测试

您可以在本地测试静态导出：

```bash
# 构建和导出
pnpm build

# 预览导出的文件
cd out
python -m http.server 8000
# 或者使用 Node.js
npx serve .
```

然后在浏览器中访问 `http://localhost:8000`

## 重要配置说明

### 子路径配置（如果需要）

如果您的 GitHub 仓库名不是 `username.github.io` 格式，您需要配置子路径：

1. 在 `next.config.js` 中取消注释并替换 `basePath` 和 `assetPrefix`：

```javascript
basePath: '/your-repo-name',
assetPrefix: '/your-repo-name',
```

2. 在 `scripts/generate-rss.js` 中更新 `siteUrl`：

```javascript
const siteUrl = 'https://username.github.io/your-repo-name'
```

### RSS 支持

原来的 API 路由 (`/api/rss`) 已经转换为静态生成的 RSS 文件 (`/rss.xml`)。RSS 文件会在每次构建时自动生成。

## 注意事项

1. **图片优化**：由于使用了 `unoptimized: true`，图片将不会被 Next.js 优化
2. **路由**：所有路由都会在构建时预生成为静态 HTML 文件
3. **API 路由**：GitHub Pages 不支持 API 路由，已将 RSS API 转换为静态文件
4. **自定义域名**：如果需要自定义域名，可以在仓库根目录添加 `CNAME` 文件

## 故障排除

- 如果部署失败，检查 Actions 标签中的错误日志
- 确保所有的动态路由都有对应的 `generateStaticParams()` 函数
- 如果页面显示 404，检查路径是否正确（注意 GitHub Pages 的子路径）

## 更新网站

每次推送到 `main` 分支时，网站都会自动重新部署。通常需要几分钟时间完成。
