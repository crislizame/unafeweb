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
      <div
        ref={sectionRef}
        className="container flex flex-col items-center gap-6 px-4 text-center md:px-6" // Cambiado de grid a flex
      >
        <div className="space-y-4 w-full">
          {" "}
          {/* Añadido w-full y ajustado space-y */}
          <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800 text-orange-600">
            En Vivo
          </div>
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl/tight word-break-word">
            Conéctate en Nuestros TikTok Lives
          </h2>
          <p className="mx-auto max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl/relaxed word-break-word">
            ¡Únete a nuestros momentos de adoración y comunidad en vivo por TikTok! Síguenos para no perderte ninguno.
          </p>
        </div>
        <div className="mx-auto w-full max-w-xs space-y-2">
          {" "}
          {/* Ajustado max-w para el botón */}
          <Button asChild size="lg" className="w-full">
            <Link href="https://www.tiktok.com/@somosunafe" target="_blank" rel="noopener noreferrer">
              <Radio className="mr-2 h-5 w-5" /> Ir a TikTok
            </Link>
          </Button>
        </div>
        <div ref={imageRef} className="w-full max-w-2xl mt-4">
          {" "}
          {/* Contenedor de la imagen */}
          <Image
            alt="Una Fé ensayando para un live" // Alt text actualizado
            className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover w-full shadow-lg" // Aspect ratio ajustado a 3/2
            height={800} // Alto base para optimización (proporcional a 3:2)
            src="/una-fe-ensayo-live.jpg" // Nueva imagen
            width={1200} // Ancho base para optimización (proporcional a 3:2)
          />
        </div>
      </div>
    </section>
  )
}
