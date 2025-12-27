"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";
import { gsap } from "gsap";

interface Review {
    id: number;
    author: string;
    content: string;
    rating: number;
    source: "naver" | "google" | "daangn";
}

// Subset of reviews for the carousel
const carouselReviews: Review[] = [
    {
        id: 1,
        author: "밧짱앙",
        content: "아기방이랑 안방에 커튼 설치했어요. 팀장님이 원하던 디자인을 센스 있게 잘 제안해주셔서 너무 만족스럽습니다!",
        rating: 5,
        source: "naver"
    },
    {
        id: 2,
        author: "lli****",
        content: "여러 곳 비교해봤는데 가격도 합리적이고 품질이 가장 좋아서 나비창을 선택했습니다.",
        rating: 5,
        source: "naver"
    },
    {
        id: 3,
        author: "김*수",
        content: "암막 커튼 시공했는데 정말 100% 암막이에요! 낮에도 완전 깜깜해서 숙면에 최고입니다.",
        rating: 5,
        source: "naver"
    },
    {
        id: 4,
        author: "행복한집",
        content: "신혼집 커튼 전체 시공했어요. 특히 줄조명 무상 서비스가 정말 좋았어요. 밤에 분위기 끝내줍니다!",
        rating: 5,
        source: "daangn"
    },
    {
        id: 5,
        author: "정*진",
        content: "아파트 입주 시즌이라 바쁘실텐데도 빠르게 방문해주시고 시공도 깔끔하게 해주셨어요.",
        rating: 5,
        source: "naver"
    },
    {
        id: 6,
        author: "sunny_day",
        content: "거실 쉬폰 커튼이랑 안방 암막 커튼 같이 했는데 둘 다 너무 예뻐요. 집이 훨씬 고급스러워 보입니다!",
        rating: 5,
        source: "naver"
    },
    {
        id: 7,
        author: "최*연",
        content: "블라인드 여러 업체 상담받았는데 나비창이 가장 전문적이었어요. A/S도 확실하다고 하셔서 믿고 맡겼습니다.",
        rating: 5,
        source: "daangn"
    },
    {
        id: 8,
        author: "이*호",
        content: "사무실 블라인드 시공했는데 직원들 반응이 너무 좋아요. 깔끔하고 세련된 느낌이 나서 사무실 분위기가 확 달라졌습니다.",
        rating: 5,
        source: "google"
    },
    {
        id: 9,
        author: "강*지",
        content: "펜션 운영하는데 객실 커튼 전체 교체했어요. 손님들 반응이 정말 좋습니다.",
        rating: 5,
        source: "naver"
    },
    {
        id: 10,
        author: "조*수",
        content: "리모델링하면서 커튼 전체 교체했는데 집이 완전 새집처럼 변했어요. 사장님 센스가 정말 좋으세요!",
        rating: 5,
        source: "google"
    },
    {
        id: 11,
        author: "윤*현",
        content: "전동 커튼 설치했는데 아침에 자동으로 열리게 설정해놨더니 너무 편해요.",
        rating: 5,
        source: "naver"
    },
    {
        id: 12,
        author: "박*훈",
        content: "가격 합리적이고 품질 좋아요. 다른 곳보다 훨씬 만족스럽습니다. 주변에도 추천하고 다녀요!",
        rating: 5,
        source: "daangn"
    }
];

const SourceBadge = ({ source }: { source: Review["source"] }) => {
    const colors = {
        naver: "bg-[#03C75A]/10 text-[#03C75A]",
        google: "bg-[#4285F4]/10 text-[#4285F4]",
        daangn: "bg-[#FF6E35]/10 text-[#FF6E35]"
    };

    const labels = {
        naver: "네이버",
        google: "구글",
        daangn: "당근"
    };

    return (
        <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${colors[source]}`}>
            {labels[source]}
        </span>
    );
};

const ReviewCard = ({ review }: { review: Review }) => (
    <div className="flex-shrink-0 w-[320px] md:w-[380px] bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-accent-gold transition-all duration-300 mx-3">
        <div className="flex justify-between items-center mb-4">
            <div className="flex gap-0.5 text-accent-gold">
                {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" stroke="none" />
                ))}
            </div>
            <SourceBadge source={review.source} />
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
            "{review.content}"
        </p>

        <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <div className="w-8 h-8 bg-accent-gold/10 rounded-full flex items-center justify-center text-accent-gold font-bold text-xs">
                {review.author[0]}
            </div>
            <div>
                <h4 className="font-bold text-xs text-deep-charcoal">{review.author} 님</h4>
                <p className="text-[10px] text-gray-400">시공 완료</p>
            </div>
        </div>
    </div>
);

export default function ReviewCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!row1Ref.current || !row2Ref.current) return;

        // Create infinite scroll animation for row 1 (left to right)
        const row1Width = row1Ref.current.scrollWidth / 2;
        gsap.to(row1Ref.current, {
            x: -row1Width,
            duration: 40,
            ease: "none",
            repeat: -1,
        });

        // Create infinite scroll animation for row 2 (right to left)
        const row2Width = row2Ref.current.scrollWidth / 2;
        gsap.fromTo(
            row2Ref.current,
            { x: -row2Width },
            {
                x: 0,
                duration: 40,
                ease: "none",
                repeat: -1,
            }
        );
    }, []);

    // Duplicate reviews for seamless loop
    const duplicatedReviews = [...carouselReviews, ...carouselReviews];
    const row1Reviews = duplicatedReviews.slice(0, duplicatedReviews.length / 2);
    const row2Reviews = duplicatedReviews.slice(duplicatedReviews.length / 2);

    return (
        <section ref={carouselRef} className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                <span className="text-accent-gold font-bold tracking-widest text-sm uppercase mb-4 block">
                    Customer Reviews
                </span>

            </div>

            {/* Row 1 - Scrolling Left */}
            <div className="mb-6 overflow-hidden">
                <div ref={row1Ref} className="flex">
                    {row1Reviews.map((review, index) => (
                        <ReviewCard key={`row1-${review.id}-${index}`} review={review} />
                    ))}
                </div>
            </div>

            {/* Row 2 - Scrolling Right */}
            <div className="overflow-hidden">
                <div ref={row2Ref} className="flex">
                    {row2Reviews.map((review, index) => (
                        <ReviewCard key={`row2-${review.id}-${index}`} review={review} />
                    ))}
                </div>
            </div>
        </section>
    );
}
