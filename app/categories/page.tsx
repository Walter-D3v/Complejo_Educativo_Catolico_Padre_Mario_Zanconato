import Link from "next/link"
import { getAllCategories, getPostsByCategory } from "@/lib/notion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const revalidate = 60

export default async function CategoriesPage() {
  const categories = await getAllCategories()

  const categoriesWithCount = await Promise.all(
    categories.map(async (category) => {
      const posts = await getPostsByCategory(category)
      return {
        name: category,
        count: posts.length,
      }
    }),
  )

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

      {/* Categories */}
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">Todas las Categorías</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoriesWithCount.map((category) => (
            <Link key={category.name} href={`/category/${category.name.toLowerCase()}`}>
              <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-2xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {category.count} {category.count === 1 ? "artículo" : "artículos"}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
