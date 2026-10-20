'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#eef4ff] via-[#f8fafc] to-[#fff8e8] text-stone-900">

      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-24 w-[400px] h-[400px] rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[300px] h-[300px] rounded-full bg-pink-300/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-[200px] h-[200px] rounded-full bg-emerald-300/15 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">

        {/* Brand Statement */}
        <div className="text-center mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl sm:text-5xl md:text-7xl font-bold text-stone-900">
            Limeria Colours
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-stone-600 text-lg leading-relaxed">
            Transforming spaces through advanced nano coatings,
            premium textures, and sustainable surface innovations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mb-16 lg:mb-20">

          {/* Newsletter */}
          <div className="rounded-3xl border border-white/50 bg-white/70 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

            <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Newsletter
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Stay Inspired
            </h3>

            <p className="text-stone-600 mb-8 leading-relaxed">
              Get exclusive color palettes, design insights, design trends,
              and premium coating innovations delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="
                  flex-1
                  px-5
                  py-4
                  rounded-xl
                  bg-white
                  border
                  border-stone-200
                  focus:outline-none
                  focus:border-amber-500
                "
              />

              <button
                type="submit"
                className="
                  w-full sm:w-auto
    px-8
    py-4
    rounded-xl
    bg-gradient-to-r
    from-stone-900
    to-stone-700
    text-white
    font-semibold
    hover:scale-105
    hover:shadow-xl
    transition-all
                "
              >
                Subscribe
              </button>
            </form>

            <p className="mt-4 text-xs text-stone-500">
              Join 10,000+ subscribers. Unsubscribe anytime.
            </p>
          </div>

          {/* Support */}
          <div className="rounded-3xl border border-white/50 bg-white/70 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)]">

            <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Support
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Need Help?
            </h3>

            <p className="text-stone-600 mb-8 leading-relaxed">
              Our specialists are available to assist with product selection,
              technical guidance, project consultation, and samples.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">

              <a
                href="tel:+919444074638"
                className="
                  group
    flex
    items-center
    gap-3
    p-4 sm:p-5
    bg-white
    rounded-2xl
    border
    border-stone-200
    hover:border-amber-500
    hover:shadow-xl
    hover:-translate-y-1
    transition-all
                "
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center">
                  📞
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <div className="text-xs uppercase tracking-wider text-stone-500">
                    Call Us
                  </div>

                  <div className="font-semibold">
                    +91 9444074638
                  </div>
                </div>
              </a>

              <a
                href="mailto:Wepicananoindia@gmail.com"
                className="
                  group
    flex
    items-center
    gap-3
    p-4 sm:p-5
    bg-white
    rounded-2xl
    border
    border-stone-200
    hover:border-amber-500
    hover:shadow-xl
    hover:-translate-y-1
    transition-all
                "
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center">
                  ✉️
                </div>

                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-stone-500">
                    Email
                  </div>

                  <div className="truncate text-sm sm:text-base font-semibold">
                    wepicananoindia@gmail.com
                  </div>
                </div>
              </a>

            </div>
          </div>
        </div>

        {/* Social Section */}

        <div className="border-t border-stone-300/60 pt-14 pb-14">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            <div className="flex flex-wrap justify-center gap-4">
              <h4 className="text-2xl font-bold text-center md:text-left">
                Follow Our Journey
              </h4>

              <p className="text-stone-500 mt-2 text-center md:text-left">
                Daily inspiration, projects, and innovations.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">

              <a
                href="https://youtube.com/@picananoindia"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-12 h-12
                  rounded-full
                  bg-white
                  shadow-md
                  border
                  border-stone-200
                  flex
                  items-center
                  justify-center
                  hover:bg-red-500
                  hover:text-white
                  hover:scale-110
                  transition-all
                "
              >
                ▶
              </a>

              <a
                href="#"
                className="
                  w-12 h-12
                  rounded-full
                  bg-white
                  shadow-md
                  border
                  border-stone-200
                  flex
                  items-center
                  justify-center
                  hover:bg-pink-500
                  hover:text-white
                  hover:scale-110
                  transition-all
                "
              >
                ◎
              </a>

              <a
                href="#"
                className="
                  w-12 h-12
                  rounded-full
                  bg-white
                  shadow-md
                  border
                  border-stone-200
                  flex
                  items-center
                  justify-center
                  hover:bg-blue-600
                  hover:text-white
                  hover:scale-110
                  transition-all
                "
              >
                f
              </a>

            </div>

          </div>

        </div>

        {/* Footer Bottom */}

        <div className="border-t border-stone-300/60 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            <p className="text-sm text-stone-500 text-center md:text-left">
              © {currentYear} Picanano India. All rights reserved. Made in India 🇮🇳
            </p>

            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-sm font-medium">

              <Link href="/privacy" className="hover:text-amber-600 transition-colors">
                Privacy
              </Link>

              <Link href="/terms" className="hover:text-amber-600 transition-colors">
                Terms
              </Link>

              <Link href="/about" className="hover:text-amber-600 transition-colors">
                About
              </Link>

              <Link href="/contact" className="hover:text-amber-600 transition-colors">
                Contact
              </Link>

            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}