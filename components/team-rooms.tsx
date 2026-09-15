import { Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { AnimatedProgress } from '@/components/animated-progress'
import { AvatarStack, TeamAvatar } from '@/components/team-avatar'

type Message = { from: string; text: string; me?: boolean }

const rooms: {
  name: string
  subject: string
  accent: string
  soft: string
  members: string[]
  progress: number
  chat: Message[]
}[] = [
  {
    name: 'Equipo Cometas',
    subject: 'Matemáticas · Fracciones',
    accent: 'text-subject-blue',
    soft: 'bg-subject-blue/10',
    members: ['Ana López', 'Beto Ruiz', 'Caro Díaz', 'Diego Sol', 'Emma Vera'],
    progress: 72,
    chat: [
      { from: 'Ana', text: '¡Ya resolví el reto 3! 🎉' },
      { from: 'Beto', text: '¿Me ayudas con las fracciones?' },
      { from: 'Yo', text: 'Voy, juntémonos en la sala', me: true },
    ],
  },
  {
    name: 'Equipo Galaxia',
    subject: 'Ciencias · Sistema solar',
    accent: 'text-subject-green',
    soft: 'bg-subject-green/10',
    members: ['Sofi Paz', 'Leo Mar', 'Nico Rey', 'Vale Cruz'],
    progress: 45,
    chat: [
      { from: 'Sofi', text: 'Encontré datos de Saturno 🪐' },
      { from: 'Leo', text: 'Genial, los sumo al mapa' },
      { from: 'Yo', text: 'Falta poco para el 50%', me: true },
    ],
  },
]

export function TeamRooms() {
  return (
    <section id="equipos" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Salas de equipo</h2>
          <p className="mt-3 text-lg font-semibold text-foreground/60">
            Chatea en tiempo real, avanza juntos en el reto y celebra cada logro.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {rooms.map((room, i) => (
            <Reveal key={room.name} delay={i * 120}>
              <div className="flex h-full flex-col rounded-3xl border border-black/5 bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/10">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className={`grid size-11 place-items-center rounded-2xl ${room.soft} ${room.accent}`}>
                      <Users className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-black leading-tight">{room.name}</h3>
                      <p className="text-sm font-bold text-foreground/50">{room.subject}</p>
                    </div>
                  </div>
                  <AvatarStack names={room.members} max={3} />
                </div>

                {/* Chat */}
                <div className="mt-5 space-y-2.5 rounded-2xl bg-white p-4 ring-1 ring-black/5">
                  {room.chat.map((m, idx) => (
                    <div
                      key={idx}
                      className={`flex items-end gap-2 ${m.me ? 'flex-row-reverse' : ''}`}
                    >
                      {!m.me && <TeamAvatar name={m.from} className="size-7" />}
                      <div
                        className={`max-w-[75%] rounded-2xl px-3.5 py-2 text-sm font-semibold ${
                          m.me
                            ? 'rounded-br-sm bg-primary text-primary-foreground'
                            : 'rounded-bl-sm bg-black/5 text-foreground'
                        }`}
                      >
                        {!m.me && <span className="mr-1 text-xs font-black opacity-60">{m.from}:</span>}
                        {m.text}
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-1.5 pl-9 pt-1">
                    <span className="size-1.5 animate-bounce rounded-full bg-foreground/30 [animation-delay:-0.3s]" />
                    <span className="size-1.5 animate-bounce rounded-full bg-foreground/30 [animation-delay:-0.15s]" />
                    <span className="size-1.5 animate-bounce rounded-full bg-foreground/30" />
                    <span className="ml-1 text-xs font-bold text-foreground/40">escribiendo...</span>
                  </div>
                </div>

                <div className="mt-5">
                  <div className="mb-2 flex items-center justify-between text-sm font-bold">
                    <span className="text-foreground/60">Progreso del reto</span>
                    <span className={room.accent}>{room.progress}%</span>
                  </div>
                  <AnimatedProgress
                    value={room.progress}
                    barClassName={room.accent.replace('text-', 'bg-')}
                  />
                </div>

                <Button className="mt-6 w-full rounded-full font-extrabold shadow-md shadow-primary/20 transition-transform hover:-translate-y-0.5">
                  Unirse al equipo
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
