"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { site } from "@/app/data/site"

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#logistica", label: "Logística" },
  { href: "#contato", label: "Contato" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between h-16 md:h-20">
        <Link href="#inicio" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-700">🍊</span>
          <span
            className={`font-bold text-lg tracking-tight transition-colors ${
              scrolled ? "text-green-800" : "text-white"
            }`}
          >
            Frutas Império
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-green-500 ${
                scrolled ? "text-gray-700" : "text-white/90"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            Solicitar Orçamento
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 ${scrolled ? "text-gray-700" : "text-white"}`}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-current transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-0.5 bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t shadow-lg px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-gray-700 font-medium hover:text-green-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 text-white font-semibold px-5 py-3 rounded-full text-center"
          >
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  )
}
