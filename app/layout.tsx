import type { Metadata } from 'next'
import './globals.css'
import '@/styles/globals.css'
import '@/styles/about.css'

export const metadata: Metadata = {
  title: 'Bolcckh',
  description: 'Crafted System',
  generator: 'Conflux Group',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
