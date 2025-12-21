"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react"; // Import icons

import { useConsultation } from "@/context/ConsultationContext";

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const menuOverlayRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { openModal } = useConsultation();

    // Scroll listener for sticky navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Sticky Navbar animation
    useEffect(() => {
        if (navRef.current) {
            if (isScrolled) {
                gsap.to(navRef.current, {
                    backgroundColor: "#ffffff",
                    color: "#1a1a1a",
                    borderBottom: "1px solid #e5e5e5",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    duration: 0.3,
                    ease: "power2.out",
                });
            } else {
                gsap.to(navRef.current, {
                    backgroundColor: "transparent",
                    color: "#1a1a1a",
                    borderBottom: "1px solid transparent",
                    paddingTop: "1.5rem",
                    paddingBottom: "1.5rem",
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        }
    }, [isScrolled]);

    // Mobile Menu Animation
    useEffect(() => {
        if (menuOverlayRef.current) {
            if (isMenuOpen) {
                // Prevent scrolling when menu is open
                document.body.style.overflow = "hidden";

                gsap.to(menuOverlayRef.current, {
                    display: "flex",
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: "power4.out",
                });

                gsap.from(".mobile-nav-link", {
                    y: 20,
                    opacity: 0,
                    stagger: 0.1,
                    delay: 0.2,
                    duration: 0.4,
                    ease: "power2.out"
                });
            } else {
                document.body.style.overflow = "auto";

                gsap.to(menuOverlayRef.current, {
                    opacity: 0,
                    y: -20,
                    duration: 0.3,
                    ease: "power4.in",
                    onComplete: () => {
                        if (menuOverlayRef.current) {
                            menuOverlayRef.current.style.display = "none";
                        }
                    }
                });
            }
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: "홈", href: "/" },
        { name: "제품소개", href: "/products" },
        { name: "시공사례", href: "/projects" },
        { name: "전동커튼", href: "/electric" },
        { name: "나비창 이야기", href: "/about" },
        { name: "고객후기", href: "/reviews" },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    const handleConsultationClick = () => {
        closeMenu();
        openModal();
    };

    return (
        <>
            <nav
                ref={navRef}
                className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 transition-colors will-change-[padding,background-color]"
            >
                <div className="flex items-center gap-12">
                    <Link href="/" className="text-2xl font-bold tracking-tighter" onClick={closeMenu}>
                        NAVICHANG
                    </Link>
                    <div className="hidden md:flex gap-8 text-sm font-medium">
                        {navLinks.map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-accent-gold transition-colors">
                                {link.name}
                            </Link>
                        ))}
                        <button
                            onClick={openModal}
                            className="hover:text-accent-gold transition-colors text-left"
                        >
                            상담문의
                        </button>
                    </div>
                </div>

                <div className="flex items-center gap-4 md:hidden">
                    <button onClick={toggleMenu} className="p-2 transition-colors" aria-label="Toggle Menu">
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                ref={menuOverlayRef}
                className="fixed inset-0 z-[49] bg-white hidden flex-col items-center justify-center p-8 opacity-0 pointer-events-auto"
            >
                <div className="flex flex-col items-center gap-8 text-2xl font-semibold text-deep-charcoal">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="mobile-nav-link hover:text-accent-gold transition-colors py-2"
                            onClick={closeMenu}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button
                        onClick={handleConsultationClick}
                        className="mobile-nav-link hover:text-accent-gold transition-colors py-2"
                    >
                        상담문의
                    </button>
                </div>

                {/* Visual Accent */}
                <div className="mt-16 w-12 h-[2px] bg-accent-gold/30"></div>
                <p className="mt-8 text-gray-400 text-sm tracking-widest">NAVICHANG | PREMIUM CURTAINS</p>
            </div>
        </>
    );
}
