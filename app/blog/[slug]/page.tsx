import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/mdx'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Breadcrumb,
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
  const post = await getBlogPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: '文章未找到',
    }
  }

  return {
    title: post.title,
    description: post.summary,
  }
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const mdxSource = post.content ? JSON.parse(post.content) : null

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
          <div className="flex items-center gap-x-4 text-sm text-muted-foreground mb-4">
            <time>{post.date}</time>
            <div className="flex gap-2 flex-wrap">
              {post.tags.map((tag) => (
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
            {post.title}
          </h1>
          <p className="text-xl leading-8 text-muted-foreground">
            {post.summary}
          </p>
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
            <Link href="/blog" className="inline-flex items-center">
              <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回博客列表
            </Link>
          </Button>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="https://x.com/Corgii_123" target="_blank" rel="noopener noreferrer">
                分享到 X
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="mailto:corgii123mail@gmail.com">
                讨论文章
              </Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  )
} 
