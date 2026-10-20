"use client";

import { useEffect, useState } from "react";
import { ArrowRight, ShoppingBag, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NewBannerVideo() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();

    const menuItems = [
        { label: "Technology", href: "/technology" },
        { label: "Collections", href: "/collection" },
        { label: "Our Story", href: "/story" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80);
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setMobileMenuOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = mobileMenuOpen
            ? "hidden"
            : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [mobileMenuOpen]);

    return (
        <div className="w-full overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-screen overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="absolute inset-0 h-full w-full object-cover"
                >
                    <source
                        src="/videos/banner-video.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>

                <div className="absolute inset-0 bg-black/30" />

                <div className="relative z-10 flex h-full flex-col justify-end">
                    {/* Info Bar */}
                    <div className="mx-4 sm:mx-6 lg:mx-12 border-y border-white/30 py-6 lg:py-10 text-white">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                            <p className="text-center lg:text-left text-base md:text-lg lg:text-xl font-semibold">
                                Feel good Paints in Astonishing Colours.
                            </p>

                            <p className="text-center text-base md:text-lg lg:text-xl font-semibold">
                                Award-winning paints, easy-to-use
                                samples and expert colour advice.
                            </p>

                            <div className="flex justify-center lg:justify-end">
                                <button
                                    onClick={() => router.push("/collections")}
                                    className="flex items-center gap-2 rounded-md bg-white px-6 md:px-8 py-3 md:py-4 font-semibold text-black hover:bg-gray-200 transition"
                                >
                                    Explore Colours
                                    <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Hero Title */}
                    <div className="px-4 sm:px-6 lg:px-10 pb-6">
                        <h1 className=" text-white font-extrabold leading-none tracking-tight text-center tracking-wider text-[80px] xs:text-[100px] sm:text-[150px] md:text-[220px] lg:text-[260px] xl:text-[280px] 2xl:text-[340px]">
                            Limeria
                        </h1>
                    </div>
                </div>
            </section>
        </div>
    );
}