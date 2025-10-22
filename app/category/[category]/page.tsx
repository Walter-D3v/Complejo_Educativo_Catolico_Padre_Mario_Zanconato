import Link from "next/link"
import Image from "next/image"
import { getPostsByCategory, getAllCategories } from "@/lib/notion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, User, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const revalidate = 60

export async function generateStaticParams() {
  const categories = await getAllCategories()
  return categories.map((category) => ({
    category: category.toLowerCase(),
  }))
}

export default async function CategoryPage({ params }: { params: { category: string } }) {
  const categoryName = params.category.charAt(0).toUpperCase() + params.category.slice(1)
  const posts = await getPostsByCategory(categoryName)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
          </Button>
        </Link>
      </div>

      {/* Category Header */}
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-foreground mb-2">Categoría: {categoryName}</h1>
        <p className="text-muted-foreground">
          {posts.length} {posts.length === 1 ? "artículo" : "artículos"}
        </p>
      </section>

      {/* Posts Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.id} href={`/post/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                {post.featuredImage && (
                  <div className="relative w-full h-48 bg-muted">
                    <Image
                      src={post.featuredImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <CardHeader>
                  <div className="flex gap-2 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                  </div>
                  <h2 className="text-xl font-semibold text-foreground line-clamp-2 text-balance">{post.title}</h2>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.publishedDate).toLocaleDateString("es-ES")}</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
