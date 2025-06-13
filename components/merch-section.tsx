"use client"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function MerchSection() {
  const { ref: sectionRef } = useScrollAnimation()
  const { ref: imageRef } = useScrollAnimation({ animationClass: "scroll-animate-fadeInUp", threshold: 0.3 })

  return (
    <section id="merch" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div ref={sectionRef} className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800 text-orange-600">
              Merch
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Lleva la Fé Contigo</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Aquí tienes un vistazo a nuestros diseños de camisetas pensados para inspirar. ¡Próximamente tendremos más
              artículos y la tienda disponible!
            </p>
          </div>
          <div ref={imageRef} className="mt-8 w-full max-w-2xl">
            {" "}
            {/* Contenedor para controlar el tamaño y centrado */}
            <Image
              src="/merch-camiseta-doblada-con-amor-eterno.jpg"
              alt="Diseño de camiseta Una Fé - Con Amor Eterno (doblada)"
              width={1024} // Ancho intrínseco de la imagen o un tamaño base para calidad
              height={682} // Alto intrínseco de la imagen o un tamaño base para calidad
              className="rounded-lg shadow-xl w-full h-auto object-contain" // w-full h-auto para responsividad, object-contain para ver toda la imagen
            />
          </div>
          <div className="mt-6">
            <p className="text-muted-foreground">
              <ShoppingCart className="inline-block mr-2 h-5 w-5" />
              Tienda en construcción. ¡Mantente atento!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
