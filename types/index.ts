export interface Project {
  slug: string
  title: string
  date: string
  tags: string[]
  cover?: string
  summary: string
  bullets?: string[]
  content?: string
}

export interface BlogPost {
  slug: string
  title: string
  date: string
  tags: string[]
  summary: string
  content?: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  author: {
    name: string
    email: string
    url: string
  }
}

export interface PageMeta {
  title: string
  description: string
} 
