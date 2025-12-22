'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'; 

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { cartCount } = useCart(); 
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navLinks = [
    { name: 'Collections', href: '/collections' },
    { name: 'Technology', href: '/technology' },
    { name: 'Our Story', href: '/story' },
  ]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'h-20 border-b border-stone-200' : 'h-24'
      }`}
    >
      <div className="h-full container mx-auto px-6 md:px-12 flex justify-between items-center relative">
        
        {/* 1. LOGO (Left) - big and cleanly aligned */}
        <Link href="/" className="relative z-50 shrink-0 flex items-center">
          <div className="h-14 md:h-16 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/lemiria-logo.png"
              alt="Limeria Colours"
              className="h-40 ml-20 mb-10 auto object-contain"
            />
          </div>
        </Link>

        {/* 2. CENTER NAVIGATION - Absolute Positioning ensures it doesn't push other elements */}
        <nav className="hidden md:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-stone-600 hover:text-stone-900 tracking-wide transition-colors uppercase"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-6 flex-shrink-0">
          <Link href="/cart" className="relative p-2 text-stone-900 hover:text-amber-700 transition-colors">
            <ShoppingBag strokeWidth={1.5} size={22} />
            <AnimatePresence>
              {cartCount > 0 && (
                <motion.span 
                  initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}
                  className="absolute top-0 right-0 h-4 w-4 bg-amber-700 text-white text-[10px] font-bold flex items-center justify-center rounded-full"
                >
                  {cartCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Link>
        </div>
        
        <div className="flex items-center gap-4 md:hidden z-50">
           <Link href="/cart" className="relative text-stone-900">
             <ShoppingBag strokeWidth={1.5} size={20} />
             {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-amber-700 text-white text-[9px] font-bold flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
             )}
           </Link>
           <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
             {isMobileMenuOpen ? <X /> : <Menu />}
           </button>
        </div>
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
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.header>
  )
}
