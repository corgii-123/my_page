import { getResumeContent } from '@/lib/mdx'
import { MDXRemote } from 'next-mdx-remote/rsc'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export const metadata: Metadata = {
  title: '个人简历',
  description: '石杰洋的个人简历 - AI-First Front-End Developer',
}

export default async function ResumePage() {
  const resumeContent = await getResumeContent()

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      {/* Breadcrumb */}
      <Breadcrumb className="mb-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">首页</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>个人简历</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          个人简历
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          下载我的最新简历或查看在线版本
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="/resume.pdf" download="石杰洋-前端开发工程师-简历.pdf">
              下载 PDF 版本
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/">返回首页</Link>
          </Button>
        </div>
      </div>

      <Card className="mx-auto max-w-4xl">
        <CardContent className="p-8">
          {resumeContent ? (
            <div className="prose prose-lg prose-neutral max-w-none dark:prose-invert">
              <MDXRemote {...JSON.parse(resumeContent)} />
            </div>
          ) : (
            <div className="py-12 text-center text-muted-foreground">
              简历内容正在准备中...
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
