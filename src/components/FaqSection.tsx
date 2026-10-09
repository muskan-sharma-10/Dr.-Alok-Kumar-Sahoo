"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, HelpCircle, Sparkles, CheckCircle2 } from "lucide-react";
import { faqsData } from "@/data/faqs";

export default function FaqSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeFaq = faqsData[selectedIdx] || faqsData[0];

  return (
    <section className="relative py-28 md:py-40 bg-[#FBF8F3] overflow-hidden border-b border-[#0B4F4A]/8" id="faq">
      {/* Ambient background decoration */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#C6A15B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mb-16 lg:mb-22"
        >
          <span className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#C96F4F] block mb-2">
            Clinical Clarity &amp; Transparency
          </span>
          <h2 className="text-[40px] sm:text-[50px] lg:text-[58px] font-serif font-normal text-[#202A28] leading-[1.08]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[17px] text-[#566965] font-light leading-relaxed">
            Essential facts on hair graft survival, pain-free anesthesia, permanence, and AIIMS doctor protocols.
          </p>
        </motion.div>

        {/* Editorial Two-Column Master FAQ Layout: Left Questions, Right Answer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left Column: List of Questions with Animated Numbers (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-3"
          >
            <span className="text-[12px] uppercase tracking-[0.16em] text-[#0B4F4A] font-bold block px-3 mb-2">
              Select Question
            </span>
            <div className="space-y-3">
              {faqsData.map((faq, idx) => {
                const isSelected = selectedIdx === idx;
                const formattedNum = String(idx + 1).padStart(2, "0");

                return (
                  <button
                    key={faq.id}
                    onClick={() => setSelectedIdx(idx)}
                    data-cursor="cta"
                    className={`w-full text-left p-5 sm:p-5.5 rounded-2xl transition-all duration-300 relative group flex items-start gap-4.5 cursor-pointer border ${
                      isSelected
                        ? "bg-white border-[#C6A15B]/60 shadow-lg translate-x-2"
                        : "bg-white/50 border-transparent hover:bg-white/80"
                    }`}
                  >
                    {/* Animated Number: transforms on active */}
                    <div className="flex-shrink-0 mt-0.5">
                      <motion.span
                        animate={{
                          color: isSelected ? "#C96F4F" : "#8A9E9B",
                          scale: isSelected ? 1.15 : 1,
                        }}
                        transition={{ duration: 0.3 }}
                        className="font-serif text-[19px] sm:text-[21px] font-normal block"
                      >
                        {formattedNum}
                      </motion.span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10.5px] uppercase tracking-wider font-bold text-[#0B4F4A]/80">
                          {faq.category}
                        </span>
                      </div>
                      <h4 className={`text-[16px] sm:text-[17.5px] font-serif font-normal transition-colors leading-snug ${
                        isSelected ? "text-[#0B4F4A]" : "text-[#202A28] group-hover:text-[#0B4F4A]"
                      }`}>
                        {faq.question}
                      </h4>
                    </div>

                    <ArrowRight className={`w-4.5 h-4.5 mt-1 flex-shrink-0 transition-transform ${
                      isSelected ? "text-[#C6A15B] translate-x-1.5" : "text-transparent"
                    }`} />
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Expanding Editorial Answer Showcase (6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 lg:sticky lg:top-28"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFaq.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white rounded-[36px] p-8 sm:p-12 shadow-[0_24px_55px_-12px_rgba(11,79,74,0.13)] border border-[#0B4F4A]/8 space-y-7"
              >
                {/* Active Question Top Banner */}
                <div className="flex items-center justify-between pb-4 border-b border-[#0B4F4A]/8">
                  <span className="text-[11.5px] uppercase tracking-[0.16em] font-bold text-[#C96F4F]">
                    Answer {String(selectedIdx + 1).padStart(2, "0")} • {activeFaq.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-[12px] text-[#0B4F4A] font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A15B]" />
                    AIIMS Verified
                  </div>
                </div>

                {/* Big Serif Question Header */}
                <h3 className="text-[26px] sm:text-[32px] font-serif font-normal text-[#202A28] leading-tight">
                  {activeFaq.question}
                </h3>

                {/* Detailed Answer */}
                <div className="space-y-4 text-[16.5px] text-[#566965] font-light leading-relaxed">
                  <p>{activeFaq.answer}</p>
                </div>

                {/* Medical Assurance Footnote */}
                <div className="pt-6 border-t border-[#0B4F4A]/8 flex items-start gap-3.5 bg-[#FBF8F3] p-5 rounded-2xl">
                  <Sparkles className="w-4.5 h-4.5 text-[#C6A15B] flex-shrink-0 mt-0.5" />
                  <p className="text-[13.5px] text-[#202A28] leading-relaxed">
                    Still have specific clinical questions regarding your donor density? Our AIIMS chief surgical team reviews cases personally during consultation.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
