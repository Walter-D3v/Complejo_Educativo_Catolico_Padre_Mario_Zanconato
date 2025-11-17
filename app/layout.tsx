import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Complejo Educativo Católico Padre Mario Zanconato | San Marcos, San Salvador",
    template: "%s | Complejo Educativo Padre Mario Zanconato",
  },
  description:
    "Institución educativa católica líder en San Marcos, San Salvador. Ofrecemos educación integral desde Parvularia hasta Bachillerato General y Técnico Administrativo Contable. Formación en valores espirituales, diplomados en Inglés, Turismo, Diseño Gráfico y más.",
  keywords: [
    "Complejo Educativo Católico Padre Mario Zanconato",
    "colegio católico San Salvador",
    "educación católica El Salvador",
    "San Marcos San Salvador",
    "Parvularia El Salvador",
    "Bachillerato General",
    "Bachillerato Técnico Administrativo Contable",
    "educación básica El Salvador",
    "formación integral",
    "valores espirituales",
    "diplomado inglés call center",
    "turismo gastronómico",
    "diseño gráfico digital",
    "software contable",
    "colegio San Marcos",
    "educación de calidad El Salvador",
  ],
  authors: [{ name: "Complejo Educativo Católico Padre Mario Zanconato" }],
  creator: "Complejo Educativo Católico Padre Mario Zanconato",
  publisher: "Complejo Educativo Católico Padre Mario Zanconato",
  metadataBase: new URL("https://ceczanconato.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_SV",
    url: "https://ceczanconato.vercel.app",
    siteName: "Complejo Educativo Católico Padre Mario Zanconato",
    title: "Complejo Educativo Católico Padre Mario Zanconato | San Marcos, San Salvador",
    description:
      "Institución educativa católica líder en formación integral. Parvularia, Básica y Bachillerato con diplomados especializados.",
    images: [
      {
        url: "/school-photo.png",
        width: 1200,
        height: 630,
        alt: "Complejo Educativo Católico Padre Mario Zanconato",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Complejo Educativo Católico Padre Mario Zanconato",
    description: "Institución educativa católica líder en San Marcos, San Salvador",
    images: ["/school-photo.png"],
    creator: "@ZanconatoOficial",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-SV">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Complejo Educativo Católico Padre Mario Zanconato",
              alternateName: "CEC Padre Mario Zanconato",
              url: "https://ceczanconato.vercel.app",
              logo: "https://ceczanconato.vercel.app/logo.png",
              image: "https://ceczanconato.vercel.app/school-photo.png",
              description:
                "Institución educativa católica líder en formación integral de jóvenes con fortaleza espiritual en San Marcos, San Salvador.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle 25 de abril oriente y Avenida Padre Mario Zanconato",
                addressLocality: "San Marcos",
                addressRegion: "San Salvador",
                addressCountry: "SV",
              },
              telephone: "+503-2220-6170",
              email: "cecezanconato@gmail.com",
              sameAs: [
                "https://www.facebook.com/ZanconatoOficial",
                "https://www.instagram.com/ceczanconato88044",
                "https://www.tiktok.com/@ceczanconato",
              ],
              foundingDate: "2015",
              areaServed: {
                "@type": "City",
                name: "San Salvador",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Programas Educativos",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "EducationalOccupationalProgram",
                      name: "Parvularia",
                      description: "Educación inicial para niños de 4, 5 y 6 años",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "EducationalOccupationalProgram",
                      name: "Educación Básica",
                      description: "Primer, Segundo y Tercer Ciclo (1° a 9° grado)",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "EducationalOccupationalProgram",
                      name: "Bachillerato General",
                      description: "Con diplomados en Inglés, Turismo, Electrónica y Diseño Gráfico",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "EducationalOccupationalProgram",
                      name: "Bachillerato Técnico Administrativo Contable",
                      description: "Con diplomado en Software Contable",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={`font-sans antialiased`} suppressHydrationWarning={true}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
