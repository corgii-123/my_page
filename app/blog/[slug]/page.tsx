import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { CodeBlock } from '@/components/CodeBlock'
import { MermaidDiagram } from '@/components/MermaidDiagram'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface Props {
  params: { slug: string }
}

interface BlogPostMeta {
  title: string
  date: string
  tags: string[]
  summary: string
}

// MDX 自定义组件
const components = {
  code: (props: { className?: string; children?: React.ReactNode }) => {
    const language = props.className?.replace('language-', '') || ''
    const codeContent = String(props.children || '')

    // 如果是 mermaid 代码块，使用 MermaidDiagram 组件
    if (language === 'mermaid') {
      return <MermaidDiagram chart={codeContent} />
    }

    return <CodeBlock {...props}>{codeContent}</CodeBlock>
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const filePath = path.join(
      process.cwd(),
      'content',
      'blog',
      `${params.slug}.mdx`
    )
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      title: data.title || '文章未找到',
      description: data.summary || '',
    }
  } catch (error) {
    return {
      title: '文章未找到',
    }
  }
}

export async function generateStaticParams() {
  try {
    const blogDirectory = path.join(process.cwd(), 'content', 'blog')
    const filenames = fs.readdirSync(blogDirectory)
    return filenames
      .filter((filename) => filename.endsWith('.mdx'))
      .map((filename) => ({
        slug: filename.replace('.mdx', ''),
      }))
  } catch (error) {
    return []
  }
}

export default async function BlogPostPage({ params }: Props) {
  try {
    const filePath = path.join(
      process.cwd(),
      'content',
      'blog',
      `${params.slug}.mdx`
    )
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const post: BlogPostMeta = data as BlogPostMeta

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
              <BreadcrumbLink href="/blog">博客</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <article>
          <header className="mb-8">
            <div className="mb-4 flex items-center gap-x-4 text-sm text-muted-foreground">
              <time>{post.date}</time>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs tracking-wide dark:bg-slate-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <p className="text-xl leading-8 text-muted-foreground">
              {post.summary}
            </p>
          </header>

          <Separator className="my-8" />

          <div className="prose prose-lg prose-neutral max-w-none dark:prose-invert">
            <Suspense fallback={<div>加载中...</div>}>
              <MDXRemote source={content} components={components} />
            </Suspense>
          </div>

          <Separator className="my-12" />

          <div className="flex items-center justify-between">
            <Button variant="outline" asChild>
              <Link href="/blog" className="inline-flex items-center">
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
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                返回博客列表
              </Link>
            </Button>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://x.com/Corgii_123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  分享到 X
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="mailto:corgii123mail@gmail.com">讨论文章</Link>
              </Button>
            </div>
          </div>
        </article>
      </div>
    )
  } catch (error) {
    notFound()
  }
}
