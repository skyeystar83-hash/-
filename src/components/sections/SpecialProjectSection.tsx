"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SpecialProjectSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".special-item", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Placeholder data
    const apecItems = [1, 2, 3, 4];
    const schoolItems = [1, 2];
    const hospitalItems = [1, 2];
    const dentalItems = [1, 2];
    const pensionItems = [1, 2];
    const restaurantItems = [1, 2];

    return (
        <section ref={sectionRef} className="py-24 px-6 bg-[#f9f9f9] overflow-hidden">
            <div className="max-w-7xl mx-auto mb-16 text-center">
                <span className="text-gray-500 font-bold tracking-widest text-sm uppercase mb-4 block">Special Projects</span>
                <h2 className="text-3xl md:text-5xl font-bold text-deep-charcoal">관공서,학교,병원 특판시공</h2>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col gap-20">
                {/* APEC Section (Mixed Showcase) */}
                <div>
                    <div className="border-l-4 border-accent-gold pl-4 mb-8">
                        <h3 className="text-2xl font-bold text-deep-charcoal">APEC 예술의 전당</h3>
                        <p className="text-gray-500 mt-1">Special Project Showcase</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* 1. APEC Stage */}
                        <div className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                            <Image
                                src="/images/에이팩1.jpg"
                                alt="APEC Project 1"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                        </div>
                        {/* 2. Curtain Detail */}
                        <div className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                            <Image
                                src="/images/에이팩2.jpg"
                                alt="APEC Project 2"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                        </div>
                        {/* 3. Outdoor */}
                        <div className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                            <Image
                                src="/images/에이팩3.jpg"
                                alt="APEC Project 3"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                        </div>
                        {/* 4. Blue Curtain */}
                        <div className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                            <Image
                                src="/images/에이팩4.jpg"
                                alt="APEC Project 4"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* School Section */}
                    <div>
                        <div className="border-l-4 border-accent-gold pl-4 mb-8">
                            <h3 className="text-2xl font-bold text-deep-charcoal">학교</h3>
                            <p className="text-gray-500 mt-1">Educational Institutions</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {schoolItems.map((item) => (
                                <div key={`school-${item}`} className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                                    <video
                                        className="absolute inset-0 w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    >
                                        <source src={`/videos/학교${item}.mp4`} type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Hospital Section */}
                    <div>
                        <div className="border-l-4 border-accent-gold pl-4 mb-8">
                            <h3 className="text-2xl font-bold text-deep-charcoal">병원</h3>
                            <p className="text-gray-500 mt-1">Medical Centers</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Hospital 1 (Image) */}
                            <div className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                                <Image
                                    src="/images/병원1.jpg"
                                    alt="Hospital Project 1"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                            </div>
                            {/* Hospital 2 (Image) */}
                            <div className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                                <Image
                                    src="/images/병원2.jpg"
                                    alt="Hospital Project 2"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Dental Clinic Section */}
                    <div>
                        <div className="border-l-4 border-accent-gold pl-4 mb-8">
                            <h3 className="text-2xl font-bold text-deep-charcoal">치과</h3>
                            <p className="text-gray-500 mt-1">Dental Clinics</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {dentalItems.map((item) => (
                                <div key={`dental-${item}`} className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                                    <video
                                        className="absolute inset-0 w-full h-full object-cover"
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                    >
                                        <source src={`/videos/치과${item}.mp4`} type="video/mp4" />
                                    </video>
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pension Section */}
                    <div>
                        <div className="border-l-4 border-accent-gold pl-4 mb-8">
                            <h3 className="text-2xl font-bold text-deep-charcoal">펜션</h3>
                            <p className="text-gray-500 mt-1">Luxury Pension & Resorts</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {/* Pension 1 (Video) */}
                            <div className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                                <video
                                    className="absolute inset-0 w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src="/videos/펜션1.mp4" type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                            </div>
                            {/* Pension 2 (Image) */}
                            <div className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                                <Image
                                    src="/images/펜션2.jpg"
                                    alt="Pension Project 2"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Restaurant Section (New) */}
                <div>
                    <div className="border-l-4 border-accent-gold pl-4 mb-8">
                        <h3 className="text-2xl font-bold text-deep-charcoal">식당</h3>
                        <p className="text-gray-500 mt-1">Restaurants & Cafes</p>
                    </div>
                    {/* Assuming 2 items for Restaurant as requested ("Allow 2 photos or videos") */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                        {restaurantItems.map((item) => (
                            <div key={`restaurant-${item}`} className="special-item aspect-square bg-gray-200 relative group overflow-hidden rounded-sm">
                                <video
                                    className="absolute inset-0 w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src={`/videos/식당${item}.mp4`} type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
