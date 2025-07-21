import Link from 'next/link'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">石杰洋</h3>
            <p className="text-sm text-muted-foreground">
              AI-First Front-End Developer
            </p>
            <p className="text-sm text-muted-foreground">专注知识库 / DevEx</p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">导航</h4>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                首页
              </Link>
              <Link
                href="/projects"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                项目作品
              </Link>
              <Link
                href="/blog"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                博客
              </Link>
              <Link
                href="/about"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                关于我
              </Link>
              <Link
                href="/resume"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                简历
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">技术栈</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">React / Vue</p>
              <p className="text-sm text-muted-foreground">Next.js / Nuxt</p>
              <p className="text-sm text-muted-foreground">AI / LangChain</p>
              <p className="text-sm text-muted-foreground">Milvus / RAG</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">联系方式</h4>
            <div className="space-y-2">
              <Link
                href="https://github.com/corgii-123"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub
              </Link>
              <Link
                href="https://x.com/Corgii_123"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                X (Twitter)
              </Link>
              <Link
                href="mailto:corgii123mail@gmail.com"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Email
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 石杰洋. All rights reserved.
          </p>
          <div className="mt-4 flex items-center space-x-4 md:mt-0">
            <Link
              href="/api/rss"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              RSS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
