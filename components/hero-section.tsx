"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PlayCircle } from "lucide-react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const getDelayClass = (index: number) => {
    if (!isMounted) return "opacity-0"
    return `animate-fadeInUp opacity-0`
  }

  const animationStyle = (delay: number) => ({
    animationDelay: isMounted ? `${delay}s` : "0s",
  })

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
            <div className="space-y-2">
              <div
                className={`logo-shine-container drop-shadow-lg ${getDelayClass(0)} flex justify-center lg:justify-start`}
                style={animationStyle(0.2)}
              >
                <div className="logo-shine-bar" />
                <Image
                  src="/logo-all-white.png"
                  alt="Una Fé Logo"
                  width={300}
                  height={100}
                  className="mb-4 logo-image-hero"
                  priority
                />
              </div>
              <h1
                className={`text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none ${getDelayClass(1)}`}
                style={animationStyle(0.4)}
              >
                Adoración que enciende el corazón.
              </h1>
              <p
                className={`max-w-[600px] text-gray-200 md:text-xl mx-auto lg:mx-0 ${getDelayClass(2)}`}
                style={animationStyle(0.6)}
              >
                Somos Una Fé, una banda de adoración cristiana compartiendo el amor de Dios a través de la música.
              </p>
            </div>
            <div
              className={`flex flex-col gap-2 min-[400px]:flex-row justify-center lg:justify-start ${getDelayClass(3)}`}
              style={animationStyle(0.8)}
            >
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Link href="#music">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Escucha Ahora
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-black text-white border-white hover:bg-white hover:text-black transition-colors"
              >
                <Link href="#connect">Conéctate</Link>
              </Button>
            </div>
          </div>
          <div className={`flex items-center justify-center ${getDelayClass(4)}`} style={animationStyle(1)}>
            <Image
              alt="Una Fé Band en vivo"
              className="rounded-xl object-cover shadow-2xl w-full h-auto max-h-[550px]"
              src="/una-fe-banda-en-vivo.jpg"
              width={1280}
              height={720}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
