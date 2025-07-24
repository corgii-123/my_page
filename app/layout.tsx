import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/lib/utils'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// 使用系统字体避免 Google Fonts 网络问题
const inter = {
  variable: '--font-inter',
  className: 'font-sans',
}

export const metadata: Metadata = {
  title: {
    default: '石杰洋 · AI-First Front-End Developer',
    template: '%s | 石杰洋',
  },
  description:
    'AI-First Front-End Developer，专注知识库 / DevEx。拥有 3 年教育 SaaS + AI 平台前端经验，擅长 React / Vue 双栈、Next.js 全栈与 Milvus 向量知识库集成。',
  keywords: [
    '前端开发',
    'AI开发',
    '知识库',
    'React',
    'Vue',
    'Next.js',
    'Milvus',
    'LangChain',
  ],
  authors: [{ name: '石杰洋', url: 'https://github.com/corgii-123' }],
  creator: '石杰洋',
  metadataBase: new URL('https://corgii-123.github.io/my_page'),
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://corgii-123.github.io/my_page',
    title: '石杰洋 · AI-First Front-End Developer',
    description:
      'AI-First Front-End Developer，专注知识库 / DevEx。拥有 3 年教育 SaaS + AI 平台前端经验。',
    siteName: '石杰洋的个人网站',
  },
  twitter: {
    card: 'summary_large_image',
    title: '石杰洋 · AI-First Front-End Developer',
    description: 'AI-First Front-End Developer，专注知识库 / DevEx',
    creator: '@Corgii_123',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
