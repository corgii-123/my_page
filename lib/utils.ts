import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * 处理图片路径，确保在 GitHub Pages 子路径环境下正确加载
 * @param src 原始图片路径
 * @returns 处理后的图片路径
 */
export function getImagePath(src: string): string {
  // 如果已经包含 basePath 或者是外部链接，直接返回
  if (
    src.startsWith('/my_page') ||
    src.startsWith('http') ||
    src.startsWith('//')
  ) {
    return src
  }

  // 如果是以 / 开头的绝对路径，添加 basePath
  if (src.startsWith('/')) {
    return `/my_page${src}`
  }

  // 相对路径直接返回
  return src
}
