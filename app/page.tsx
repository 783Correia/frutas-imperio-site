import Navbar from "@/components/ui/Navbar"
import Hero from "@/components/sections/Hero"
import Diferenciais from "@/components/sections/Diferenciais"
import Sobre from "@/components/sections/Sobre"
import Produtos from "@/components/sections/Produtos"
import Logistica from "@/components/sections/Logistica"
import Contato from "@/components/sections/Contato"
import Footer from "@/components/ui/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Diferenciais />
        <Sobre />
        <Produtos />
        <Logistica />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
