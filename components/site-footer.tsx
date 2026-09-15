import { Sparkles, Mail, Shield } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer id="perfil" className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 sm:px-6 md:flex-row md:justify-between lg:px-8">
        <a href="#inicio" className="flex items-center gap-2 font-black text-lg">
          <span className="grid size-9 place-items-center rounded-2xl bg-primary text-primary-foreground">
            <Sparkles className="size-5" />
          </span>
          Edu<span className="-ml-1 text-primary">Team</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-bold text-foreground/60">
          <a href="#contacto" className="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
            <Mail className="size-4" />
            Contacto
          </a>
          <a href="#privacidad" className="inline-flex items-center gap-1.5 transition-colors hover:text-primary">
            <Shield className="size-4" />
            Privacidad
          </a>
          <a href="#temas" className="transition-colors hover:text-primary">
            Temas
          </a>
          <a href="#equipos" className="transition-colors hover:text-primary">
            Equipos
          </a>
        </nav>

        <p className="text-sm font-semibold text-foreground/40">
          © {new Date().getFullYear()} EduTeam
        </p>
      </div>
    </footer>
  )
}
