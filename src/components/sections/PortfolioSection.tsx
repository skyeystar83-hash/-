"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { id: 1, title: "Cheongdam Residence", category: "Residential", year: "2024" },
    { id: 2, title: "Seongsu Art Gallery", category: "Commercial", year: "2023" },
    { id: 3, title: "Hannam Penthouse", category: "Residential", year: "2024" },
    { id: 4, title: "Pangyo Tech Office", category: "Office", year: "2023" },
];

export default function PortfolioSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".project-item", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top 70%",
                    toggleActions: "play none none reverse",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="w-full py-24 bg-white text-deep-charcoal">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                    <h2 className="text-sm font-bold text-accent-gold uppercase tracking-widest mb-2">Our Portfolio</h2>
                    <h3 className="text-4xl md:text-5xl font-bold tracking-tight">Signature Projects</h3>
                </div>
                <Link href="/projects" className="hidden md:inline-block border-b border-deep-charcoal pb-1 text-lg hover:text-accent-gold hover:border-accent-gold transition-colors">
                    View All Projects
                </Link>
            </div>

            <div ref={triggerRef} className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {projects.map((project) => (
                    <div key={project.id} className="project-item group cursor-pointer">
                        <div className="w-full aspect-[4/3] bg-neutral-100 overflow-hidden mb-6 relative">
                            {/* Placeholder for Project Image */}
                            <div className="absolute inset-0 bg-neutral-200 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center">
                                {/* Image Placeholder */}
                                <span className="text-neutral-400">Project Image</span>
                            </div>
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                        </div>
                        <div className="flex justify-between items-start border-t border-neutral-200 pt-4">
                            <div>
                                <h4 className="text-2xl font-semibold mb-1 group-hover:text-accent-gold transition-colors">{project.title}</h4>
                                <p className="text-neutral-500">{project.category}</p>
                            </div>
                            <span className="text-neutral-400 font-mono">{project.year}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center md:hidden">
                <Link href="/projects" className="inline-block border-b border-deep-charcoal pb-1 text-lg">
                    View All Projects
                </Link>
            </div>
        </section>
    );
}
