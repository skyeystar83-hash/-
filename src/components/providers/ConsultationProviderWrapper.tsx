"use client";

import React, { ReactNode } from "react";
import { ConsultationProvider } from "@/context/ConsultationContext";
import ConsultationModal from "@/components/ui/ConsultationModal";

export default function ConsultationProviderWrapper({ children }: { children: ReactNode }) {
    return (
        <ConsultationProvider>
            {children}
            <ConsultationModal />
        </ConsultationProvider>
    );
}
