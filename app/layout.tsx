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

export const metadata: Metadata = {
  title: "Una Fé | Banda de Adoración Cristiana",
  description: "Sitio web oficial de Una Fé. Escucha nuestra música, conoce más sobre nosotros y conecta.",
  icons: {
    icon: "/isotype-flame.png",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
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
