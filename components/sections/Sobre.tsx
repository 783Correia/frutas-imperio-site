"use client"

import { motion } from "framer-motion"
import { site } from "@/app/data/site"

export default function Sobre() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">
              Nossa História
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              29 anos conectando<br />
              <span className="text-green-700">produtores e compradores</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Fundada em 1997 por Jair Boscato, a Frutas Império nasceu com um propósito claro: levar
              qualidade e variedade para as mesas dos brasileiros, com a confiabilidade que o mercado B2B
              exige.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Hoje somos uma das maiores distribuidoras de frutas do Brasil, com frota própria de 500
              caminhões, parcerias diretas com produtores em 9 países e cobertura logística nacional.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95"
            >
              Fale com a equipe comercial
            </a>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute left-6 top-0 bottom-0 w-px bg-green-200" />
            <div className="space-y-6">
              {site.timeline.map((item, i) => (
                <motion.div
                  key={item.ano}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-6 pl-14 relative"
                >
                  <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-green-700 border-4 border-white shadow-md -translate-x-1/2" />
                  <div>
                    <span className="text-green-700 font-bold text-sm">{item.ano}</span>
                    <p className="text-gray-600 text-sm mt-0.5">{item.evento}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Países parceiros */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-center text-xl font-bold text-gray-900 mb-8">
            Parceiros em 9 países
          </h3>
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4">
            {site.paisesParcerios.map((p) => (
              <div
                key={p.pais}
                className="flex flex-col items-center gap-2 bg-gray-50 rounded-xl p-4 hover:bg-green-50 transition-colors group"
              >
                <span className="text-3xl">{p.bandeira}</span>
                <span className="text-xs font-semibold text-gray-700 group-hover:text-green-700 transition-colors text-center">
                  {p.pais}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
