'use client'

import { useRef } from 'react'
import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import { Button } from '@/components/ui/button'

interface PdfDownloadProps {
  targetId: string
  fileName?: string
  children: React.ReactNode
}

export function PdfDownload({
  targetId,
  fileName = 'resume.pdf',
  children,
}: PdfDownloadProps) {
  const isGenerating = useRef(false)

  const generatePDF = async () => {
    if (isGenerating.current) return
    isGenerating.current = true

    try {
      const element = document.getElementById(targetId)
      if (!element) {
        console.error(`Element with id "${targetId}" not found`)
        return
      }

      // 临时修改样式以适合 PDF
      const originalStyle = element.style.cssText
      element.style.cssText = `
        ${originalStyle}
        background: white !important;
        color: black !important;
        width: 210mm !important;
        min-height: auto !important;
        padding: 20mm !important;
        box-shadow: none !important;
        border: none !important;
        border-radius: 0 !important;
      `

      // 等待字体和样式加载完成
      await new Promise((resolve) => setTimeout(resolve, 500))

      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false,
        width: 794, // A4 width in pixels at 96 DPI
        height: undefined,
        windowWidth: 794,
        windowHeight: 1123,
      })

      // 恢复原始样式
      element.style.cssText = originalStyle

      const imgData = canvas.toDataURL('image/png')
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      })

      const imgWidth = 210 // A4 width in mm
      const pageHeight = 297 // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width
      let heightLeft = imgHeight

      let position = 0

      // 添加第一页
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
      heightLeft -= pageHeight

      // 如果内容超过一页，添加更多页面
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight
        pdf.addPage()
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight)
        heightLeft -= pageHeight
      }

      pdf.save(fileName)
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('生成 PDF 时出现错误，请稍后重试')
    } finally {
      isGenerating.current = false
    }
  }

  return (
    <Button size="lg" onClick={generatePDF}>
      {children}
    </Button>
  )
}
