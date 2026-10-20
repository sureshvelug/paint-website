"use client";
import { motion } from "framer-motion";

const colours = [
  {
    name: "colour1",
    subtitle: "Best Seller",
    finish: "MATT EMULSION | 5 SIZES",
    price: "FROM: £1.50",
    image: "/colours/colour1.jpg",
  },
  {
    name: "colour2",
    subtitle: "",
    finish: "MATT EMULSION | 4 SIZES",
    price: "FROM: £1.50",
    image: "/colours/colour2.jpg",
  },
  {
    name: "colour3",
    subtitle: "",
    finish: "MATT EMULSION | 5 SIZES",
    price: "FROM: £1.50",
    image: "/colours/colour3.jpg",
  },
  {
    name: "colour4",
    subtitle: "",
    finish: "MATT EMULSION | 4 SIZES",
    price: "FROM: £1.50",
    image: "/colours/colour4.jpg",
  },
  {
    name: "colour5",
    subtitle: "",
    finish: "MATT EMULSION | 4 SIZES",
    price: "FROM: £1.50",
    image: "/colours/colour5.jpg",
  },
  {
    name: "colour6",
    subtitle: "",
    finish: "MATT EMULSION | 4 SIZES",
    price: "FROM: £1.50",
    image: "/colours/colour6.jpg",
  },
  {
    name: "colour7",
    subtitle: "",
    finish: "MATT EMULSION | 4 SIZES",
    price: "FROM: £1.50",
    image: "/colours/colour7.jpg",
  },
  {
    name: "colour8",
    subtitle: "",
    finish: "MATT EMULSION | 4 SIZES",
    price: "FROM: £1.50",
    image: "/colours/colour8.jpg",
  },
  {
    name: "colour9",
    subtitle: "",
    finish: "MATT EMULSION | 4 SIZES",
    price: "FROM: £1.50",
    image: "/colours/colour9.jpg",
  },
  {
    name: "colour10",
    subtitle: "",
    finish: "MATT EMULSION | 4 SIZES",
    price: "FROM: £1.50",
    image: "/colours/colour10.jpg",
  },
];

export default function PopularColours() {
  return (
    <section className="relative overflow-hidden bg-[#e5ebe6] py-12 lg:py-20">
      {/* Multicolor Paint Dust */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  {/* Tiny Floating Paint Particles */}
  {Array.from({ length: 120 }).map((_, i) => {
    const colors = [
      "#00d4ff",
      "#ff006e",
      "#22c55e",
      "#f59e0b",
      "#8b5cf6",
      "#ef4444",
      "#14b8a6",
      "#eab308",
    ];

  const top = (i * 13) % 100;
  const left = (i * 17) % 100;

    return (
      <motion.div
        key={i}
        animate={{
          y: [-8, 8, -8],
          x: [-4, 4, -4],
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 3 + (i % 5),
          repeat: Infinity,
          ease: "easeInOut",
          delay: i * 0.05,
        }}
        className="absolute rounded-full"
        style={{
          backgroundColor: colors[i % colors.length],
          width: `${2 + (i % 5)}px`,
          height: `${2 + (i % 5)}px`,
          top: `${top}%`,
          left: `${left}%`,
          filter: "blur(0.5px)",
        }}
      />
    );
  })}

  {/* Larger Floating Paint Drops */}
  {[...Array(12)].map((_, i) => {
    const colors = [
      "#00d4ff",
      "#ff006e",
      "#22c55e",
      "#f59e0b",
      "#8b5cf6",
      "#eab308",
    ];

    return (
      <motion.div
        key={`drop-${i}`}
        animate={{
          y: [-15, 15, -15],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 5 + i,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute rounded-full blur-sm"
        style={{
          backgroundColor: colors[i % colors.length],
          opacity: 0.25,
          width: `${20 + i * 2}px`,
          height: `${20 + i * 2}px`,
          top: `${Math.random() * 90}%`,
          left: `${Math.random() * 95}%`,
        }}
      />
    );
  })}
</div>
      <div className="mx-auto max-w-[1800px] px-4 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row">
          {/* Left Content */}
          <div className="w-full lg:w-[280px] lg:flex-shrink-0">
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-none text-black">
              Popular
              <br />
              colours.
            </h2>

            <p className="mt-6 max-w-[250px] text-lg md:text-xl leading-relaxed text-black">
              Discover bold statement wall colours to neutral shades.
            </p>
          </div>

          {/* Colour Cards */}
          <div className="flex-1">
            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                gap-4
              "
            >
              {colours.map((colour) => (
                <div
                  key={colour.name}
                  className="
                    bg-[#f8f8f8]
                    border
                    border-gray-300
                    p-3
                    rounded-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={colour.image}
                      alt={colour.name}
                      className="
                        h-[140px]
                        sm:h-[180px]
                        md:h-[200px]
                        lg:h-[220px]
                        w-full
                        object-cover
                      "
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}