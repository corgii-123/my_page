'use client'

import { Button } from '@/components/ui/button'

interface ResumeDownloadProps {
  children: React.ReactNode
  className?: string
}

export function ResumeDownload({ children, className }: ResumeDownloadProps) {
  const handleDownload = async () => {
    try {
      // 使用 fetch 获取文件 (动态处理 basePath)
      const basePath = '/my_page'
      const response = await fetch(`${basePath}/resume.pdf`)
      if (!response.ok) {
        throw new Error('文件下载失败')
      }

      // 将响应转换为 blob
      const blob = await response.blob()

      // 创建 blob URL
      const url = window.URL.createObjectURL(blob)

      // 创建下载链接
      const link = document.createElement('a')
      link.href = url
      link.download = '石杰洋-个人简历.pdf'

      // 触发下载
      document.body.appendChild(link)
      link.click()

      // 清理
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('下载失败:', error)
      alert('下载失败，请稍后重试')
    }
  }

  return (
    <Button size="lg" className={className} onClick={handleDownload}>
      {children}
    </Button>
  )
}
