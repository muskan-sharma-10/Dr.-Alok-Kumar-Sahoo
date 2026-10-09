"use client";

import { Phone, Calendar, MessageSquare } from "lucide-react";
import { useConsultation } from "@/context/ConsultationContext";

interface StickyMobileBarProps {
  onOpenConsultation?: () => void;
}

export default function StickyMobileBar({ onOpenConsultation }: StickyMobileBarProps) {
  const { openConsultation } = useConsultation();

  const handleConsultation = () => {
    if (onOpenConsultation) {
      onOpenConsultation();
    } else {
      openConsultation();
    }
  };
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#042926]/97 backdrop-blur-lg border-t border-[#C9A45C]/20 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        <a
          href="tel:+919717503031"
          className="py-2 rounded-lg bg-[#073A37] text-white border border-[#C9A45C]/15 text-[10.5px] font-semibold flex flex-col items-center justify-center gap-1 active:scale-95 transition-all"
        >
          <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span>Call Now</span>
        </a>

        <a
          href="https://wa.me/919717503031?text=Hi%20Alloroots%2C%20I%20want%20to%20know%20more%20about%20Hair%20Transplant%20consultation"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 rounded-lg bg-[#073A37] text-white border border-[#C9A45C]/15 text-[10.5px] font-semibold flex flex-col items-center justify-center gap-1 active:scale-95 transition-all"
        >
          <MessageSquare className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span>WhatsApp</span>
        </a>

        <button
          type="button"
          onClick={handleConsultation}
          className="py-2 rounded-lg bg-[#C6A15B] text-[#042926] text-[10.5px] font-bold flex flex-col items-center justify-center gap-1 shadow-md active:scale-95 transition-all cursor-pointer"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Consult</span>
        </button>
      </div>
    </div>
  );
}
