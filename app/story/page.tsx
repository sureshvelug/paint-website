// app/page.tsx
import React from 'react';

const storyData = {
  title: "Painting Re-Engineered. Beyond the Surface.",
  subtitle: "The Science of Lasting Beauty",
  sections: [
    {
      heading: "The Problem We Saw: Ending the Consumer Compromise",
      body: `For decades, consumers faced an impossible choice. Premium products prioritized appearance over longevity. Functional products sacrificed aesthetics. Eco-friendly options delivered neither durability nor visual appeal. We rejected this compromise.`,
      points: [
        {
          title: "The Aesthetics Trap",
          description: "Beautiful finishes that faded, chipped, and failed within a few seasons.",
        },
        {
          title: "The Durability Gap",
          description: "Functional paints that offered protection but lacked visual refinement.",
        },
        {
          title: "The Eco Sacrifice",
          description: "Sustainable options that compromised on longevity and visual quality.",
        },
      ],
      image: { src: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", position: 'right' },
    },
    {
      heading: "Where Innovation Meets Purpose: The Molecular Revolution",
      body: `Our founders met as materials science classmates, united by a passion for molecular engineering. Their mission: to bring aerospace-grade nanotechnology directly to consumers. True performance doesn't happen with surface-level additives; it happens at the **molecular level**.`,
      points: [
        {
          title: "Aerospace Heritage",
          description: "Technology born in the world's most demanding environments, now accessible to everyone.",
        },
        {
          title: "Material Intelligence™",
          description: "We utilize cutting-edge **nanotechnology** to transform the structure of our coatings from within.",
        },
      ],
      image: { src: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", position: 'left' },
    },
    {
      heading: "The Performance Promise",
      body: `We don't sell paint; we deliver **Extended Longevity** and **Brilliant Color Retention** engineered for the modern world. This is the new definition of luxury: **Intelligence, Durability, and Responsibility** united.`,
      table: [
        {
          innovation: "Color Retention",
          oldWay: "Pigments are surface-level, quickly fading from UV damage.",
          nanogradsWay: "Colors are **molecularly locked**, maintaining vibrancy for years against sun and weather.",
        },
        {
          innovation: "Surface Protection",
          oldWay: "Temporary coatings that scratch and stain easily.",
          nanogradsWay: "**Advanced Surface Protection** actively resists scratches, stains, and environmental wear.",
        },
        {
          innovation: "Sustainability",
          oldWay: "Compromise on durability, leading to constant re-painting and waste.",
          nanogradsWay: "**Sustainable Intelligence** ensures eco-responsible formulations deliver maximum longevity.",
        },
      ],
      image: { src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", position: 'right' },
    },
  ],
  conclusion: {
    heading: "The Future of Luxury is Long-Lasting",
    paragraph: "True luxury is longevity, intelligence, and responsibility engineered at the molecular level. It's about respecting your investment, your time, and the planet.",
    call: "Welcome to the molecular revolution. Welcome to a paint that refuses to compromise. This is where innovation finally meets your walls.",
  },
};

// --- HELPER: Rich Text Renderer ---
const renderRichText = (html: string) => {
  return { __html: html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') };
};

// --- COMPONENT: ZigZagSection ---
interface SectionProps {
  heading: string;
  body: string;
  points?: { title: string; description: string }[];
  table?: { innovation: string; oldWay: string; nanogradsWay: string }[];
  image: { src: string; position: 'left' | 'right' };
  index: number;
}

const ZigZagSection: React.FC<SectionProps> = ({ heading, body, points, table, image }) => {
  const isImageLeft = image.position === 'left';
  
  return (
    <section className="py-20 border-b border-gray-100 last:border-b-0">
      <div className={`flex flex-col ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
        
        {/* Visual Column */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/3] rounded-2xl shadow-xl overflow-hidden border border-gray-100 group">
            <img 
              src={image.src} 
              alt={heading} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>

        {/* Content Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            {heading}
          </h2>
          
          <div 
            className="text-lg text-gray-600 leading-relaxed mb-8 font-light" 
            dangerouslySetInnerHTML={renderRichText(body)}
          />
          
          {/* Points Grid */}
          {points && (
            <div className="grid grid-cols-1 gap-6">
              {points.map((point) => (
                <div key={point.title} className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-indigo-100 transition-colors">
                  <div className="min-w-[4px] min-h-[4px] w-full h-1 sm:w-1 sm:h-auto bg-indigo-500 rounded-full sm:rounded-none"></div>
                  <div>
                    <h3 className="font-serif font-semibold text-gray-900 mb-1">{point.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed font-light">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Comparison Table */}
          {table && (
            <div className="overflow-hidden border border-gray-200 rounded-xl shadow-sm mt-4">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Feature</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider hidden sm:table-cell">Standard</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-indigo-600 uppercase tracking-wider bg-indigo-50/50">Our Technology</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {table.map((row) => (
                    <tr key={row.innovation}>
                      <td className="px-4 py-4 text-sm font-medium text-gray-900">{row.innovation}</td>
                      <td className="px-4 py-4 text-sm text-gray-500 hidden sm:table-cell">{row.oldWay}</td>
                      <td className="px-4 py-4 text-sm text-gray-800 bg-indigo-50/30 font-medium" dangerouslySetInnerHTML={renderRichText(row.nanogradsWay)}></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// --- MAIN PAGE COMPONENT ---
const OurStoryPage: React.FC = () => {
  const { sections, conclusion } = storyData;

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-indigo-100">
      
      {/* Hero Header */}
      <header className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 text-center max-w-5xl mx-auto">
        <span className="inline-block py-1 px-3 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-6">
          Our Story
        </span>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-extrabold text-gray-900 tracking-tight mb-6">
          {storyData.title}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 font-light max-w-3xl mx-auto">
          {storyData.subtitle}
        </p>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {sections.map((section, index) => (
          <ZigZagSection 
            key={index} 
            {...section} 
            index={index}
            // Logic to alternate layout: even indices (0, 2) = Image Right (default in data is mixed, so we force alternation)
            image={{ 
              ...section.image, 
              position: index % 2 !== 0 ? 'left' : 'right' 
            }}
          />
        ))}
      </main>

      {/* Footer/Conclusion */}
      <section className="py-24 px-4 bg-gray-50 mt-12 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-6">
            {conclusion.heading}
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
            {conclusion.paragraph}
          </p>
          <blockquote className="text-xl font-medium text-indigo-900 italic mb-12 border-l-4 border-indigo-500 pl-6 inline-block text-left bg-white p-6 rounded-r-lg shadow-sm">
            {conclusion.call}
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/technology" 
              className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all transform hover:-translate-y-1 shadow-lg shadow-indigo-200"
            >
              Discover Our Technology
            </a>
            <a 
              href="/products" 
              className="inline-flex justify-center items-center px-8 py-4 text-base font-bold text-indigo-700 bg-white border-2 border-indigo-100 rounded-full hover:border-indigo-600 hover:bg-indigo-50 transition-all"
            >
              View Our Product Collections
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStoryPage;
