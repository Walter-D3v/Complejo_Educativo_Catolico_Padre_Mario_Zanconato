export interface BlogPost {
  id: string
  title: string
  slug: string
  status: string
  category: string
  tags: string[]
  author: string
  publishedDate: string
  featuredImage?: string
  content?: string
}

const NOTION_API_VERSION = "2022-06-28"

async function notionFetch(endpoint: string, options: RequestInit = {}) {
  try {
    const response = await fetch(`https://api.notion.com/v1${endpoint}`, {
      ...options,
      headers: {
        Authorization: `Bearer ${process.env.NOTION_TOKEN}`,
        "Notion-Version": NOTION_API_VERSION,
        "Content-Type": "application/json",
        ...options.headers,
      },
      next: { revalidate: 60 },
    })

    if (!response.ok) {
      const errorBody = await response.text()
      throw new Error(`Notion API error: ${response.status} ${response.statusText} - ${errorBody}`)
    }

    return response.json()
  } catch (error) {
    console.error("Notion API fetch error:", error)
    throw error
  }
}

async function getDatabaseSchema(databaseId: string) {
  return await notionFetch(`/databases/${databaseId}`)
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  try {
    const databaseId = process.env.NOTION_DATABASE_ID

    if (!databaseId) {
      console.error("NOTION_DATABASE_ID is not set")
      return []
    }

    const schema = await getDatabaseSchema(databaseId)

    const statusProperty = schema.properties.Status
    let filter: any

    if (statusProperty?.type === "status") {
      filter = {
        property: "Status",
        status: {
          equals: "Published",
        },
      }
    } else if (statusProperty?.type === "select") {
      filter = {
        property: "Status",
        select: {
          equals: "Published",
        },
      }
    } else {
      filter = undefined
    }

    const data = await notionFetch(`/databases/${databaseId}/query`, {
      method: "POST",
      body: JSON.stringify({
        ...(filter && { filter }),
        sorts: [
          {
            property: "Published Date",
            direction: "descending",
          },
        ],
      }),
    })

    const posts = data.results.map((page: any) => {
      const properties = page.properties

      const title = properties.Title?.title?.[0]?.plain_text || "Untitled"
      const status = properties.Status?.status?.name || properties.Status?.select?.name || "Draft"
      const category = properties.Category?.select?.name || "Uncategorized"
      const tags = properties.Tags?.multi_select?.map((tag: any) => tag.name) || []
      const author = properties.Author?.people?.[0]?.name || "Anonymous"
      const publishedDate = properties["Published Date"]?.date?.start || ""
      const featuredImage =
        properties["Featured Image"]?.url ||
        properties["Featured Image"]?.files?.[0]?.file?.url ||
        properties["Featured Image"]?.files?.[0]?.external?.url ||
        ""

      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")

      return {
        id: page.id,
        title,
        slug,
        status,
        category,
        tags,
        author,
        publishedDate,
        featuredImage,
      }
    })

    return filter ? posts : posts.filter((post: BlogPost) => post.status === "Published")
  } catch (error) {
    console.error("Error fetching published posts:", error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const posts = await getPublishedPosts()
    const post = posts.find((p) => p.slug === slug)

    if (!post) return null

    const blocksData = await notionFetch(`/blocks/${post.id}/children`)

    const content = blocksData.results
      .map((block: any) => {
        const type = block.type
        const blockContent = block[type]

        if (!blockContent) return ""

        const getText = (richTextArray: any[]) => {
          return richTextArray?.map((text: any) => text.plain_text).join("") || ""
        }

        switch (type) {
          case "paragraph":
            return getText(blockContent.rich_text)
          case "heading_1":
            return `# ${getText(blockContent.rich_text)}`
          case "heading_2":
            return `## ${getText(blockContent.rich_text)}`
          case "heading_3":
            return `### ${getText(blockContent.rich_text)}`
          case "bulleted_list_item":
            return `- ${getText(blockContent.rich_text)}`
          case "numbered_list_item":
            return `1. ${getText(blockContent.rich_text)}`
          case "code":
            return `\`\`\`${blockContent.language}\n${getText(blockContent.rich_text)}\n\`\`\``
          case "quote":
            return `> ${getText(blockContent.rich_text)}`
          default:
            return getText(blockContent.rich_text || [])
        }
      })
      .filter(Boolean)
      .join("\n\n")

    return {
      ...post,
      content,
    }
  } catch (error) {
    console.error("Error fetching post by slug:", error)
    return null
  }
}

export async function getAllCategories(): Promise<string[]> {
  try {
    const posts = await getPublishedPosts()
    const categories = [...new Set(posts.map((post) => post.category))]
    return categories.filter(Boolean)
  } catch (error) {
    console.error("Error fetching categories:", error)
    return []
  }
}

export async function getAllTags(): Promise<string[]> {
  try {
    const posts = await getPublishedPosts()
    const tags = [...new Set(posts.flatMap((post) => post.tags))]
    return tags.filter(Boolean)
  } catch (error) {
    console.error("Error fetching tags:", error)
    return []
  }
}

export async function getPostsByCategory(category: string): Promise<BlogPost[]> {
  try {
    const posts = await getPublishedPosts()
    return posts.filter((post) => post.category === category)
  } catch (error) {
    console.error("Error fetching posts by category:", error)
    return []
  }
}

export async function getPostsByTag(tag: string): Promise<BlogPost[]> {
  try {
    const posts = await getPublishedPosts()
    return posts.filter((post) => post.tags.includes(tag))
  } catch (error) {
    console.error("Error fetching posts by tag:", error)
    return []
  }
}
