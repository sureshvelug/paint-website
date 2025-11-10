import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Foooter'
// import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Eco-Luxury Paints | Nano-Based Low VOC Premium Paints',
    template: '%s | Eco-Luxury Paints'
  },
  description: 'Discover nanotechnology-driven, VOC-free paints that combine luxury with environmental responsibility. Eco-Luxury Paints — redefining premium walls through science and sustainability.',
  keywords: ['nano paint', 'low VOC paint India', 'eco paint', 'sustainable coatings', 'mineral paint', 'LEED certified paint', 'green chemistry coatings'],
  authors: [{ name: 'Eco-Luxury Paints' }],
  creator: 'Eco-Luxury Paints',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://ecoluxurypaints.com',
    siteName: 'Eco-Luxury Paints',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Eco-Luxury Paints - Nano-Based Sustainable Paints',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eco-Luxury Paints | Nano-Based Low VOC Premium Paints',
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
    google: 'your-google-verification-code', // Add after Google Search Console setup
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-brand-offwhite text-gray-900 antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        {/* <Analytics /> Vercel Analytics for performance tracking */}
      </body>
    </html>
  )
}
