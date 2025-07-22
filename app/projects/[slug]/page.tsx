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
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface Props {
  params: { slug: string }
}

interface ProjectMeta {
  title: string
  date: string
  tags: string[]
  cover?: string
  summary: string
  bullets?: string[]
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const filePath = path.join(
      process.cwd(),
      'content',
      'projects',
      `${params.slug}.mdx`
    )
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data } = matter(fileContents)

    return {
      title: data.title || '项目未找到',
      description: data.summary || '',
    }
  } catch (error) {
    return {
      title: '项目未找到',
    }
  }
}

export async function generateStaticParams() {
  try {
    const projectsDirectory = path.join(process.cwd(), 'content', 'projects')
    const filenames = fs.readdirSync(projectsDirectory)
    return filenames
      .filter((filename) => filename.endsWith('.mdx'))
      .map((filename) => ({
        slug: filename.replace('.mdx', ''),
      }))
  } catch (error) {
    return []
  }
}

export default async function ProjectPage({ params }: Props) {
  try {
    const filePath = path.join(
      process.cwd(),
      'content',
      'projects',
      `${params.slug}.mdx`
    )
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const project: ProjectMeta = data as ProjectMeta

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
              <BreadcrumbLink href="/projects">项目作品</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{project.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <article>
          <header className="mb-8">
            <div className="mb-4 flex items-center gap-x-4 text-sm text-muted-foreground">
              <time>{project.date}</time>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
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
              {project.title}
            </h1>
            <p className="text-xl leading-8 text-muted-foreground">
              {project.summary}
            </p>
            {project.bullets && (
              <ul className="mt-6 space-y-2">
                {project.bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
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
              <Link href="/projects" className="inline-flex items-center">
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
                返回项目列表
              </Link>
            </Button>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://github.com/corgii-123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </Button>
              <Button size="sm" asChild>
                <Link href="mailto:corgii123mail@gmail.com">讨论项目</Link>
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
