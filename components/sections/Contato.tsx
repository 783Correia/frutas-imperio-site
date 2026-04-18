"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { site } from "@/app/data/site"

export default function Contato() {
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    telefone: "",
    tipoEmpresa: "",
    volumeMensal: "",
    mensagem: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const texto = encodeURIComponent(
      `*Novo contato via site*\n\n` +
        `Nome: ${form.nome}\n` +
        `Empresa: ${form.empresa}\n` +
        `Telefone: ${form.telefone}\n` +
        `Tipo de empresa: ${form.tipoEmpresa}\n` +
        `Volume mensal: ${form.volumeMensal}\n` +
        `Mensagem: ${form.mensagem}`
    )
    window.open(`https://wa.me/${site.whatsapp}?text=${texto}`, "_blank")
  }

  return (
    <section id="contato" className="py-24 bg-green-50">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">
              Fale Conosco
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
              Pronto para<br />
              <span className="text-green-700">fazer um pedido?</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nossa equipe comercial responde rápido. Preencha o formulário ou nos chame diretamente no
              WhatsApp — atendemos distribuidoras, redes de supermercados, hortifrútis e varejistas.
            </p>

            <div className="space-y-4">
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                  💬
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                    WhatsApp Comercial
                  </div>
                  <div className="text-sm text-gray-500">Resposta em até 2 horas</div>
                </div>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                  📧
                </div>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                    {site.email}
                  </div>
                  <div className="text-sm text-gray-500">Para propostas e contratos</div>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-white rounded-xl p-5 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                  📍
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{site.endereco}</div>
                  <div className="text-sm text-gray-500">Sede administrativa</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >
            <h3 className="font-bold text-gray-900 text-xl mb-6">Solicitar Orçamento</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Empresa *</label>
                  <input
                    type="text"
                    name="empresa"
                    required
                    value={form.empresa}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Nome da empresa"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Telefone *</label>
                  <input
                    type="tel"
                    name="telefone"
                    required
                    value={form.telefone}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Tipo de empresa *
                  </label>
                  <select
                    name="tipoEmpresa"
                    required
                    value={form.tipoEmpresa}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                  >
                    <option value="">Selecione</option>
                    <option>Supermercado</option>
                    <option>Hortifrúti</option>
                    <option>Distribuidora</option>
                    <option>Atacadista</option>
                    <option>Restaurante / Food Service</option>
                    <option>Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Volume mensal estimado
                </label>
                <select
                  name="volumeMensal"
                  value={form.volumeMensal}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white"
                >
                  <option value="">Selecione</option>
                  <option>Até 1 tonelada</option>
                  <option>1 a 5 toneladas</option>
                  <option>5 a 20 toneladas</option>
                  <option>Acima de 20 toneladas</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Produtos de interesse
                </label>
                <textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  rows={3}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                  placeholder="Ex: Maçã Fuji, Uva Red Globe, Banana..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Enviar via WhatsApp →
              </button>
              <p className="text-xs text-gray-400 text-center">
                Ao enviar você será redirecionado para o WhatsApp comercial.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
