'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// --- CONDENSED CONTENT DATA ---
const content = {
  hero: {
    label: "Material Intelligence™",
    title: "Science That Protects.",
    desc: "We engineer materials at the molecular scale. Extreme durability meets antimicrobial safety. Climate-strength performance with lasting beauty.",
  },
  features: [
    {
      category: "Biological Defense",
      title: "Antimicrobial & Structural",
      body: "Surfaces that neutralize pathogens instantly. Our Silver & Copper-Ion matrix provides broad-spectrum defense, while our Anti-Carbonation barrier prevents deep structural decay.",
      tags: ["Silver-Ion Shield", "Contact-Kill", "Anti-Carbonation"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" // Lab/Tech
    },
    {
      category: "Climate Engineering",
      title: "Active Cooling Matrix",
      body: "Engineered for extremes. Our IR/UV reflection technology drops surface temperatures by 6-12°C, reducing HVAC loads while resisting thermal cracking.",
      tags: ["-12°C Heat Drop", "Thermal Elasticity", "Impact Grid"],
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2068&auto=format&fit=crop" // White Texture
    },
    {
      category: "Aesthetic Stability",
      title: "Living Beauty",
      body: "Luxury that breathes. Our Vapor-Permeable structure prevents blistering and mold. With Air Crock Resistance, colors stay vibrant and pristine for decades.",
      tags: ["No Fading", "Breathable", "Ultra-Low VOC"],
      // UPDATED IMAGE: Clean, bright interior with natural light (Unsplash)
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop" 
    }
  ],
  specs: [
    { label: "Antimicrobial", value: "99.9%", desc: "Pathogen reduction" },
    { label: "Heat Reduction", value: "12°C", desc: "Surface temp drop" },
    { label: "Durability", value: "10Yr+", desc: "Structural warranty" },
    { label: "Safety", value: "0%", desc: "Toxic emissions" },
  ]
};

// --- COMPONENTS ---

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function NanogradsPage() {
  return (
    <main className="bg-white text-slate-900 font-sans selection:bg-indigo-50 selection:text-indigo-900">
      
      {/* 1. HERO SECTION: Clean & Centered */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold tracking-wider uppercase mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"/>
            {content.hero.label}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6">
            {content.hero.title}
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            {content.hero.desc}
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-8 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 text-slate-600 font-medium rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors">
              View Technology
            </button>
          </div>
        </FadeIn>
      </section>

      {/* 2. STATS GRID: Quick proof points */}
      <section className="border-y border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
          {content.specs.map((spec, i) => (
            <div key={i} className="p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{spec.value}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">{spec.label}</div>
              <div className="text-sm text-slate-500">{spec.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MAIN FEATURES: Alternating Clean Layout */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        {content.features.map((feature, i) => {
          const isEven = i % 2 === 0;
          return (
            <div key={i} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
              
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full lg:w-1/2"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 bg-slate-100">
                  <Image 
                    src={feature.image} 
                    alt={feature.title} 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent" />
                </div>
              </motion.div>

              {/* Text Side */}
              <div className="w-full lg:w-1/2">
                <FadeIn delay={0.2}>
                  <span className="text-indigo-600 font-bold tracking-widest uppercase text-xs mb-4 block">
                    {feature.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-slate-500 leading-relaxed mb-8">
                    {feature.body}
                  </p>
                  
                  {/* Tags / Pills */}
                  <div className="flex flex-wrap gap-3">
                    {feature.tags.map((tag, idx) => (
                      <span key={idx} className="px-4 py-2 bg-slate-50 border border-slate-100 rounded-md text-sm font-semibold text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </FadeIn>
              </div>
            </div>
          );
        })}
      </section>

      {/* 4. THE DIFFERENCE: Bento Grid */}
      <section className="py-24 px-6 md:px-12 bg-slate-900 text-white rounded-t-[3rem] mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Nanograds Difference</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Six pillars of advanced protection integrated into every coat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Antimicrobial", desc: "Silver & Copper ion defense." },
              { title: "Climate Eng.", desc: "IR/UV temperature reduction." },
              { title: "Structural", desc: "Anti-carbonation shield." },
              { title: "Multi-Layer", desc: "Stain & scratch protection." },
              { title: "Safe Air", desc: "Ultra-low VOC & breathable." },
              { title: "Sustainable", desc: "Low-waste renovation." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                <div className="text-indigo-400 font-mono text-xs mb-4">0{i + 1}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FOOTER CTA */}
      <section className="py-24 px-6 text-center">
        <FadeIn>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Luxury that Lasts.
          </h2>
          <p className="text-slate-500 mb-10 text-lg">
            Where advanced material science becomes everyday protection.
          </p>
          <button className="px-10 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200">
            Get Started
          </button>
        </FadeIn>
      </section>

    </main>
  );
}
