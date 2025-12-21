export default function Footer() {
    return (
        <footer className="bg-[#1a1a1a] text-[#888] pt-20 pb-10 text-xs leading-relaxed border-t border-[#333]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <h2 className="text-white text-xl font-bold mb-6">나비창</h2>
                        <p className="mb-4">
                            공간의 가치를 높이는 프리미엄 커튼 & 블라인드<br />
                            당신의 라이프스타일에 빛을 더합니다.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#333] rounded-full hover:bg-white hover:text-black transition-colors">
                                <span className="sr-only">Instagram</span>
                                IG
                            </a>
                            <a href="#" className="w-8 h-8 flex items-center justify-center bg-[#333] rounded-full hover:bg-white hover:text-black transition-colors">
                                <span className="sr-only">Blog</span>
                                B
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">COMPANY INFO</h3>
                        <div className="flex flex-col gap-2">
                            <p>상호명 : 나비창 (NAVICHANG)</p>
                            <p>대표자 : 홍길동</p>
                            <p>사업자등록번호 : 123-45-67890</p>
                            <p>통신판매업신고 : 2024-서울강남-00000</p>
                            <p>주소 : 서울특별시 강남구 테헤란로 123</p>
                            <p>개인정보관리책임자 : 홍길동</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">CS CENTER</h3>
                        <p className="text-2xl text-white font-medium mb-2">010-1234-5678</p>
                        <div className="flex flex-col gap-1">
                            <p>평일 : 09:00 - 18:00</p>
                            <p>점심 : 12:00 - 13:00</p>
                            <p>토/일/공휴일 휴무</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold mb-4">BANK INFO</h3>
                        <div className="flex flex-col gap-2">
                            <p>국민 123-456-78-901234</p>
                            <p>예금주 : 홍길동(나비창)</p>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#333] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© 2024 NAVICHANG. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">이용약관</a>
                        <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
