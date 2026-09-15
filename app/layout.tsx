import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Nunito } from 'next/font/google'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'EduTeam · Aprende en equipo, juega y crea',
  description:
    'EduTeam es la plataforma de aprendizaje colaborativo para primaria y secundaria. Forma equipos, resuelve retos diarios y explora temas con actividades interactivas.',
  generator: 'v0.app',
  keywords: [
    'educación',
    'aprendizaje colaborativo',
    'primaria',
    'secundaria',
    'retos',
    'equipos',
    'EduTeam',
  ],
  openGraph: {
    title: 'EduTeam · Aprende en equipo, juega y crea',
    description:
      'Forma equipos, resuelve retos diarios y explora temas con actividades interactivas.',
    type: 'website',
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#7c3aed',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`light ${nunito.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
