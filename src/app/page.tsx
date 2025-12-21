import HeroSection from "@/components/sections/HeroSection";
import SpecialProjectSection from "@/components/sections/SpecialProjectSection";
import ConsultationButton from "@/components/ui/ConsultationButton";
import Image from "next/image";
// import SolutionPinSection from "@/components/sections/SolutionPinSection"; // Temporarily commented out or replaced
// import PortfolioSection from "@/components/sections/PortfolioSection";     // Temporarily commented out or replaced

export default function Home() {
    return (
        <div className="flex flex-col w-full bg-white text-deep-charcoal selection:bg-accent-gold selection:text-white">
            <HeroSection />

            {/* Brand Intro Section */}
            <section className="py-24 md:py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-accent-gold font-bold tracking-widest text-sm uppercase mb-4 block">Brand Story</span>
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-snug">
                        나비창은 단순한 커튼이 아닌<br />
                        <span className="text-gray-400">당신의 품격을 디자인합니다.</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        최고급 원단과 정교한 시공, 그리고 공간을 이해하는 안목으로
                        고객님의 공간을 더욱 특별하게 만들어 드립니다.
                        나비창만의 차별화된 프리미엄 홈스타일링을 경험해보세요.
                    </p>
                </div>
            </section>

            {/* Service / Best Product Section */}
            <section className="py-24 bg-[#f9f9f9] px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <span className="text-gray-500 font-bold tracking-widest text-xs uppercase mb-2 block">Our Services</span>
                            <h3 className="text-3xl font-bold">나비창만의 차별화</h3>
                        </div>
                        <a href="#" className="text-sm border-b border-black pb-1 hover:text-accent-gold hover:border-accent-gold transition-colors mt-4 md:mt-0">VIEW ALL &gt;</a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Service Item 1 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-[4/5] bg-gray-300 mb-4 overflow-hidden relative">
                                <Image
                                    src="/images/premium_fabric.png"
                                    alt="Premium Fabric"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                            </div>
                            <h4 className="text-xl font-bold mb-1 group-hover:text-accent-gold transition-colors">Premium Fabric</h4>
                            <p className="text-gray-500 text-sm">국산&수입원단</p>
                        </div>
                        {/* Service Item 2 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-[4/5] bg-gray-300 mb-4 overflow-hidden relative">
                                <video
                                    className="absolute inset-0 w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    poster="/images/placeholder.jpg" // Optional: You might want a poster image
                                >
                                    <source src="/videos/blackout.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                            </div>
                            <h4 className="text-xl font-bold mb-1 group-hover:text-accent-gold transition-colors">Blackout Master</h4>
                            <p className="text-gray-500 text-sm">완벽한 숙면을 위한 100% 암막</p>
                        </div>
                        {/* Service Item 3 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-[4/5] bg-gray-300 mb-4 overflow-hidden relative">
                                <Image
                                    src="/images/line_lighting.png"
                                    alt="Line Lighting Service"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                            </div>
                            <h4 className="text-xl font-bold mb-1 group-hover:text-accent-gold transition-colors">Free Line Lighting</h4>
                            <p className="text-gray-500 text-sm">커튼박스 줄조명 무상 시공 서비스</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio / Instagram Section */}
            <section className="py-24 px-6 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto text-center mb-16">
                    <span className="text-accent-gold font-bold tracking-widest text-sm uppercase mb-4 block">Portfolio</span>
                    <h2 className="text-3xl md:text-4xl font-bold">Customer Review</h2>
                </div>

                {/* Marquee or Grid for Reviews/Images */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[1, 2, 3, 4].map((num) => (
                        <div key={num} className="aspect-square bg-gray-100 relative group overflow-hidden">
                            <video
                                className="absolute inset-0 w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                            >
                                <source src={`/videos/review_video${num}.mp4`} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500 pointer-events-none" />
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <ConsultationButton className="inline-block px-8 py-3 border border-deep-charcoal text-deep-charcoal font-bold text-lg hover:bg-accent-gold hover:text-white hover:border-accent-gold transition-all duration-300" />
                </div>
            </section>

            {/* Special Construction Section */}
            <SpecialProjectSection />

            {/* Consultation CTA */}
            <section className="py-32 bg-deep-charcoal text-white text-center px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">공간을 바꾸는 가장 쉬운 방법</h2>
                <p className="text-white/70 mb-10 max-w-2xl mx-auto">
                    전문가와의 1:1 상담을 통해 실패 없는 스타일링을 완성하세요.
                </p>
                <div className="flex flex-col items-center gap-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <ConsultationButton
                            text="무료 실측 · 상담 신청"
                            className="px-8 py-4 bg-accent-gold text-white font-bold text-lg hover:bg-white hover:text-deep-charcoal transition-all duration-300 min-w-[200px] inline-flex justify-center items-center"
                        />
                        <a
                            href="https://map.naver.com/p/search/%EB%82%98%EB%B9%84%EC%B0%BD%EC%BB%A4%ED%8A%BC/place/2095149527?searchType=place&lng=129.2066953&lat=35.8499340&placePath=/ticket?bookingRedirectUrl=https://m.booking.naver.com/booking/6/bizes/1515277&theme=place&entry=pll&lang=ko&from=map&fromPanelNum=2&timestamp=202512211130&locale=ko&svcName=map_pcv5&searchText=%EB%82%98%EB%B9%84%EC%B0%BD%EC%BB%A4%ED%8A%BC&area=pll&c=15.00,0,0,0,dh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-deep-charcoal transition-all duration-300 min-w-[200px] inline-flex justify-center items-center"
                        >
                            매장방문예약
                        </a>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex flex-row gap-6">
                        {/* Naver Blog */}
                        <a href="https://blog.naver.com/happy136900" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-deep-charcoal hover:bg-green-500 hover:text-white transition-all duration-300">
                            {/* Naver N Icon SVG */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a href="https://www.instagram.com/navichang_25/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-deep-charcoal hover:bg-pink-600 hover:text-white transition-all duration-300">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>

                        {/* Facebook */}
                        <a href="https://www.facebook.com/share/1Q3XnCEGNv/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-deep-charcoal hover:bg-blue-600 hover:text-white transition-all duration-300">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>

                        {/* Daangn (Karrot) */}
                        <a href="https://www.daangn.com/kr/local-profile/trgfxty59ovr/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-deep-charcoal hover:bg-orange-500 hover:text-white transition-all duration-300">
                            {/* Daangn Carrot Icon approximation */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M19.8 17.6c-1.3 1.3-3.1 2.1-5.1 2.1-4 0-7.3-3.3-7.3-7.3 0-2 .8-3.8 2.1-5.1C8.2 5.9 6.4 5.1 4.4 7.1c-2 2-2 5.2 0 7.2l8.5 8.5c2 2 5.2 2 7.2 0 2-2 1.2-3.8-.3-5.2zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
                                <path d="M16 11c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" opacity="0.5" />
                                {/* A simplified carrot-like or rounded shape since standard carrot icons are complex vectors. 
                                    Better approach: use a simple generic pin/carrot shape or leave it symbolic. 
                                    I will use a conditional path for Karrot. Actually, I'll use a precise Daangn path if I can recall, 
                                    but a generic location/carrot icon is safer than a broken one. 
                                    Let's try a custom path that looks like the Daangn mascot or logo. 
                                    The logo is a rabbit? No, it's a carrot location pin. 
                                    Let's simplify: A location pin with leaf. 
                                 */}
                                <path d="M12 2a5 5 0 0 1 5 5c0 4.5-5 13-5 13S7 11.5 7 7a5 5 0 0 1 5-5z" fill="none" stroke="currentColor" strokeWidth="2" />
                                <path d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor" />
                            </svg>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
