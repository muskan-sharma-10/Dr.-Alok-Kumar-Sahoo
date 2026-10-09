"use client";

import { MessageCircle, Calculator, Image as ImageIcon, Calendar, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { useConsultation } from "@/context/ConsultationContext";

export default function FloatingActions() {
  const { openConsultation } = useConsultation();
  const [hoveredWidget, setHoveredWidget] = useState<string | null>(null);

  return (
    <>
      {/* Right Side Stacked Buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-1.5 px-0 items-end pointer-events-none">
        
        {/* Calculate Cost */}
        <Link 
          href="https://hair-analysis.alloroots.com" 
          target="_blank"
          className="pointer-events-auto flex items-center justify-end group transition-all duration-300"
          onMouseEnter={() => setHoveredWidget('calc')}
          onMouseLeave={() => setHoveredWidget(null)}
        >
          <div className={`
            flex items-center justify-center overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
            bg-[#D87852] text-white shadow-lg
            rounded-l-xl sm:rounded-l-2xl border-l border-t border-b border-[#D87852]/20
            ${hoveredWidget === 'calc' ? 'w-[240px] px-5 py-3' : 'w-[38px] h-[38px] sm:w-[52px] sm:h-[52px]'}
          `}>
            {hoveredWidget === 'calc' ? (
              <span className="text-[14px] font-semibold tracking-wide whitespace-nowrap text-center">
                Calculate Hair<br/>Transplant Cost
              </span>
            ) : (
              <Calculator className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            )}
          </div>
        </Link>

        {/* Before And After */}
        <Link 
          href="/results" 
          className="pointer-events-auto flex items-center justify-end group transition-all duration-300"
          onMouseEnter={() => setHoveredWidget('results')}
          onMouseLeave={() => setHoveredWidget(null)}
        >
          <div className={`
            flex items-center justify-center overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
            bg-[#0B4F4A] text-white shadow-lg
            rounded-l-xl sm:rounded-l-2xl border-l border-t border-b border-[#0B4F4A]/20
            ${hoveredWidget === 'results' ? 'w-[200px] px-5 py-3.5' : 'w-[38px] h-[38px] sm:w-[52px] sm:h-[52px]'}
          `}>
            {hoveredWidget === 'results' ? (
              <span className="text-[14px] font-semibold tracking-wide whitespace-nowrap text-center">
                Before And<br/>After
              </span>
            ) : (
              <ImageIcon className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A45C]" />
            )}
          </div>
        </Link>

        {/* Book Online Consultation */}
        <button 
          type="button"
          onClick={openConsultation}
          className="pointer-events-auto flex items-center justify-end group transition-all duration-300 cursor-pointer text-left"
          onMouseEnter={() => setHoveredWidget('book')}
          onMouseLeave={() => setHoveredWidget(null)}
        >
          <div className={`
            flex items-center justify-center overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
            bg-[#042926] text-white shadow-lg
            rounded-l-xl sm:rounded-l-2xl border-l border-t border-b border-[#C9A45C]/20
            ${hoveredWidget === 'book' ? 'w-[220px] px-5 py-3' : 'w-[38px] h-[38px] sm:w-[52px] sm:h-[52px]'}
          `}>
            {hoveredWidget === 'book' ? (
              <span className="text-[14px] font-semibold tracking-wide whitespace-nowrap text-center text-[#DFCA95]">
                Book Online<br/>Consultation
              </span>
            ) : (
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[#C9A45C]" />
            )}
          </div>
        </button>
      </div>

      {/* Bottom Right WhatsApp Widget */}
      <div className="fixed bottom-20 lg:bottom-6 right-3.5 lg:right-6 z-50 flex items-center gap-3">
        <div className="hidden sm:flex bg-white px-4 py-2.5 rounded-full shadow-xl border border-[#0B4F4A]/10 items-center gap-2">
          <Phone className="w-4 h-4 text-[#0B4F4A]" />
          <span className="text-[14px] font-semibold text-[#1E2E2C]">Contact Now</span>
        </div>
        
        <a 
          href="https://wa.me/919717503031"
          target="_blank"
          rel="noreferrer"
          className="relative bg-[#25D366] w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 cursor-pointer"
        >
          {/* Notification Dot */}
          <div className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-[#FF3B30] rounded-full flex items-center justify-center border-2 border-white text-white text-[9px] sm:text-[10px] font-bold">
            1
          </div>
          <MessageCircle className="w-5.5 h-5.5 sm:w-7 sm:h-7 text-white fill-white" />
        </a>
      </div>
    </>
  );
}
