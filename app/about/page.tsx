import { getAboutContent } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
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

export default async function AboutPage() {
  const aboutContent = await getAboutContent()

  if (!aboutContent) {
    return (
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <div className="text-center text-muted-foreground">
          关于页面内容正在准备中...
        </div>
      </div>
    )
  }

  const mdxSource = JSON.parse(aboutContent)

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
        <MDXRemote {...mdxSource} />
      </article>
    </div>
  )
}
