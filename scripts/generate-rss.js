const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

function getAllBlogPosts() {
  const blogDirectory = path.join(process.cwd(), 'content', 'blog')
  try {
    const filenames = fs.readdirSync(blogDirectory)
    return filenames
      .filter((filename) => filename.endsWith('.mdx'))
      .map((filename) => {
        const filePath = path.join(blogDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug: filename.replace('.mdx', ''),
          title: data.title,
          date: data.date,
          summary: data.summary,
          tags: data.tags || [],
        }
      })
  } catch (error) {
    return []
  }
}

function getAllProjects() {
  const projectsDirectory = path.join(process.cwd(), 'content', 'projects')
  try {
    const filenames = fs.readdirSync(projectsDirectory)
    return filenames
      .filter((filename) => filename.endsWith('.mdx'))
      .map((filename) => {
        const filePath = path.join(projectsDirectory, filename)
        const fileContents = fs.readFileSync(filePath, 'utf8')
        const { data } = matter(fileContents)

        return {
          slug: filename.replace('.mdx', ''),
          title: data.title,
          date: data.date,
          summary: data.summary,
          tags: data.tags || [],
        }
      })
  } catch (error) {
    return []
  }
}

function generateRSS() {
  const blogPosts = getAllBlogPosts()
  const projects = getAllProjects()

  const siteUrl = 'https://corgii-123.github.io/my_page'
  const feedUrl = `${siteUrl}/rss.xml`

  // 合并博客和项目，按日期排序
  const allItems = [
    ...blogPosts.map((post) => ({
      ...post,
      type: 'blog',
      url: `/blog/${post.slug}`,
    })),
    ...projects.map((project) => ({
      ...project,
      type: 'project',
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
      ${item.tags.map((tag) => `<category><![CDATA[${tag}]]></category>`).join('')}
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  // 确保 public 目录存在
  const publicDir = path.join(process.cwd(), 'public')
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }

  // 写入 RSS 文件
  fs.writeFileSync(path.join(publicDir, 'rss.xml'), rssXml)
  console.log('RSS feed generated successfully!')
}

generateRSS()
