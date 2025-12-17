'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, ThermometerSun, Wind } from 'lucide-react';

// --- CONTENT DATA ---
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
      // PEXELS 4K IMAGES
      images: [
        // 1. Corrosion/Structure (Steel/Metal focus)
        "https://images.pexels.com/photos/1493088/pexels-photo-1493088.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&dpr=1", 
        // 2. Cracking/Concrete (Smooth Texture focus)
        "https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&dpr=1",
        // 3. UV/Sun (Bright Exterior focus)
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&dpr=1"
      ]
    },
    {
      category: "Healthier Air",
      title: "24/7 Germ Defense™",
      body: "Clean isn’t enough. Surfaces must actively protect. Our silver & copper ion systems disrupt microbial metabolism and DNA replication, working continuously without human intervention to destroy microbes on touch.",
      tags: ["Silver & Copper Ion", "Mold Prevention", "No Toxins"],
      // PEXELS 4K IMAGES
      images: [
        // 1. Silver/Ion (Abstract Micro/Science)
        "https://images.pexels.com/photos/3735707/pexels-photo-3735707.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&dpr=1",
        // 2. Mold Prevention (Clean White Interior)
        "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&dpr=1",
        // 3. No Toxins (Fresh Air/Nature concept)
        "https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&dpr=1"
      ]
    },
    {
      category: "Self-Preserving",
      title: "Smart Surface Intelligence™",
      body: "Why should surfaces only look good when they can work intelligently? Our self-cleaning, superhydrophobic technology repels water and dust, while IR & UV reflection drops surface temperatures by 6–12°C.",
      tags: ["Self-Cleaning", "-12°C Heat Drop", "Self-Healing"],
      // PEXELS 4K IMAGES
      images: [
        // 1. Self Cleaning (Water Droplets/Hydrophobic)
        "https://images.pexels.com/photos/459301/pexels-photo-459301.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&dpr=1",
        // 2. Heat Drop (Bright Sun/Reflection)
        "https://images.pexels.com/photos/256514/pexels-photo-256514.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&dpr=1",
        // 3. Self Healing (Smooth Abstract Surface)
        "https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=3840&h=2160&dpr=1"
      ]
    }
  ],
  specs: [
    { label: "Antimicrobial", value: "24/7", desc: "Continuous defense", icon: ShieldCheck },
    { label: "Heat Reduction", value: "12°C", desc: "Surface temp drop", icon: ThermometerSun },
    { label: "Durability", value: "10Yr+", desc: "Structural warranty", icon: CheckCircle2 },
    { label: "Safety", value: "0%", desc: "Toxic emissions", icon: Wind },
  ]
};

// --- ANIMATION COMPONENTS ---
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

// --- FEATURE ROW COMPONENT (Handles Rotation) ---
const FeatureRow = ({ feature, index }: { feature: any, index: number }) => {
  const [activeTagIndex, setActiveTagIndex] = useState(0);
  const isEven = index % 2 === 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTagIndex((prev) => (prev + 1) % feature.tags.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(timer);
  }, [feature.tags.length]);

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
      
      {/* Image Side - Animated Slider */}
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
              animate={{ opacity: 1, scale: 1 } as const}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }} // Slower, smoother crossfade
              className="absolute inset-0"
            >
              <Image 
                src={feature.images[activeTagIndex]} 
                alt={feature.title} 
                fill 
                className="object-cover"
                priority={index === 0} // Load first row immediately
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </motion.div>
          </AnimatePresence>
          
          {/* Optional: Indicator Dots on Image */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
            {feature.tags.map((_, dotIdx) => (
              <div 
                key={dotIdx}
                className={`h-1.5 rounded-full transition-all duration-500 ${dotIdx === activeTagIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'}`}
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
          
          {/* TAGS - Bold Business Points */}
          <div className="flex flex-wrap gap-3">
            {feature.tags.map((tag: string, idx: number) => {
              const isActive = idx === activeTagIndex;
              return (
                <motion.span 
                  key={idx}
                  animate={{ 
                    backgroundColor: isActive ? "rgb(28 25 23)" : "rgba(250, 250, 249, 1)", // stone-900 vs stone-50
                    color: isActive ? "#ffffff" : "#57534e", // white vs stone-600
                    scale: isActive ? 1.05 : 1,
                    borderColor: isActive ? "rgb(28 25 23)" : "rgb(229 231 235)"
                  }}
                  className={`
                    px-5 py-2.5 border rounded-sm text-xs uppercase tracking-widest cursor-default transition-all duration-500
                    ${isActive 
                      ? 'font-black border-stone-900 shadow-xl shadow-stone-200' // Extra Bold for active
                      : 'font-semibold border-stone-200 opacity-60'
                    }
                  `}
                >
                  {tag}
                </motion.span>
              );
            })}
          </div>
          
          <div className="mt-6 flex items-center gap-2 text-xs text-stone-400 font-medium italic">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
            </span>
            <span>Live visual demonstration: <span className="text-stone-600">{feature.tags[activeTagIndex]}</span></span>
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
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="group px-8 py-4 bg-stone-900 text-white font-medium rounded-sm hover:bg-stone-800 transition-all flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 text-stone-600 font-medium rounded-sm border border-stone-200 hover:border-stone-900 hover:bg-stone-50 transition-all">
              View Technology
            </button>
          </div>
        </FadeIn>
      </section>

      {/* 2. STATS GRID */}
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

      {/* 3. MAIN FEATURES - Now with Auto-Rotation */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
        {content.features.map((feature, i) => (
          <FeatureRow key={i} feature={feature} index={i} />
        ))}
      </section>

      {/* 4. THE DIFFERENCE (Bento Grid) */}
      <section className="py-24 px-6 md:px-12 bg-stone-900 text-stone-200 mt-12 overflow-hidden relative">
        {/* Background Texture */}
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

      {/* 5. FOOTER CTA */}
      <section className="py-32 px-6 text-center bg-stone-50">
        <FadeIn>
          <h2 className="text-5xl md:text-6xl font-serif font-medium text-stone-900 mb-8">
            Luxury that Lasts.
          </h2>
          <p className="text-stone-500 mb-12 text-xl font-light max-w-2xl mx-auto">
            Where advanced material science becomes everyday protection.
          </p>
          <button className="px-12 py-5 bg-indigo-700 text-white rounded-full font-bold tracking-wide hover:bg-indigo-800 transition-all shadow-xl shadow-indigo-200 hover:shadow-2xl hover:-translate-y-1 transform duration-300">
            Start Your Project
          </button>
        </FadeIn>
      </section>
    </main>
  );
}
