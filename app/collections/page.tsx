'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ShieldCheck, Leaf } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Utility ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- 1. RELIABLE PEXELS ASSETS ---
const ASSETS = {
  // Color Families
  reds: "https://images.pexels.com/photos/2227832/pexels-photo-2227832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  oranges: "https://images.pexels.com/photos/7004697/pexels-photo-7004697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  yellows: "https://images.pexels.com/photos/5998138/pexels-photo-5998138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  greens: "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // NEW
  blues: "https://images.pexels.com/photos/6412845/pexels-photo-6412845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  violets: "https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  neutrals: "https://images.pexels.com/photos/3965521/pexels-photo-3965521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  browns: "https://images.pexels.com/photos/1005058/pexels-photo-1005058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  blacks: "https://images.pexels.com/photos/1672637/pexels-photo-1672637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // NEW
  whites: "https://images.pexels.com/photos/683929/pexels-photo-683929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  additional: "https://images.pexels.com/photos/3052725/pexels-photo-3052725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // NEW

  // Gallery Extras
  texture: "https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  interior_1: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  interior_2: "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
};

// --- Data ---
const COLOR_DATA = [
  // 1. REDS
  {
    id: 'reds',
    name: '1. Reds & Terracottas',
    subtitle: 'The Warm Soul',
    hex: '#B55233',
    img: ASSETS.reds,
    description: 'Inspired by kiln-fired clay, heritage walls, and sacred vermilion.',
    shades: [
      { name: 'Terracotta Flame', hex: '#B55233' },
      { name: 'Jaipur Rouge', hex: '#A33E2A' },
      { name: 'Desert Rose', hex: '#C1695B' },
      { name: 'Clay Ember', hex: '#B15A3D' },
      { name: 'Vermilion Echo', hex: '#E34234' },
      { name: 'Coral Chant', hex: '#E27D60' },
      { name: 'Heartfire', hex: '#8B1A1A' },
      { name: 'Reef Bloom', hex: '#FF7F6A' },
    ]
  },
  // 2. ORANGES
  {
    id: 'oranges',
    name: '2. Oranges & Ambers',
    subtitle: 'The Sun’s Legacy',
    hex: '#E27A1A',
    img: ASSETS.oranges,
    description: 'Festive marigolds, sacred fires, and polished copper craftsmanship.',
    shades: [
      { name: 'Marigold Muse', hex: '#E27A1A' },
      { name: 'Burnt Saffron', hex: '#CC5803' },
      { name: 'Sunset Resin', hex: '#B85B1F' },
      { name: 'Copper Verse', hex: '#B66B33' },
    ]
  },
  // 3. YELLOWS
  {
    id: 'yellows',
    name: '3. Yellows & Ochres',
    subtitle: 'Fields of Light',
    hex: '#E8B923',
    img: ASSETS.yellows,
    description: 'Morning joy, fading desert warmth, and turmeric festivities.',
    shades: [
      { name: 'Canary Song', hex: '#FFD44D' },
      { name: 'Golden Dusk', hex: '#E2B144' },
      { name: 'Turmeric Aura', hex: '#E8B923' },
      { name: 'Mango Spirit', hex: '#FFA62B' },
      { name: 'Saharan Glow', hex: '#FFD77F' },
      { name: 'First Light', hex: '#FFA24A' },
      { name: 'Land of Dry', hex: '#FFD77F' },
    ]
  },
  // 4. GREENS (Added)
  {
    id: 'greens',
    name: '4. Greens & Olives',
    subtitle: 'The Earth’s Breath',
    hex: '#6B705C',
    img: ASSETS.greens,
    description: 'Forest canopies, sacred groves, and monsoon rebirth.',
    shades: [
      { name: 'Sage Silence', hex: '#8A9A5B' },
      { name: 'Olive Branch', hex: '#6B705C' },
      { name: 'Forest Breath', hex: '#2E4A3D' },
      { name: 'Moss Veil', hex: '#8A8F7F' },
      { name: 'Eucalyptus Haze', hex: '#9DA9A0' },
      { name: 'Deep Jungle', hex: '#1B2E25' },
    ]
  },
  // 5. BLUES
  {
    id: 'blues',
    name: '5. Blues',
    subtitle: 'The Horizon Line',
    hex: '#264B8A',
    img: ASSETS.blues,
    description: 'From indigo dyes to ocean depths and modern steel skies.',
    shades: [
      { name: 'Sky Fragment', hex: '#A8C4E3' },
      { name: 'Indigo Verse', hex: '#264B8A' },
      { name: 'Cerulean Drift', hex: '#6BAED6' },
      { name: 'River Mist', hex: '#7DAFC4' },
      { name: 'Deep Harbour', hex: '#234E70' },
      { name: 'Steel Horizon', hex: '#6C7A89' },
      { name: 'Peacock Plume', hex: '#0F52BA' },
      { name: 'Powder Sky', hex: '#C3DAE3' },
      { name: 'Deep Imprint', hex: '#1A1A2E' },
      { name: 'Urban Mist', hex: '#708090' },
      { name: 'True Steel', hex: '#4682B4' },
      { name: 'Frozen Silence', hex: '#003366' },
      { name: 'Midnight Tempo', hex: '#2C5DAA' },
    ]
  },
  // 6. VIOLETS
  {
    id: 'violets',
    name: '6. Violets & Purples',
    subtitle: 'The Hidden Light',
    hex: '#B9AEDC',
    img: ASSETS.violets,
    description: 'Lavender memories, royal velvets, and misty twilights.',
    shades: [
      { name: 'Lilac Memory', hex: '#B9AEDC' },
      { name: 'Plum Dusk', hex: '#674172' },
      { name: 'Berry Smoke', hex: '#8E5572' },
      { name: 'Mauve Thread', hex: '#A1869E' },
      { name: 'Twilight Chant', hex: '#5A4A75' },
      { name: 'Royal Whisper', hex: '#473259' },
      { name: 'Misty Lilac', hex: '#C9B4D5' },
      { name: 'Violet Joy', hex: '#BFA2E0' },
    ]
  },
  // 7. NEUTRALS
  {
    id: 'neutrals',
    name: '7. Neutrals & Greys',
    subtitle: 'The Architectural Breath',
    hex: '#D7D1C9',
    img: ASSETS.neutrals,
    description: 'Ancient limestone, morning fog, and modern concrete silence.',
    shades: [
      { name: 'Limestone Haze', hex: '#D7D1C9' },
      { name: 'River Clay', hex: '#BEB4A3' },
      { name: 'Dune Path', hex: '#D3C6B5' },
      { name: 'Fog Veil', hex: '#C9CBCF' },
      { name: 'Ash Tone', hex: '#B2ABA2' },
      { name: 'Cloud Still', hex: '#D9D9D9' },
      { name: 'Pewter Echo', hex: '#A8A39D' },
      { name: 'Concrete Poem', hex: '#9C9A96' },
      { name: 'Silver Quiet', hex: '#C1C3C8' },
      { name: 'Graphite Trace', hex: '#5F5F60' },
      { name: 'Silent Stone', hex: '#7D7F7D' },
    ]
  },
  // 8. BROWNS
  {
    id: 'browns',
    name: '8. Browns & Earths',
    subtitle: 'The Ground Beneath',
    hex: '#8B5A2B',
    img: ASSETS.browns,
    description: 'After-rain serenity, burnt timber, and warm tropical husks.',
    shades: [
      { name: 'Soil Song', hex: '#8B5A2B' },
      { name: 'Burnt Timber', hex: '#4B2E14' },
      { name: 'Wine Harvest', hex: '#5A2A27' },
      { name: 'Sand Whisper', hex: '#D5C8B4' },
      { name: 'Sandstone Beige', hex: '#D9C6A5' },
      { name: 'Ivory Mist', hex: '#EDE7DA' },
      { name: 'Linen Calm', hex: '#E8E1CF' },
      { name: 'Shell Tone', hex: '#F4EBD0' },
      { name: 'Coconut Husk', hex: '#9D8063' },
    ]
  },
  // 9. BLACKS (Added)
  {
    id: 'blacks',
    name: '9. Blacks & Carbons',
    subtitle: 'The Deep Void',
    hex: '#2A2A2A',
    img: ASSETS.blacks,
    description: 'Midnight shadows, charred wood, and deep mineral intensity.',
    shades: [
      { name: 'Charcoal Luxe', hex: '#2A2A2A' },
      { name: 'Midnight Carbon', hex: '#1A1A1A' },
      { name: 'Obsidian Earth', hex: '#2B2B2B' },
      { name: 'Pitch Deep', hex: '#0D0D0D' },
      { name: 'Shadow Blue', hex: '#1A1A2E' },
      { name: 'Iron Cast', hex: '#363636' },
    ]
  },
  // 10. WHITES
  {
    id: 'whites',
    name: '10. Whites & Roses',
    subtitle: 'Foundation of Light',
    hex: '#F2EFE9',
    img: ASSETS.whites,
    description: 'Handmade wall finishes, Scandinavian pastels, and minimalist foundations.',
    shades: [
      { name: 'Chalk Poem', hex: '#F2EFE9' },
      { name: 'Lotus Blush', hex: '#F4B6B8' },
      { name: 'Blush Whisper', hex: '#E6C5C2' },
      { name: 'Wild Pink', hex: '#FF69B4' },
      { name: 'Platinum Mist', hex: '#E0E0E0' },
      { name: 'Pearl Dew', hex: '#F6F4EC' },
    ]
  },
  // 11. ADDITIONAL
  {
    id: 'additional',
    name: '11. Additional Shades',
    subtitle: 'The Archive',
    hex: '#B2FF05',
    img: ASSETS.additional,
    description: 'Special editions, faded memories, and morning light.',
    shades: [
      { name: 'Whispered Memory', hex: '#D3C6B2' },
      { name: 'Morning Hush', hex: '#B2FF05' },
      { name: 'Terracotta Veil', hex: '#E0B79F' },
    ]
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

// ==========================================
// MAIN APP COMPONENT
// ==========================================
export default function LoopyColorApp() {
  const [view, setView] = useState('collection'); // 'collection' | 'product'
  const [activeFamily, setActiveFamily] = useState(null);

  const handleFamilyClick = (family) => {
    setActiveFamily(family);
    setView('product');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBack = () => {
    setView('collection');
  };

  return (
    // Forces off-white background on the entire container to prevent dark bleeds
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-amber-100 selection:text-amber-900">
      
      <AnimatePresence mode='wait'>
        {view === 'collection' ? (
          <CollectionView key="collection" onSelect={handleFamilyClick} />
        ) : (
          <ProductView key="product" family={activeFamily} onBack={handleBack} />
        )}
      </AnimatePresence>

    </div>
  );
}

// ==========================================
// COLLECTION VIEW
// ==========================================
const CollectionView = ({ onSelect }) => {
  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
      // pt-32 to allow space for your fixed header
      className="pt-32 pb-20 px-8 md:px-20 bg-stone-50"
    >
      <div className="max-w-[1800px] mx-auto">
        <motion.div variants={staggerContainer} className="mb-24 space-y-6 max-w-4xl">
           {/* Eyebrow */}
           <motion.div variants={fadeUp} className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-12 bg-amber-700"></span>
              <span className="text-amber-800 font-medium tracking-widest text-xs uppercase">
                2025 Color Library
              </span>
           </motion.div>

          <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-serif text-stone-900 leading-[0.95] mb-8">
            The Architecture <br/> <span className="text-stone-400 font-light italic">of</span> Pigment.
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-xl font-light">
            Sourced from the earth, grounded in history. Explore our curated families of mineral limewash paints.
          </motion.p>
        </motion.div>

        <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20">
          {COLOR_DATA.map((family) => (
            <ColorCard key={family.id} family={family} onSelect={onSelect} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const ColorCard = ({ family, onSelect }) => {
  return (
    <motion.div 
      variants={fadeUp}
      onClick={() => onSelect(family)}
      className="group cursor-pointer relative"
    >
      <div className="overflow-hidden aspect-[3/4] mb-8 relative bg-stone-100">
        <div 
           className="absolute inset-0 z-10 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none mix-blend-multiply"
           style={{ backgroundColor: family.hex }}
        />
        <motion.img 
          src={family.img} 
          alt={family.name}
          className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
          loading="lazy"
        />
        
        {/* Floating Tag */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
           <div className="bg-stone-900 text-stone-50 px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center gap-3">
              Explore
              <ArrowRight size={14} />
           </div>
        </div>
      </div>

      <div className="space-y-3 pr-4">
          <div className="flex justify-between items-baseline border-b border-stone-200 pb-4 mb-4 group-hover:border-stone-400 transition-colors duration-500">
             <h3 className="text-2xl font-serif text-stone-900">{family.name}</h3>
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-amber-800">{family.subtitle}</p>
          <p className="text-sm text-stone-500 line-clamp-2 leading-relaxed">{family.description}</p>
      </div>
    </motion.div>
  );
};

// ==========================================
// PRODUCT VIEW
// ==========================================
const ProductView = ({ family, onBack }) => {
  const [selectedShade, setSelectedShade] = useState(family.shades[0]);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Gallery Data
  const galleryImages = [
    { id: 0, src: family.img, label: "Main View" },
    { id: 1, src: ASSETS.texture, label: "Texture" },
    { id: 2, src: ASSETS.interior_1, label: "Living Space" },
    { id: 3, src: ASSETS.interior_2, label: "Detail" },
  ];

  return (
    // Explicit bg-stone-50 to ensure header doesn't look "black" due to transparent background
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-24 w-full bg-stone-50 flex flex-col-reverse lg:flex-row overflow-hidden relative z-0"
    >
        {/* LEFT: CONTENT */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-8 md:px-20 py-8 lg:py-12 overflow-y-auto">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="max-w-xl mx-auto lg:mx-0"
           >
              {/* Back Button */}
              <button 
                onClick={onBack}
                className="group flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-colors mb-8 text-xs font-bold uppercase tracking-widest"
              >
                  <ArrowLeft size={14} /> Back to Library
              </button>

              {/* Eyebrow */}
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[1px] w-12 bg-amber-700"></span>
                <span className="text-amber-800 font-medium tracking-widest text-xs uppercase">
                  Nano-Mineral Technology
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-7xl font-serif text-stone-900 leading-[1] mb-6">
                {family.subtitle}
              </h1>
              
              <p className="text-lg text-stone-600 leading-relaxed mb-10 font-light">
                 {family.description} A premium finish suitable for interior and exterior application.
              </p>

              {/* Shade Selector */}
              <div className="mb-10">
                 <div className="flex justify-between items-center text-sm mb-4 border-b border-stone-200 pb-2">
                    <span className="font-bold text-stone-900 uppercase tracking-wider text-xs">Select Shade</span>
                    <span className="text-amber-800 font-serif italic">{selectedShade.name}</span>
                 </div>
                 <div className="flex flex-wrap gap-3">
                    {family.shades.map((shade) => (
                       <button
                          key={shade.name}
                          onClick={() => setSelectedShade(shade)}
                          className={cn(
                            "w-12 h-12 rounded-full relative transition-transform duration-300 focus:outline-none border border-stone-200",
                            selectedShade.name === shade.name ? "scale-110 ring-1 ring-offset-4 ring-stone-900" : "hover:scale-105 opacity-80 hover:opacity-100"
                          )}
                          style={{ backgroundColor: shade.hex }}
                          title={shade.name}
                       />
                    ))}
                 </div>
              </div>

              {/* Thumbnails (Gallery Selector) */}
              <div className="mb-10">
                  <span className="font-bold text-stone-900 uppercase tracking-wider text-xs mb-3 block">View Gallery</span>
                  <div className="flex gap-4">
                      {galleryImages.map((img, idx) => (
                          <button 
                            key={img.id}
                            onClick={() => setActiveImageIndex(idx)}
                            className={cn(
                                "w-20 h-20 border transition-all duration-300 relative overflow-hidden",
                                activeImageIndex === idx ? "border-stone-900 opacity-100" : "border-stone-200 opacity-60 hover:opacity-100 hover:border-stone-400"
                            )}
                          >
                              <img src={img.src} className="w-full h-full object-cover" />
                              {activeImageIndex === idx && (
                                <div className="absolute inset-0 bg-stone-900/10" />
                              )}
                          </button>
                      ))}
                  </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 mb-8">
                 <button className="group flex items-center justify-center gap-3 bg-stone-900 text-stone-50 px-8 py-4 rounded-none hover:bg-stone-800 transition-all duration-300 min-w-[200px]">
                    <span className="tracking-wide text-sm font-medium">Add to Cart - $89</span>
                    <ArrowRight className="w-4 h-4 text-stone-50 group-hover:translate-x-1 transition-transform" />
                 </button>
                 <button className="group flex items-center justify-center gap-3 border border-stone-300 px-8 py-4 rounded-none hover:border-stone-900 hover:bg-stone-100 transition-all duration-300">
                    <span className="tracking-wide text-sm font-medium text-stone-900">Order Sample</span>
                 </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-stone-200 flex gap-8 text-stone-500">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span className="text-xs uppercase tracking-wider font-medium">10yr Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="w-4 h-4 text-emerald-700" />
                  <span className="text-xs uppercase tracking-wider font-medium">VOC Free</span>
                </div>
              </div>

           </motion.div>
        </div>

        {/* RIGHT: HERO IMAGE */}
        <div className="w-full lg:w-1/2 min-h-[50vh] lg:h-auto bg-stone-200 relative overflow-hidden">
             <AnimatePresence mode='wait'>
                 <motion.img 
                    key={activeImageIndex}
                    src={galleryImages[activeImageIndex].src} 
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="w-full h-full object-cover absolute inset-0"
                 />
             </AnimatePresence>
             
        
             <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-stone-50 via-transparent to-transparent lg:w-1/3 h-24 lg:h-full bottom-0 lg:bottom-auto lg:left-0 z-10 pointer-events-none" />
             
             {activeImageIndex === 0 && (
                <div 
                    className="absolute inset-0 mix-blend-multiply opacity-20 transition-colors duration-700 pointer-events-none"
                    style={{ backgroundColor: selectedShade.hex }}
                />
             )}
        </div>
    </motion.section>
  );
};
