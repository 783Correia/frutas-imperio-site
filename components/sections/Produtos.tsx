"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { site } from "@/app/data/site"

export default function Produtos() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos")

  const categoriasComProdutos = [
    "Todos",
    ...Array.from(new Set(site.produtos.map((p) => p.categoria))),
  ]

  const filtrados =
    categoriaAtiva === "Todos"
      ? site.produtos
      : site.produtos.filter((p) => p.categoria === categoriaAtiva)

  return (
    <section id="produtos" className="py-28 bg-white">
      <div className="container mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">
            Catálogo
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-5">
            Nossos Produtos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg leading-relaxed">
            Frutas selecionadas do Brasil e do mundo, disponíveis em grandes volumes
            para distribuidoras, redes e hortifrútis.
          </p>
        </motion.div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categoriasComProdutos.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                categoriaAtiva === cat
                  ? "bg-green-700 text-white shadow-lg shadow-green-700/25 scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtrados.map((produto) => (
              <motion.div
                key={produto.id}
                layout
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.25 }}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                {/* Imagem */}
                <div className="h-44 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center relative overflow-hidden">
                  <span className="text-7xl select-none group-hover:scale-110 transition-transform duration-300">
                    {produto.emoji}
                  </span>
                  <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1 rounded-full">
                    {produto.origem}
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="mb-1">
                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">
                      {produto.categoria}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-green-700 transition-colors">
                    {produto.nome}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {produto.descricao}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <span>🗓</span> {produto.sazonalidade}
                    </span>
                    <a
                      href={`https://wa.me/${site.whatsapp}?text=Olá! Tenho interesse no produto: ${produto.nome}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-700 font-bold hover:text-green-900 transition-colors"
                    >
                      Cotar →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 text-sm mb-5">
            Trabalha com outros produtos? Nossa equipe atende qualquer demanda.
          </p>
          <a
            href={`https://wa.me/${site.whatsapp}?text=Olá! Gostaria de ver o catálogo completo de produtos.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-700/20"
          >
            Ver catálogo completo no WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
