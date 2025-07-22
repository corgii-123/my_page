'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidDiagramProps {
  chart: string
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      // 初始化 mermaid 配置
      mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose',
        flowchart: {
          useMaxWidth: true,
          htmlLabels: true,
          curve: 'cardinal',
        },
        sequence: {
          diagramMarginX: 50,
          diagramMarginY: 10,
          actorMargin: 50,
          width: 150,
          height: 65,
          boxMargin: 10,
          boxTextMargin: 5,
          noteMargin: 10,
          messageMargin: 35,
        },
      })

      // 渲染图表
      const renderChart = async () => {
        try {
          const { svg } = await mermaid.render(`mermaid-${Date.now()}`, chart)
          if (ref.current) {
            ref.current.innerHTML = svg
          }
        } catch (error) {
          console.error('Mermaid rendering error:', error)
          if (ref.current) {
            ref.current.innerHTML = `<pre><code>${chart}</code></pre>`
          }
        }
      }

      renderChart()
    }
  }, [chart])

  return (
    <div
      ref={ref}
      className="mermaid-diagram my-6 flex justify-center"
      style={{ minHeight: '200px' }}
    />
  )
}
