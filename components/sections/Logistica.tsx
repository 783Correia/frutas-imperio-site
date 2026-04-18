"use client"

import { motion } from "framer-motion"

const servicos = [
  {
    icone: "❄️",
    titulo: "Frota Refrigerada",
    descricao:
      "500 caminhões com sistema de refrigeração controlada, garantindo a conservação perfeita da carga do produtor ao destino.",
  },
  {
    icone: "🗺️",
    titulo: "Cobertura Nacional",
    descricao:
      "Rotas diárias para todo o Brasil, com rastreamento em tempo real e previsão de entrega precisa.",
  },
  {
    icone: "✈️",
    titulo: "Importação Direta",
    descricao:
      "Contratos diretos com produtores internacionais, eliminando intermediários e garantindo preço competitivo e qualidade certificada.",
  },
  {
    icone: "📋",
    titulo: "Desembaraço Aduaneiro",
    descricao:
      "Equipe especializada em documentação e processos alfandegários, agilizando a entrada de produtos importados no Brasil.",
  },
  {
    icone: "🏭",
    titulo: "Centros de Distribuição",
    descricao:
      "Infraestrutura de armazenamento com câmaras frias e área de triagem para garantir rastreabilidade e padrão de qualidade.",
  },
  {
    icone: "📱",
    titulo: "Pedidos via WhatsApp",
    descricao:
      "Canal direto com a equipe comercial para cotações rápidas, consulta de estoque e programação de entregas.",
  },
]

export default function Logistica() {
  return (
    <section id="logistica" className="py-24 bg-gray-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>
      <div className="absolute -right-40 top-0 w-[500px] h-[500px] rounded-full bg-green-700/10 blur-3xl" />

      <div className="relative z-10 container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-green-400 font-semibold text-sm uppercase tracking-widest">
            Logística & Operações
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3">
            A estrutura por trás<br />
            <span className="text-green-400">de cada entrega</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((s, i) => (
            <motion.div
              key={s.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl p-7 transition-colors group"
            >
              <div className="text-4xl mb-4">{s.icone}</div>
              <h3 className="font-bold text-white text-lg mb-2 group-hover:text-green-400 transition-colors">
                {s.titulo}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.descricao}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
