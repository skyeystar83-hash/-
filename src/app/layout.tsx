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
                {/* Build Version: 2025-12-27 v2 */}
                <ConsultationProviderWrapper>
                    <SmoothScroller>
                        <Navbar />
                        <main className="w-full min-h-screen flex flex-col pt-0">
                            {children}
                        </main>
                        {/* Footer 추후 추가 또는 기존 Footer 사용 */}


                    </SmoothScroller>
                </ConsultationProviderWrapper>
            </body>
        </html>
    );
}
