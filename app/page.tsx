import Link from "next/link"
import Image from "next/image"
import { getPublishedPosts } from "@/lib/notion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Calendar, GraduationCap, BookOpen, Users, MapPin, Building2 } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const revalidate = 60

export default async function HomePage() {
  const allPosts = await getPublishedPosts()
  const recentPosts = allPosts.slice(0, 6)

  return (
    <div className="min-h-screen bg-institutional-cream">
      <Header />

      <section className="relative bg-gradient-to-br from-institutional-navy via-institutional-blue-light to-institutional-mustard/20 pt-24 md:pt-32 pb-20 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/school-photo.png" alt="Complejo Educativo" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-institutional-navy/80 via-institutional-navy/60 to-institutional-navy/80"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-6 md:mb-8 animate-bounce-slow">
            <div className="relative w-20 h-20 md:w-28 md:h-28 bg-white rounded-full p-2 md:p-3 shadow-2xl">
              <Image src="/logo.png" alt="Logo Zanconato" fill className="object-contain p-1 md:p-2" />
            </div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-3 md:mb-4 text-balance animate-slide-up drop-shadow-lg px-4">
            Complejo Educativo Católico
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-institutional-mustard mb-4 md:mb-6 animate-slide-up-delay drop-shadow-md px-4">
            "Padre Mario Zanconato"
          </p>
          <p className="text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto text-pretty mb-8 md:mb-10 animate-fade-in-delay leading-relaxed px-4">
            Formando jóvenes con fortaleza espiritual para responder a las exigencias de un nuevo siglo
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center animate-fade-in-delay px-4">
            <Link href="/academics">
              <Button className="w-full sm:w-auto bg-institutional-mustard hover:bg-institutional-gold text-institutional-navy font-bold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-xl">
                <GraduationCap className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Oferta Académica
              </Button>
            </Link>
            <Link href="/about">
              <Button className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-institutional-navy font-bold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-xl">
                <Users className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                Conócenos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-20 bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          <Link href="/blog" className="group animate-fade-in-up">
            <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 hover:border-institutional-mustard bg-white">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-14 h-14 md:w-16 md:h-16 bg-institutional-navy rounded-2xl flex items-center justify-center group-hover:bg-institutional-mustard transition-colors duration-300 shadow-md">
                  <BookOpen className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-institutional-navy group-hover:text-institutional-mustard transition-colors">
                  Blog
                </h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Artículos, noticias y recursos educativos
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link href="/academics" className="group animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 hover:border-institutional-mustard bg-white">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-14 h-14 md:w-16 md:h-16 bg-institutional-navy rounded-2xl flex items-center justify-center group-hover:bg-institutional-mustard transition-colors duration-300 shadow-md">
                  <GraduationCap className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-institutional-navy group-hover:text-institutional-mustard transition-colors">
                  Oferta Académica
                </h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Programas educativos desde Parvularia hasta Bachillerato
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link
            href="/about"
            className="group animate-fade-in-up sm:col-span-2 lg:col-span-1"
            style={{ animationDelay: "200ms" }}
          >
            <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-200 hover:border-institutional-mustard bg-white">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-14 h-14 md:w-16 md:h-16 bg-institutional-navy rounded-2xl flex items-center justify-center group-hover:bg-institutional-mustard transition-colors duration-300 shadow-md">
                  <Building2 className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-institutional-navy group-hover:text-institutional-mustard transition-colors">
                  Nosotros
                </h3>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Misión, visión y valores institucionales
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-20 bg-white">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-institutional-mustard rounded-2xl mb-4 shadow-lg">
            <MapPin className="w-7 h-7 md:w-8 md:h-8 text-white" />
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-institutional-navy mb-3">
            Nuestra Ubicación
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Calle 25 de abril oriente y Avenida Padre Mario Zanconato, contiguo a Parroquia San Marcos Evangelista
          </p>
          <p className="text-sm md:text-base text-institutional-mustard font-semibold mt-2">
            San Marcos, San Salvador Sur
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-fade-in-up">
          <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-institutional-mustard/20">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1360.1042632341885!2d-89.18219933798646!3d13.656612473664302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f633147bf9a5625%3A0x24225115bc974a41!2sCOMPLEJO%20EDUCATIVO%20CAT%C3%93LICO%20PADRE%20MARIO%20ZANCONATO!5e0!3m2!1sen!2ssv!4v1761231829967!5m2!1sen!2ssv" 
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Complejo Educativo Católico Padre Mario Zanconato"
            className="grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            >

            </iframe>
          </div>

          <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card className="border-2 border-institutional-navy/10 hover:border-institutional-mustard transition-colors duration-300">
              <CardContent className="p-4 md:p-6">
                <h3 className="font-bold text-institutional-navy mb-2 text-base md:text-lg">Horarios de Oficina</h3>
                <p className="text-sm md:text-base text-gray-600">
                  Lunes a Viernes: 7:00 AM - 12:00 PM y 1:00 PM - 6:00 PM
                </p>
                <p className="text-sm md:text-base text-gray-600">Sábados: 8:00 AM - 12:00 PM</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-institutional-navy/10 hover:border-institutional-mustard transition-colors duration-300">
              <CardContent className="p-4 md:p-6">
                <h3 className="font-bold text-institutional-navy mb-2 text-base md:text-lg">Contacto</h3>
                <p className="text-sm md:text-base text-gray-600">Teléfono: 2220-6170 / 7928-5341</p>
                <p className="text-sm md:text-base text-gray-600">Email: cecezanconato@gmail.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-20 bg-gray-50">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-institutional-navy text-center mb-8 md:mb-12 animate-fade-in">
          Publicaciones Recientes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {recentPosts.map((post, index) => (
            <Link
              key={post.id}
              href={`/post/${post.slug}`}
              style={{ animationDelay: `${index * 100}ms` }}
              className="animate-fade-in-up"
            >
              <Card className="h-full hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden border border-gray-200 hover:border-institutional-mustard bg-white">
                {post.featuredImage && (
                  <div className="relative w-full h-40 md:h-48 bg-gray-100 overflow-hidden">
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
                    <Badge className="bg-institutional-navy text-white font-semibold border-0 text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <h2 className="text-lg md:text-xl font-bold text-institutional-navy line-clamp-2 text-balance hover:text-institutional-mustard transition-colors">
                    {post.title}
                  </h2>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-3">
                    {post.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-institutional-mustard/20 text-institutional-navy font-medium border-0"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-end text-xs md:text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 text-institutional-mustard" />
                    <span className="font-medium">{new Date(post.publishedDate).toLocaleDateString("es-ES")}</span>
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8 md:mt-12">
          <Link href="/blog">
            <Button className="w-full sm:w-auto bg-institutional-navy hover:bg-institutional-mustard hover:text-institutional-navy text-white font-bold px-6 md:px-8 py-5 md:py-6 text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              Ver Todos los Artículos
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
