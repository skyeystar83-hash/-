"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { clsx } from "clsx";

interface Review {
    id: number;
    author: string;
    content: string;
    rating: number;
    source: "naver" | "google" | "daangn";
    date?: string;
}



const reviews: Review[] = [
    {
        id: 1,
        author: "밧짱앙",
        content: "아기방이랑 안방에 커튼 설치했어요. 팀장님이 원하던 디자인을 센스 있게 잘 제안해주셔서 너무 만족스럽습니다! 특수 레일 시공 덕분에 햇빛 차단도 확실하고 원단 품질이 정말 고급스러워요.",
        rating: 5,
        source: "naver",
        date: "2025.12"
    },
    {
        id: 2,
        author: "lli****",
        content: "여러 곳 비교해봤는데 가격도 합리적이고 품질이 가장 좋아서 나비창을 선택했습니다. 사장님이 감각이 좋으셔서 집 분위기에 딱 맞는 제품을 추천해주셨어요. 거실 전동 커튼 설치했는데 호텔 느낌 나서 너무 좋아요!",
        rating: 5,
        source: "naver",
        date: "2025.12"
    },
    {
        id: 3,
        author: "Bear1115",
        content: "거실하고 안방 시공했는데 너무 만족합니다. 사장님이 상담도 잘해주시고 꼼꼼하게 시공해주셨어요.",
        rating: 5,
        source: "naver",
        date: "2025.12"
    },
    {
        id: 4,
        author: "oki****",
        content: "신축 입주하면서 주문했는데 사장님이 너무 친절하시고 제품도 마음에 듭니다. 차분하게 설명 잘 해주셔서 좋았어요.",
        rating: 5,
        source: "google",
        date: "2025.12"
    },
    {
        id: 5,
        author: "슈크림빵 맛있어",
        content: "커튼이랑 블라인드 같이 했는데 분위기가 확 사네요. 상담도 꼼꼼히 해주시고 시공도 깔끔해서 좋았습니다.",
        rating: 5,
        source: "naver",
        date: "2025.12"
    },
    {
        id: 6,
        author: "좋은하루7136",
        content: "블라인드 설치했는데 시간 약속도 잘 지켜주시고 당일 방문 상담도 해주셔서 편했습니다.",
        rating: 5,
        source: "naver",
        date: "2025.11"
    },
    {
        id: 7,
        author: "김*수",
        content: "암막 커튼 시공했는데 정말 100% 암막이에요! 낮에도 완전 깜깜해서 숙면에 최고입니다. 시공도 깔끔하고 사장님 친절하셔서 강추합니다.",
        rating: 5,
        source: "naver",
        date: "2025.12"
    },
    {
        id: 8,
        author: "행복한집",
        content: "신혼집 커튼 전체 시공했어요. 상담부터 시공까지 완벽했습니다. 특히 줄조명 무상 서비스가 정말 좋았어요. 밤에 분위기 끝내줍니다!",
        rating: 5,
        source: "daangn",
        date: "2025.12"
    },
    {
        id: 9,
        author: "park****",
        content: "전동 블라인드 설치했는데 리모컨으로 조작하니까 너무 편해요. 가격도 다른 곳보다 저렴하고 품질도 좋습니다.",
        rating: 5,
        source: "google",
        date: "2025.11"
    },
    {
        id: 10,
        author: "정*진",
        content: "아파트 입주 시즌이라 바쁘실텐데도 빠르게 방문해주시고 시공도 깔끔하게 해주셨어요. 원단 선택하는데 많이 도와주셔서 감사합니다.",
        rating: 5,
        source: "naver",
        date: "2025.11"
    },
    {
        id: 11,
        author: "sunny_day",
        content: "거실 쉬폰 커튼이랑 안방 암막 커튼 같이 했는데 둘 다 너무 예뻐요. 집이 훨씬 고급스러워 보입니다!",
        rating: 5,
        source: "naver",
        date: "2025.11"
    },
    {
        id: 12,
        author: "최*연",
        content: "블라인드 여러 업체 상담받았는데 나비창이 가장 전문적이었어요. 제품 설명도 자세히 해주시고 A/S도 확실하다고 하셔서 믿고 맡겼습니다.",
        rating: 5,
        source: "daangn",
        date: "2025.11"
    },
    {
        id: 13,
        author: "이*호",
        content: "사무실 블라인드 시공했는데 직원들 반응이 너무 좋아요. 깔끔하고 세련된 느낌이 나서 사무실 분위기가 확 달라졌습니다.",
        rating: 5,
        source: "google",
        date: "2025.11"
    },
    {
        id: 14,
        author: "happy_mom",
        content: "아이 방 커튼 설치했는데 원단이 정말 좋아요. 유해물질 걱정 없고 색상도 예쁘게 나왔어요. 아이가 너무 좋아합니다!",
        rating: 5,
        source: "naver",
        date: "2025.11"
    },
    {
        id: 15,
        author: "강*지",
        content: "펜션 운영하는데 객실 커튼 전체 교체했어요. 손님들 반응이 정말 좋습니다. 고급스럽고 세련된 느낌이 나서 만족도가 높아졌어요.",
        rating: 5,
        source: "naver",
        date: "2025.10"
    },
    {
        id: 16,
        author: "조*수",
        content: "리모델링하면서 커튼 전체 교체했는데 집이 완전 새집처럼 변했어요. 사장님 센스가 정말 좋으세요!",
        rating: 5,
        source: "google",
        date: "2025.10"
    },
    {
        id: 17,
        author: "윤*현",
        content: "전동 커튼 설치했는데 아침에 자동으로 열리게 설정해놨더니 너무 편해요. 시공도 깔끔하고 사후관리도 좋습니다.",
        rating: 5,
        source: "naver",
        date: "2025.10"
    },
    {
        id: 18,
        author: "박*훈",
        content: "가격 합리적이고 품질 좋아요. 다른 곳보다 훨씬 만족스럽습니다. 주변에도 추천하고 다녀요!",
        rating: 5,
        source: "daangn",
        date: "2025.10"
    },
    {
        id: 19,
        author: "김*늘",
        content: "우드 블라인드 설치했는데 너무 고급스러워요. 인테리어 완성도가 확 올라갔습니다. 강력 추천합니다!",
        rating: 5,
        source: "naver",
        date: "2025.10"
    },
    {
        id: 20,
        author: "lee****",
        content: "상담부터 시공까지 모든 과정이 만족스러웠어요. 특히 사장님이 디테일하게 신경 써주셔서 좋았습니다.",
        rating: 5,
        source: "google",
        date: "2025.10"
    },
    {
        id: 21,
        author: "정*민",
        content: "커튼 박스 줄조명 서비스 받았는데 밤에 켜면 분위기 정말 좋아요. 무료로 해주셔서 감사합니다!",
        rating: 5,
        source: "naver",
        date: "2025.12"
    },
    {
        id: 22,
        author: "최*아",
        content: "방 3개 커튼 전체 시공했는데 가격도 합리적이고 결과물도 너무 만족스러워요. 이사 온 보람이 있네요!",
        rating: 5,
        source: "naver",
        date: "2025.12"
    },
    {
        id: 23,
        author: "김*영",
        content: "암막 성능이 정말 좋아요. 낮잠 잘 때 완전 깜깜해서 숙면에 최고입니다. 원단 품질도 고급스럽고요.",
        rating: 5,
        source: "daangn",
        date: "2025.11"
    },
    {
        id: 24,
        author: "이*진",
        content: "쉬폰 커튼 달았는데 빛이 은은하게 들어와서 너무 예뻐요. 낮에도 프라이버시 보호되고 분위기도 좋습니다.",
        rating: 5,
        source: "naver",
        date: "2025.11"
    },
    {
        id: 25,
        author: "박*호",
        content: "사무실 블라인드 교체했는데 직원들이 다들 좋아해요. 햇빛 조절도 잘 되고 깔끔합니다.",
        rating: 5,
        source: "google",
        date: "2025.11"
    },
    {
        id: 26,
        author: "강*정",
        content: "신혼집 꾸미면서 커튼 시공했는데 너무 만족해요. 사장님이 인테리어 감각이 뛰어나셔서 잘 어울리는 걸로 추천해주셨어요.",
        rating: 5,
        source: "naver",
        date: "2025.10"
    },
    {
        id: 27,
        author: "윤*혁",
        content: "전동 블라인드 리모컨으로 조작하니까 정말 편해요. 스마트홈 느낌 나서 좋습니다!",
        rating: 5,
        source: "naver",
        date: "2025.10"
    },
    {
        id: 28,
        author: "조*비",
        content: "아이 방 커튼 교체했는데 색상도 예쁘고 원단도 좋아요. 아이가 너무 좋아해서 뿌듯합니다.",
        rating: 5,
        source: "daangn",
        date: "2025.10"
    },
    {
        id: 29,
        author: "김*현",
        content: "거실 커튼 시공했는데 집이 훨씬 고급스러워 보여요. 손님들이 오면 다들 칭찬합니다!",
        rating: 5,
        source: "google",
        date: "2025.10"
    },
    {
        id: 30,
        author: "이*래",
        content: "블라인드 여러 곳 상담받았는데 나비창이 가장 전문적이고 친절했어요. 시공 결과도 완벽합니다!",
        rating: 5,
        source: "naver",
        date: "2025.12"
    },
    {
        id: 31,
        author: "박*영",
        content: "원단 종류가 다양해서 선택의 폭이 넓었어요. 사장님이 상세하게 설명해주셔서 고르기 쉬웠습니다.",
        rating: 5,
        source: "naver",
        date: "2025.12"
    },
    {
        id: 32,
        author: "최*우",
        content: "커튼 박스 시공도 깔끔하게 해주시고 마감 처리도 완벽해요. 디테일에 신경 많이 쓰시는 게 느껴집니다.",
        rating: 5,
        source: "google",
        date: "2025.11"
    },
    {
        id: 33,
        author: "정*석",
        content: "가성비 최고예요! 품질 좋고 가격도 합리적이어서 만족스럽습니다. 친구들한테도 추천했어요.",
        rating: 5,
        source: "daangn",
        date: "2025.11"
    },
    {
        id: 34,
        author: "강*린",
        content: "A/S도 빠르게 해주시고 사후관리가 정말 좋아요. 믿고 맡길 수 있는 업체입니다!",
        rating: 5,
        source: "naver",
        date: "2025.11"
    },
    {
        id: 35,
        author: "윤*현",
        content: "방음 커튼 설치했는데 효과가 확실해요. 밖에 소음이 많이 줄어들었습니다.",
        rating: 5,
        source: "naver",
        date: "2025.10"
    },
    {
        id: 36,
        author: "이*윤",
        content: "인테리어 감각이 뛰어나신 사장님 덕분에 우리 집이 훨씬 세련되어 보여요. 정말 감사합니다!",
        rating: 5,
        source: "google",
        date: "2025.10"
    },
    {
        id: 37,
        author: "박*우",
        content: "시공 속도도 빠르고 결과물도 깔끔해요. 바쁜 일정인데도 맞춰주셔서 감사했습니다.",
        rating: 5,
        source: "naver",
        date: "2025.10"
    },
    {
        id: 38,
        author: "김*연",
        content: "커튼 색상 고민 많이 했는데 사장님이 잘 추천해주셔서 딱 맞는 걸로 골랐어요. 너무 예뻐요!",
        rating: 5,
        source: "daangn",
        date: "2025.12"
    },
    {
        id: 39,
        author: "조*호",
        content: "전체적으로 만족스러운 시공이었습니다. 가격, 품질, 서비스 모두 좋았어요!",
        rating: 5,
        source: "naver",
        date: "2025.12"
    },
    {
        id: 40,
        author: "정*은",
        content: "이사 와서 커튼 교체했는데 집 분위기가 완전 달라졌어요. 나비창 선택하길 정말 잘했습니다!",
        rating: 5,
        source: "google",
        date: "2025.11"
    }
];

const SourceBadge = ({ source }: { source: Review["source"] }) => {
    switch (source) {
        case "naver":
            return (
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#03C75A] bg-[#03C75A]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-[#03C75A] rounded-full" />
                    Naver
                </span>
            );
        case "google":
            return (
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#4285F4] bg-[#4285F4]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-[#4285F4] rounded-full" />
                    Google
                </span>
            );
        case "daangn":
            return (
                <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#FF6E35] bg-[#FF6E35]/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-[#FF6E35] rounded-full" />
                    Daangn
                </span>
            );
    }
};

export default function ReviewSection({ limit }: { limit?: number }) {
    const displayedReviews = limit ? reviews.slice(0, limit) : reviews;

    return (
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <span className="text-accent-gold font-bold tracking-widest text-sm uppercase mb-4 block">Testimonials</span>
                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            고객님들이 증명하는<br />
                            나비창의 가치
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedReviews.map((review) => (
                        <div
                            key={review.id}
                            className="group bg-[#fcfcfc] border border-gray-100 p-8 hover:border-accent-gold hover:shadow-xl hover:shadow-accent-gold/5 transition-all duration-500 flex flex-col h-full rounded-2xl relative overflow-hidden"
                        >
                            {/* Accent Decoration */}
                            <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                                <Quote size={80} />
                            </div>

                            <div className="flex justify-between items-start mb-4">
                                <div className="flex gap-0.5 text-accent-gold">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} size={14} fill="currentColor" stroke="none" />
                                    ))}
                                </div>
                                <SourceBadge source={review.source} />
                            </div>



                            <p className="text-gray-700 leading-relaxed mb-8 flex-grow text-[15px] font-medium italic">
                                "{review.content}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold text-xs uppercase overflow-hidden">
                                    {review.author[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-deep-charcoal">{review.author} 님</h4>
                                    <p className="text-xs text-gray-400">{review.date} • 시공 완료</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
