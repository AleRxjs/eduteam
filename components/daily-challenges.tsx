import { Zap, Clock, CheckCircle2, ChevronRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type Status = 'live' | 'soon' | 'done'

const statusMeta: Record<
  Status,
  { label: string; chip: string; icon: typeof Zap; dot?: boolean }
> = {
  live: {
    label: 'En vivo',
    chip: 'bg-subject-red/10 text-subject-red',
    icon: Zap,
    dot: true,
  },
  soon: {
    label: 'Por empezar',
    chip: 'bg-amber-500/10 text-amber-600',
    icon: Clock,
  },
  done: {
    label: 'Completado',
    chip: 'bg-subject-green/10 text-subject-green',
    icon: CheckCircle2,
  },
}

const challenges: {
  title: string
  subject: string
  time: string
  points: number
  status: Status
}[] = [
  { title: 'Misión: Fracciones', subject: 'Matemáticas', time: 'Ahora mismo', points: 150, status: 'live' },
  { title: 'Laboratorio del volcán', subject: 'Ciencias', time: 'En 15 min', points: 120, status: 'soon' },
  { title: 'Crea tu primer videojuego', subject: 'Programación', time: 'Hoy 18:00', points: 200, status: 'soon' },
  { title: 'Reto de acuarela digital', subject: 'Arte y diseño', time: 'Ayer', points: 90, status: 'done' },
  { title: 'Conversación en inglés', subject: 'Idiomas', time: 'Ayer', points: 110, status: 'done' },
]

export function DailyChallenges() {
  return (
    <section id="retos" className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal className="text-center">
        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Retos del día</h2>
        <p className="mt-3 text-lg font-semibold text-foreground/60">
          Únete cuando quieras: hay retos en vivo, próximos y ya completados por tu equipo.
        </p>
      </Reveal>

      <ul className="mt-12 space-y-3">
        {challenges.map((c, i) => {
          const meta = statusMeta[c.status]
          return (
            <Reveal as="li" key={c.title} delay={i * 70}>
              <a
                href="#retos"
                className={`group flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/10 sm:p-5 ${
                  c.status === 'done' ? 'opacity-80' : ''
                }`}
              >
                <span className={`grid size-12 shrink-0 place-items-center rounded-2xl ${meta.chip}`}>
                  <meta.icon className="size-6" />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="truncate text-base font-black sm:text-lg">{c.title}</h3>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-black ${meta.chip}`}
                    >
                      {meta.dot && (
                        <span className="size-1.5 animate-pulse-dot rounded-full bg-subject-red" />
                      )}
                      {meta.label}
                    </span>
                  </div>
                  <p className="mt-0.5 text-sm font-bold text-foreground/50">
                    {c.subject} · {c.time}
                  </p>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span className="hidden rounded-full bg-primary/10 px-3 py-1 text-sm font-black text-primary sm:inline">
                    +{c.points} pts
                  </span>
                  <ChevronRight className="size-5 text-foreground/30 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </a>
            </Reveal>
          )
        })}
      </ul>
    </section>
  )
}
