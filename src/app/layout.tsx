import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://localhost:3000'),
  title: 'Patricio Bonfigli - Portfolio',
  description: 'Portfolio for my projects',
  openGraph: {
    title: 'Patricio Bonfigli - Portfolio',
    description:'Portafolio de Patricio Bonfigli, desarrollador FullStack - FrontEnd con 1 año de experiencia',
    type: 'website',
    url:'https://localhost:3000',
    images: [{
      url:'imagen url',
      height: 240,
      width:240
    }],
    locale: 'es_AR',
    alternateLocale: 'en_US',
    siteName: 'Portfolio de Patricio Bonfigli',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
