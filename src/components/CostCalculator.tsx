"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Info } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

interface CostCalculatorProps {
  onOpenConsultation?: () => void;
}

const norwoodStages = [
  { stage: "Stage 2", grafts: "1,500 – 2,000", low: 1500, high: 2000, desc: "Early frontal recession" },
  { stage: "Stage 3", grafts: "2,000 – 2,800", low: 2000, high: 2800, desc: "Deeper temple recession" },
  { stage: "Stage 3V", grafts: "2,500 – 3,200", low: 2500, high: 3200, desc: "Vertex thinning begins" },
  { stage: "Stage 4", grafts: "3,000 – 3,800", low: 3000, high: 3800, desc: "Significant frontal & crown" },
  { stage: "Stage 5", grafts: "3,500 – 4,500", low: 3500, high: 4500, desc: "Large bald area" },
  { stage: "Stage 6", grafts: "4,000 – 5,500", low: 4000, high: 5500, desc: "Extensive coverage needed" },
  { stage: "Stage 7", grafts: "5,000 – 6,000+", low: 5000, high: 6000, desc: "Maximum restoration" },
];

const costPerGraft = 35; /* ₹ per graft approximate */

export default function CostCalculator({ onOpenConsultation }: CostCalculatorProps) {
  const [selectedStage, setSelectedStage] = useState(2);
  const stage = norwoodStages[selectedStage];

  const costRange = useMemo(() => {
    const low = stage.low * costPerGraft;
    const high = stage.high * costPerGraft;
    return {
      low: (low / 1000).toFixed(0),
      high: (high / 1000).toFixed(0),
      emiLow: ((low / 12) / 1000).toFixed(1),
      emiHigh: ((high / 12) / 1000).toFixed(1),
    };
  }, [selectedStage]);

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden" id="calculator">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left: Info */}
          <ScrollReveal direction="from-left" distance={70} duration={0.85} className="lg:col-span-5">
            <p className="text-[12px] tracking-[0.15em] uppercase font-semibold text-[#D87852] mb-3">Cost Transparency</p>
            <h2 className="text-[36px] sm:text-[46px] lg:text-[50px] font-serif font-normal text-[#1E2E2C] leading-[1.08]">
              Hair Transplant Cost Calculator
            </h2>
            <p className="mt-4 text-[17px] text-[#5A7370] leading-relaxed">
              Get an instant estimate based on your Norwood stage. Final pricing is confirmed after an in-clinic consultation with our AIIMS doctors.
            </p>

            <div className="mt-8 p-5 rounded-xl bg-[#0B4F4A]/5 border border-[#0B4F4A]/8">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-[#0B4F4A] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-[14px] font-semibold text-[#1E2E2C]">0% Interest EMI Available</p>
                  <p className="text-[13px] text-[#5A7370] mt-1 leading-relaxed">
                    Flexible payment plans across 3, 6, 9, or 12 months with zero additional interest charges.
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="group mt-6 flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B4F4A] text-white font-semibold text-[14px] hover:bg-[#073A37] transition-all duration-300 cursor-pointer"
            >
              Get Exact Quote
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </ScrollReveal>

          {/* Right: Calculator */}
          <ScrollReveal direction="from-right" distance={70} duration={0.85} delay={0.1} className="lg:col-span-7">
            <div className="bg-[#FAF7F1] rounded-2xl p-6 sm:p-8 border border-[#0B4F4A]/6">
              {/* Stage Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#D87852] flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-[#1E2E2C]">Select Your Norwood Stage</p>
                  <p className="text-[12px] text-[#8A9E9B]">Drag the slider or tap a stage below</p>
                </div>
              </div>

              {/* Stage Selector */}
              <div className="grid grid-cols-7 gap-2 mb-8">
                {norwoodStages.map((s, i) => (
                  <button
                    key={s.stage}
                    onClick={() => setSelectedStage(i)}
                    className={`py-3 rounded-xl text-center transition-all duration-300 cursor-pointer ${
                      selectedStage === i
                        ? "bg-[#0B4F4A] text-white shadow-md shadow-[#0B4F4A]/15"
                        : "bg-white text-[#1E2E2C] hover:bg-[#0B4F4A]/5 border border-[#0B4F4A]/8"
                    }`}
                  >
                    <p className="text-[12px] font-bold leading-tight">{s.stage.split(" ")[1]}</p>
                  </button>
                ))}
              </div>

              {/* Selected Stage Details */}
              <motion.div
                key={selectedStage}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl p-6 border border-[#0B4F4A]/6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[18px] font-serif text-[#1E2E2C]">Norwood {stage.stage}</p>
                    <p className="text-[13px] text-[#8A9E9B] mt-0.5">{stage.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[12px] text-[#8A9E9B] uppercase tracking-wider font-semibold">Grafts Needed</p>
                    <p className="text-[18px] font-bold text-[#D87852]">{stage.grafts}</p>
                  </div>
                </div>

                <div className="w-full h-px bg-[#0B4F4A]/8 my-4" />

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#FAF7F1] rounded-xl p-4 text-center">
                    <p className="text-[11px] uppercase tracking-wider text-[#8A9E9B] font-semibold mb-1">Estimated Cost</p>
                    <p className="text-[24px] font-serif text-[#0B4F4A]">
                      ₹{costRange.low}K – ₹{costRange.high}K
                    </p>
                  </div>
                  <div className="bg-[#FFF0E9] rounded-xl p-4 text-center">
                    <p className="text-[11px] uppercase tracking-wider text-[#8A9E9B] font-semibold mb-1">0% EMI / Month</p>
                    <p className="text-[24px] font-serif text-[#D87852]">
                      ₹{costRange.emiLow}K – ₹{costRange.emiHigh}K
                    </p>
                  </div>
                </div>

                <p className="text-[11px] text-[#8A9E9B] mt-4 text-center leading-relaxed">
                  *Estimates based on ₹{costPerGraft}/graft. Actual cost confirmed after clinical evaluation by our doctors.
                </p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
