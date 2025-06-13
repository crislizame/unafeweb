"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PlayCircle, Disc3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const songs = [
  {
    title: "Todo para mí",
    artist: "Una Fé",
    releaseDate: "2 de Junio, 2025", // Año actualizado
    imageUrl: "/todo-para-mi-cover.jpg",
    spotifyUrl: "https://open.spotify.com/track/0LW5U9mNzva6ANB05ZTyiF?si=3d1a6098fdfa4070",
    youtubeUrl: "https://www.youtube.com/watch?v=7q9F6U0g8Wc&t=6s&ab_channel=UnaF%C3%A9",
    appleMusicUrl:
      "https://music.apple.com/co/album/todo-para-m%C3%AD/1812939371?at=1000lHKX&ct=linktree_http&i=1812939374&itscg=30200&itsct=lt_m",
    isNew: true,
  },
  {
    title: "Con amor eterno",
    artist: "Una Fé",
    releaseDate: "31 de Marzo, 2025", // Año actualizado
    imageUrl: "/con-amor-eterno-cover.jpg",
    spotifyUrl: "https://open.spotify.com/track/0nzOWpcPm8Ct6ltHLXVReu?si=82d06a35ea4a4779",
    youtubeUrl: "https://www.youtube.com/watch?v=XpGxjfJljKE&ab_channel=UnaF%C3%A9",
    appleMusicUrl: "https://music.apple.com/co/song/con-amor-eterno/1801342389",
    isNew: false,
  },
]

export default function MusicSection() {
  const { ref: sectionRef } = useScrollAnimation()
  const { ref: titleRef } = useScrollAnimation({ animationClass: "scroll-animate-fadeInUp", threshold: 0.1 })
  const { ref: card1Ref } = useScrollAnimation({ animationClass: "scroll-animate-fadeInUp", threshold: 0.2 })
  const { ref: card2Ref } = useScrollAnimation({ animationClass: "scroll-animate-fadeInUp", threshold: 0.2 })

  return (
    <section id="music" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <div ref={sectionRef} className="container px-4 md:px-6">
        <div ref={titleRef} className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800 text-orange-600">
              Nuestra Música
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Escucha Nuestras Canciones</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Adora con nosotros. Encuentra nuestra música en tu plataforma favorita.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 pt-12">
          {songs.map((song, index) => (
            <div key={song.title} ref={index === 0 ? card1Ref : card2Ref} style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
              {song.isNew && (
                    <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full z-10">
                      ¡NUEVO!
                    </div>
                  )}
                <CardHeader className="p-0 relative">
                  
                  {/* Contenedor para la imagen para mejor control del aspect ratio y overflow */}
                  <div className="aspect-square w-full overflow-hidden">
                    <Image
                      src={song.imageUrl || "/placeholder.svg"}
                      alt={`Cover de ${song.title}`}
                      width={600} // Estos son para la resolución de la imagen, no para el layout
                      height={600}
                      className="w-full h-full object-cover" // Asegura que la imagen llene el div contenedor
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <CardTitle className="text-2xl font-bold">{song.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mt-1">
                    {song.artist} - Lanzado: {song.releaseDate}
                  </CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button asChild variant="outline" size="sm">
                      <Link href={song.spotifyUrl} target="_blank" rel="noopener noreferrer">
                        <Disc3 className="mr-2 h-4 w-4" /> Spotify
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href={song.appleMusicUrl} target="_blank" rel="noopener noreferrer">
                        <Disc3 className="mr-2 h-4 w-4" /> Apple Music
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href={song.youtubeUrl} target="_blank" rel="noopener noreferrer">
                        <PlayCircle className="mr-2 h-4 w-4" /> YouTube
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        <div ref={useScrollAnimation().ref} className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="https://linktr.ee/Somosunafe" target="_blank" rel="noopener noreferrer">
              Más Lanzamientos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
