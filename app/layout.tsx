import type { Metadata } from "next"
import { Geist } from "next/font/google"
import "./globals.css"

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Frutas Império Ltda — Distribuição de Frutas desde 1997",
  description:
    "Maior distribuidora de frutas importadas do Sul do Brasil. Frota própria de 500 caminhões, importação direta de 9 países, cobertura nacional.",
  keywords: "frutas importadas, distribuição frutas, atacado frutas, frutas B2B, hortifrúti atacado",
  openGraph: {
    title: "Frutas Império Ltda",
    description: "29 anos conectando o campo ao seu negócio. Frota própria, importação direta, cobertura nacional.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
