'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, ShoppingBag } from 'lucide-react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cartCount, setCartCount] = useState(3) 
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navLinks = [
    { name: 'Collections', href: '/collections' },
    { name: 'Technology', href: '/technology' },
    { name: 'Story', href: '/story' },
  ]

  return (
    <motion.header
      // UPDATED: Fixed white background, only padding/border changes on scroll
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'border-b border-stone-200 py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="relative z-50">
          <span className="font-serif text-2xl tracking-tighter font-bold text-stone-900">
            The Chemical Industry
          </span>
        </Link>

        {/* DESKTOP NAV */}
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

        {/* DESKTOP ACTIONS */}
        <div className="hidden md:flex items-center gap-6">
          <Link 
            href="/cart"
            className="relative p-2 text-stone-900 hover:text-amber-700 transition-colors"
          >
            <ShoppingBag strokeWidth={1.5} size={22} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 h-4 w-4 bg-amber-700 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          <button 
            className="px-6 py-2.5 text-xs font-bold uppercase tracking-widest border border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white transition-all duration-300"
          >
            Request Sample
          </button>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-4 md:hidden z-50">
           <Link href="/cart" className="relative text-stone-900">
             <ShoppingBag strokeWidth={1.5} size={20} />
             {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-amber-700 text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
             )}
           </Link>

           <button 
             className="text-stone-900"
             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
           >
             {isMobileMenuOpen ? <X /> : <Menu />}
           </button>
        </div>

        {/* MOBILE MENU TRAY */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-white z-40 flex flex-col justify-center px-8"
            >
              <div className="flex flex-col gap-8">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-3xl font-serif text-stone-900 flex justify-between items-center group border-b border-stone-100 pb-4"
                  >
                    {link.name}
                    <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-600" />
                  </Link>
                ))}
                
                <div className="pt-4 space-y-6">
                  <Link 
                    href="/cart"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-stone-600 flex items-center gap-2 hover:text-stone-900"
                  >
                    <ShoppingBag size={20} />
                    View Bag ({cartCount})
                  </Link>
                  <Link 
                    href="/contact"
                    className="text-lg font-medium text-stone-600 block hover:text-stone-900"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Request Sample Kit
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
