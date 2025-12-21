"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"; // Assuming you have a utils file, if not I'll use template literals

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-white text-deep-charcoal shadow-sm py-4"
                : "bg-transparent text-white py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    나비창 <span className="text-xs font-light tracking-widest opacity-70">NAVICHANG</span>
                </Link>
                <nav className="hidden md:flex gap-10 text-sm uppercase tracking-widest font-medium">
                    <Link href="#" className="hover:text-accent-gold transition-colors">Company</Link>
                    <Link href="#" className="hover:text-accent-gold transition-colors">Service</Link>
                    <Link href="#" className="hover:text-accent-gold transition-colors">Portfolio</Link>
                    <Link href="#" className="hover:text-accent-gold transition-colors">Review</Link>
                    <Link href="#" className="hover:text-accent-gold transition-colors">Community</Link>
                </nav>
                <button className="md:hidden">
                    <span className="sr-only">Menu</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
