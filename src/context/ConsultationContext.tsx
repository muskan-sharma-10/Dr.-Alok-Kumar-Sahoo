"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import ConsultationModal from "@/components/ConsultationModal";

interface ConsultationContextType {
  isConsultationOpen: boolean;
  openConsultation: () => void;
  closeConsultation: () => void;
}

const ConsultationContext = createContext<ConsultationContextType>({
  isConsultationOpen: false,
  openConsultation: () => {},
  closeConsultation: () => {},
});

export function ConsultationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openConsultation = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeConsultation = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Listen for global custom event so any link, button, or script can open consultation
  useEffect(() => {
    const handleEvent = () => setIsOpen(true);
    window.addEventListener("open-consultation-modal", handleEvent);
    return () => window.removeEventListener("open-consultation-modal", handleEvent);
  }, []);

  return (
    <ConsultationContext.Provider value={{ isConsultationOpen: isOpen, openConsultation, closeConsultation }}>
      {children}
      <ConsultationModal isOpen={isOpen} onClose={closeConsultation} />
    </ConsultationContext.Provider>
  );
}

export function useConsultation() {
  const context = useContext(ConsultationContext);
  return context;
}
