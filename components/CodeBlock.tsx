import { MermaidDiagram } from './MermaidDiagram'

interface CodeBlockProps {
  children: string
  className?: string
}

export function CodeBlock({ children, className = '' }: CodeBlockProps) {
  // 从 className 中提取语言信息，例如 "language-mermaid"
  const language = className.replace('language-', '')

  if (language === 'mermaid') {
    return <MermaidDiagram chart={children} />
  }

  // 对于其他语言，返回普通的代码块
  return (
    <pre className={className}>
      <code>{children}</code>
    </pre>
  )
}
