"use client"

import { motion } from "framer-motion"
import { site } from "@/app/data/site"

export default function Diferenciais() {
  return (
    <section className="py-20 bg-green-50">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">
            Por que a Frutas Império?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
            Infraestrutura de quem<br />
            <span className="text-green-700">lidera o setor</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {site.diferenciais.map((d, i) => (
            <motion.div
              key={d.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow border border-green-100 group"
            >
              <div className="text-4xl mb-4">{d.icone}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-green-700 transition-colors">
                {d.titulo}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{d.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
