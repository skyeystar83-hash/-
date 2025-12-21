import type { Metadata } from "next";
import "./globals.css";
import SmoothScroller from "@/components/layout/SmoothScroller";
import Navbar from "@/components/layout/Navbar";
import ConsultationProviderWrapper from "@/components/providers/ConsultationProviderWrapper";
import ConsultationButton from "@/components/ui/ConsultationButton";

export const metadata: Metadata = {
    title: "나비창 - 케이아이시컴퍼니",
    description: "빛을 담아 공간을 완성하는 프리미엄 인테리어 솔루션, 나비창입니다.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className="antialiased bg-primary-white text-deep-charcoal">
                <ConsultationProviderWrapper>
                    <SmoothScroller>
                        <Navbar />
                        <main className="w-full min-h-screen flex flex-col pt-0">
                            {children}
                        </main>
                        {/* Footer 추후 추가 또는 기존 Footer 사용 */}

                        {/* Mobile Fixed CTA */}
                        <div className="md:hidden fixed bottom-6 left-0 right-0 px-6 z-50 pointer-events-none flex flex-col gap-2">
                            <ConsultationButton variant="fixed_mobile" text="무료 실측 · 상담" />

                            {/* Secondary Phone Link */}
                            <div className="text-center pointer-events-auto">
                                <a href="tel:010-2027-7812" className="text-xs text-gray-500 underline decoration-gray-300 underline-offset-2">
                                    급한 상담은 전화 주세요
                                </a>
                            </div>
                        </div>
                    </SmoothScroller>
                </ConsultationProviderWrapper>
            </body>
        </html>
    );
}
