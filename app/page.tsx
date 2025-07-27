import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { getImagePath } from '@/lib/utils'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 动态背景 */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-800"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23a855f7%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto max-w-6xl px-4 pb-16 pt-20 sm:pb-20 sm:pt-24">
        <div className="text-center">
          {/* 个人头像区域 */}
          <div className="relative mx-auto mb-8 w-fit">
            <div className="rotate-border">
              <div className="relative overflow-hidden rounded-full bg-background p-1">
                <Image
                  src={getImagePath('/assets/profile.png')}
                  alt="石杰洋的个人照片"
                  width={200}
                  height={200}
                  className="rounded-full object-cover transition-transform duration-700 hover:scale-110"
                  priority
                />
              </div>
            </div>

            {/* 浮动装饰元素 */}
            <div className="absolute -right-4 -top-4 h-8 w-8 animate-bounce rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-80"></div>
            <div className="float absolute -bottom-2 -left-2 h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-60"></div>
          </div>

          {/* 主标题 */}
          <div className="relative">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient block animate-pulse">石杰洋</span>
              <span className="typewriter mt-2 block text-2xl font-semibold text-muted-foreground sm:text-3xl lg:text-4xl">
                AI-First Front-End Developer
              </span>
            </h1>

            {/* 装饰性光晕 */}
            <div className="absolute -top-8 left-1/2 h-32 w-32 -translate-x-1/2 transform animate-pulse rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-60 blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <p className="mt-8 text-lg font-medium leading-8 text-muted-foreground fade-in">
              专注知识库 / DevEx · 让 AI 赋能开发效率
            </p>

            <div className="prose prose-neutral mx-auto mt-6 max-w-none dark:prose-invert">
              <div className="mx-auto max-w-3xl">
                <div className="glass rounded-2xl p-6 backdrop-blur-sm">
                  <p className="mb-0 text-base leading-7 text-muted-foreground">
                    拥有{' '}
                    <span className="text-gradient font-semibold">
                      3 年教育 toC + AI 平台
                    </span>{' '}
                    前端经验。 擅长{' '}
                    <span className="font-semibold text-purple-600 dark:text-purple-400">
                      React / Vue 双栈
                    </span>
                    、
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      Next.js 全栈
                    </span>{' '}
                    与
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                      Milvus 向量知识库
                    </span>{' '}
                    集成。
                    <br />
                    热衷用工具链提升团队协作效率（
                    <span className="rounded bg-secondary px-2 py-1 font-mono text-sm">
                      Cursor
                    </span>
                    、
                    <span className="rounded bg-secondary px-2 py-1 font-mono text-sm">
                      Dify
                    </span>
                    、
                    <span className="rounded bg-secondary px-2 py-1 font-mono text-sm">
                      n8n
                    </span>
                    ）。
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-12 flex items-center justify-center gap-x-6">
              <Button
                size="lg"
                className="btn-hover gradient-primary glow text-white shadow-lg"
                asChild
              >
                <Link href="/projects">
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14-4l-3 3.5c-1 1.12-2 2.5-3 3.5m3-7h-3m3 7v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4m14 0v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4"
                    />
                  </svg>
                  查看项目作品
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-hover border-2 hover:border-purple-500 hover:text-purple-600 dark:hover:text-purple-400"
                asChild
              >
                <Link href="/about">
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  了解更多
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-12 flex justify-center space-x-6">
              <Link
                href="https://github.com/corgii-123"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground"
              >
                <span className="sr-only">GitHub</span>
                <div className="rounded-full bg-secondary/50 p-3 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </Link>
              <Link
                href="mailto:corgii123mail@gmail.com"
                className="group text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground"
              >
                <span className="sr-only">Email</span>
                <div className="rounded-full bg-secondary/50 p-3 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:text-white">
                  <svg
                    className="h-6 w-6"
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
                </div>
              </Link>
              <Link
                href="/resume"
                className="group text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-foreground"
              >
                <span className="sr-only">Resume</span>
                <div className="rounded-full bg-secondary/50 p-3 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-emerald-500 group-hover:to-teal-500 group-hover:text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 技能展示区域 */}
      <section className="relative py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-16 text-center">
            <div className="relative inline-block">
              <h2 className="text-gradient mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                AI + 前端工程的深度融合
              </h2>
              <div className="absolute -bottom-2 left-1/2 h-1 w-24 -translate-x-1/2 transform rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>
            <p className="mt-6 text-lg text-muted-foreground">
              将人工智能与前端开发完美结合，创造更智能的用户体验
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <Card className="card-hover glass group relative overflow-hidden border-0">
              <CardContent className="p-8">
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-3xl bg-gradient-to-br from-purple-500/20 to-transparent"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg">
                  <svg
                    className="h-7 w-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">前端架构</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  精通 React 19、Vue 3.4、Next.js 14，擅长构建高性能的现代化 Web
                  应用。熟练运用 Rspack、Vite 等新一代构建工具。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-purple-100 px-2 py-1 text-xs text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                    React 19
                  </span>
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700 dark:bg-green-900/30 dark:text-green-300">
                    Vue 3.4
                  </span>
                  <span className="rounded-full bg-blue-100 px-2 py-1 text-xs text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                    Next.js 14
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover glass group relative overflow-hidden border-0">
              <CardContent className="p-8">
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-3xl bg-gradient-to-br from-blue-500/20 to-transparent"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                  <svg
                    className="h-7 w-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">AI 集成</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  深度集成 Milvus 向量数据库，构建智能知识库系统。熟练使用
                  OpenAI、Claude 等 LLM API 开发 AI 应用。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    Milvus
                  </span>
                  <span className="rounded-full bg-orange-100 px-2 py-1 text-xs text-orange-700 dark:bg-orange-900/30 dark:text-orange-300">
                    OpenAI
                  </span>
                  <span className="rounded-full bg-pink-100 px-2 py-1 text-xs text-pink-700 dark:bg-pink-900/30 dark:text-pink-300">
                    LangChain
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover glass group relative overflow-hidden border-0 md:col-span-2 xl:col-span-1">
              <CardContent className="p-8">
                <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-3xl bg-gradient-to-br from-emerald-500/20 to-transparent"></div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg">
                  <svg
                    className="h-7 w-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-bold">DevEx 工具链</h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  精通现代开发工具链，使用 Cursor、Dify、n8n
                  等工具提升团队协作效率和开发体验。
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-violet-100 px-2 py-1 text-xs text-violet-700 dark:bg-violet-900/30 dark:text-violet-300">
                    Cursor
                  </span>
                  <span className="rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                    Dify
                  </span>
                  <span className="rounded-full bg-teal-100 px-2 py-1 text-xs text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
                    n8n
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-emerald-600/10"></div>
        <div className="container relative mx-auto max-w-4xl px-4 text-center">
          <div className="glass rounded-3xl p-12 backdrop-blur-sm">
            <h2 className="text-gradient mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              让我们一起创造未来
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              如果你对 AI + 前端的融合感兴趣，或者有任何项目合作的想法，
              <br className="hidden sm:block" />
              欢迎联系我，让我们一起探索技术的无限可能。
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="btn-hover gradient-primary glow w-full text-white shadow-lg sm:w-auto"
                asChild
              >
                <Link href="mailto:corgii123mail@gmail.com">
                  <svg
                    className="mr-2 h-5 w-5"
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
                  立即联系
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="btn-hover w-full border-2 hover:border-purple-500 sm:w-auto"
                asChild
              >
                <Link href="/resume">
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  下载简历
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
