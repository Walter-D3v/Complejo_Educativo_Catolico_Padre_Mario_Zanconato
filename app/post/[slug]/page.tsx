import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { getPostBySlug, getPublishedPosts } from "@/lib/notion"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import ReactMarkdown from "react-markdown"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const revalidate = 60

export async function generateStaticParams() {
  const posts = await getPublishedPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado",
    }
  }

  return {
    title: post.title,
    description: post.content?.substring(0, 160) || `Artículo sobre ${post.category} - ${post.title}`,
    keywords: [
      post.title,
      post.category,
      ...post.tags,
      "Complejo Educativo Padre Mario Zanconato",
      "educación católica",
      "San Marcos",
    ],
    authors: [{ name: "Complejo Educativo Católico Padre Mario Zanconato" }],
    openGraph: {
      title: post.title,
      description: post.content?.substring(0, 160) || `Artículo sobre ${post.category}`,
      type: "article",
      publishedTime: post.publishedDate,
      authors: ["Complejo Educativo Católico Padre Mario Zanconato"],
      images: post.featuredImage ? [{ url: post.featuredImage, width: 1200, height: 630, alt: post.title }] : [],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.content?.substring(0, 160) || `Artículo sobre ${post.category}`,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 md:px-8 pt-8 pb-4">
        <Link href="/blog">
          <Button variant="ghost" size="lg" className="hover:bg-institutional-mustard/10">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al blog
          </Button>
        </Link>
      </div>

      <article className="container mx-auto px-6 md:px-8 py-8 md:py-12 max-w-5xl">
        {/* Featured Image */}
        {post.featuredImage && (
          <div className="relative w-full h-80 md:h-[500px] mb-10 md:mb-12 rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={post.featuredImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Meta Info */}
        <div className="flex flex-wrap gap-3 mb-8">
          <Badge
            variant="outline"
            className="text-sm md:text-base px-4 py-2 border-2 border-institutional-navy text-institutional-navy font-bold"
          >
            {post.category}
          </Badge>
          {post.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-sm md:text-base px-4 py-2 bg-institutional-mustard/20 text-institutional-navy font-semibold"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-institutional-navy mb-8 md:mb-10 text-balance leading-tight">{post.title}</h1>

        {/* Date only - removed author */}
        <div className="flex items-center gap-3 mb-12 md:mb-16 pb-8 border-b-2 border-gray-200">
          <Calendar className="w-6 h-6 text-institutional-mustard" />
          <span className="text-lg md:text-xl text-gray-700 font-medium">
            {new Date(post.publishedDate).toLocaleDateString("es-ES", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>

        {/* Content with improved typography */}
        <div className="prose prose-lg md:prose-xl">
          <ReactMarkdown>{post.content || ""}</ReactMarkdown>
        </div>
      </article>

      <Footer />
    </div>
  )
}
