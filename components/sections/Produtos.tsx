"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { site } from "@/app/data/site"

export default function Produtos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos")

  const categorias = ["Todos", ...site.categorias]
  const filtrados =
    categoriaAtiva === "Todos"
      ? site.produtos
      : site.produtos.filter((p) => p.categoria === categoriaAtiva)

  return (
    <section id="produtos" className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">
            Catálogo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Frutas selecionadas do Brasil e do mundo, disponíveis em grandes volumes para distribuidoras,
            redes e hortifrútis.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                categoriaAtiva === cat
                  ? "bg-green-700 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtrados.map((produto) => (
              <motion.div
                key={produto.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                {/* Imagem placeholder */}
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl select-none">🍃</span>
                  <div className="absolute inset-0 bg-green-700/0 group-hover:bg-green-700/5 transition-colors" />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-gray-900 text-lg">{produto.nome}</h3>
                    <span className="text-xs text-green-700 bg-green-50 px-2 py-1 rounded-full font-medium whitespace-nowrap ml-2">
                      {produto.origem}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{produto.descricao}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">🗓 {produto.sazonalidade}</span>
                    <a
                      href={`https://wa.me/${site.whatsapp}?text=Olá! Tenho interesse no produto: ${produto.nome}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-700 font-semibold hover:underline"
                    >
                      Solicitar cotação →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={`https://wa.me/${site.whatsapp}?text=Olá! Gostaria de ver o catálogo completo de produtos.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95"
          >
            Ver catálogo completo no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
