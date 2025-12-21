"use client";

import { useConsultation } from "@/context/ConsultationContext";

interface ConsultationButtonProps {
    className?: string;
    text?: string;
    variant?: "primary" | "outline" | "text" | "fixed_mobile";
    children?: React.ReactNode;
}

export default function ConsultationButton({
    className = "",
    text = "무료 실측 · 상담",
    variant = "primary",
    children
}: ConsultationButtonProps) {
    const { openModal } = useConsultation();

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        openModal();
    };

    if (variant === "fixed_mobile") {
        return (
            <button
                onClick={handleClick}
                className={`pointer-events-auto block w-full bg-accent-gold text-white text-center font-bold py-3 rounded-full shadow-lg hover:bg-deep-charcoal transition-colors ${className}`}
            >
                {children || text}
            </button>
        );
    }

    // Default styling checks could be added, but relying on passed className mostly for now
    return (
        <button onClick={handleClick} className={className}>
            {children || text}
        </button>
    );
}
