import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { Installation } from "@/components/installation"
import { Shortcuts } from "@/components/shortcuts"
import { Architecture } from "@/components/architecture"
import { Ecosystem } from "@/components/ecosystem"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black font-mono">
      <Hero />
      <Features />
      <Installation />
      <Shortcuts />
      <Architecture />
      <Ecosystem />
      <Footer />
    </main>
  )
}
