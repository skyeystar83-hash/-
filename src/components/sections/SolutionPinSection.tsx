"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SolutionPinSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Pinning logic can be implemented here.
            // For simplicity in this demo, we'll use a vertical scroll scrub for the panels within the pinned container.

            const sections = panelsRef.current;

            // 수평 스크롤 애니메이션 예시 (또는 페이드 인/아웃 스택)
            // 여기서는 심플한 fade/slide up 효과를 스크롤에 맞물리게 구현

            // 실제로는 높이가 긴 컨테이너를 스크롤하면서 내부 컨텐츠가 변경되는 방식
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-24 bg-primary-white">
            <div className="max-w-7xl mx-auto px-6 mb-20">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 text-deep-charcoal">Process of Light</h2>
                <p className="text-neutral-gray text-lg">나비창이 만드는 공간의 여정</p>
            </div>

            {/* Process Steps */}
            <div className="flex flex-col gap-24 max-w-7xl mx-auto px-6">
                {[1, 2, 3].map((num, idx) => (
                    <div
                        key={num}
                        ref={el => { panelsRef.current[idx] = el }}
                        className="flex flex-col md:flex-row items-center gap-10 md:gap-20"
                    >
                        <div className="w-full md:w-1/2 h-[400px] bg-neutral-200 rounded-lg overflow-hidden relative group">
                            {/* Placeholder Image */}
                            <div className="absolute inset-0 bg-neutral-300 flex items-center justify-center text-neutral-500 font-medium text-xl group-hover:scale-105 transition-transform duration-700 ease-out">
                                Process Image {num}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <span className="text-accent-gold font-bold text-lg mb-2 block">Step 0{num}</span>
                            <h3 className="text-2xl md:text-4xl font-semibold mb-4 text-deep-charcoal">
                                {idx === 0 && "Design Consultation"}
                                {idx === 1 && "Precision Construction"}
                                {idx === 2 && "Final Inspection"}
                            </h3>
                            <p className="text-neutral-gray leading-relaxed text-lg">
                                {idx === 0 && "고객의 라이프스타일과 공간의 특성을 분석하여 최적의 빛과 구조를 설계합니다."}
                                {idx === 1 && "숙련된 장인들이 오차 없는 시공으로 설계도의 디테일을 현실로 구현합니다."}
                                {idx === 2 && "철저한 마감 점검과 AS 보증으로 완성도 높은 공간을 지속적으로 관리합니다."}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
