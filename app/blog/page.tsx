import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { getPublishedPosts, getAllCategories } from "@/lib/notion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, BookOpen } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const revalidate = 60

export const metadata: Metadata = {
  title: "Blog Educativo | Noticias y Recursos",
  description:
    "Artículos, noticias y recursos educativos del Complejo Educativo Católico Padre Mario Zanconato. Información sobre educación, valores, actividades y más.",
  keywords: [
    "blog educativo",
    "noticias colegio",
    "recursos educativos",
    "artículos educación",
    "Padre Mario Zanconato",
    "San Marcos",
  ],
  openGraph: {
    title: "Blog Educativo | Complejo Educativo Padre Mario Zanconato",
    description: "Artículos, noticias y recursos educativos para nuestra comunidad",
    type: "website",
  },
}

export default async function BlogPage() {
  const allPosts = await getPublishedPosts()
  const posts = allPosts.filter((post) => post.category !== "Academica")
  const categories = await getAllCategories()
  const blogCategories = categories.filter((cat) => cat !== "Academica")

  return (
    <div className="min-h-screen bg-institutional-cream">
      <Header />

      <section className="bg-gradient-to-br from-institutional-mustard/20 via-white to-institutional-navy/10 pt-32 md:pt-40 pb-16 md:pb-24 animate-fade-in">
        <div className="container mx-auto px-6 md:px-8 text-center">
          <div className="inline-block mb-6 md:mb-8 animate-bounce-slow">
            <BookOpen className="w-16 h-16 md:w-20 md:h-20 text-institutional-navy" />
          </div>
          <h1 className="mb-6 md:mb-8 text-institutional-navy text-balance animate-slide-up">Nuestro Blog</h1>
          <p className="text-gray-700 font-semibold max-w-3xl mx-auto text-pretty animate-slide-up-delay px-4">
            Artículos, noticias y recursos educativos para nuestra comunidad del Complejo Educativo Católico Padre Mario
            Zanconato
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-10 md:py-12 animate-fade-in-delay">
        <h2 className="text-institutional-navy text-center mb-8 md:mb-10">Categorías</h2>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
          {blogCategories.map((category, index) => (
            <Link
              key={category}
              href={`/category/${category.toLowerCase()}`}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-scale-in"
            >
              <Badge
                variant="secondary"
                className="cursor-pointer bg-institutional-navy text-white hover:bg-institutional-mustard hover:text-institutional-navy hover:scale-110 transition-all duration-300 px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-bold shadow-md"
              >
                {category}
              </Badge>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              href={`/post/${post.slug}`}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in-up"
            >
              <Card className="h-full hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden border-2 border-gray-200 hover:border-institutional-mustard">
                {post.featuredImage && (
                  <div className="relative w-full h-48 md:h-56 bg-muted overflow-hidden">
                    <Image
                      src={post.featuredImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                )}
                <CardHeader className="pb-4 pt-6 px-6">
                  <div className="flex gap-2 mb-4">
                    <Badge
                      variant="outline"
                      className="border-institutional-navy text-institutional-navy font-bold text-xs md:text-sm"
                    >
                      {post.category}
                    </Badge>
                  </div>
                  <h3 className="text-institutional-navy line-clamp-2 text-balance hover:text-institutional-mustard transition-colors">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="px-6 pb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs md:text-sm bg-institutional-mustard/20 text-institutional-navy font-semibold"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-2">
                  <div className="flex items-center gap-2 text-sm md:text-base text-gray-600">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-institutional-mustard" />
                    <span className="font-medium">{new Date(post.publishedDate).toLocaleDateString("es-ES")}</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-16 md:py-20 animate-fade-in">
            <p className="text-xl md:text-2xl text-gray-600">No hay artículos disponibles en este momento.</p>
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
