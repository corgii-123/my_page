import type { Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

interface BlogPost {
  slug: string
  title: string
  date: string
  tags: string[]
  summary: string
}

async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const blogDirectory = path.join(process.cwd(), 'content', 'blog')

    if (!fs.existsSync(blogDirectory)) {
      return []
    }

    const filenames = fs.readdirSync(blogDirectory)
    const posts: BlogPost[] = []

    for (const filename of filenames) {
      if (filename.endsWith('.mdx')) {
        const slug = filename.replace('.mdx', '')
        const filePath = path.join(blogDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data } = matter(fileContents)

        posts.push({
          slug,
          title: data.title || '',
          date: data.date || '',
          tags: data.tags || [],
          summary: data.summary || '',
        })
      }
    }

    // Sort by date (newest first)
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    console.error('Error loading blog posts:', error)
    return []
  }
}

export const metadata: Metadata = {
  title: '技术博客',
  description: '分享 AI + 前端工程的探索和实践经验',
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          技术博客
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          分享 AI + 前端工程的探索和实践经验
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.length === 0 ? (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            暂无博客内容。请在 content/blog 目录下添加 .mdx 文件。
          </div>
        ) : (
          posts.map((post) => (
            <Card
              key={post.slug}
              className="group shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <time>{post.date}</time>
                  </div>
                  <CardTitle className="transition-colors group-hover:text-primary">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.summary}
                  </CardDescription>
                </CardHeader>

                <CardFooter>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs tracking-wide text-muted-foreground dark:bg-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{post.tags.length - 3}
                      </span>
                    )}
                  </div>
                </CardFooter>
              </Link>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
