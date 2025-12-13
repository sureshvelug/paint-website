'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-stone-50 border-t border-stone-200 text-stone-900 font-sans">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Top Section - Newsletter & Contact */}
        <div className="grid md:grid-cols-2 gap-16 mb-20">
          
          {/* Newsletter Section */}
          <div>
            <span className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-4 block">
               Newsletter
            </span>
            <h3 className="text-3xl font-serif text-stone-900 mb-4">
              Stay Inspired
            </h3>
            <p className="text-stone-500 mb-8 leading-relaxed font-light max-w-md">
              Get exclusive color palettes, design tips, and special offers delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-4 rounded-none bg-white border border-stone-300 text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 focus:ring-0 transition-all"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-stone-900 text-white font-medium tracking-wide hover:bg-amber-700 transition-all duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-xs text-stone-400 mt-4 font-light">
              Join 10,000+ subscribers. Unsubscribe anytime.
            </p>
          </div>

          {/* Contact & Support Section */}
          <div className="md:pl-12 border-l-0 md:border-l border-stone-200">
            <span className="text-amber-600 text-xs font-bold tracking-widest uppercase mb-4 block">
               Support
            </span>
            <h3 className="text-3xl font-serif text-stone-900 mb-4">
              Need Help?
            </h3>
            <p className="text-stone-500 mb-8 leading-relaxed font-light">
              Our team is here to assist you with product selection, samples, and technical support.
            </p>
            
            {/* Contact Methods Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Phone */}
              <a 
                href="tel:+919876543210" 
                className="group flex items-center gap-4 p-4 border border-stone-200 hover:border-stone-900 hover:bg-white transition-all duration-300"
              >
                <div className="w-10 h-10 bg-stone-100 flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-stone-400 uppercase tracking-wider mb-1">Call Us</div>
                  <div className="font-serif text-lg">+91 98765 43210</div>
                </div>
              </a>

              {/* Email */}
              <a 
                href="mailto:support@ecoluxurypaints.com" 
                className="group flex items-center gap-4 p-4 border border-stone-200 hover:border-stone-900 hover:bg-white transition-all duration-300"
              >
                <div className="w-10 h-10 bg-stone-100 flex items-center justify-center text-stone-900 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-stone-400 uppercase tracking-wider mb-1">Email</div>
                  <div className="font-serif text-lg">support@eco.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="border-t border-stone-200 pt-12 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
             <div className="text-center md:text-left">
                <h4 className="text-lg font-serif text-stone-900 mb-1">Follow Our Journey</h4>
                <p className="text-stone-500 font-light text-sm">Join our community for daily inspiration.</p>
             </div>
          
             <div className="flex gap-4">
                {[
                   { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                   { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                   { name: 'LinkedIn', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' },
                ].map((social) => (
                   <a 
                     key={social.name}
                     href="#"
                     className="w-10 h-10 border border-stone-300 rounded-full flex items-center justify-center text-stone-500 hover:text-stone-900 hover:border-stone-900 transition-all duration-300"
                     aria-label={social.name}
                   >
                     <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                     </svg>
                   </a>
                ))}
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div className="text-center md:text-left">
              <div className="font-serif text-xl text-stone-900 tracking-tight">Eco-Luxury Paints</div>
              <div className="text-xs text-stone-400 mt-1 font-light">
                © {currentYear} All rights reserved. Made in India 🇮🇳
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-xs font-medium uppercase tracking-wider text-stone-500">
              <Link href="/privacy" className="hover:text-amber-600 transition-colors">Privacy</Link>
              <Link href="/terms" className="hover:text-amber-600 transition-colors">Terms</Link>
              <Link href="/about" className="hover:text-amber-600 transition-colors">About</Link>
              <Link href="/contact" className="hover:text-amber-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
