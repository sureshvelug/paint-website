'use client';

import React from 'react';
import { motion } from 'framer-motion';

// --- ICONS ---
const Icons = {
  Science: () => (
    <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Leaf: () => (
    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Shield: () => (
    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
};

export default function ValueProps() {
  const props = [
    {
      Icon: Icons.Science,
      color: "bg-indigo-50 border-indigo-100",
      accent: "text-indigo-600",
      title: 'Nano-Enhanced',
      subtitle: 'Advanced Technology',
      description: 'Cutting-edge nanotechnology delivers superior adhesion and self-cleaning properties.',
      features: [
        { label: '2× Stronger Adhesion', detail: 'Superior bonding strength' },
        { label: 'Self-Cleaning Surface', detail: 'Repels dust & dirt' },
        { label: 'ASTM D3359 5B Rated', detail: 'Industry certified' }
      ]
    },
    {
      Icon: Icons.Leaf,
      color: "bg-emerald-50 border-emerald-100",
      accent: "text-emerald-600",
      title: 'Eco-Certified',
      subtitle: 'Sustainable Choice',
      description: 'Environmentally responsible formulations that protect both your home and the planet.',
      features: [
        { label: '<5 g/L VOC', detail: 'Ultra-low emissions' },
        { label: 'APEO-Free Formula', detail: 'Safe for families' },
        { label: 'LEED Compatible', detail: 'Green building approved' }
      ]
    },
    {
      Icon: Icons.Shield,
      color: "bg-blue-50 border-blue-100",
      accent: "text-blue-600",
      title: 'Long-Lasting',
      subtitle: 'Built to Endure',
      description: 'Engineered with premium ingredients for decades of vibrant, beautiful walls.',
      features: [
        { label: '3× Color Retention', detail: 'Fade resistant' },
        { label: '10+ Year Durability', detail: 'Long-term performance' },
        { label: 'Washability Class 1', detail: 'Easy maintenance' }
      ]
    }
  ];

  return (
    <section className="relative py-32 px-4 bg-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-xs font-bold tracking-widest uppercase text-slate-500 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Why Choose Us
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6 text-slate-900 tracking-tight"
          >
            Science Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Sustainability</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Where cutting-edge innovation and environmental responsibility create paints that perform beautifully for decades.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {props.map((prop, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-200 transition-all duration-500"
            >
              {/* Top Accent Icon */}
              <div className={`w-16 h-16 rounded-2xl ${prop.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <prop.Icon />
              </div>

              {/* Content */}
              <div className="mb-8">
                <span className={`text-xs font-bold uppercase tracking-wider mb-2 block ${prop.accent}`}>
                  {prop.subtitle}
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                  {prop.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base font-light">
                  {prop.description}
                </p>
              </div>

              {/* Features List */}
              <ul className="space-y-4 pt-8 border-t border-slate-50">
                {prop.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 group/item">
                    <div className={`mt-1 w-1.5 h-1.5 rounded-full ${prop.accent.replace('text-', 'bg-')} ring-4 ring-white group-hover/item:scale-125 transition-transform`} />
                    <div>
                      <div className="text-sm font-bold text-slate-800">
                        {feature.label}
                      </div>
                      <div className="text-xs text-slate-400 font-medium">
                        {feature.detail}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-indigo-600 transition-all duration-300 shadow-lg shadow-slate-200 hover:shadow-indigo-200 hover:-translate-y-0.5">
            Explore Our Technology
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
