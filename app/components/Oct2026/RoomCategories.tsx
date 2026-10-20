"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const rooms = [
    {
        title: "All rooms",
        description: "Paints for every kind of space.",
        image: "/rooms/all-room.jpg",
    },
    {
        title: "Living room",
        description: "Inviting, relaxed or bold colour schemes.",
        image: "/rooms/living-room.jpg",
    },
    {
        title: "Dining room",
        description: "Colours for creating a social space.",
        image: "/rooms/dining-room.jpg",
    },
    {
        title: "Bedroom",
        description: "Wall colours for calm, relaxing spaces.",
        image: "/rooms/bedroom.jpg",
    },
    {
        title: "Hallway",
        description: "Welcoming colours for first impressions.",
        image: "/rooms/hallway.jpg",
    },
    {
        title: "Kitchen",
        description: "Colours for the room that's the heart of the home.",
        image: "/rooms/kitchen.jpg",
    },
];

export default function RoomCategories() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({
            left: -400,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({
            left: 400,
            behavior: "smooth",
        });
    };

    return (
        <section className="relative overflow-hidden bg-[#fffeeb] py-12 md:py-16 lg:py-24">
            {/* Top Left Paint Splash */}
            <div
                className="
      absolute
      -top-20
      -left-20
      w-64
      h-64
      rounded-[60%_40%_55%_45%]
      bg-[#00d4ff]/15
      blur-2xl
      pointer-events-none
    "
            />

            {/* Top Right Paint Splash */}
            <div
                className="
      absolute
      -top-16
      -right-16
      w-56
      h-56
      rounded-[40%_60%_50%_50%]
      bg-[#ff5e7d]/15
      blur-2xl
      pointer-events-none
    "
            />

            {/* Bottom Left Paint Splash */}
            <div
                className="
      absolute
      -bottom-20
      -left-12
      w-72
      h-72
      rounded-[55%_45%_65%_35%]
      bg-[#facc15]/15
      blur-3xl
      pointer-events-none
    "
            />
            <div className="mx-auto max-w-[1800px] px-4 md:px-6 lg:px-8">
                {/* Heading */}
                <h2 className="mb-12 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black">
                    <span className="italic font-serif">Feel good</span> colours for all
                    spaces.
                </h2>

                <div className="relative">
                    {/* Left Arrow */}
                    <button
                        onClick={scrollLeft}
                        className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-4 shadow-lg lg:flex hover:bg-gray-100"
                    >
                        <ChevronLeft size={28} />
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={scrollRight}
                        className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-4 shadow-lg lg:flex hover:bg-gray-100"
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* Cards Container */}
                    <div
                        ref={scrollRef}
                        className="flex gap-4 md:gap-5 lg:gap-6 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide pb-4"
                    >
                        {rooms.map((room) => (
                            <div
                                key={room.title}
                                className="w-[260px] sm:w-[280px] md:w-[300px] lg:w-[320px] xl:w-[340px] flex-shrink-0 border border-gray-300 bg-white p-2 border border-gray-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >
                                {/* Card Image */}
                                <img
                                    src={room.image}
                                    alt={room.title}
                                    className=" h-[180px] sm:h-[220px] md:h-[240px] lg:h-[260px] xl:h-[280px] w-full object-cover transition-transform duration-500 hover:scale-105"
                                />

                                {/* Card Content */}
                                <div className="p-4">
                                    <h3 className="mb-2 text-lg md:text-xl lg:text-2xl font-semibold text-black">
                                        {room.title}
                                    </h3>

                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                        {room.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>


                    {/* Mobile Scroll Indicator */}
                    <div className="mt-6 flex justify-center lg:hidden">
                        <div className="h-1 w-16 rounded-full bg-gray-300">
                            <div className="h-1 w-8 rounded-full bg-black"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}