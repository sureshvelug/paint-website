'use client'

import React from 'react';
import { motion } from 'framer-motion';

// --- INTERFACES ---
interface Point {
  title: string;
  description: string;
}

interface TableRow {
  innovation: string;
  oldWay: string;
  nanogradsWay: string;
}

interface ImageProps {
  src: string;
  position: 'left' | 'right';
}

interface SectionData {
  heading: string;
  body: string;
  points?: Point[];
  table?: TableRow[];
  image: ImageProps;
}

interface ConclusionData {
  heading: string;
  paragraph: string;
  call: string;
}

interface StoryData {
  title: string;
  subtitle: string;
  heroTag: string;
  sections: SectionData[];
  conclusion: ConclusionData;
}

const storyData: StoryData = {
  heroTag: "Why The Chemical Industry Exists",
  title: "Real Science. Real Life.",
  subtitle: "True material innovation should be experienced, not hidden. We exist to bring molecular-level science into everyday life.",
  sections: [
    {
      heading: "Two Technologists. One Truth.",
      body: `NANOGRADS was founded by two nanotechnologists whose careers took them into different worlds. One mastered material behavior at the atomic and nanoscale level through deep R&D. The other entered the paint and coatings industry, where a hard truth emerged: **The market was driven by marketing—not material intelligence.**`,
      points: [
        { title: "The Luxury Gap", description: "Luxury brands sold appearance without durability." },
        { title: "The Function Gap", description: "Functional products ignored aesthetics." },
        { title: "The Sustainable Gap", description: "Sustainable solutions sacrificed performance." },
      ],

      image: { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=2000", position: 'right' },
    },
    {
      heading: "Ending the Consumer Compromise",
      body: `For too long, people had to choose between beauty or durability, sustainability or performance. TCI was built to eliminate these false choices. By engineering materials at the nanoscale, we integrate eco‑responsibility, aesthetic elegance, and structural endurance into a single solution. **This is not improvement at the surface level. This is transformation from within.**`,
      points: [
        { title: "No More Trade-Offs", description: "We reject the choice between function and refinement." },
        { title: "Molecular Transformation", description: "Engineering materials at the nanoscale to solve problems before they start." },
      ],
      // Verified Image: Clean, minimalist interior (The Result)
      image: { src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=2000", position: 'left' },
    },
    {
      heading: "Material Intelligence™",
      body: `Our breakthrough lies in Material Intelligence™—a proprietary approach that redesigns how materials behave at the molecular level. Luxury is not a finish. Luxury is not a promise. **Luxury is intelligence, responsibility, and endurance.**`,
      table: [
        { innovation: "Color Brilliance", oldWay: "Surface-level pigments that fade.", nanogradsWay: "**Long-lasting color brilliance** locked at the molecular level." },
        { innovation: "Durability", oldWay: "Vulnerable to wear and weather.", nanogradsWay: "**Resistance to wear, weather, and time** built into the matrix." },
        { innovation: "Performance", oldWay: "Static material properties.", nanogradsWay: "**Smarter material performance** integrated into the structure." },
      ],
      // Verified Image: Abstract Nanostructure/Dark Tech
      image: { src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=2000", position: 'right' },
    },
  ],
  conclusion: {
    heading: "The Future of Luxury is Long-Lasting",
    paragraph: "True luxury is longevity, intelligence, and responsibility engineered at the molecular level. It's about respecting your investment, your time, and the planet.",
    call: "Welcome to the molecular revolution. Welcome to a paint that refuses to compromise. This is where innovation finally meets your walls.",
  },
};

// --- HELPER: Rich Text Renderer ---
const renderRichText = (html: string) => ({ 
  __html: html.replace(/\*\*(.*?)\*\*/g, '<strong class="text-stone-900 font-medium">$1</strong>') 
});

// --- COMPONENT: ZigZagSection ---
const ZigZagSection: React.FC<SectionData & { index: number }> = ({ heading, body, points, table, image, index }) => {
  const isImageLeft = image.position === 'left';
  
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <motion.section 
      className="py-24 border-b border-stone-100 last:border-b-0 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={animationVariants}
    >
      <div className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}>
        {/* Visual Column */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden group shadow-lg">
            <img 
              src={image.src} 
              alt={heading} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>
        </div>

        {/* Content Column */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-serif text-stone-900 mb-6 leading-tight">{heading}</h2>
          
          <div 
            className="text-lg text-stone-600 leading-relaxed mb-8 font-light" 
            dangerouslySetInnerHTML={renderRichText(body)} 
          />
          
          {points && (
            <div className="grid grid-cols-1 gap-6">
              {points.map((point) => (
                <div key={point.title} className="flex gap-4 p-5 rounded-sm bg-stone-50 border border-stone-100 hover:border-amber-200 transition-colors">
                  <div className="mt-1.5 min-w-[3px] h-10 bg-amber-600"></div>
                  <div>
                    <h3 className="font-serif font-semibold text-stone-900 mb-1">{point.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed font-light">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {table && (
            <div className="overflow-hidden border border-stone-200 rounded-sm mt-4 shadow-sm">
              <table className="min-w-full divide-y divide-stone-200">
                <thead className="bg-stone-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider">Feature</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-stone-500 uppercase tracking-wider hidden sm:table-cell">Standard</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-amber-800 uppercase tracking-wider bg-amber-50/60">Material Intelligence™</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-stone-200">
                  {table.map((row) => (
                    <tr key={row.innovation}>
                      <td className="px-4 py-4 text-sm font-medium text-stone-900">{row.innovation}</td>
                      <td className="px-4 py-4 text-sm text-stone-500 hidden sm:table-cell">{row.oldWay}</td>
                      <td 
                        className="px-4 py-4 text-sm text-stone-800 bg-amber-50/30 font-medium" 
                        dangerouslySetInnerHTML={renderRichText(row.nanogradsWay)}
                      ></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </motion.section>
  );
};

// --- MAIN PAGE COMPONENT ---
export default function OurStoryPage() {
  const { sections, conclusion } = storyData;

  return (
    <div className="bg-white min-h-screen font-sans text-stone-900 selection:bg-amber-100">
      
      {/* Hero Header */}
      <header className="py-32 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-widest mb-8">
            {storyData.heroTag}
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-medium text-stone-900 tracking-tight mb-6 leading-tight">
            {storyData.title}
          </h1>
          <p className="text-xl sm:text-2xl text-stone-500 font-light max-w-3xl mx-auto leading-relaxed">
            {storyData.subtitle}
          </p>
        </motion.div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <ZigZagSection 
            key={index} 
            {...section} 
            index={index} 
            image={{ 
              ...section.image, 
              position: index % 2 !== 0 ? 'left' : 'right' 
            }} 
          />
        ))}
      </main>
      <section className="py-32 px-4 bg-stone-50 mt-12 border-t border-stone-100">
        <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-medium text-stone-900 mb-6">
            {conclusion.heading}
          </h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed font-light">
            {conclusion.paragraph}
          </p>
          
          <blockquote className="text-xl font-medium text-amber-900/80 italic mb-12 border-l-4 border-amber-500 pl-6 inline-block text-left bg-white p-8 rounded-r-sm shadow-sm">
            {conclusion.call}
          </blockquote>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/technology" 
              className="group inline-flex justify-center items-center px-8 py-4 text-sm font-bold tracking-widest text-white bg-stone-900 uppercase hover:bg-stone-800 transition-all shadow-lg shadow-stone-200"
            >
              Discover Our Technology
            </a> 
            <a 
              href="/collections" 
              className="group inline-flex justify-center items-center px-8 py-4 text-sm font-bold tracking-widest text-stone-900 bg-transparent border border-stone-300 uppercase hover:bg-white hover:border-stone-900 transition-all"
            >
              View Collections
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
