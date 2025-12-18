'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Star, Droplets, Sun, Shield } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- 1. DATA: BRANDS & CONTENT ---
const BRAND_CONTENT = {
  ceramic: {
    id: 'ceramic',
    name: 'Ceramic Society™',
    tagline: 'Soft walls. Calm spaces. Timeless elegance.',
    finishes: [
      {
        id: 'matt',
        name: 'Matt',
        label: 'Matt',
        title: 'Ceramic Society™ Matt Finish',
        price: 85,
        description: 'A premium matt interior paint with a smooth, refined surface that absorbs light beautifully.',
        details: {
          whatItDoes: [
            'Creates a smooth, even matt finish',
            'Delivers excellent hiding and uniform coverage',
            'Reduces glare for relaxed, comfortable spaces',
            'Early stain resistance',
            'Area Coverage: 100–125 sq.ft per liter'
          ],
          whyDifferent: [
            'Nano-pigments for exceptional opacity',
            'Anti-bacterial property with material intelligence',
            'Mineral-inspired colours with depth and softness',
            'Ultra-low VOC formulation — healthier indoor air',
            'Designed for eco-friendly homes & green buildings'
          ],
          specs: {
            Finish: 'Matt',
            BestFor: 'Living rooms · Bedrooms · Ceilings',
            Coverage: '110–140 sq.ft / L / coat',
            Coats: '2',
            DryTime: 'Touch: 30 min / Recoat: 4 hrs',
            Warranty: '7-year performance'
          }
        }
      },
      {
        id: 'gloss',
        name: 'High Gloss',
        label: 'High Gloss',
        title: 'Ceramic Society™ Glossy Finish',
        price: 92,
        description: 'A rich, reflective interior paint that brings colour to life. Crafted for bold interiors.',
        details: {
          whatItDoes: [
            'Delivers a smooth, luminous glossy finish',
            'Enhances colour richness and surface clarity',
            'Resists stains and is easy to clean',
            'Resist furniture marks and scratches',
            'Area Coverage: 110–130 sq.ft per liter'
          ],
          whyDifferent: [
            'Nano-resin technology for enhanced durability',
            'High colour saturation with long-lasting shine',
            'Ultra Low-VOC, eco-responsible formulation',
            'Suitable for modern, sustainable interiors'
          ],
          specs: {
            Finish: 'Glossy',
            BestFor: 'Accent walls · Dining areas',
            Coverage: '100–130 sq.ft / L / coat',
            Coats: '2',
            DryTime: 'Touch: 30 min / Recoat: 4 hrs',
            Warranty: '8-year performance'
          }
        }
      }
    ]
  },
  ellora: {
    id: 'ellora',
    name: 'Ellora by Elements',
    tagline: 'The purest expression of interior luxury.',
    finishes: [
      {
        id: 'matt',
        name: 'Matt',
        label: 'Matt',
        title: 'Ellora Matt Expression',
        price: 110,
        description: 'Luxury that does not announce itself. Soft, velvety, and light-absorbing.',
        details: {
          whatItDoes: [
            'Creates refined surfaces with natural depth',
            'Allows colour to appear richer and calmer',
            'Delivers durability without aggressive chemistry',
            'Preserves indoor air quality'
          ],
          whyDifferent: [
            'Mineral-first foundation, replacing heavy synthetics',
            'Nano-engineered particles that refine smoothness',
            'Intelligent film architecture',
            'VOC LEVELS: Beyond comparison'
          ],
          specs: {
            Finish: 'Soft, velvety',
            BestFor: 'Calm interiors',
            Coverage: '120–140 sq.ft / L / coat',
            Coats: '2',
            DryTime: 'Touch: 1 hr / Recoat: 4 hrs',
            Warranty: 'Lifetime Luxury'
          }
        }
      },
      {
        id: 'satin',
        name: 'Satin / Silky',
        label: 'Satin',
        title: 'Ellora Satin Expression',
        price: 115,
        description: 'Smooth, tactile, gently luminous. Feels like silk on the wall.',
        details: {
          whatItDoes: [
            'Gently luminous without glare',
            'Feels like silk on the wall',
            'Furniture mark resistance',
            'Preserves indoor air quality'
          ],
          whyDifferent: [
            'Engineered with Material Intelligence™',
            'Nano-engineered particles for consistency',
            'Redefines the category of luxury paints'
          ],
          specs: {
            Finish: 'Smooth, tactile',
            BestFor: 'Sophisticated living areas',
            Coverage: '120–140 sq.ft / L / coat',
            Coats: '2',
            DryTime: 'Touch: 1 hr / Recoat: 4 hrs',
            Warranty: 'Lifetime Luxury'
          }
        }
      },
      {
        id: 'gloss',
        name: 'High Gloss',
        label: 'High Gloss',
        title: 'Ellora Gloss Expression',
        price: 118,
        description: 'Deep colour, precise reflection. For deliberate architectural statements.',
        details: {
          whatItDoes: [
            'Delivers deep colour saturation',
            'Provides precise reflection',
            'Superior durability',
            'Maintains breathable film architecture'
          ],
          whyDifferent: [
            'Material Intelligence™ replaces heavy synthetics',
            'Nano-engineered for mirror-like consistency',
            'Redefines luxury gloss'
          ],
          specs: {
            Finish: 'Deep colour, precise reflection',
            BestFor: 'Architectural statements',
            Coverage: '120–140 sq.ft / L / coat',
            Coats: '2',
            DryTime: 'Touch: 1 hr / Recoat: 4 hrs',
            Warranty: 'Lifetime Luxury'
          }
        }
      }
    ]
  },
  minera: {
    id: 'minera',
    name: 'Minera™ Exterior',
    tagline: 'Graphene & quantum intelligence for enduring exteriors.',
    finishes: [
      {
        id: 'x5',
        name: 'Minera X5',
        label: 'X5',
        title: 'Minera X5 (Standard)',
        price: 95,
        description: 'Reliable protection. Intelligent materials. Graphene-enhanced mineral system.',
        details: {
          whatItDoes: [
            'Creates stronger, more cohesive films',
            'Intelligent UV resistance',
            'Enhanced hydrophobic protection',
            'Superior crack-bridging flexibility'
          ],
          whyDifferent: [
            'Graphene for strength and longevity',
            'Quantum dots for intelligent UV resistance',
            'Mineral-first formulation',
            'Eco-friendly, ultra-low VOC'
          ],
          specs: {
            Warranty: '5-Year Performance',
            BestFor: 'Residential exteriors',
            Coverage: '50-60 sq.ft / L / 2 coats',
            Coats: '2-3',
            DryTime: 'Recoat: 4-6 hrs',
            VOC: 'Low VOC (Eco-friendly)'
          }
        }
      },
      {
        id: 'x10',
        name: 'Minera X10',
        label: 'X10',
        title: 'Minera X10 (Advanced)',
        price: 105,
        description: 'Advanced weather intelligence. Upgraded graphene–quantum dot system.',
        details: {
          whatItDoes: [
            'Superior water repellence (low DPUR)',
            'Enhanced flexibility resists micro-cracks',
            'Strong colour retention under intense sun',
            'Outperforms premium market leaders'
          ],
          whyDifferent: [
            'Graphene strength with quantum-dot UV modulation',
            'Significantly better DPUR',
            'Breathable yet protective architecture'
          ],
          specs: {
            Warranty: '10-Year Performance',
            BestFor: 'Villas, high-rainfall',
            Coverage: '45-55 sq.ft / L / 2 coats',
            Coats: '2-3',
            DryTime: 'Recoat: 4-6 hrs',
            VOC: 'Ultra-low'
          }
        }
      },
      {
        id: 'x20',
        name: 'Minera X20',
        label: 'X20',
        title: 'Minera X20 (Extreme)',
        price: 125,
        description: 'Extreme resilience. Material intelligence perfected for harsh environments.',
        details: {
          whatItDoes: [
            'High-density graphene–quantum nano architecture',
            'Exceptional UV stability',
            'Maximum hydrophobicity',
            'Outstanding crack-bridging'
          ],
          whyDifferent: [
            'Performance beyond conventional systems',
            'Superior resistance to algae & pollution',
            'Perfect for LEED VOC levels'
          ],
          specs: {
            Warranty: '20-Year Performance',
            BestFor: 'Coastal zones, extreme climates',
            Coverage: '40-50 sq.ft / L / 2 coats',
            Coats: '3',
            DryTime: 'Recoat: 4-6 hrs',
            VOC: 'LEED Compliant'
          }
        }
      }
    ]
  }
};

// --- 2. GENERATE 60 COLORS ---
const generateColors = () => {
  const bases = [
    { name: 'White', hex: '#FAFAF8', family: 'Whites' },
    { name: 'Cloud', hex: '#EAEBE6', family: 'Whites' },
    { name: 'Linen', hex: '#E3DACB', family: 'Neutrals' },
    { name: 'Oat', hex: '#D6CDBC', family: 'Neutrals' },
    { name: 'Stone', hex: '#B8B0A6', family: 'Neutrals' },
    { name: 'Pebble', hex: '#A8A39D', family: 'Neutrals' },
    { name: 'Silt', hex: '#948D86', family: 'Neutrals' },
    { name: 'Charcoal', hex: '#363636', family: 'Blacks' },
    { name: 'Midnight', hex: '#222222', family: 'Blacks' },
    { name: 'Sage', hex: '#9FA696', family: 'Greens' },
    { name: 'Olive', hex: '#80856E', family: 'Greens' },
    { name: 'Forest', hex: '#4A5D45', family: 'Greens' },
    { name: 'Sky', hex: '#C2D1D9', family: 'Blues' },
    { name: 'River', hex: '#9FB8C7', family: 'Blues' },
    { name: 'Ocean', hex: '#587B94', family: 'Blues' },
    { name: 'Navy', hex: '#2A3B4F', family: 'Blues' },
    { name: 'Rose', hex: '#EBCBCB', family: 'Pinks' },
    { name: 'Clay', hex: '#C99E91', family: 'Reds' },
    { name: 'Terracotta', hex: '#B56D56', family: 'Reds' },
    { name: 'Rust', hex: '#9C4F3B', family: 'Reds' },
    { name: 'Straw', hex: '#EBDDA9', family: 'Yellows' },
    { name: 'Gold', hex: '#D6B86A', family: 'Yellows' },
    { name: 'Mustard', hex: '#C29B42', family: 'Yellows' },
  ];
  
  // Create variants to reach ~60
  let fullList: { name: string; hex: string; family: string; id: string }[] = [];
  bases.forEach((base, i) => {
    fullList.push({ ...base, id: `base-${i}` });
    fullList.push({ ...base, name: `${base.name} Light`, hex: base.hex, id: `light-${i}` }); // Simplified color logic
    fullList.push({ ...base, name: `${base.name} Dark`, hex: base.hex, id: `dark-${i}` });
  });
  return fullList.slice(0, 60);
};

const ALL_COLORS = generateColors();


export default function App() {
  const [view, setView] = useState('library'); 
  const [selectedColor, setSelectedColor] = useState<typeof ALL_COLORS[0] | null>(null);

  const handleColorSelect = (color: typeof ALL_COLORS[0]) => {
    setSelectedColor(color);
    setView('product');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900">
      <AnimatePresence mode='wait'>
        {view === 'library' ? (
          <LibraryView key="library" onSelect={handleColorSelect} />
        ) : (
          <ProductPage key="product" color={selectedColor} onBack={() => setView('library')} />
        )}
      </AnimatePresence>
    </div>
  );
}

// --- VIEW 1: LIBRARY (BACKDROP STYLE) ---
const LibraryView = ({ onSelect }: { onSelect: (c: typeof ALL_COLORS[0]) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 md:px-12 bg-white"
    >
      <div className="max-w-[1800px] mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif mb-6 text-stone-900">The 2025 Library.</h1>
        <p className="text-stone-500 mb-16 max-w-xl text-lg">Curated pigments inspired by earth, stone, and sky. Select a shade to begin your journey.</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {ALL_COLORS.map((color) => (
            <button 
              key={color.id}
              onClick={() => onSelect(color)}
              className="group flex flex-col items-start text-left"
            >
              <div 
                className="w-full aspect-[4/5] rounded-lg mb-3 shadow-sm transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-md border border-stone-100"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-xs font-bold uppercase tracking-wider text-stone-900">{color.name}</span>
              <span className="text-[10px] text-stone-400 uppercase tracking-widest">{color.family}</span>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- VIEW 2: PRODUCT PAGE (TONESTER STYLE) ---
const ProductPage = ({ color, onBack }: { color: typeof ALL_COLORS[0] | null, onBack: () => void }) => {
  const [activeBrand, setActiveBrand] = useState<keyof typeof BRAND_CONTENT>('ceramic');
  const [activeFinishId, setActiveFinishId] = useState('matt');

  const brandData = BRAND_CONTENT[activeBrand];
  // Safe find with fallback
  const finishData = brandData.finishes.find(f => f.id === activeFinishId) || brandData.finishes[0];

  const HERO_IMG = "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const TEXTURE_IMG = "https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white">
      
      {/* 1. TOP SPLIT LAYOUT */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* LEFT: SCROLLING IMAGES */}
        <div className="w-full lg:w-[60%] bg-stone-50 relative">
           <button onClick={onBack} className="absolute top-8 left-8 z-20 flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white transition-all">
              <ArrowLeft size={14} /> Library
           </button>

           <div className="flex flex-col gap-1 p-1 lg:p-4">
              <div className="relative w-full aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm">
                 <img src={HERO_IMG} className="w-full h-full object-cover" alt="Room" />
                 <div className="absolute inset-0 mix-blend-multiply opacity-30 transition-colors duration-700" style={{ backgroundColor: color?.hex || '#ccc' }} />
              </div>
              <div className="relative w-full aspect-video overflow-hidden rounded-sm">
                 <img src={TEXTURE_IMG} className="w-full h-full object-cover" alt="Texture" />
                 <div className="absolute inset-0 mix-blend-multiply opacity-20 transition-colors duration-700" style={{ backgroundColor: color?.hex || '#ccc' }} />
              </div>
           </div>
        </div>

        {/* RIGHT: STICKY SIDEBAR */}
        <div className="w-full lg:w-[40%] bg-white px-8 md:px-12 py-12 lg:h-screen lg:sticky lg:top-0 lg:overflow-y-auto border-l border-stone-100 flex flex-col">
            
            <div className="mb-auto">
                <span className="text-amber-800 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 block">Premium Finish</span>
                <h1 className="text-5xl font-serif text-stone-900 leading-[1] mb-2">{color?.name || 'Selected Color'}</h1>
                <p className="text-stone-400 text-sm mb-10">{finishData.title}</p>

                {/* --- BRAND SELECTOR --- */}
                <div className="mb-8">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-3 block">1. Choose Formula</label>
                  <div className="flex gap-2 border-b border-stone-100 pb-4">
                     {Object.values(BRAND_CONTENT).map((brand) => (
                       <button
                         key={brand.id}
                         onClick={() => { setActiveBrand(brand.id as keyof typeof BRAND_CONTENT); setActiveFinishId(brand.finishes[0].id); }}
                         className={cn(
                           "text-sm px-0 py-2 mr-4 border-b-2 transition-all font-medium",
                           activeBrand === brand.id 
                             ? "border-stone-900 text-stone-900" 
                             : "border-transparent text-stone-400 hover:text-stone-600"
                         )}
                       >
                         {brand.name.split('™')[0]}
                       </button>
                     ))}
                  </div>
                </div>

                {/* --- FINISH SELECTOR --- */}
                <div className="mb-10">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 mb-3 block">2. Select Finish</label>
                   <div className="flex flex-wrap gap-2">
                      {brandData.finishes.map((finish) => (
                        <button
                          key={finish.id}
                          onClick={() => setActiveFinishId(finish.id)}
                          className={cn(
                            "px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider border transition-all duration-300",
                            activeFinishId === finish.id
                              ? "bg-stone-900 text-white border-stone-900 shadow-lg scale-105"
                              : "bg-white text-stone-500 border-stone-200 hover:border-stone-400"
                          )}
                        >
                          {finish.label}
                        </button>
                      ))}
                   </div>
                </div>

                {/* --- PRICE & CART --- */}
                <div className="border-t border-stone-100 pt-8 mt-4">
                   <div className="flex items-end justify-between mb-6">
                      <div>
                        <p className="text-3xl font-serif text-stone-900">${finishData.price}</p>
                        <p className="text-xs text-stone-500 mt-1">Per Gallon · 3.78L</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full border border-stone-200 shadow-sm" style={{ backgroundColor: color?.hex }} />
                        <span className="text-xs font-bold uppercase">{color?.name}</span>
                      </div>
                   </div>

                   <button className="w-full bg-stone-900 text-white py-5 text-sm font-bold uppercase tracking-widest hover:bg-stone-800 transition-colors mb-3">
                     Add to Cart
                   </button>
                   <button className="w-full bg-stone-100 text-stone-900 py-4 text-xs font-bold uppercase tracking-widest hover:bg-stone-200 transition-colors">
                     Order Peel & Stick Sample
                   </button>
                </div>
            </div>

            {/* Micro Specs */}
            <div className="mt-8 pt-8 border-t border-stone-100 grid grid-cols-3 gap-4 text-center">
                <div>
                   <Droplets className="w-4 h-4 mx-auto mb-2 text-stone-400" />
                   <span className="text-[10px] font-bold uppercase block text-stone-900">Washable</span>
                </div>
                <div>
                   <Sun className="w-4 h-4 mx-auto mb-2 text-stone-400" />
                   <span className="text-[10px] font-bold uppercase block text-stone-900">Low VOC</span>
                </div>
                <div>
                   <Shield className="w-4 h-4 mx-auto mb-2 text-stone-400" />
                   <span className="text-[10px] font-bold uppercase block text-stone-900">
                     {finishData.details.specs.Warranty ? String(finishData.details.specs.Warranty).split(' ')[0] : 'Lifetime'}
                   </span>
                </div>
            </div>
        </div>
      </div>

      {/* 3. BOTTOM: DETAILED CONTENT */}
      <div className="bg-white border-t border-stone-200">
         <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={`${activeBrand}-${activeFinishId}`}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16"
              >
                  {/* Left Column: Narrative */}
                  <div className="lg:col-span-7">
                     <span className="text-amber-700 font-serif italic text-2xl mb-6 block">{brandData.tagline}</span>
                     <h2 className="text-4xl font-bold text-stone-900 mb-8 leading-tight">{finishData.description}</h2>
                     
                     <div className="mb-12">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6 flex items-center gap-2">
                           <CheckCircle2 size={16} /> What it does
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                           {finishData.details.whatItDoes.map((item, i) => (
                             <li key={i} className="flex items-start gap-3 text-stone-600 text-sm leading-relaxed border-l-2 border-stone-100 pl-4">
                                {item}
                             </li>
                           ))}
                        </ul>
                     </div>

                     <div className="bg-stone-50 p-8 rounded-lg">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-6 flex items-center gap-2">
                           <Star size={16} /> Why it's different
                        </h3>
                        <ul className="space-y-3">
                           {finishData.details.whyDifferent.map((item, i) => (
                             <li key={i} className="text-stone-800 text-base font-medium">
                                {item}
                             </li>
                           ))}
                        </ul>
                     </div>
                  </div>

                  {/* Right Column: Specs */}
                  <div className="lg:col-span-5">
                      <div className="sticky top-12">
                         <h3 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-8 pb-2 border-b border-stone-200">
                           Technical Specifications
                         </h3>
                         <div className="space-y-6">
                            {Object.entries(finishData.details.specs).map(([key, value]) => (
                               <div key={key} className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-stone-100 pb-4">
                                  <span className="text-xs font-bold uppercase tracking-wider text-stone-400 w-32">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                                  <span className="text-sm font-semibold text-stone-900 text-right">{value as string}</span>
                               </div>
                            ))}
                         </div>
                      </div>
                  </div>

              </motion.div>
            </AnimatePresence>

         </div>
      </div>

    </motion.div>
  );
};
