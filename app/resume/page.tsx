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
import { PdfDownload } from '@/components/PdfDownload'
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
      <div className="container mx-auto max-w-6xl px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
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

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            个人简历
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            下载我的最新简历或查看在线版本
          </p>
          <div className="flex items-center justify-center gap-4">
            <PdfDownload
              targetId="resume-content"
              fileName="石杰洋-前端开发工程师-简历.pdf"
            >
              下载 PDF 版本
            </PdfDownload>
            <Button variant="outline" size="lg" asChild>
              <Link href="/">返回首页</Link>
            </Button>
          </div>
        </div>

        <Card className="mx-auto max-w-4xl" id="resume-content">
          <CardContent className="p-8">
            <div className="prose prose-lg prose-neutral max-w-none dark:prose-invert">
              <Suspense fallback={<div>加载中...</div>}>
                <MDXRemote source={content} components={components} />
              </Suspense>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  } catch (error) {
    return (
      <div className="container mx-auto max-w-6xl px-4 py-8">
        <div className="text-center text-muted-foreground">
          简历内容正在准备中...
        </div>
      </div>
    )
  }
}
