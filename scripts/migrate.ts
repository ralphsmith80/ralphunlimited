/**
 * WordPress to Astro Migration Script
 * Fetches posts, categories, and comments from WordPress REST API
 * Converts HTML to Markdown and generates Astro-compatible content
 */

import TurndownService from 'turndown'
import * as fs from 'fs'
import * as path from 'path'
import * as yaml from 'yaml'

const WP_BASE_URL = 'https://ralphunlimited.com'
const WP_API = `${WP_BASE_URL}/wp-json/wp/v2`

const OUTPUT_DIR = path.join(import.meta.dir, '..', 'src', 'content', 'blog')
const COMMENTS_DIR = path.join(import.meta.dir, '..', 'src', 'data', 'comments')
const IMAGES_DIR = path.join(import.meta.dir, '..', 'public', 'images')

// Initialize Turndown for HTML to Markdown conversion
const turndown = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced',
  bulletListMarker: '-',
})

// Keep iframes (for embedded games, videos)
turndown.addRule('iframe', {
  filter: 'iframe',
  replacement: (content, node) => {
    const el = node as HTMLIFrameElement
    return `\n\n<iframe src="${el.src}" width="${el.width || '100%'}" height="${el.height || '400'}" frameborder="0"></iframe>\n\n`
  }
})

interface WPPost {
  id: number
  date: string
  slug: string
  title: { rendered: string }
  content: { rendered: string }
  excerpt: { rendered: string }
  categories: number[]
  featured_media: number
}

interface WPCategory {
  id: number
  name: string
  slug: string
  count: number
}

interface WPComment {
  id: number
  post: number
  author_name: string
  date: string
  content: { rendered: string }
  parent: number
}

interface WPMedia {
  id: number
  source_url: string
  title: { rendered: string }
}

async function fetchJSON<T>(url: string): Promise<T> {
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
  }
  return response.json()
}

async function fetchAllPaginated<T>(baseUrl: string): Promise<T[]> {
  const results: T[] = []
  let page = 1
  let hasMore = true

  while (hasMore) {
    const url = `${baseUrl}${baseUrl.includes('?') ? '&' : '?'}per_page=100&page=${page}`
    const response = await fetch(url)
    
    if (!response.ok) {
      if (response.status === 400) {
        // No more pages
        hasMore = false
        break
      }
      throw new Error(`Failed to fetch ${url}: ${response.statusText}`)
    }

    const data = await response.json() as T[]
    results.push(...data)

    const totalPages = parseInt(response.headers.get('X-WP-TotalPages') || '1')
    hasMore = page < totalPages
    page++
  }

  return results
}

async function downloadImage(url: string, filename: string): Promise<string> {
  const response = await fetch(url)
  if (!response.ok) {
    console.warn(`Failed to download image: ${url}`)
    return url // Return original URL as fallback
  }

  const buffer = await response.arrayBuffer()
  const ext = path.extname(new URL(url).pathname) || '.jpg'
  const safeName = filename.replace(/[^a-z0-9-]/gi, '-').toLowerCase() + ext
  const outputPath = path.join(IMAGES_DIR, safeName)

  fs.writeFileSync(outputPath, Buffer.from(buffer))
  return `/images/${safeName}`
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/&[^;]+;/g, ' ').trim()
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
}

async function migrate() {
  console.log('🚀 Starting WordPress to Astro migration...\n')

  // Ensure directories exist
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
  fs.mkdirSync(COMMENTS_DIR, { recursive: true })
  fs.mkdirSync(IMAGES_DIR, { recursive: true })

  // Fetch categories first to build a lookup map
  console.log('📂 Fetching categories...')
  const categories = await fetchJSON<WPCategory[]>(`${WP_API}/categories`)
  const categoryMap = new Map(categories.map(c => [c.id, c]))
  console.log(`   Found ${categories.length} categories\n`)

  // Fetch all posts
  console.log('📝 Fetching posts...')
  const posts = await fetchAllPaginated<WPPost>(`${WP_API}/posts`)
  console.log(`   Found ${posts.length} posts\n`)

  // Fetch all comments
  console.log('💬 Fetching comments...')
  const comments = await fetchAllPaginated<WPComment>(`${WP_API}/comments`)
  console.log(`   Found ${comments.length} comments\n`)

  // Group comments by post
  const commentsByPost = new Map<number, WPComment[]>()
  for (const comment of comments) {
    if (!commentsByPost.has(comment.post)) {
      commentsByPost.set(comment.post, [])
    }
    commentsByPost.get(comment.post)!.push(comment)
  }

  // Process each post
  console.log('🔄 Processing posts...\n')
  for (const post of posts) {
    const title = decodeHtmlEntities(post.title.rendered)
    const date = new Date(post.date)
    const postCategories = post.categories
      .map(id => categoryMap.get(id)?.slug)
      .filter(Boolean) as string[]

    // Convert content to Markdown
    let content = post.content.rendered

    // Fix WordPress-specific content
    content = content
      // Fix internal links to preserve slugs
      .replace(/https:\/\/ralphunlimited\.com\/([^/"]+)\//g, '/$1/')
      // Fix image URLs to local paths
      .replace(/https:\/\/ralphunlimited\.com\/wp-content\/uploads\//g, '/images/uploads/')
      // Fix retrocruiser game link
      .replace(/https:\/\/ralphunlimited\.com\/wp-content\/uploads\/retrocruiser/g, '/games/retro-cruiser')

    const markdown = turndown.turndown(content)

    // Build frontmatter
    const frontmatter = {
      title,
      description: stripHtml(decodeHtmlEntities(post.excerpt.rendered)).slice(0, 160),
      pubDate: date.toISOString(),
      slug: post.slug,
      categories: postCategories,
    }

    // Generate markdown file
    const fileContent = `---
${yaml.stringify(frontmatter).trim()}
---

${markdown}
`

    const filename = `${post.slug}.md`
    fs.writeFileSync(path.join(OUTPUT_DIR, filename), fileContent)
    console.log(`   ✅ ${title}`)

    // Export comments for this post
    const postComments = commentsByPost.get(post.id) || []
    if (postComments.length > 0) {
      const commentsData = postComments.map(c => ({
        id: c.id,
        author: c.author_name,
        date: c.date,
        content: stripHtml(c.content.rendered),
        parent: c.parent || null,
      }))

      fs.writeFileSync(
        path.join(COMMENTS_DIR, `${post.slug}.yml`),
        yaml.stringify(commentsData)
      )
      console.log(`      💬 ${postComments.length} comments`)
    }
  }

  // Generate categories data file
  const categoriesData = categories
    .filter(c => c.count > 0)
    .map(c => ({
      name: c.name,
      slug: c.slug,
      count: c.count,
    }))

  fs.mkdirSync(path.join(import.meta.dir, '..', 'src', 'data'), { recursive: true })
  fs.writeFileSync(
    path.join(import.meta.dir, '..', 'src', 'data', 'categories.yml'),
    yaml.stringify(categoriesData)
  )

  console.log('\n✨ Migration complete!')
  console.log(`   📝 ${posts.length} posts migrated`)
  console.log(`   💬 ${comments.length} comments exported`)
  console.log(`   📂 ${categories.filter(c => c.count > 0).length} categories`)
}

migrate().catch(console.error)
