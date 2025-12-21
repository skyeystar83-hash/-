"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

type Consultation = {
    id: string;
    created_at: string;
    name: string;
    contact: string;
    space_type: string;
    inquiry: string;
    photo_url: string | null;
    status: string;
};

export default function AdminDashboard() {
    const router = useRouter();
    const [consultations, setConsultations] = useState<Consultation[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simple auth check
        const isAdmin = sessionStorage.getItem("isAdmin");
        if (!isAdmin) {
            router.push("/admin/login");
            return;
        }

        fetchConsultations();
    }, [router]);

    const fetchConsultations = async () => {
        try {
            const { data, error } = await supabase
                .from("consultations")
                .select("*")
                .order("created_at", { ascending: false });

            if (error) throw error;
            setConsultations(data || []);
        } catch (error) {
            console.error("Error fetching data:", error);
            alert("데이터를 불러오는데 실패했습니다.");
        } finally {
            setLoading(false);
        }
    };

    const toggleStatus = async (id: string, currentStatus: string) => {
        const newStatus = currentStatus === "new" ? "contacted" : "new";
        try {
            const { error } = await supabase
                .from("consultations")
                .update({ status: newStatus })
                .eq("id", id);

            if (error) throw error;

            // Refresh local state
            setConsultations(consultations.map(c =>
                c.id === id ? { ...c, status: newStatus } : c
            ));
        } catch (error) {
            console.error("Error updating status:", error);
            alert("상태 업데이트 실패");
        }
    };

    if (loading) return <div className="p-8 text-center text-gray-500">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-deep-charcoal">상담 신청 내역</h1>
                    <button
                        onClick={() => {
                            sessionStorage.removeItem("isAdmin");
                            router.push("/admin/login");
                        }}
                        className="text-sm text-gray-500 hover:text-red-500 underline"
                    >
                        로그아웃
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100 border-b">
                                <tr>
                                    <th className="px-6 py-3">날짜</th>
                                    <th className="px-6 py-3">상태</th>
                                    <th className="px-6 py-3">이름/연락처</th>
                                    <th className="px-6 py-3">공간</th>
                                    <th className="px-6 py-3 w-1/3">문의내용</th>
                                    <th className="px-6 py-3">사진</th>
                                    <th className="px-6 py-3">관리</th>
                                </tr>
                            </thead>
                            <tbody>
                                {consultations.map((item) => (
                                    <tr key={item.id} className="bg-white border-b hover:bg-gray-50">
                                        <td className="px-6 py-4">
                                            {new Date(item.created_at).toLocaleDateString()} <br />
                                            <span className="text-xs text-gray-400">{new Date(item.created_at).toLocaleTimeString()}</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.status === 'new'
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-gray-100 text-gray-800"
                                                }`}>
                                                {item.status === 'new' ? '신규' : '완료'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="font-bold text-gray-900">{item.name}</p>
                                            <p>{item.contact}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.space_type}
                                        </td>
                                        <td className="px-6 py-4 whitespace-pre-wrap">
                                            {item.inquiry}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.photo_url ? (
                                                <a href={item.photo_url} target="_blank" rel="noopener noreferrer" className="block relative w-16 h-16 rounded-md overflow-hidden border">
                                                    <Image src={item.photo_url} alt="Reference" fill className="object-cover" />
                                                </a>
                                            ) : (
                                                <span className="text-gray-400 text-xs">-</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => toggleStatus(item.id, item.status)}
                                                className="text-blue-600 hover:underline"
                                            >
                                                {item.status === 'new' ? '완료 처리' : '신규로 복구'}
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {consultations.length === 0 && (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-8 text-center text-gray-400">
                                            아직 접수된 상담 내역이 없습니다.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
