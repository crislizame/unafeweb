import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-slate-900 text-slate-400 py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <Image src="/isotype-flame.png" alt="Una Fé Isotype" width={30} height={30} className="mr-2" />
          <p className="text-sm">&copy; {currentYear} Una Fé. Todos los derechos reservados.</p>
        </div>
        <div className="flex space-x-4">
          <Link href="#music" className="text-sm hover:text-orange-400 transition-colors">
            Música
          </Link>
          <Link
            href="https://www.tiktok.com/@somosunafe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-orange-400 transition-colors"
          >
            TikTok
          </Link>
          <Link href="mailto:unafebanda@gmail.com" className="text-sm hover:text-orange-400 transition-colors">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  )
}
