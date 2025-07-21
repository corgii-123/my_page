import { getAllBlogPosts } from '@/lib/mdx'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export const metadata: Metadata = {
  title: '技术博客',
  description: '分享 AI + 前端工程的探索和实践经验',
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          技术博客
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          分享 AI + 前端工程的探索和实践经验
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {posts.length === 0 ? (
          <div className="col-span-full text-center text-muted-foreground py-12">
            暂无博客内容。请在 content/blog 目录下添加 .mdx 文件。
          </div>
        ) : (
          posts.map((post) => (
            <Card key={post.slug} className="shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <time>{post.date}</time>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
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
                        className="rounded-full bg-slate-100 dark:bg-slate-700 text-xs tracking-wide px-2.5 py-0.5 text-muted-foreground"
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
