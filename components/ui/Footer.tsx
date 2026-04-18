import { site } from "@/app/data/site"

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍊</span>
              <span className="font-bold text-lg">Frutas Império</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              {site.descricao}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/80">Navegação</h4>
            <ul className="space-y-2 text-sm text-white/50">
              {["Início", "Sobre", "Produtos", "Logística", "Contato"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white/80">Contato</h4>
            <ul className="space-y-2 text-sm text-white/50">
              <li>{site.telefone}</li>
              <li>{site.email}</li>
              <li>{site.endereco}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Frutas Império Ltda. Todos os direitos reservados.
          </p>
          <p className="text-white/20 text-xs">Fundada em 1997 — {site.descricao.split(".")[0]}.</p>
        </div>
      </div>
    </footer>
  )
}
