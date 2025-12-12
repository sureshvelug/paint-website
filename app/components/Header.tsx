'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Enhanced scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'technology', href: '/technology' },
    { name: 'story', href: '/story' },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
          : 'bg-white/95 backdrop-blur-sm border-b border-gray-200/30'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-14' : 'h-16'
        }`}>
          
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-gray-900 tracking-tight hover:text-gray-700 transition-colors"
          >
            Eco-Luxury Paints
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-200 group ${
                  pathname === item.href ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.name}
                {/* Animated underline */}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gray-900 transition-all duration-200 ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Right: Search, Cart, Get Samples */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-all duration-200"
              aria-label="Search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 text-gray-600 hover:text-gray-900 transition-all duration-200 relative"
              aria-label="Cart"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-white">
                0
              </span>
            </Link>

            {/* Get Samples Button */}
            <Link
              href="/contact"
              className="hidden md:flex bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            >
              Get Samples
            </Link>

            {/* Mobile Menu */}
            <button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="relative w-5 h-5">
                <span className={`absolute left-0 top-1 w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
                  mobileMenuOpen ? 'rotate-45 top-2' : ''
                }`} />
                <span className={`absolute left-0 top-2 w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`absolute left-0 top-3 w-5 h-0.5 bg-gray-900 transition-all duration-300 ${
                  mobileMenuOpen ? '-rotate-45 top-2' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-gray-200/50 backdrop-blur-xl">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-base font-medium rounded-lg mx-2 transition-colors ${
                  pathname === item.href ? 'bg-gray-100 text-gray-900' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="px-2 pt-4 space-y-2">
              <button className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="font-medium">Search</span>
              </button>

              <Link href="/cart" className="flex items-center gap-3 w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                <span className="font-medium">Cart</span>
                <span className="ml-auto bg-gray-900 text-white text-xs px-2 py-1 rounded-full">0</span>
              </Link>

              <Link href="/contact" className="block text-center bg-gray-900 text-white px-5 py-3 rounded-full text-base font-medium mt-4" onClick={() => setMobileMenuOpen(false)}>
                Get Samples
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
