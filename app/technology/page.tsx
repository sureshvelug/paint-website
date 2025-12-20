'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ShieldCheck, ThermometerSun, Wind } from 'lucide-react';

// Imported images (paths updated to match variable names)
import tech11 from '../../public/tech11.png';
import tech12 from '../../public/tech12.png';
import tech13 from '../../public/tech13.png';
import tech21 from '../../public/tech21.png';
import tech22 from '../../public/tech22.png';
import tech23 from '../../public/tech23.png';
import tech31 from '../../public/tech31.png';
import tech32 from '../../public/tech32.png';
import tech33 from '../../public/tech33.png';

const content = {
  hero: {
    label: "Material Intelligence™",
    title: "Science That Protects.",
    desc: "We engineer materials at the molecular scale. Extreme durability meets antimicrobial safety. Climate-strength performance with lasting beauty.",
  },
  features: [
    {
      category: "Structural Strength",
      title: "Nano-Shield™",
      body: "Buildings fail silently—through corrosion, carbonation, UV fatigue, and micro-cracks. Nano-Shield™ penetrates deep into the surface matrix, reinforcing it at a molecular level to stop damage before it starts.",
      tags: ["Stops Corrosion", "Resists Cracking", "UV Stable"],
      // Updated with local imports
      images: [ tech11, tech12, tech13 ]
    },
    {
      category: "Healthier Air",
      title: "24/7 Germ Defense™",
      body: "Clean isn’t enough. Surfaces must actively protect. Our silver & copper ion systems disrupt microbial metabolism and DNA replication, working continuously without human intervention to destroy microbes on touch.",
      tags: ["Silver & Copper Ion", "Mold Prevention", "No Toxins"],
      // Updated with local imports
      images: [ tech21, tech22, tech23 ]
    },
    {
      category: "Self-Preserving",
      title: "Smart Surface Intelligence™",
      body: "Why should surfaces only look good when they can work intelligently? Our self-cleaning, superhydrophobic technology repels water and dust, while IR & UV reflection drops surface temperatures by 6–12°C.",
      tags: ["Self-Cleaning", "-12°C Heat Drop", "Self-Healing"],
      // Updated with local imports
      images: [ tech31, tech32, tech33 ]
    }
  ],
  specs: [
    { label: "Antimicrobial", value: "24/7", desc: "Continuous defense", icon: ShieldCheck },
    { label: "Heat Reduction", value: "15°C", desc: "Surface temp drop", icon: ThermometerSun },
    { label: "Durability", value: "15Yr+", desc: "Structural warranty", icon: CheckCircle2 },
    { label: "Safety", value: "0%", desc: "Toxic emissions", icon: Wind },
  ]
};

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.7, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const FeatureRow = ({ feature, index }: { feature: any, index: number }) => {
  const [activeTagIndex, setActiveTagIndex] = useState(0);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTagIndex((prev) => (prev + 1) % feature.tags.length);
    }, 3000); 
    return () => clearInterval(timer);
  }, [feature.tags.length]);

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>

      <motion.div 
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2"
      >
        <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl shadow-stone-200/50 group bg-stone-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTagIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image 
                src={feature.images[activeTagIndex]} 
                alt={feature.title} 
                fill 
                className="object-cover"
                priority={index === 0} 
                sizes="(max-width: 768px) 100vw, 50vw"
                placeholder="blur" // Optional: adds blur effect while loading if imported locally
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </AnimatePresence>
          
          {/* Progress Indicators */}
          <div className="absolute bottom-6 left-6 right-6 flex gap-2 z-10">
             {feature.tags.map((_, idx) => (
               <div 
                 key={idx} 
                 className={`h-1 rounded-full transition-all duration-500 ${idx === activeTagIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
               />
             ))}
          </div>
        </div>
      </motion.div>

      {/* Text Side */}
      <div className="w-full lg:w-1/2">
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-[1px] w-8 bg-indigo-600/30"></span>
            <span className="text-indigo-700 font-bold tracking-widest uppercase text-xs">
              {feature.category}
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-6 leading-tight">
            {feature.title}
          </h2>
          
          <p className="text-lg text-stone-600 leading-relaxed mb-8 font-light max-w-md">
            {feature.body}
          </p>
          
          {/* TAGS - UPDATED STYLING */}
          <div className="flex flex-wrap gap-3">
            {feature.tags.map((tag: string, idx: number) => {
              const isActive = idx === activeTagIndex;
              return (
                <div
                  key={idx}
                  className={`
                    group flex items-center justify-center gap-3 border px-8 py-4 rounded-none transition-all duration-300 cursor-default
                    ${isActive 
                      ? 'border-stone-900 bg-stone-900 text-white shadow-lg' 
                      : 'border-stone-300 hover:border-stone-900 hover:bg-stone-50 text-stone-900'
                    }
                  `}
                >
                  <span className="tracking-wide text-sm font-medium">
                    {tag}
                  </span>
                </div>
              );
            })}
          </div>

        </FadeIn>
      </div>
    </div>
  );
};

export default function NanogradsPage() {
  return (
    <main className="bg-white text-stone-900 font-sans selection:bg-indigo-50 selection:text-indigo-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <FadeIn>
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-indigo-900 text-xs font-bold tracking-widest uppercase mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            {content.hero.label}
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-medium tracking-tight text-stone-900 mb-8 leading-[1.1]">
            {content.hero.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-500 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            {content.hero.desc}
          </p>
        </FadeIn>
      </section>

      {/* 2. SPECS SECTION */}
      <section className="border-y border-stone-100 bg-stone-50/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x divide-stone-100/50">
          {content.specs.map((spec, i) => (
            <motion.div 
              key={i} 
              className="p-10 text-center group hover:bg-white transition-colors duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <spec.icon className="w-6 h-6 mx-auto mb-4 text-indigo-600 opacity-80" />
              <div className="text-4xl md:text-5xl font-serif font-medium text-stone-900 mb-2">{spec.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-1">{spec.label}</div>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        {content.features.map((feature, i) => (
          <FeatureRow key={i} feature={feature} index={i} />
        ))}
      </section>

      {/* 4. THE DIFFERENCE (Bento Grid) */}
      <section className="py-24 px-6 md:px-12 bg-stone-900 text-stone-200 mt-12 overflow-hidden relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-serif font-medium text-white mb-6">The Nanograds Difference</h2>
            <p className="text-stone-400 max-w-2xl mx-auto font-light text-lg">
              Six pillars of advanced protection integrated into every coat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Antimicrobial", desc: "Silver & Copper ion defense matrix." },
              { title: "Climate Eng.", desc: "IR/UV temperature reduction technology." },
              { title: "Structural", desc: "Anti-carbonation concrete shield." },
              { title: "Multi-Layer", desc: "Stain, scratch & impact protection." },
              { title: "Safe Air", desc: "Ultra-low VOC & breathable membrane." },
              { title: "Sustainable", desc: "Low-waste renovation lifecycle." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.05)" }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-sm border border-white/10 transition-all duration-300 group"
              >
                <div className="text-indigo-400 font-mono text-xs mb-4 opacity-50 group-hover:opacity-100 transition-opacity">0{i + 1}</div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">{item.title}</h3>
                <p className="text-stone-400 text-sm font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
