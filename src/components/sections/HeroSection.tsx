"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ConsultationButton from "@/components/ui/ConsultationButton";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Background Zoom Effect
            tl.fromTo(bgRef.current,
                { scale: 1.1 },
                { scale: 1, duration: 2, ease: "power2.out" }
            );

            // Text Fade In
            tl.from(textRef.current, {
                y: 50,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: 0.5, // Start after background starts settling
            }, "<");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-gray-900">
            {/* Background Image Area */}
            <div ref={bgRef} className="absolute inset-0">
                <Image
                    src="/images/hero-bg.jpg"
                    alt="Hero Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay for text readability */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div ref={textRef} className="text-center text-white px-6">
                    <p className="text-sm md:text-base tracking-[0.3em] font-light mb-4 uppercase text-accent-gold">
                        Premium Curtain & Blind
                    </p>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
                        예뻐야, 커튼이다<br />
                        <span className="font-light">NAVICHANG</span>
                    </h1>
                    <p className="text-white/80 max-w-xl mx-auto font-light leading-relaxed mb-10">
                        당신의 라이프스타일에 맞춘 최적의 스타일링.<br />
                        나비창이 선사하는 감각적인 공간을 경험해보세요.
                    </p>
                    <ConsultationButton className="inline-block px-8 py-3 bg-accent-gold text-white font-bold text-lg rounded-full hover:bg-white hover:text-deep-charcoal transition-all duration-300" />
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-[10px] uppercase tracking-widest text-white/50">Scroll</span>
                <div className="w-[1px] h-8 bg-white/30"></div>
            </div>
        </section>
    );
}
