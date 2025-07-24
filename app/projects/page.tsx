import { getAllProjects } from '@/lib/mdx'
import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: '项目作品',
  description: '我的项目作品集，展示 AI + 前端工程的实践案例',
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="container mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          项目作品
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          我的项目作品集，展示 AI + 前端工程的实践案例
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.length === 0 ? (
          <div className="col-span-full py-12 text-center text-muted-foreground">
            暂无项目内容。请在 content/projects 目录下添加 .mdx 文件。
          </div>
        ) : (
          projects.map((project) => (
            <Card
              key={project.slug}
              className="group overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Link href={`/projects/${project.slug}`} className="block h-full">
                {/* 封面图片 */}
                {project.cover && (
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={getImagePath(project.cover)}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}

                <CardHeader>
                  <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <time>{project.date}</time>
                  </div>
                  <CardTitle className="transition-colors group-hover:text-primary">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.summary}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  {project.bullets && (
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.bullets.slice(0, 2).map((bullet, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-muted-foreground" />
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
                        className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs tracking-wide text-muted-foreground dark:bg-slate-700"
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
