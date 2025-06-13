"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, Music2, Instagram, ShoppingCart, Radio } from "lucide-react" // Using Radio for TikTok generic live icon
import { useState } from "react"

const navLinks = [
  { href: "#music", label: "Música", icon: Music2 },
  { href: "#live", label: "En Vivo", icon: Radio },
  { href: "#merch", label: "Merch", icon: ShoppingCart },
  { href: "#connect", label: "Conecta", icon: Instagram },
]

export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsSheetOpen(false)}>
          <Image src="/logo-white.png" alt="Una Fé Logo" width={120} height={50} />
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Abrir menú de navegación</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium mt-8">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold mb-4"
                onClick={() => setIsSheetOpen(false)}
              >
                <Image src="/logo-black.png" alt="Una Fé Logo" width={120} height={40} />
                <span className="sr-only">Una Fé</span>
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                  onClick={() => setIsSheetOpen(false)}
                >
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
