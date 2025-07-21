import { getAllProjects } from '@/lib/mdx'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: '项目作品',
  description: '我的项目作品集，展示 AI + 前端工程的实践案例',
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
          项目作品
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          我的项目作品集，展示 AI + 前端工程的实践案例
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.length === 0 ? (
          <div className="col-span-full text-center text-muted-foreground py-12">
            暂无项目内容。请在 content/projects 目录下添加 .mdx 文件。
          </div>
        ) : (
          projects.map((project) => (
            <Card key={project.slug} className="shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <time>{project.date}</time>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.summary}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {project.bullets && (
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.bullets.slice(0, 2).map((bullet, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0" />
                          <span className="line-clamp-1">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
                
                <CardFooter>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-100 dark:bg-slate-700 text-xs tracking-wide px-2.5 py-0.5 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{project.tags.length - 3}
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
