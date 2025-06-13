import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/next"
import { AnimationFix } from "@/components/animation-fix"
import { ThemeFix } from "@/components/theme-fix"
import { ScrollAnimationFix } from "@/components/scroll-animation-fix"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

// Generar un timestamp para forzar la actualización del cache
const cacheBreaker = Date.now()

export const metadata: Metadata = {
  title: "Una Fé | Banda de Adoración Cristiana",
  description:
    "Somos Una Fé, una banda de adoración cristiana que comparte el amor de Dios a través de la música. Escucha nuestras canciones, únete a nuestros lives en TikTok y conecta con nuestra comunidad de fe.",
  keywords: [
    "Una Fé",
    "banda cristiana",
    "adoración cristiana",
    "música cristiana",
    "worship",
    "alabanza",
    "TikTok live",
    "Todo para mí",
    "Con amor eterno",
    "banda de adoración",
    "música de adoración",
    "cristianos",
    "fe",
    "Dios",
    "Jesús",
  ],
  authors: [{ name: "Una Fé" }],
  creator: "Una Fé",
  publisher: "Una Fé",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.somosunafe.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Una Fé | Banda de Adoración Cristiana",
    description:
      "Somos Una Fé, una banda de adoración cristiana que comparte el amor de Dios a través de la música. Escucha nuestras canciones y únete a nuestra comunidad de fe.",
    url: "https://www.somosunafe.com",
    siteName: "Una Fé",
    images: [
      {
        url: `/opengraph-image?v=${cacheBreaker}`,
        width: 1200,
        height: 630,
        alt: "Una Fé - Banda de Adoración Cristiana",
        type: "image/png",
      },
      {
        url: "/una-fe-banda-en-vivo.jpg",
        width: 1280,
        height: 720,
        alt: "Una Fé - Banda de Adoración Cristiana en vivo",
        type: "image/jpeg",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Una Fé | Banda de Adoración Cristiana",
    description:
      "Somos Una Fé, una banda de adoración cristiana que comparte el amor de Dios a través de la música. Escucha nuestras canciones y únete a nuestra comunidad de fe.",
    images: [
      {
        url: `/opengraph-image?v=${cacheBreaker}`,
        alt: "Una Fé - Banda de Adoración Cristiana",
        width: 1200,
        height: 630,
      },
    ],
    creator: "@somosunafe",
    site: "@somosunafe",
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
  icons: {
    icon: [
      { url: "/isotype-flame.png", sizes: "32x32", type: "image/png" },
      { url: "/isotype-flame.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/isotype-flame.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/isotype-flame.png",
      },
    ],
  },
  manifest: "/manifest.json",
  category: "music",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Etiquetas meta adicionales para SEO y redes sociales */}
        <meta name="theme-color" content="#ea580c" />
        <meta name="msapplication-TileColor" content="#ea580c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Meta tags específicos para WhatsApp y otras apps con cache busting */}
        <meta property="og:image" content={`https://www.somosunafe.com/opengraph-image?v=${cacheBreaker}`} />
        <meta property="og:image:secure_url" content={`https://www.somosunafe.com/opengraph-image?v=${cacheBreaker}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:alt" content="Una Fé - Banda de Adoración Cristiana" />
        <meta property="og:updated_time" content={new Date().toISOString()} />

        {/* Twitter Card específico */}
        <meta name="twitter:image" content={`https://www.somosunafe.com/opengraph-image?v=${cacheBreaker}`} />
        <meta name="twitter:image:alt" content="Una Fé - Banda de Adoración Cristiana" />

        {/* Meta tags adicionales para WhatsApp */}
        <meta property="og:site_name" content="Una Fé" />
        <meta property="og:locale" content="es_ES" />
        <meta property="article:author" content="Una Fé" />

        {/* Verificación de sitios web */}
        {/* <meta name="google-site-verification" content="tu-codigo-de-verificacion-aqui" /> */}
        {/* <meta name="msvalidate.01" content="tu-codigo-de-bing-aqui" /> */}

        {/* Preconnect para mejorar rendimiento */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch para recursos externos */}
        <link rel="dns-prefetch" href="https://open.spotify.com" />
        <link rel="dns-prefetch" href="https://music.apple.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://www.tiktok.com" />
        <link rel="dns-prefetch" href="https://www.instagram.com" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />

        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MusicGroup",
              name: "Una Fé",
              alternateName: "Banda Una Fé",
              description: "Banda de adoración cristiana que comparte el amor de Dios a través de la música",
              genre: ["Christian Music", "Worship", "Contemporary Christian"],
              url: "https://www.somosunafe.com",
              image: `https://www.somosunafe.com/opengraph-image?v=${cacheBreaker}`,
              logo: "https://www.somosunafe.com/logo-white.png",
              sameAs: [
                "https://www.instagram.com/somosunafe",
                "https://www.tiktok.com/@somosunafe",
                "https://www.youtube.com/@somosbandaunafe",
                "https://www.facebook.com/somosunafe",
                "https://open.spotify.com/intl-es/artist/5bXjoH4bmOUmrTutag8vhE",
                "https://music.apple.com/co/artist/una-f%C3%A9/1801342062",
                "https://linktr.ee/Somosunafe",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: "unafebanda@gmail.com",
                contactType: "customer service",
              },
              album: [
                {
                  "@type": "MusicAlbum",
                  name: "Todo para mí",
                  datePublished: "2025-06-02",
                  image: "https://www.somosunafe.com/todo-para-mi-cover.jpg",
                },
                {
                  "@type": "MusicAlbum",
                  name: "Con amor eterno",
                  datePublished: "2025-03-31",
                  image: "https://www.somosunafe.com/con-amor-eterno-cover.jpg",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <AnimationFix />
          <ThemeFix />
          <ScrollAnimationFix />
          <Suspense>{children}</Suspense>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
