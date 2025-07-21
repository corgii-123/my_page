import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'
import type { Project, BlogPost } from '@/types'

const contentDirectory = path.join(process.cwd(), 'content')

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(contentDirectory, 'projects', `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: {
                className: ['anchor'],
              },
            },
          ],
        ],
      },
    })

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      tags: data.tags || [],
      cover: data.cover,
      summary: data.summary || '',
      bullets: data.bullets,
      content: JSON.stringify(mdxSource),
    }
  } catch (error) {
    console.error(`Error loading project ${slug}:`, error)
    return null
  }
}

export async function getAllProjects(): Promise<Project[]> {
  try {
    const projectsDirectory = path.join(contentDirectory, 'projects')

    if (!fs.existsSync(projectsDirectory)) {
      return []
    }

    const filenames = fs.readdirSync(projectsDirectory)
    const projects: Project[] = []

    for (const filename of filenames) {
      if (filename.endsWith('.mdx')) {
        const slug = filename.replace('.mdx', '')
        const project = await getProjectBySlug(slug)
        if (project) {
          projects.push(project)
        }
      }
    }

    // Sort by date (newest first)
    return projects.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    console.error('Error loading projects:', error)
    return []
  }
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  try {
    const filePath = path.join(contentDirectory, 'blog', `${slug}.mdx`)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'wrap',
              properties: {
                className: ['anchor'],
              },
            },
          ],
        ],
      },
    })

    return {
      slug,
      title: data.title || '',
      date: data.date || '',
      tags: data.tags || [],
      summary: data.summary || '',
      content: JSON.stringify(mdxSource),
    }
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error)
    return null
  }
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  try {
    const blogDirectory = path.join(contentDirectory, 'blog')

    if (!fs.existsSync(blogDirectory)) {
      return []
    }

    const filenames = fs.readdirSync(blogDirectory)
    const posts: BlogPost[] = []

    for (const filename of filenames) {
      if (filename.endsWith('.mdx')) {
        const slug = filename.replace('.mdx', '')
        const post = await getBlogPostBySlug(slug)
        if (post) {
          posts.push(post)
        }
      }
    }

    // Sort by date (newest first)
    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    )
  } catch (error) {
    console.error('Error loading blog posts:', error)
    return []
  }
}

export async function getAboutContent(): Promise<string | null> {
  try {
    const filePath = path.join(contentDirectory, 'about.mdx')

    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { content } = matter(fileContents)

    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    })

    return JSON.stringify(mdxSource)
  } catch (error) {
    console.error('Error loading about content:', error)
    return null
  }
}

export async function getResumeContent(): Promise<string | null> {
  try {
    const filePath = path.join(contentDirectory, 'resume.mdx')

    if (!fs.existsSync(filePath)) {
      return null
    }

    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { content } = matter(fileContents)

    const mdxSource = await serialize(content, {
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
      },
    })

    return JSON.stringify(mdxSource)
  } catch (error) {
    console.error('Error loading resume content:', error)
    return null
  }
}
