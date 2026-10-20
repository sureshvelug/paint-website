"use client";

import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function NewHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const isHomePage = pathname === "/";


    const menuItems = [
        { label: "Technology", href: "/technology" },
        { label: "Collections", href: "/collections" },
        { label: "Our Story", href: "/story" },
    ];

    useEffect(() => {
        setScrolled(true);

        const timer = setTimeout(() => {
            if (window.scrollY <= 80) {
                setScrolled(false);
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [pathname]);

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
            {/* Backdrop */}
            <div
                onClick={() => setMobileMenuOpen(false)}
                className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-all duration-500 lg:hidden ${mobileMenuOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                    }`}
            />

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 right-0 z-[60] h-screen w-[280px] bg-white shadow-2xl transition-all duration-500 ease-in-out lg:hidden ${mobileMenuOpen
                    ? "translate-x-0"
                    : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between border-b p-5">
                    <h3 className="font-bold text-black">
                        Menu
                    </h3>

                    <button
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <X
                            size={24}
                            className="transition-transform duration-300 hover:rotate-90"
                        />
                    </button>
                </div>

                <nav className="flex flex-col py-4">
                    {menuItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="
                px-8
                py-4
                text-black
                font-semibold
                uppercase
                transition-all
                duration-300
                hover:bg-gray-100
                hover:pl-10
              "
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>

            {/* Header */}
            <header
                className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${scrolled || !isHomePage
                        ? "bg-white/95 backdrop-blur-md text-black shadow-lg py-4"
                        : "bg-transparent text-white py-5"
                    }`}
            >
                <div className="cursor-pointer mx-auto flex max-w-[1700px] items-center justify-between px-4 sm:px-6 lg:px-10">
                    {/* Logo */}
                    <h1
                        className={`font-bold tracking-tight transition-all duration-300 ${scrolled || !isHomePage
                                ? "text-xl md:text-2xl lg:text-3xl"
                                : "text-2xl md:text-3xl lg:text-4xl"
                            }`}
                        onClick={() => router.push('/')}
                    >
                        Limeria Colours
                    </h1>

                    {/* Desktop Menu */}
                    <nav className="hidden lg:flex items-center gap-8 xl:gap-12 text-sm font-semibold uppercase">
                        {menuItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="hover:opacity-70 transition"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <ShoppingBag
                            size={24}
                            className="cursor-pointer"
                            onClick={() => router.push("/cart")}
                        />

                        <button
                            className="lg:hidden"
                            onClick={() =>
                                setMobileMenuOpen(!mobileMenuOpen)
                            }
                        >
                            {mobileMenuOpen ? (
                                <X
                                    size={28}
                                    className="rotate-180 transition-all duration-300"
                                />
                            ) : (
                                <Menu
                                    size={28}
                                    className="transition-all duration-300"
                                />
                            )}
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}