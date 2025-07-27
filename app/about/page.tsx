import { Suspense } from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { CodeBlock } from '@/components/CodeBlock'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: '关于我',
  description: 'AI-First Front-End Developer，专注知识库 / DevEx',
}

// MDX 自定义组件
const components = {
  code: ({ className, children, ...props }: any) => {
    return (
      <CodeBlock className={className} {...props}>
        {children}
      </CodeBlock>
    )
  },
}

export default async function AboutPage() {
  try {
    const filePath = path.join(process.cwd(), 'content', 'about.mdx')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { content } = matter(fileContents)

    return (
      <div className="min-h-screen">
        {/* 背景装饰 */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/30 to-pink-50/30 dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-800"></div>
          <div className="animate-blob absolute left-20 top-20 h-72 w-72 rounded-full bg-purple-300/20 opacity-70 mix-blend-multiply blur-xl filter"></div>
          <div className="animate-blob animation-delay-2000 absolute right-20 top-40 h-72 w-72 rounded-full bg-yellow-300/20 opacity-70 mix-blend-multiply blur-xl filter"></div>
          <div className="animate-blob animation-delay-4000 absolute -bottom-8 left-40 h-72 w-72 rounded-full bg-pink-300/20 opacity-70 mix-blend-multiply blur-xl filter"></div>
        </div>

        <div className="container mx-auto max-w-4xl px-4 py-8">
          {/* 面包屑导航 */}
          <Breadcrumb className="mb-8 fade-in">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">首页</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>关于我</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* 页面标题 */}
          <div className="mb-12 text-center fade-in">
            <div className="relative inline-block">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-gradient">关于我</span>
              </h1>
              <div className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>
            <p className="mt-6 text-lg text-muted-foreground">
              深入了解我的技术背景、工作经历和个人理念
            </p>
          </div>

          {/* 内容区域 */}
          <div className="glass rounded-3xl border-0 p-8 shadow-xl backdrop-blur-sm fade-in sm:p-12">
            <div className="prose prose-lg max-w-none dark:prose-invert">
              <Suspense
                fallback={
                  <div className="flex items-center justify-center py-20">
                    <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-purple-500"></div>
                  </div>
                }
              >
                <MDXRemote source={content} components={components} />
              </Suspense>
            </div>
          </div>

          {/* 联系卡片 */}
          <div className="mt-16 text-center fade-in">
            <div className="glass inline-block rounded-3xl border-0 p-8 shadow-lg backdrop-blur-sm">
              <h3 className="text-gradient mb-4 text-2xl font-bold">
                想要了解更多？
              </h3>
              <p className="mb-6 text-muted-foreground">
                欢迎通过以下方式与我联系，一起探讨技术与创新的无限可能
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="mailto:corgii123mail@gmail.com"
                  className="btn-hover glow inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  发送邮件
                </a>
                <a
                  href="https://github.com/corgii-123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-hover inline-flex items-center justify-center rounded-xl border-2 border-purple-500/20 bg-transparent px-6 py-3 text-sm font-medium transition-all duration-300 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-950/50"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  查看 GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading about page:', error)
    return (
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="text-center">
          <h1 className="text-gradient mb-4 text-3xl font-bold">关于我</h1>
          <div className="glass rounded-xl p-8 backdrop-blur-sm">
            <p className="text-muted-foreground">
              抱歉，无法加载关于页面的内容。请稍后再试。
            </p>
          </div>
        </div>
      </div>
    )
  }
}
