import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getProjectBySlug, getAllProjects } from '@/lib/mdx'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: '项目未找到',
    }
  }

  return {
    title: project.title,
    description: project.summary,
  }
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: Props) {
  const project = await getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const mdxSource = project.content ? JSON.parse(project.content) : null

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
          <div className="flex items-center gap-x-4 text-sm text-muted-foreground mb-4">
            <time>{project.date}</time>
            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-100 dark:bg-slate-700 text-xs tracking-wide px-2.5 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
            {project.title}
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            {project.summary}
          </p>
          {project.bullets && (
            <ul className="mt-6 space-y-2">
              {project.bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
        </header>
        
        <Separator className="my-8" />
        
        {mdxSource && (
          <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none">
            <MDXRemote {...mdxSource} />
          </div>
        )}
        
        <Separator className="my-12" />
        
        <div className="flex justify-between items-center">
          <Button variant="outline" asChild>
            <Link href="/projects" className="inline-flex items-center">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回项目列表
            </Link>
          </Button>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://github.com/corgii-123" target="_blank" rel="noopener noreferrer">
                GitHub
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="mailto:corgii123mail@gmail.com">
                讨论项目
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
} 
