# 石杰洋的个人网站

AI-First Front-End Developer 的个人作品集网站，使用 Next.js 14、TypeScript 和 Tailwind CSS 构建。

## 网站简介

这是石杰洋的个人作品集网站，展示了 AI + 前端工程的深度融合实践。包含个人简介、项目作品和技术分享。

## 技术栈

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS Variables
- **Content**: MDX (Markdown + JSX)
- **Deployment**: 可部署到 Vercel 或 Netlify

## 项目结构

```
my_page/
├── app/                    # Next.js App Router 页面
│   ├── layout.tsx         # 根布局
│   ├── page.tsx           # 首页
│   ├── projects/          # 项目页面
│   │   ├── page.tsx       # 项目列表
│   │   └── [slug]/        # 项目详情页
│   └── resume/            # 简历页面
├── content/               # 内容文件 (MDX)
│   ├── projects/          # 项目内容
│   │   ├── ledu-u-class.mdx
│   │   ├── milvus-knowledge-base.mdx
│   │   ├── ai-code-review.mdx
│   │   ├── dify-issue-solver.mdx
│   │   └── overseas-portal.mdx
│   └── about.mdx          # 关于页面内容
├── lib/                   # 工具函数
│   ├── mdx.ts            # MDX 处理器
│   └── utils.ts          # 通用工具
├── types/                 # TypeScript 类型定义
├── public/               # 静态资源
│   └── assets/           # 项目截图、图表等
└── components/           # React 组件
```

## 快速开始

### 1. 安装依赖

```bash
pnpm install
```

### 2. 启动开发服务器

```bash
pnpm dev
```

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 3. 构建生产版本

```bash
pnpm build
```

### 4. 启动生产服务器

```bash
pnpm start
```

## 项目特色

### 🤖 AI + 前端工程实践
- Milvus 向量知识库平台
- AI 代码审查系统
- Dify 工作流自动化
- MCP Server 开发

### 🎯 现代化技术栈
- React 19 + Vue 3.4 双栈
- Next.js 14 App Router
- Rspack 构建优化
- TypeScript 全栈开发

### 📊 性能与质量
- 构建工具迁移（10× 启动速度提升）
- 智能化工作流（60% 效率提升）
- 全栈可观测性实践

## 内容管理

### 添加新项目

1. 在 `content/projects/` 目录下创建新的 `.mdx` 文件
2. 参考现有项目的 front matter 格式：

```mdx
---
title: 项目标题
date: 2024-01
tags: [Next.js, TypeScript, AI]
cover: /assets/project-cover.png
summary: 项目简短描述
bullets:
  - 核心特性1
  - 核心特性2
  - 核心成果
---

## 项目概述

详细的项目介绍...
```

### 更新个人信息

编辑 `content/about.mdx` 文件来更新关于页面的内容。

### 静态资源

将项目截图、流程图等资源放在 `public/assets/` 目录下：

- `*-cover.png` - 项目封面图
- `*-diagram.svg` - 流程图和架构图  
- `*-sequence.png` - 序列图

## 部署

### Vercel 部署（推荐）

1. 推送代码到 GitHub
2. 在 Vercel 导入项目
3. 自动构建和部署

### Netlify 部署

1. 推送代码到 GitHub
2. 在 Netlify 导入项目
3. 构建命令: `pnpm build`
4. 发布目录: `.next`

## 代码规范

- **ESLint**: 代码检查和最佳实践
- **Prettier**: 代码格式化
- **TypeScript**: 类型安全
- **Husky + lint-staged**: Git hooks

```bash
# 代码检查
pnpm lint

# 代码格式化  
pnpm format

# 修复可自动修复的问题
pnpm lint:fix
```

## 特性亮点

### ✅ 技术特性
- 完全静态生成 (SSG)
- SEO 优化和元数据管理
- 响应式设计
- MDX 内容管理系统
- 类型安全的 TypeScript

### ✅ 内容特色
- AI + 前端工程案例展示
- 企业级项目经验分享
- 技术架构和解决方案
- 量化的业务价值展示

### ✅ 开发体验
- 现代化开发工具链
- 热重载和快速构建
- 代码质量保证
- 组件化和可维护性

## 联系方式

- **GitHub**: [https://github.com/corgii-123](https://github.com/corgii-123)
- **X (Twitter)**: [https://x.com/Corgii_123](https://x.com/Corgii_123)
- **Email**: [corgii123mail@gmail.com](mailto:corgii123mail@gmail.com)

---

> 💡 这个网站不仅是个人作品集，更是 AI + 前端工程实践的展示平台。通过技术手段提升效率，创造实际价值。 
