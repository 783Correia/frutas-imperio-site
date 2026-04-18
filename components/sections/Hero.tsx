"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { site } from "@/app/data/site"

const FRUITS = ["🍎", "🍊", "🍋", "🍇", "🥭", "🍓", "🍌", "🍉", "🥝", "🍑", "🫐", "🍈"]

function FloatingFruit({ emoji, index }: { emoji: string; index: number }) {
  const size = 28 + (index % 4) * 10
  const left = (index * 8.3) % 100
  const duration = 12 + (index % 6) * 3
  const delay = -(index * 1.8)
  const rotate = index % 2 === 0 ? 20 : -20

  return (
    <motion.div
      className="absolute select-none pointer-events-none"
      style={{ left: `${left}%`, fontSize: size, bottom: "-80px" }}
      animate={{ y: [0, -(typeof window !== "undefined" ? window.innerHeight + 160 : 900)], rotate: [0, rotate, -rotate, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    >
      {emoji}
    </motion.div>
  )
}

function Counter({ target, sufixo }: { target: number; sufixo: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}
      {sufixo}
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-green-900"
    >
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-800 to-green-900" />

      {/* Frutas flutuando */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {FRUITS.map((emoji, i) => (
          <FloatingFruit key={i} emoji={emoji} index={i} />
        ))}
      </div>

      {/* Blur suave no centro para destacar o texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-950/60 via-transparent to-green-950/60" />

      {/* Brilhos decorativos */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-green-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl" />

      {/* Conteúdo centralizado */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-28 pb-16 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm px-5 py-2.5 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Desde 1997 — Líder em distribuição de frutas
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
        >
          Qualidade direto
          <span className="block text-amber-400">do campo ao</span>
          seu negócio.
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl"
        >
          {site.descricao}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-amber-500 hover:bg-amber-400 text-white font-bold px-10 py-4 rounded-full text-center transition-all hover:scale-105 active:scale-95 shadow-xl shadow-amber-500/30 text-lg"
          >
            Solicitar Orçamento →
          </a>
          <a
            href="#produtos"
            className="border border-white/30 hover:border-white/60 text-white font-semibold px-10 py-4 rounded-full text-center transition-all hover:bg-white/10 text-lg"
          >
            Ver Catálogo
          </a>
        </motion.div>

        {/* Números */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-10 border-t border-white/10 w-full"
        >
          {site.numeros.map((n) => (
            <div key={n.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-1">
                <Counter target={n.valor} sufixo={n.sufixo} />
              </div>
              <div className="text-sm text-white/55 font-medium">{n.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/35 text-xs tracking-widest uppercase">role para baixo</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </motion.div>
    </section>
  )
}
