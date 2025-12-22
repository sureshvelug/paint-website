import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

import { CartProvider } from './context/CartContext'
export const metadata: Metadata = {
  title: {
    default: 'Limeria Colours | Nano-Based Low VOC Premium Paints',
    template: '%s | Limeria Colours'
  },
  description: 'Discover nanotechnology-driven, VOC-free paints that combine luxury with environmental responsibility. Limeria Colours — redefining premium walls through science and sustainability.',
  keywords: ['nano paint', 'low VOC paint India', 'eco paint', 'sustainable coatings', 'mineral paint', 'LEED certified paint', 'green chemistry coatings', 'Limeria Colours', 'Limeria'],
  authors: [{ name: 'Limeria Colours' }],
  creator: 'Limeria Colours',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ecoluxurypaints.com',
    siteName: 'Limeria Colours',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Limeria Colours - Nano-Based Sustainable Paints',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Limeria Colours | Nano-Based Low VOC Premium Paints',
    description: 'Sustainable luxury paint with nano-mineral technology',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', 
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-brand-offwhite text-gray-900 antialiased font-primary">
        <main className="min-h-screen">
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
        </main>

        {/* <Analytics /> Vercel Analytics for performance tracking */}
      </body>
    </html>
  )
}
