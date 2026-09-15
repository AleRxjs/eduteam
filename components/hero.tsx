import { Rocket, Play, Trophy, Star, Medal, Target } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { AnimatedProgress } from '@/components/animated-progress'
import { AvatarStack } from '@/components/team-avatar'

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-24 top-24 size-72 rounded-full bg-subject-blue/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 size-72 rounded-full bg-subject-purple/20 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-extrabold text-primary">
              <Star className="size-4 fill-primary" />
              Aprendizaje colaborativo
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-balance text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Aprende en{' '}
              <span className="bg-gradient-to-r from-subject-blue via-subject-purple to-subject-red bg-clip-text text-transparent">
                equipo
              </span>
              , juega y crea
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-pretty text-lg font-semibold text-foreground/60">
              Forma tu equipo, resuelve retos diarios y explora los temas que más te gustan con
              actividades interactivas. Nada de contenido aburrido: aquí se aprende jugando.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-full px-7 text-base font-extrabold shadow-lg shadow-primary/30 transition-transform hover:-translate-y-1"
              >
                <Rocket className="size-5" />
                Empezar ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 bg-white px-7 text-base font-extrabold transition-transform hover:-translate-y-1 hover:text-primary"
              >
                <Play className="size-5" />
                Ver cómo funciona
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <dl className="mt-10 flex flex-wrap gap-8">
              {[
                { n: '12k+', l: 'Estudiantes' },
                { n: '850', l: 'Equipos activos' },
                { n: '300+', l: 'Retos creados' },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="text-3xl font-black text-foreground">{s.n}</dt>
                  <dd className="text-sm font-bold text-foreground/50">{s.l}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Reto del día card */}
        <Reveal delay={200} className="relative">
          <div className="relative mx-auto max-w-md">
            {/* Floating chips */}
            <div className="animate-edu-float absolute -left-4 -top-4 z-10 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl shadow-black/10">
              <span className="grid size-8 place-items-center rounded-xl bg-amber-400 text-white">
                <Trophy className="size-4" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-black">+240 pts</p>
                <p className="text-[11px] font-bold text-foreground/50">esta semana</p>
              </div>
            </div>

            <div
              className="animate-edu-float-slow absolute -right-3 top-24 z-10 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-xl shadow-black/10"
              style={{ animationDelay: '0.6s' }}
            >
              <span className="grid size-8 place-items-center rounded-xl bg-subject-purple text-white">
                <Medal className="size-4" />
              </span>
              <p className="text-sm font-black">
                Insignia
                <span className="block text-[11px] font-bold text-foreground/50">Explorador</span>
              </p>
            </div>

            <div className="rounded-[2rem] border border-black/5 bg-white p-6 shadow-2xl shadow-primary/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Target className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-primary">
                      Reto del día
                    </p>
                    <h3 className="text-lg font-black leading-tight">Misión: Fracciones</h3>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-subject-red/10 px-3 py-1 text-xs font-black text-subject-red">
                  <span className="size-2 animate-pulse-dot rounded-full bg-subject-red" />
                  EN VIVO
                </span>
              </div>

              <p className="mt-4 text-sm font-semibold text-foreground/60">
                Resuelve 5 retos con tu equipo antes de que acabe el tiempo y desbloquea la
                insignia dorada.
              </p>

              <div className="mt-5">
                <div className="mb-2 flex items-center justify-between text-sm font-bold">
                  <span className="text-foreground/60">Progreso del equipo</span>
                  <span className="text-primary">72%</span>
                </div>
                <AnimatedProgress value={72} barClassName="bg-gradient-to-r from-primary to-subject-blue" />
              </div>

              <div className="mt-5 flex items-center justify-between">
                <AvatarStack
                  names={['Ana López', 'Beto Ruiz', 'Caro Díaz', 'Diego Sol', 'Emma Vera']}
                />
                <span className="text-sm font-bold text-foreground/50">Equipo Cometas</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
