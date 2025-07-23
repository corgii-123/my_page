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
        theme: 'base',
        themeVariables: {
          // 背景色
          background: '#ffffff',
          primaryColor: '#f8fafc',
          primaryTextColor: '#374151',
          primaryBorderColor: '#d1d5db',

          // 线条和边框
          lineColor: '#9ca3af',

          // 流程图
          mainBkg: '#f8fafc',
          secondBkg: '#f1f5f9',
          tertiaryColor: '#e2e8f0',

          // 文字颜色
          textColor: '#374151',
          fontFamily: 'ui-sans-serif, system-ui, sans-serif',

          // 节点颜色
          nodeBorder: '#d1d5db',
          clusterBkg: '#f8fafc',

          // 序列图
          actorBkg: '#f8fafc',
          actorBorder: '#d1d5db',
          actorTextColor: '#374151',
          actorLineColor: '#9ca3af',
          signalColor: '#374151',
          signalTextColor: '#ffffff',
          labelBoxBkgColor: '#f1f5f9',
          labelBoxBorderColor: '#d1d5db',
          labelTextColor: '#ffffff',
          loopTextColor: '#374151',
          noteBorderColor: '#d1d5db',
          noteBkgColor: '#fef3c7',
          noteTextColor: '#92400e',

          // 甘特图
          gridColor: '#e5e7eb',
          section0: '#f8fafc',
          section1: '#f1f5f9',
          section2: '#e2e8f0',
          section3: '#cbd5e1',

          // 饼图
          pie1: '#e2e8f0',
          pie2: '#cbd5e1',
          pie3: '#94a3b8',
          pie4: '#64748b',
          pie5: '#475569',
          pie6: '#334155',
          pie7: '#1e293b',
          pie8: '#0f172a',
          pie9: '#020617',
          pie10: '#f8fafc',
          pie11: '#f1f5f9',
          pie12: '#e2e8f0',
          pieTitleTextSize: '16px',
          pieTitleTextColor: '#374151',
          pieSectionTextSize: '14px',
          pieSectionTextColor: '#374151',
          pieLegendTextSize: '14px',
          pieLegendTextColor: '#374151',
        },
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
