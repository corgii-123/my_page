import { getAllBlogPosts, getAllProjects } from '@/lib/mdx'

export async function GET() {
  const [blogPosts, projects] = await Promise.all([
    getAllBlogPosts(),
    getAllProjects(),
  ])

  const siteUrl = 'https://shijieyang.dev'
  const feedUrl = `${siteUrl}/api/rss`

  // 合并博客和项目，按日期排序
  const allItems = [
    ...blogPosts.map(post => ({
      ...post,
      type: 'blog' as const,
      url: `/blog/${post.slug}`,
    })),
    ...projects.map(project => ({
      ...project,
      type: 'project' as const,
      url: `/projects/${project.slug}`,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>石杰洋的技术博客</title>
    <description>AI-First Front-End Developer 的技术分享和项目展示</description>
    <link>${siteUrl}</link>
    <language>zh-cn</language>
    <managingEditor>corgii123mail@gmail.com (石杰洋)</managingEditor>
    <webMaster>corgii123mail@gmail.com (石杰洋)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${feedUrl}" rel="self" type="application/rss+xml"/>
    ${allItems
      .slice(0, 20)
      .map(
        (item) => `
    <item>
      <title><![CDATA[${item.title}]]></title>
      <description><![CDATA[${item.summary}]]></description>
      <link>${siteUrl}${item.url}</link>
      <guid>${siteUrl}${item.url}</guid>
      <pubDate>${new Date(item.date).toUTCString()}</pubDate>
      <category>${item.type === 'blog' ? '博客' : '项目'}</category>
      ${item.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('')}
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
} 
