import { cn } from '@/lib/utils'

const palette = [
  'bg-subject-blue',
  'bg-subject-green',
  'bg-subject-purple',
  'bg-subject-red',
  'bg-amber-500',
  'bg-primary',
]

export function TeamAvatar({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  const color = palette[name.charCodeAt(0) % palette.length]

  return (
    <span
      className={cn(
        'grid size-9 place-items-center rounded-full text-xs font-black text-white ring-2 ring-white',
        color,
        className,
      )}
      title={name}
    >
      {initials}
    </span>
  )
}

export function AvatarStack({ names, max = 4 }: { names: string[]; max?: number }) {
  const shown = names.slice(0, max)
  const extra = names.length - shown.length

  return (
    <div className="flex items-center">
      <div className="flex -space-x-2.5">
        {shown.map((name) => (
          <TeamAvatar key={name} name={name} />
        ))}
      </div>
      {extra > 0 && (
        <span className="ml-2 grid size-9 place-items-center rounded-full bg-black/5 text-xs font-black text-foreground/60 ring-2 ring-white">
          +{extra}
        </span>
      )}
    </div>
  )
}
