'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

type AnimatedProgressProps = {
  value: number
  className?: string
  barClassName?: string
  /** ms delay before the fill animates. */
  delay?: number
}

export function AnimatedProgress({
  value,
  className,
  barClassName,
  delay = 200,
}: AnimatedProgressProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => setWidth(value), delay)
          observer.disconnect()
          return () => clearTimeout(t)
        }
      },
      { threshold: 0.4 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [value, delay])

  return (
    <div
      ref={ref}
      className={cn('h-2.5 w-full overflow-hidden rounded-full bg-black/10', className)}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={cn(
          'h-full rounded-full bg-primary transition-[width] duration-1000 ease-out',
          barClassName,
        )}
        style={{ width: `${width}%` }}
      />
    </div>
  )
}
