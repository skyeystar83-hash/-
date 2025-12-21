"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Simple client-side check for MVP. 
        // In real apps, use Supabase Auth or server-side cookies.
        if (password === "admin1234") {
            sessionStorage.setItem("isAdmin", "true");
            router.push("/admin");
        } else {
            alert("비밀번호가 올바르지 않습니다.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center text-deep-charcoal">관리자 로그인</h1>
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">비밀번호</label>
                        <input
                            type="password"
                            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-accent-gold"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="w-full bg-deep-charcoal text-white font-bold py-2 rounded-md hover:bg-black transition-colors">
                        로그인
                    </button>
                </form>
            </div>
        </div>
    );
}
