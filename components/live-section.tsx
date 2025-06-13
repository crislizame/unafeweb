"use client"
import { Button } from "@/components/ui/button"
import { Radio } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function LiveSection() {
  const { ref: sectionRef } = useScrollAnimation()
  const { ref: imageRef } = useScrollAnimation({ animationClass: "scroll-animate-fadeInUp", threshold: 0.3 })

  return (
    <section id="live" className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div ref={sectionRef} className="container flex flex-col items-center gap-6 px-4 text-center md:px-6 mx-auto">
        <div className="space-y-4 w-full max-w-3xl">
          <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800 text-orange-600">
            En Vivo
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/tight">
            Conéctate en Nuestros TikTok Lives
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl/relaxed">
            ¡Únete a nuestros momentos de adoración y comunidad en vivo por TikTok! Síguenos para no perderte ninguno.
          </p>
        </div>
        <div className="mx-auto w-full max-w-xs space-y-2">
          <Button asChild size="lg" className="w-full">
            <Link href="https://www.tiktok.com/@somosunafe" target="_blank" rel="noopener noreferrer">
              <Radio className="mr-2 h-5 w-5" /> Ir a TikTok
            </Link>
          </Button>
        </div>
        <div ref={imageRef} className="w-full max-w-2xl mt-4">
          <Image
            alt="Una Fé ensayando para un live"
            className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover w-full shadow-lg"
            height={800}
            src="/una-fe-ensayo-live.jpg"
            width={1200}
          />
        </div>
      </div>
    </section>
  )
}
