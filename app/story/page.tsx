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
      image: { src: "", position: 'right' },
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
      image: { src: "", position: 'left' },
    },
    {
      heading: "The [Your Website Name] Performance Promise",
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
      image: { src: "", position: 'right' },
    },
  ],
  conclusion: {
    heading: "The Future of Luxury is Long-Lasting",
    paragraph: "True luxury is longevity, intelligence, and responsibility engineered at the molecular level. It's about respecting your investment, your time, and the planet.",
    call: "Welcome to the molecular revolution. Welcome to a paint that refuses to compromise. This is where innovation finally meets your walls.",
  },
};
// --- END DATA STRUCTURE ---


// --- COMPONENT: ZigZagSection (Handles the alternating content/image blocks) ---
interface SectionProps {
  heading: string;
  body: string;
  points?: { title: string; description: string }[];
  table?: { innovation: string; oldWay: string; nanogradsWay: string }[];
  image: { src: string; position: 'left' | 'right' };
  index: number;
}

const renderRichText = (html: string) => {
  return { __html: html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') };
};

const ZigZagSection: React.FC<SectionProps> = ({ heading, body, points, table, image, index }) => {
  const isImageLeft = image.position === 'left';

  // Order array for flex-row-reverse based on image position
  const orderClasses = isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse';

  return (
    <section className={`flex flex-col ${orderClasses} gap-12 py-16 items-center border-b border-gray-200 last:border-b-0`}>
      
      {/* Visual Column */}
      <div className="w-full lg:w-5/12 p-4">
        <div className="aspect-video bg-indigo-100 rounded-xl shadow-2xl overflow-hidden flex items-center justify-center text-center text-gray-700 font-bold text-lg p-8 border-4 border-indigo-400/50">
          {image.src} (Placeholder for Diagram/Visual)
        </div>
      </div>

      {/* Content Column */}
      <div className="w-full lg:w-7/12 lg:p-4">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-6 border-b-2 border-indigo-300 inline-block pb-1">
          {heading}
        </h2>
        
        {/* Main Body */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8" dangerouslySetInnerHTML={renderRichText(body)}></p>
        
        {/* Points/Bullets */}
        {points && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {points.map((point) => (
              <div key={point.title} className="p-4 bg-white rounded-lg shadow-md border-t-4 border-indigo-400">
                <h3 className="text-md font-bold text-gray-900 mb-1">{point.title}</h3>
                <p className="text-sm text-gray-500">{point.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Table (Used only in the last section) */}
        {table && (
          <div className="overflow-x-auto mt-10">
            <table className="min-w-full divide-y divide-gray-300 shadow-xl rounded-lg overflow-hidden">
              <thead className="bg-indigo-600 text-white">
                <tr>
                  <th scope="col" className="py-3 pl-4 pr-3 text-left text-sm font-semibold">Innovation</th>
                  <th scope="col" className="hidden sm:table-cell px-3 py-3 text-left text-sm font-semibold">The Old Way</th>
                  <th scope="col" className="px-3 py-3 text-left text-sm font-semibold bg-indigo-700">The Difference</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {table.map((row) => (
                  <tr key={row.innovation} className="hover:bg-indigo-50 transition duration-150">
                    <td className="whitespace-nowrap py-3 pl-4 pr-3 text-sm font-medium text-indigo-700">{row.innovation}</td>
                    <td className="hidden sm:table-cell px-3 py-3 text-sm text-gray-500">{row.oldWay}</td>
                    <td className="px-3 py-3 text-sm text-gray-800 bg-indigo-50 font-semibold" dangerouslySetInnerHTML={renderRichText(row.nanogradsWay)}></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};


// --- MAIN PAGE COMPONENT ---
const OurStoryPage: React.FC = () => {
  const { sections, conclusion } = storyData;

  return (
    <div className="bg-white text-gray-800 font-sans min-h-screen">
      
      {/* Hero Header Section */}
      <header className="bg-indigo-900 text-white py-24 px-4 sm:px-6 lg:px-8 shadow-2xl">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest opacity-80 mb-2">Our Story</p>
          <h1 className="text-6xl font-extrabold sm:text-7xl mb-4">
            🎨 {storyData.title}
          </h1>
          <p className="mt-4 text-2xl font-light text-indigo-200">
            {storyData.subtitle}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        
        {/* Render Zig-Zag Sections */}
        {sections.map((section, index) => (
          <ZigZagSection 
            key={index} 
            {...section} 
            index={index} 
            // Override position for alternating pattern: index % 2 === 0 -> left, else -> right
            image={{ ...section.image, position: index % 2 === 0 ? 'left' : 'right' }}
          />
        ))}
      </main>

      {/* Conclusion & CTA Section */}
      <section className="bg-gray-100 py-20 px-4 text-center border-t-4 border-indigo-700/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-4">
            {conclusion.heading}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            {conclusion.paragraph}
          </p>
          <p className="text-2xl font-light italic text-gray-600 max-w-4xl mx-auto mb-12">
            "{conclusion.call}"
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-6">
            <a 
              href="/technology" 
              className="px-10 py-4 text-lg font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 shadow-2xl transition duration-300 transform hover:scale-105 hover:-translate-y-0.5"
            >
              Discover Our Technology
            </a>
            <a 
              href="/products" 
              className="px-10 py-4 text-lg font-medium text-indigo-700 border-2 border-indigo-700 rounded-full hover:bg-indigo-50 transition duration-300 transform hover:scale-105 hover:-translate-y-0.5"
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