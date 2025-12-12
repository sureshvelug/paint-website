import Hero from "./components/Hero";
import ValueProps from "./components/ValueProps";
import ColorPreview from "./components/ColorPreview";
import TechSection from "./components/TechSection";
import SustainabilityMetrics from "./components/SustainabilityMetrics";
import Testimonials from "./components/TestimonialCarousel";
import CTASection from "./components/CTASection";
import Image from "next/image";
import heroSrc from "@/public/images/hero.jpg";
import { Inspiration } from "next/font/google";
import InspirationSocialProof from "./components/Insipiration";
import { ContactForm } from "./components/ContactForm";
// This is a Server Component by default in App Router
export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Colors that make your home feel alive."
        subtitle="Paint good. Feel good."
        primaryCTA={{ text: "Request a Free Sample", href: "/contact#samples" }}
        secondaryCTA={{ text: "Explore Collections", href: "/colors" }}
        imageSrc="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80"
      />

      {/* Value Propositions */}
      <ValueProps />

      {/* Services - inspired by Loopy Paint */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-black/5 text-black rounded-full">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Premium Decorative Finishes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform walls with textures and effects that bring depth,
              character, and artistry to your space
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              // {
              //   title: "Mineral Finishes",
              //   image:
              //     "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80",
              // },
              {
                title: "Textured Paint",
                image:
                  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
              },
              // {
              //   title: "Concrete Effect",
              //   image:
              //     "https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80",
              // },
              {
                title: "Metallic Finishes",
                image:
                  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
              },
              {
                title: "Oxidation Effects",
                image:
                  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
              },
              // {
              //   title: "Microcement",
              //   image:
              //     "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80",
              // },
              {
                title: "Custom Finishes",
                image:
                  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 hover:border-black transition-all duration-300 bg-white shadow-sm hover:shadow-lg"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Button with Arrow */}
                <div className="p-5 border-t-2 border-gray-200 group-hover:border-black transition-colors duration-300">
                  <button className="flex items-center justify-between w-full text-left group/btn">
                    <span className="text-lg font-bold text-black">
                      {item.title}
                    </span>
                    <svg
                      className="w-5 h-5 text-black transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base border-2 border-black">
              Request Free Consultation
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Color Preview Section */}
      <div className = 'w-full bg-white'>
        <ColorPreview />  
      </div>

      {/* Inspiration Section - Real Homes and Projects */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-black/5 text-black rounded-full">
              Gallery
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Inspiration from Real Spaces
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Styled rooms, designer collaborations, and real homes transformed
              with our paints
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=900&q=80",
                alt: "Calm living room",
                title: "Serene Living",
              },
              {
                src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80",
                alt: "Minimal bedroom",
                title: "Minimal Bedroom",
              },
              {
                src: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=900&q=80",
                alt: "Bright kitchen",
                title: "Bright Kitchen",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 hover:border-black transition-all duration-500 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)]"
              >
                {/* Image */}
                <div className="aspect-4/3 relative overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Title Section */}
                <div className="p-5 border-t-2 border-gray-200 group-hover:border-black transition-colors duration-300">
                  <button className="flex items-center justify-between w-full text-left group/btn">
                    <span className="text-lg font-bold text-black">
                      {item.title}
                    </span>
                    <svg
                      className="w-5 h-5 text-black transform group-hover/btn:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-base">
              View Full Gallery
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Our Commitment - removed per request */}

      {/* Technology Section */}
      {/* <TechSection /> */}

      {/* Sustainability Metrics */}
      <SustainabilityMetrics />

      {/* Testimonials Carousel */}
      <Testimonials />

      {/* Final CTA */}
      {/* <CTASection /> */}
      {/* <InspirationSocialProof /> */}

      {/* Get a Free Quote (moved to last) */}
      {/* <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 mb-2">Get a Free Quote</h2>
          <p className="text-white/80 mb-8">
            Tell us a bit about your project. We’ll get back within 1 business
            day.
          </p>
          <form className="grid sm:grid-cols-2 gap-4 text-left">
            <input
              className="px-4 py-3 rounded-lg bg-[#101214] border border-white/10 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-sage"
              placeholder="Name"
            />
            <input
              className="px-4 py-3 rounded-lg bg-[#101214] border border-white/10 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-sage"
              placeholder="Email"
              type="email"
            />
            <input
              className="px-4 py-3 rounded-lg bg-[#101214] border border-white/10 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-sage sm:col-span-2"
              placeholder="Phone"
            />
            <textarea
              className="px-4 py-3 rounded-lg bg-[#101214] border border-white/10 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-brand-sage sm:col-span-2"
              placeholder="Tell us about your space"
              rows={4}
            />
            <div className="sm:col-span-2">
              <button
                type="submit"
                className="w-full bg-brand-gold text-black font-medium px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section> */}
      <ContactForm />
    </>
  );
}

// Optional: Add structured data for SEO
export async function generateMetadata() {
  return {
    title: "Eco-Luxury Paints - Nano-Based Sustainable Premium Paints",
    description:
      "India's first nano-mineral paint combining luxury, science, and sustainability. VOC-free, LEED-certified, 10+ year durability.",
    alternates: {
      canonical: "https://ecoluxurypaints.com",
    },
  };
}
