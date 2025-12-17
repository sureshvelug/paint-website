'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ChevronRight } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navLinks = [
    { name: 'Collections', href: '/collections' },
    { name: 'Technology', href: '/technology' },
    { name: 'story', href: '/story' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-stone-200 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="relative z-50">
          <span className={`font-serif text-2xl tracking-tighter font-bold ${isScrolled ? 'text-stone-900' : 'text-stone-900'}`}>
            The Chemical Industry
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 tracking-wide transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button 
            // href="/contact" 
            className={`px-6 py-2.5 text-xs font-bold uppercase tracking-widest border transition-all duration-300 ${
              isScrolled 
                ? 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white' 
                : 'border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white'
            }`}
          >
            Request Sample
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 text-stone-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 bg-stone-50 z-40 flex flex-col justify-center px-8"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif text-stone-900 flex justify-between items-center group"
                >
                  {link.name}
                  <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-600" />
                </Link>
              ))}
              <hr className="border-stone-200" />
              <Link 
                href="/contact"
                className="text-lg font-medium text-stone-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Request Sample Kit
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}
