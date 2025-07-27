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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: '项目作品',
  description: '我的项目作品集，展示 AI + 前端工程的实践案例',
}

export default async function ProjectsPage() {
  const projects = await getAllProjects()

  return (
    <div className="min-h-screen">
      {/* 背景装饰 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/50 to-pink-50/50 dark:from-slate-900 dark:via-purple-900/10 dark:to-slate-800"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* 面包屑导航 */}
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">首页</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>项目作品</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* 页面标题区域 */}
        <div className="mb-16 text-center">
          <div className="relative inline-block">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-gradient">项目作品</span>
            </h1>
            <div className="absolute -bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            展示{' '}
            <span className="text-gradient font-semibold">AI + 前端工程</span>{' '}
            的深度融合实践案例，
            <br className="hidden sm:block" />
            从智能知识库到自动化工具链，每个项目都体现了技术创新与实用价值的完美结合
          </p>

          {/* 统计信息 */}
          <div className="mt-12 flex justify-center">
            <div className="glass rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-8">
                <div className="text-center">
                  <div className="text-gradient text-2xl font-bold">
                    {projects.length}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    个核心项目
                  </div>
                </div>
                <div className="h-8 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-gradient text-2xl font-bold">3+</div>
                  <div className="text-sm text-muted-foreground">年经验</div>
                </div>
                <div className="h-8 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-gradient text-2xl font-bold">AI</div>
                  <div className="text-sm text-muted-foreground">驱动</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 项目网格 */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.length === 0 ? (
            <div className="col-span-full py-20">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                    <svg
                      className="h-10 w-10 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 11H5m14-4l-3 3.5c-1 1.12-2 2.5-3 3.5m3-7h-3m3 7v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m14 0v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="mb-2 text-lg font-semibold">暂无项目内容</h3>
                <p className="text-muted-foreground">
                  请在 content/projects 目录下添加 .mdx 文件。
                </p>
              </div>
            </div>
          ) : (
            projects.map((project, index) => (
              <Card
                key={project.slug}
                className="card-hover glass group relative h-full overflow-hidden border-0"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="block h-full"
                >
                  {/* 封面图片区域 */}
                  {project.cover && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={getImagePath(project.cover)}
                        alt={project.title}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>

                      {/* 悬浮标签 */}
                      <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
                          查看详情
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex h-full flex-col p-6">
                    <CardHeader className="p-0 pb-4">
                      <div className="mb-3 flex items-center gap-2">
                        <time className="rounded-full bg-secondary/50 px-2 py-1 text-xs text-muted-foreground">
                          {project.date}
                        </time>
                        <div className="flex-1"></div>
                        <div className="h-2 w-2 animate-pulse rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                      </div>
                      <CardTitle className="text-xl transition-all duration-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="line-clamp-2 text-sm leading-relaxed">
                        {project.summary}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 p-0">
                      {project.bullets && (
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          {project.bullets
                            .slice(0, 2)
                            .map((bullet, bulletIndex) => (
                              <li
                                key={bulletIndex}
                                className="flex items-start gap-3"
                              >
                                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                <span className="line-clamp-1 transition-colors group-hover:text-foreground">
                                  {bullet}
                                </span>
                              </li>
                            ))}
                        </ul>
                      )}
                    </CardContent>

                    <CardFooter className="p-0 pt-6">
                      <div className="flex w-full flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 group-hover:scale-105"
                            style={{
                              backgroundColor: `hsl(${(tagIndex * 120 + 260) % 360}, 70%, 95%)`,
                              color: `hsl(${(tagIndex * 120 + 260) % 360}, 70%, 40%)`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>
                    </CardFooter>
                  </div>
                </Link>
              </Card>
            ))
          )}
        </div>

        {/* 底部 CTA */}
        {projects.length > 0 && (
          <div className="mt-20 text-center">
            <div className="glass inline-block rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-gradient mb-4 text-2xl font-bold">
                喜欢这些项目？
              </h3>
              <p className="mb-6 text-muted-foreground">
                如果你对这些项目感兴趣，或者想要了解更多技术细节，欢迎与我交流！
              </p>
              <Link
                href="mailto:corgii123mail@gmail.com"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                联系讨论
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
