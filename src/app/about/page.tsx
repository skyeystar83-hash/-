import React from "react";
import Image from "next/image";
import ConsultationButton from "@/components/ui/ConsultationButton";

export default function AboutPage() {
    return (
        <div className="w-full bg-white text-deep-charcoal">
            {/* Header / Intro Section */}
            <section className="relative py-24 px-6 md:py-32">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-accent-gold font-bold tracking-[0.3em] text-sm md:text-base uppercase mb-6 block">
                        KICCOMPANY
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        공간의 가치를 높이는<br />
                        프리미엄 스타일링
                    </h1>
                    <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
                        나비창커튼은 유행을 쫓기보다<br />
                        오래도록 머물고 싶은 편안한 공간을 만듭니다.
                    </p>
                </div>

                {/* Main Image */}
                <div className="max-w-6xl mx-auto mb-24 relative aspect-video md:aspect-[21/9] overflow-hidden rounded-sm shadow-2xl">
                    <Image
                        src="/images/about_main.jpg"
                        alt="KICCOMPANY Premium Interior"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-white text-right">
                        <p className="font-light tracking-widest text-sm opacity-80">PREMIUM FABRIC & BLINDS</p>
                        <p className="font-bold text-2xl">NAVICHANG</p>
                    </div>
                </div>

                {/* Core Competency & Dexter Blind */}
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <h2 className="text-3xl font-bold mb-8">
                        나비창커튼의 기준은 <span className="text-accent-gold">품질</span>입니다.
                    </h2>
                    <p className="text-gray-600 leading-8 text-lg mb-10">
                        나비창커튼은 <span className="font-bold text-deep-charcoal">프랑스, 튀르키예산 최고급 수입 원단</span>과<br className="hidden md:block" />
                        <span className="font-bold text-deep-charcoal">프리미엄 국산 원단</span>을 주력으로 사용하여 시공합니다.<br /><br />
                        또한, 국내 1위 블라인드 브랜드인<br />
                        <span className="font-bold text-deep-charcoal">덱스터 블라인드 (DEXTER Blind)</span> 정품만을 취급하여<br />
                        최상의 내구성과 디자인을 보장합니다.
                    </p>

                    {/* Dexter Logo Placeholder Area */}
                    <div className="flex justify-center items-center py-8">
                        <div className="px-10 py-4 border-2 border-gray-200 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            {/* Text Logo Representation for Dexter */}
                            <span className="text-3xl font-black tracking-tighter text-gray-800 font-sans">
                                DEXTER <span className="font-light">Blind</span>
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiation Section */}
            <section className="bg-gray-50 py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-2 block">DIFFERENTIATION</span>
                        <h3 className="text-3xl md:text-4xl font-bold">나비창만의 차별화</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Point 1 */}
                        <div className="bg-white p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-transparent hover:border-accent-gold">
                            <h4 className="text-xl font-bold mb-4">빛샘 없는 특수 레일 시공</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                암막 성능은 원단뿐 아니라 레일과 시공 디테일에서 결정됩니다.
                                나비창커튼은 빛샘을 최소화한 특수 레일과 정밀 시공으로 완성도 차이를 만듭니다.
                            </p>
                        </div>

                        {/* Point 2 */}
                        <div className="bg-white p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-transparent hover:border-accent-gold">
                            <h4 className="text-xl font-bold mb-4">무타공 시공 전문</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                벽 손상 없이 깔끔하게 완성되는 무타공 시공으로 신축, 입주, 전세, 아파트 등
                                다양한 주거 환경에 안정적으로 적용합니다.
                            </p>
                        </div>

                        {/* Point 3 */}
                        <div className="bg-white p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-transparent hover:border-accent-gold">
                            <h4 className="text-xl font-bold mb-4">공간 맞춤 제안</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                거실, 안방, 작은방 등 공간별 용도와 채광을 분석해
                                암막커튼, 쉬폰, 수입 속지, 우드·알루미늄 덱스터 블라인드까지 가장 적합한 조합을 제안합니다.
                            </p>
                        </div>

                        {/* Point 4 */}
                        <div className="bg-white p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-transparent hover:border-accent-gold">
                            <h4 className="text-xl font-bold mb-4">실사용 중심 부가 서비스</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                <span className="font-bold text-accent-gold">"이뻐야 커튼이다"</span><br />
                                이를 실현하기 위해 원하신다면 거실에 <span className="font-bold">LED 줄조명 무상 시공</span> 서비스를 시행하고 있습니다.
                            </p>
                        </div>

                        {/* Point 5 */}
                        <div className="bg-white p-8 md:p-10 shadow-sm hover:shadow-lg transition-shadow duration-300 border-t-4 border-transparent hover:border-accent-gold lg:col-span-2">
                            <h4 className="text-xl font-bold mb-4">직접 상담 · 직접 시공</h4>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                외주 없는 100% 직접 시공 원칙으로 상담 내용과 시공 결과의 차이를 최소화하고,
                                시공 후까지 책임지는 확실한 사후관리를 제공합니다.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Promise Section */}
            <section className="py-24 px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold mb-12">우리의 약속</h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h5 className="font-bold text-lg mb-2">투명한 견적</h5>
                            <p className="text-gray-500 text-sm">설명 그대로 진행되는<br />정직한 가격</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" /></svg>
                            </div>
                            <h5 className="font-bold text-lg mb-2">높은 시공 완성도</h5>
                            <p className="text-gray-500 text-sm">사진보다 만족스러운<br />디테일의 차이</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <div className="w-16 h-16 rounded-full bg-accent-gold/10 flex items-center justify-center text-accent-gold mb-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                            </div>
                            <h5 className="font-bold text-lg mb-2">확실한 사후관리</h5>
                            <p className="text-gray-500 text-sm">설치 후에도 신뢰할 수 있는<br />지속 관리 시스템</p>
                        </div>
                    </div>

                    <div className="bg-deep-charcoal text-white p-10 md:p-16 rounded-sm">
                        <p className="text-lg md:text-2xl leading-relaxed font-light mb-8">
                            "나비창커튼은 화려함보다 <span className="font-bold text-accent-gold">완성도</span>를,<br />
                            말보다 <span className="font-bold text-accent-gold">결과</span>로 신뢰를 쌓아갑니다."
                        </p>
                        <p className="text-gray-400 mb-8">공간에 가장 잘 어울리는 창, 나비창커튼이 함께 고민하겠습니다.</p>
                        <ConsultationButton className="inline-block px-8 py-3 bg-white text-deep-charcoal font-bold hover:bg-accent-gold hover:text-white transition-colors" text="무료 상담 신청하기" />
                    </div>
                </div>
            </section>
        </div>
    );
}
