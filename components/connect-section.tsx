"use client"
import { Button } from "@/components/ui/button"
import { Instagram, Youtube, Facebook, Music } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

// Actualizado el componente TikTokIcon con el SVG exacto proporcionado
const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
    <path
      d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
      stroke="#8291A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M10 12C8.34315 12 7 13.3431 7 15C7 16.6569 8.34315 18 10 18C11.6569 18 13 16.6569 13 15V6C13.3333 7 14.6 9 17 9"
      stroke="#8291A9"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
)

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/somosunafe", icon: Instagram },
  { name: "TikTok", href: "https://www.tiktok.com/@somosunafe", icon: TikTokIcon },
  { name: "YouTube", href: "https://www.youtube.com/@somosbandaunafe", icon: Youtube },
  { name: "Facebook", href: "https://www.facebook.com/somosunafe", icon: Facebook },
  { name: "Spotify", href: "https://open.spotify.com/intl-es/artist/5bXjoH4bmOUmrTutag8vhE", icon: Music },
  { name: "Apple Music", href: "https://music.apple.com/co/artist/una-f%C3%A9/1801342062", icon: Music },
]

export default function ConnectSection() {
  const { ref: sectionRef } = useScrollAnimation()
  const { ref: gridRef } = useScrollAnimation({ animationClass: "scroll-animate-fadeInUp", threshold: 0.1 })

  return (
    <section id="connect" className="w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <div ref={sectionRef} className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800 text-orange-600">
              Conecta
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Síguenos en Redes</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              No te pierdas nada de Una Fé. Encuéntranos en tus plataformas favoritas y sé parte de nuestra comunidad.
            </p>
          </div>
          <div
            ref={gridRef}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 pt-8 max-w-3xl mx-auto"
          >
            {socialLinks.map((social, index) => (
              <div
                key={social.name}
                style={{ animationDelay: `${index * 0.1}s` }}
                className="scroll-animate-child scroll-animate-fadeInUp-child"
              >
                <Link href={social.href} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="w-full aspect-square flex flex-col items-center justify-center p-3 border rounded-lg hover:shadow-lg transition-shadow dark:border-slate-700 hover:border-orange-500 dark:hover:border-orange-500 text-center">
                    <social.icon className="h-10 w-10 text-muted-foreground group-hover:text-orange-500 transition-colors flex-shrink-0" />
                    <p className="mt-2 text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-orange-500 transition-colors">
                      {social.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <div ref={useScrollAnimation().ref} className="mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="https://linktr.ee/Somosunafe" target="_blank" rel="noopener noreferrer">
                Ver todos los enlaces (Linktree)
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
