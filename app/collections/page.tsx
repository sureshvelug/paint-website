'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Star, Droplets, Sun, Shield, Search, X, ChevronRight, ShoppingBag } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- 1. DATA CONSTANTS ---

// Filter Categories
const FILTERS = [
  { id: 'all', label: 'All Colors', hex: '#E5E5E5' },
  { id: 'Whites', label: 'Whites', hex: '#FAFAF8' },
  { id: 'Neutrals', label: 'Neutrals', hex: '#D6CDBC' },
  { id: 'Reds', label: 'Reds', hex: '#C99E91' },
  { id: 'Blues', label: 'Blues', hex: '#9FB8C7' },
  { id: 'Greens', label: 'Greens', hex: '#80856E' },
  { id: 'Yellows', label: 'Yellows', hex: '#EBDDA9' },
  { id: 'Blacks', label: 'Blacks', hex: '#363636' },
];

// Product Data (Restored Content)
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
      // ... (Other Ellora finishes would go here)
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
      }
      // ... (Other Minera finishes would go here)
    ]
  }
};

// Mock 60 colors generation
const generateColors = () => {
  const bases = [
    { name: 'Paper', hex: '#FAFAF8', family: 'Whites' },
    { name: 'Cloud', hex: '#EAEBE6', family: 'Whites' },
    { name: 'Linen', hex: '#E3DACB', family: 'Neutrals' },
    { name: 'Oat', hex: '#D6CDBC', family: 'Neutrals' },
    { name: 'Stone', hex: '#B8B0A6', family: 'Neutrals' },
    { name: 'Clay', hex: '#C99E91', family: 'Reds' },
    { name: 'Rust', hex: '#9C4F3B', family: 'Reds' },
    { name: 'Sage', hex: '#9FA696', family: 'Greens' },
    { name: 'Olive', hex: '#80856E', family: 'Greens' },
    { name: 'Sky', hex: '#C2D1D9', family: 'Blues' },
    { name: 'Navy', hex: '#2A3B4F', family: 'Blues' },
    { name: 'Charcoal', hex: '#363636', family: 'Blacks' },
    { name: 'Midnight', hex: '#222222', family: 'Blacks' },
  ];
  const list = [];
  bases.forEach((b, i) => {
    list.push({ ...b, id: `base-${i}`, shade: 'Base' });
    list.push({ ...b, name: `${b.name} Light`, id: `light-${i}`, shade: 'Light' }); 
    list.push({ ...b, name: `${b.name} Dark`, id: `dark-${i}`, shade: 'Dark' });
    list.push({ ...b, name: `${b.name} Deep`, id: `deep-${i}`, shade: 'Deep' });
  });
  return list;
};
const ALL_COLORS = generateColors();


// --- APP COMPONENT ---
export default function App() {
  const [view, setView] = useState('library'); 
  const [selectedColor, setSelectedColor] = useState<any>(null);

  const handleColorSelect = (color: any) => {
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

// --- VIEW 1: THE "COLOR WALL" LIBRARY ---
const LibraryView = ({ onSelect }: { onSelect: (c: any) => void }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter Logic
  const filteredColors = useMemo(() => {
    return ALL_COLORS.filter(color => {
      const matchesFilter = activeFilter === 'all' || color.family === activeFilter;
      const matchesSearch = color.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <motion.div 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="bg-white min-h-screen pt-24 pb-20"
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12">
        
        {/* 1. STICKY FILTER RAIL (Left) */}
        <div className="w-full md:w-64 shrink-0 md:sticky md:top-32 md:h-[calc(100vh-10rem)] flex flex-col">
          <div className="mb-8">
            <h1 className="text-3xl font-serif text-stone-900 mb-2">Palette</h1>
            <p className="text-xs text-stone-500 uppercase tracking-widest">{filteredColors.length} Pigments</p>
          </div>

          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
            <input 
              type="text"
              placeholder="Search shade..."
              className="w-full pl-10 pr-4 py-2 bg-stone-50 border border-stone-200 text-sm focus:outline-none focus:border-stone-400 rounded-sm placeholder:text-stone-400"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="space-y-2 overflow-y-auto pr-2 scrollbar-hide">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-md transition-all group hover:bg-stone-50",
                  activeFilter === f.id ? "bg-stone-100" : ""
                )}
              >
                <span 
                  className={cn(
                    "w-6 h-6 rounded-full border border-stone-200 shadow-sm relative",
                    f.id === 'all' ? "bg-white" : ""
                  )}
                  style={f.id !== 'all' ? { backgroundColor: f.hex } : {}}
                >
                   {f.id === 'all' && (
                     <span className="absolute inset-0 flex items-center justify-center text-[8px] font-bold text-stone-400">ALL</span>
                   )}
                </span>
                <span className={cn(
                  "text-sm font-medium transition-colors",
                  activeFilter === f.id ? "text-stone-900" : "text-stone-500 group-hover:text-stone-800"
                )}>
                  {f.label}
                </span>
                {activeFilter === f.id && (
                   <span className="ml-auto w-1.5 h-1.5 rounded-full bg-stone-900" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 2. COLOR GRID (Right) */}
        <div className="flex-1">
           <div className="mb-6 flex items-center justify-between border-b border-stone-100 pb-4">
              <h2 className="text-xl font-serif text-stone-900">
                {activeFilter === 'all' ? 'All Colors' : `The ${activeFilter} Collection`}
              </h2>
              {activeFilter !== 'all' && (
                <button onClick={() => setActiveFilter('all')} className="text-xs text-stone-400 hover:text-stone-900 flex items-center gap-1">
                   <X size={12}/> Clear Filter
                </button>
              )}
           </div>

           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-10">
              {filteredColors.map((color) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  key={color.id}
                  onClick={() => onSelect(color)}
                  className="group cursor-pointer flex flex-col gap-3"
                >
                   <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.05)] border border-stone-100 transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
                      <div className="w-full h-full" style={{ backgroundColor: color.hex }} />
                      <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.03)] pointer-events-none" />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                         <span className="bg-white/90 backdrop-blur-sm text-stone-900 px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-sm rounded-full transform scale-95 group-hover:scale-100 transition-transform">
                            View Shade
                         </span>
                      </div>
                   </div>

                   <div className="px-1">
                      <div className="flex justify-between items-baseline mb-1">
                         <h3 className="text-sm font-bold text-stone-900 leading-none">{color.name}</h3>
                      </div>
                      <p className="text-[10px] text-stone-400 uppercase tracking-widest font-medium">
                         {color.family}
                      </p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
};


// --- VIEW 2: PRODUCT PAGE (Restored Full Logic) ---
const ProductPage = ({ color, onBack }: { color: any, onBack: () => void }) => {
  const [activeBrand, setActiveBrand] = useState<keyof typeof BRAND_CONTENT>('ceramic');
  const [activeFinishId, setActiveFinishId] = useState('matt');

  const brandData = BRAND_CONTENT[activeBrand];
  // Safe find with fallback - defaulting to first finish if id not found (e.g. switching brands)
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
                           <Star size={16} /> Why it is different
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
