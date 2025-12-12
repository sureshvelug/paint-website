'use client'

import { useState } from 'react'

export default function TestimonialCarousel() {
  const testimonials = [
    {
      quote: "The finish is unlike any conventional paint — soft, pure, and alive. You can feel the air quality difference.",
      author: "Ananya Desai",
      role: "Interior Designer",
      company: "Studio Essence",
      rating: 5
    },
    {
      quote: "A paint that combines luxury, science, and conscience — truly a new era in sustainable design.",
      author: "Rohit Mehra",
      role: "Architect",
      company: "Mehra Associates",
      rating: 5
    },
    {
      quote: "Outstanding quality and sustainability. Our hotel guests consistently compliment the wall textures and finishes.",
      author: "Priya Sharma",
      role: "Hotel Manager",
      company: "The Grand Palace",
      rating: 5
    }
  ]

  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-black/5 text-black rounded-full">
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-black">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Trusted by designers, architects, and homeowners across the country
          </p>
        </div>

        {/* Main Carousel Container */}
        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl p-8 md:p-12 border-2 border-gray-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] transition-all duration-300">
            {/* Star Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-black fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            {/* Quote Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-full bg-black/5 flex items-center justify-center">
                <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>
              </div>
            </div>

            {/* Quote Text */}
            <p className="text-lg md:text-xl text-gray-800 mb-8 leading-relaxed text-center max-w-3xl mx-auto font-light">
              "{testimonials[current].quote}"
            </p>

            {/* Author Info */}
            <div className="text-center border-t-2 border-gray-100 pt-6">
              <div className="font-serif font-bold text-lg text-black mb-1">
                {testimonials[current].author}
              </div>
              <div className="text-base text-gray-600 mb-1 font-light">
                {testimonials[current].role}
              </div>
              <div className="text-sm text-gray-500 font-light">
                {testimonials[current].company}
              </div>
            </div>
          </div>

          {/* Navigation Arrows - Desktop */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-black items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-black items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center items-center gap-3 mt-10">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Show testimonial ${idx + 1}`}
              className={`transition-all duration-300 ${
                current === idx 
                  ? 'w-10 h-2.5 bg-black rounded-full' 
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400 rounded-full'
              }`}
            />
          ))}
        </div>

        {/* Mobile Arrow Navigation */}
        <div className="flex md:hidden justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white border-2 border-gray-200 hover:border-black flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
