import { Calculator, FlaskConical, Code2, Palette, Languages, ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const topics = [
  {
    name: 'Matemáticas',
    desc: 'Números, lógica y retos de cálculo en equipo.',
    icon: Calculator,
    text: 'text-subject-blue',
    bg: 'bg-subject-blue',
    soft: 'bg-subject-blue/10',
    activities: 42,
  },
  {
    name: 'Ciencias',
    desc: 'Experimenta, observa y descubre el mundo.',
    icon: FlaskConical,
    text: 'text-subject-green',
    bg: 'bg-subject-green',
    soft: 'bg-subject-green/10',
    activities: 38,
  },
  {
    name: 'Programación',
    desc: 'Crea juegos y apps resolviendo puzzles.',
    icon: Code2,
    text: 'text-subject-purple',
    bg: 'bg-subject-purple',
    soft: 'bg-subject-purple/10',
    activities: 29,
  },
  {
    name: 'Arte y diseño',
    desc: 'Dibuja, diseña y expresa tu creatividad.',
    icon: Palette,
    text: 'text-subject-red',
    bg: 'bg-subject-red',
    soft: 'bg-subject-red/10',
    activities: 24,
  },
  {
    name: 'Idiomas',
    desc: 'Practica y conversa con retos divertidos.',
    icon: Languages,
    text: 'text-subject-gray',
    bg: 'bg-subject-gray',
    soft: 'bg-subject-gray/10',
    activities: 33,
  },
]

export function TopicsSection() {
  return (
    <section id="temas" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Temas de interés</h2>
        <p className="mt-3 text-lg font-semibold text-foreground/60">
          Elige tu favorito y súmate a un equipo para explorarlo con actividades interactivas.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic, i) => (
          <Reveal key={topic.name} delay={i * 80}>
            <a
              href="#temas"
              className="group flex h-full flex-col rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/10"
            >
              <div
                className={`grid size-14 place-items-center rounded-2xl ${topic.soft} ${topic.text} transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
              >
                <topic.icon className="size-7" />
              </div>
              <h3 className="mt-5 text-xl font-black">{topic.name}</h3>
              <p className="mt-1.5 flex-1 text-sm font-semibold text-foreground/55">{topic.desc}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className={`rounded-full ${topic.soft} px-3 py-1 text-xs font-black ${topic.text}`}>
                  {topic.activities} actividades
                </span>
                <span
                  className={`flex items-center gap-1 text-sm font-extrabold ${topic.text} opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 -translate-x-2`}
                >
                  Explorar <ArrowRight className="size-4" />
                </span>
              </div>
              <span className={`mt-5 h-1.5 w-full rounded-full ${topic.bg} origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100`} />
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
