import { Suspense } from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CodeBlock } from '@/components/CodeBlock'
import { ResumeDownload } from '@/components/ResumeDownload'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: '个人简历',
  description: '石杰洋的个人简历 - AI-First Front-End Developer',
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

export default async function ResumePage() {
  try {
    const filePath = path.join(process.cwd(), 'content', 'resume.mdx')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { content } = matter(fileContents)

    return (
      <div className="min-h-screen">
        {/* 背景装饰 */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-blue-50/30 to-emerald-50/30 dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-800"></div>
          <div className="absolute right-10 top-10 h-64 w-64 animate-pulse rounded-full bg-purple-300/20 opacity-70 mix-blend-multiply blur-xl filter"></div>
          <div className="animation-delay-1000 absolute bottom-10 left-10 h-64 w-64 animate-pulse rounded-full bg-blue-300/20 opacity-70 mix-blend-multiply blur-xl filter"></div>
        </div>

        <div className="container mx-auto max-w-6xl px-4 py-8">
          {/* 面包屑导航 */}
          <Breadcrumb className="mb-8 fade-in">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">首页</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>个人简历</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* 页面标题和操作 */}
          <div className="mb-12 text-center fade-in">
            <div className="relative inline-block">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-gradient">个人简历</span>
              </h1>
              <div className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>
            <p className="mb-8 mt-6 text-lg text-muted-foreground">
              AI-First Front-End Developer · 专注知识库 / DevEx
            </p>

            {/* 操作按钮组 */}
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ResumeDownload className="w-full sm:w-auto">
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
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                下载 PDF 版本
              </ResumeDownload>

              <Button
                variant="outline"
                className="btn-hover w-full border-2 hover:border-purple-500 sm:w-auto"
                asChild
              >
                <Link href="mailto:corgii123mail@gmail.com">
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
                  联系我
                </Link>
              </Button>

              <Button
                variant="outline"
                className="btn-hover w-full border-2 hover:border-blue-500 sm:w-auto"
                asChild
              >
                <Link
                  href="https://github.com/corgii-123"
                  target="_blank"
                  rel="noopener noreferrer"
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
                </Link>
              </Button>
            </div>
          </div>

          {/* 简历内容 */}
          <Card
            id="resume-content"
            className="glass mx-auto max-w-4xl overflow-hidden rounded-3xl border-0 shadow-2xl fade-in"
          >
            <CardContent className="p-0">
              <div className="p-8 sm:p-12">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <Suspense
                    fallback={
                      <div className="flex items-center justify-center py-20">
                        <div className="text-center">
                          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2 border-purple-500"></div>
                          <p className="text-muted-foreground">
                            正在加载简历内容...
                          </p>
                        </div>
                      </div>
                    }
                  >
                    <MDXRemote source={content} components={components} />
                  </Suspense>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 底部信息卡片 */}
          <div className="mt-16 grid grid-cols-1 gap-6 fade-in md:grid-cols-3">
            <Card className="glass border-0 p-6 text-center transition-transform duration-300 hover:scale-105">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-semibold">快速响应</h3>
              <p className="text-sm text-muted-foreground">
                24小时内回复邮件和消息
              </p>
            </Card>

            <Card className="glass border-0 p-6 text-center transition-transform duration-300 hover:scale-105">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-semibold">技术创新</h3>
              <p className="text-sm text-muted-foreground">
                保持对新技术的敏锐嗅觉
              </p>
            </Card>

            <Card className="glass border-0 p-6 text-center transition-transform duration-300 hover:scale-105">
              <div className="mb-4 flex justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-teal-500">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-semibold">团队协作</h3>
              <p className="text-sm text-muted-foreground">
                热爱团队合作与知识分享
              </p>
            </Card>
          </div>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error loading resume page:', error)
    return (
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="text-center">
          <h1 className="text-gradient mb-4 text-3xl font-bold">个人简历</h1>
          <Card className="glass mx-auto max-w-md rounded-xl border-0 p-8 backdrop-blur-sm">
            <p className="text-muted-foreground">
              抱歉，无法加载简历内容。请稍后再试。
            </p>
          </Card>
        </div>
      </div>
    )
  }
}
