'use client'

import { useState } from 'react'
import { Search, Menu, X, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Temas', href: '#temas' },
  { label: 'Equipos', href: '#equipos' },
  { label: 'Retos', href: '#retos' },
  { label: 'Perfil', href: '#perfil' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2 font-black text-lg shrink-0">
          <span className="grid size-9 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-md shadow-primary/30">
            <Sparkles className="size-5" />
          </span>
          <span className="tracking-tight">
            Edu<span className="text-primary">Team</span>
          </span>
        </a>

        <ul className="mx-auto hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-bold text-foreground/70 transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto hidden items-center gap-3 md:flex">
          <label className="relative">
            <span className="sr-only">Buscar</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-foreground/40" />
            <input
              type="search"
              placeholder="Buscar temas, retos..."
              className="h-10 w-52 rounded-full border border-black/10 bg-white/70 pl-9 pr-4 text-sm font-semibold outline-none transition-all focus:w-64 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
          <Button className="rounded-full font-extrabold shadow-md shadow-primary/30 transition-transform hover:-translate-y-0.5">
            Entrar
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid size-10 place-items-center rounded-xl border border-black/10 bg-white md:hidden"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          'grid overflow-hidden border-t border-black/5 bg-white transition-all duration-300 md:hidden',
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="min-h-0">
          <div className="space-y-3 px-4 py-4">
            <label className="relative block">
              <span className="sr-only">Buscar</span>
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-foreground/40" />
              <input
                type="search"
                placeholder="Buscar temas, retos..."
                className="h-11 w-full rounded-full border border-black/10 bg-white pl-9 pr-4 text-sm font-semibold outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </label>
            <ul className="grid gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-2.5 text-sm font-bold text-foreground/80 hover:bg-primary/10 hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button className="w-full rounded-full font-extrabold">Entrar</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
