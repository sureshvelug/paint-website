// app/components/HomeContent.tsx
'use client';

import React from "react";
import Image from "next/image";
import Hero from "./Hero";
import ValueProps from "./ValueProps";
import ColorPreview from "./ColorPreview";
import SustainabilityMetrics from "./SustainabilityMetrics";
import Testimonials from "./TestimonialCarousel";
import { ContactForm } from "./ContactForm";

// --- ICONS ---
const ArrowRight = () => (
  <svg
    className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

export default function HomeContent() {
  return (
    <div className="bg-white text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* 1. HERO SECTION */}
      <Hero
        title="Colors that make your home feel alive."
        subtitle="Paint good. Feel good."
        primaryCTA={{ text: "Request a Free Sample", href: "/contact#samples" }}
        secondaryCTA={{ text: "Explore Collections", href: "/colors" }}
        imageSrc="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80"
      />

      {/* 2. VALUE PROPS */}
      <ValueProps />

      {/* 3. SERVICES SECTION - Premium Grid */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-white border border-slate-200 text-slate-600 rounded-full shadow-sm">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
              Premium Decorative Finishes
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-light leading-relaxed">
              Transform flat walls into masterpieces with textures that bring
              depth, character, and artistry to your space.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Textured Paint",
                desc: "Tactile depth & dimension",
                image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
              },
              {
                title: "Metallic Finishes",
                desc: "Luminous light-reflecting surfaces",
                image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
              },
              {
                title: "Oxidation Effects",
                desc: "Industrial chic rust & patina",
                image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
              },
              {
                title: "Custom Finishes",
                desc: "Bespoke artistry for unique spaces",
                image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative h-[420px] overflow-hidden rounded-[2rem] bg-white shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 cursor-pointer"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-serif font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 transform translate-y-4 group-hover:translate-y-0 font-light">
                    {item.desc}
                  </p>
                  <div className="flex items-center text-white text-xs font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    View Details <ArrowRight />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="inline-flex items-center px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm group">
              Request Consultation
              <ArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* 4. COLOR PREVIEW SECTION */}
      <section className="bg-white border-y border-slate-100">
        <ColorPreview />
      </section>


      {/* 6. METRICS & TRUST */}
      <SustainabilityMetrics />

      {/* 7. TESTIMONIALS */}
      <Testimonials />

      {/* 8. CONTACT FORM */}
      <div className="bg-slate-50 py-24 border-t border-slate-200">
        <ContactForm />
      </div>
    </div>
  );
}
