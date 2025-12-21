"use client";

import { useConsultation } from "@/context/ConsultationContext";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { supabase } from "@/lib/supabase";

export default function ConsultationModal() {
    const { isModalOpen, closeModal } = useConsultation();
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        space: "",
        inquiry: ""
    });
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            let photoUrl = null;

            // 1. Upload Photo if selected
            if (selectedFile) {
                const fileExt = selectedFile.name.split('.').pop();
                const fileName = `${Date.now()}.${fileExt}`;
                const { error: uploadError, data } = await supabase.storage
                    .from('consultations')
                    .upload(fileName, selectedFile);

                if (uploadError) throw uploadError;

                // Get Public URL
                const { data: { publicUrl } } = supabase.storage
                    .from('consultations')
                    .getPublicUrl(fileName);

                photoUrl = publicUrl;
            }

            // 2. Insert Data
            const { error: insertError } = await supabase
                .from('consultations')
                .insert([{
                    name: formData.name,
                    contact: formData.contact,
                    space_type: formData.space,
                    inquiry: formData.inquiry,
                    photo_url: photoUrl
                }]);

            if (insertError) throw insertError;

            alert("상담 신청이 완료되었습니다! 확인 후 빠르게 연락드리겠습니다.");
            closeModal();
            // Reset form
            setFormData({ name: "", contact: "", space: "", inquiry: "" });
            setSelectedFile(null);

        } catch (error: any) {
            console.error('Error submitting form:', error);
            // Show specific error to help debugging
            alert(`신청 중 오류가 발생했습니다: ${error.message || "알 수 없는 오류"}`);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = "hidden";
            gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
            gsap.fromTo(modalRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, delay: 0.1 });
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isModalOpen]);

    if (!isModalOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            {/* Overlay */}
            <div
                ref={overlayRef}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={closeModal}
            />

            {/* Modal Content */}
            <div
                ref={modalRef}
                className="bg-white rounded-lg shadow-2xl w-full max-w-md relative overflow-hidden flex flex-col max-h-[90vh]"
            >
                {/* Header */}
                <div className="p-5 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                    <div>
                        <h3 className="text-xl font-bold text-deep-charcoal">무료 실측 · 상담 신청</h3>
                        <p className="text-sm text-gray-500 mt-1">전문가가 직접 찾아가서 상담해드립니다.</p>
                    </div>
                    <button onClick={closeModal} className="text-gray-400 hover:text-deep-charcoal transition-colors">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Form Body - Scrollable */}
                <div className="p-6 overflow-y-auto">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">이름</label>
                            <input
                                type="text"
                                required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-accent-gold"
                                placeholder="홍길동"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">연락처</label>
                            <input
                                type="tel"
                                required
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-accent-gold"
                                placeholder="010-1234-5678"
                                value={formData.contact}
                                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">시공 공간 선택</label>
                            <select
                                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-accent-gold"
                                value={formData.space}
                                onChange={(e) => setFormData({ ...formData, space: e.target.value })}
                            >
                                <option value="">선택해주세요</option>
                                <option value="apartment">아파트 (입주/거주)</option>
                                <option value="studio">원룸/오피스텔</option>
                                <option value="commercial">상업공간</option>
                                <option value="office">사무실</option>
                                <option value="other">기타</option>
                            </select>
                        </div>
                        {/* Photo Attach */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">사진 첨부 (선택)</label>
                            <label className={`block border border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors ${selectedFile ? 'bg-gray-50 border-accent-gold' : ''}`}>
                                <span className="text-gray-400 text-sm">{selectedFile ? selectedFile.name : "클릭하여 사진 업로드"}</span>
                                <input
                                    type="file"
                                    className="hidden"
                                    accept="image/*"
                                    onChange={(e) => {
                                        if (e.target.files && e.target.files[0]) {
                                            setSelectedFile(e.target.files[0]);
                                        }
                                    }}
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">문의 내용 (선택)</label>
                            <textarea
                                className="w-full border border-gray-300 rounded-md px-3 py-2 h-20 focus:outline-none focus:ring-1 focus:ring-accent-gold resize-none"
                                placeholder="원하시는 분위기나 궁금한 점을 적어주세요."
                                value={formData.inquiry}
                                onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-accent-gold text-white font-bold py-3 rounded-md hover:bg-deep-charcoal transition-colors shadow-md mt-2 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            {isLoading ? '신청 중...' : '무료 견적 신청하기'}
                        </button>
                    </form>

                    {/* Secondary CTA */}
                    <div className="mt-6 text-center border-t border-gray-100 pt-4">
                        <p className="text-xs text-gray-400 mb-2">빠른 상담을 원하시나요?</p>
                        <a href="tel:010-2027-7812" className="inline-flex items-center gap-2 text-deep-charcoal font-semibold hover:text-accent-gold transition-colors">
                            <span className="bg-gray-100 p-1.5 rounded-full">
                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </span>
                            급한 상담은 전화 주세요: 010-2027-7812
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
