"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";

import { useConsultation } from "@/context/ConsultationContext";

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const { openModal } = useConsultation(); // Use hook

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
                    color: "#1a1a1a", // 초기에도 잘 보이게 일단 다크 처리, 배경 상황에 따라 변경 가능
                    borderBottom: "1px solid transparent",
                    paddingTop: "1.5rem",
                    paddingBottom: "1.5rem",
                    duration: 0.3,
                    ease: "power2.out",
                });
            }
        }
    }, [isScrolled]);

    return (
        <nav
            ref={navRef}
            className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 transition-colors will-change-[padding,background-color]"
        >
            <div className="flex items-center gap-12">
                <Link href="/" className="text-2xl font-bold tracking-tighter">
                    NAVICHANG
                </Link>
                <div className="hidden md:flex gap-8 text-sm font-medium">
                    <Link href="/" className="hover:text-accent-gold transition-colors">
                        홈
                    </Link>
                    <Link href="/products" className="hover:text-accent-gold transition-colors">
                        제품소개
                    </Link>
                    <Link href="/projects" className="hover:text-accent-gold transition-colors">
                        시공사례
                    </Link>
                    <Link href="/electric" className="hover:text-accent-gold transition-colors">
                        전동커튼
                    </Link>
                    <Link href="/about" className="hover:text-accent-gold transition-colors">
                        나비창 이야기
                    </Link>
                    <Link href="/reviews" className="hover:text-accent-gold transition-colors">
                        고객후기
                    </Link>
                    <button
                        onClick={openModal}
                        className="hover:text-accent-gold transition-colors text-left"
                    >
                        상담문의
                    </button>
                </div>
            </div>

            <div className="flex items-center gap-4 md:hidden">
                {/* Mobile Menu Icon (Placeholder) */}
                <button className="text-2xl">
                    ☰
                </button>
            </div>
        </nav>
    );
}
