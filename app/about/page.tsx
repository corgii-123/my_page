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
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Breadcrumb */}
        <Breadcrumb className="mb-8">
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

        <article className="prose prose-lg prose-neutral max-w-none dark:prose-invert">
          <Suspense fallback={<div>加载中...</div>}>
            <MDXRemote source={content} components={components} />
          </Suspense>
        </article>
      </div>
    )
  } catch (error) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="text-center text-muted-foreground">
          关于页面内容正在准备中...
        </div>
      </div>
    )
  }
}
