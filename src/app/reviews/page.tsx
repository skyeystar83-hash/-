import React from "react";
import ReviewSection from "@/components/sections/ReviewSection";
import ConsultationButton from "@/components/ui/ConsultationButton";

export const metadata = {
    title: "고객후기 | 나비창",
    description: "나비창을 선택하신 고객님들의 생생한 설치 후기를 확인해보세요.",
};

export default function ReviewsPage() {
    return (
        <main className="pt-24 min-h-screen bg-white">
            {/* Header Section */}
            <section className="py-20 bg-gray-50 border-b border-gray-100 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="text-accent-gold font-bold tracking-widest text-sm uppercase mb-4 block">Our Customers</span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">고객후기</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto text-lg">
                        네이버, 구글, 당근마켓에서 전해주신 나비창의 진심 어린 후기들을 모았습니다.<br className="hidden md:block" />
                        변함없는 만족감을 위해 최선을 다하겠습니다.
                    </p>
                </div>
            </section>

            {/* Full Review List */}
            <ReviewSection />

            {/* Video Review Highlight (Optional/Additional) */}
            <section className="py-24 bg-deep-charcoal text-white px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">시공 영상 후기</h2>
                        <p className="text-white/60">생생한 시공 현장을 확인해보세요.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[1, 2, 3].map((num) => (
                            <div key={num} className="aspect-video bg-white/5 rounded-2xl overflow-hidden relative group">
                                <video
                                    className="absolute inset-0 w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src={`/videos/review_video${num}.mp4`} type="video/mp4" />
                                </video>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 bg-white text-center px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">당신의 공간도 나비창과 함께하세요</h2>
                <ConsultationButton className="inline-block px-12 py-5 bg-accent-gold text-white font-bold text-xl hover:bg-deep-charcoal transition-all duration-300 rounded-full" />
            </section>
        </main>
    );
}
