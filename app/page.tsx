import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MusicSection from "@/components/music-section"
import LiveSection from "@/components/live-section"
import MerchSection from "@/components/merch-section"
import ConnectSection from "@/components/connect-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <MusicSection />
        <LiveSection />
        <MerchSection />
        <ConnectSection />
      </main>
      <Footer />
    </div>
  )
}
