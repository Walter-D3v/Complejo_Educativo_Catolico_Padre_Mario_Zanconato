import Link from "next/link"
import Image from "next/image"
import { getPostsByCategory } from "@/lib/notion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, GraduationCap, BookOpen, Award } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const revalidate = 60

export default async function AcademicsPage() {
  const posts = await getPostsByCategory("Academica")

  return (
    <div className="min-h-screen bg-institutional-cream">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 animate-bounce-slow">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Oferta Académica</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Formación integral con fortaleza espiritual para responder a las exigencias de un nuevo siglo
            </p>
          </div>
        </div>
      </section>

      {/* Academic Levels */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <Card className="border-2 hover:border-primary/50 transition-all duration-300 card-hover-effect animate-fade-in-up">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Parvularia</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">4, 5 y 6 años</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Turno matutino y vespertino</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Enseñanza de inglés desde temprana edad</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className="border-2 hover:border-primary/50 transition-all duration-300 card-hover-effect animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Educación Básica</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">1° a 9° grado</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Primer Ciclo (1° a 3° grado)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Segundo Ciclo (4° a 6° grado)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Tercer Ciclo (7° a 9° grado)</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card
            className="border-2 hover:border-primary/50 transition-all duration-300 card-hover-effect animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Bachillerato</h3>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">Modalidades especializadas</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Bachillerato General con Diplomados</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Bachillerato Técnico Administrativo Contable</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Diplomas Section */}
        <div
          className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 mb-16 animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Diplomados Disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="animate-slide-up" style={{ animationDelay: "400ms" }}>
              <h3 className="text-xl font-semibold mb-4 text-primary">Bachillerato General</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-background/50 p-3 rounded-lg hover:bg-background transition-colors duration-300">
                  <Award className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Inglés para Call Center</p>
                    <p className="text-sm text-muted-foreground">Comunicación profesional en inglés</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-background/50 p-3 rounded-lg hover:bg-background transition-colors duration-300">
                  <Award className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Turismo Gastronómico</p>
                    <p className="text-sm text-muted-foreground">Industria turística y culinaria</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-background/50 p-3 rounded-lg hover:bg-background transition-colors duration-300">
                  <Award className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Electrónica Digital</p>
                    <p className="text-sm text-muted-foreground">Tecnología y sistemas electrónicos</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-background/50 p-3 rounded-lg hover:bg-background transition-colors duration-300">
                  <Award className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Diseño Gráfico Digital</p>
                    <p className="text-sm text-muted-foreground">Creatividad y herramientas digitales</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-background/50 p-3 rounded-lg hover:bg-background transition-colors duration-300">
                  <Award className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Salud</p>
                    <p className="text-sm text-muted-foreground">Ciencias de la salud</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: "500ms" }}>
              <h3 className="text-xl font-semibold mb-4 text-primary">Bachillerato Técnico</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-background/50 p-3 rounded-lg hover:bg-background transition-colors duration-300">
                  <Award className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium">Software Contable</p>
                    <p className="text-sm text-muted-foreground">Herramientas contables profesionales</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        {posts.length > 0 && (
          <>
            <h2 className="text-3xl font-bold text-foreground mb-8 animate-fade-in">Artículos Académicos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, index) => (
                <Link key={post.id} href={`/post/${post.slug}`}>
                  <Card
                    className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden card-hover-effect animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {post.featuredImage && (
                      <div className="relative w-full h-48 bg-muted overflow-hidden">
                        <Image
                          src={post.featuredImage || "/placeholder.svg"}
                          alt={post.title}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
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
                    <CardFooter className="flex items-center justify-end text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.publishedDate).toLocaleDateString("es-ES")}</span>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          </>
        )}
      </section>

      <Footer />
    </div>
  )
}
