import Link from "next/link";
import { Scissors, Sparkles, UserCheck, ArrowRight } from "lucide-react";

interface SpecialitiesSectionProps {
  onOpenConsultation?: () => void;
}

const specialities = [
  {
    title: "Beard Transplantation",
    desc: "Precision graft placement to construct full, dense, and naturally directional facial hair along the cheekbone and jawline.",
    badge: "Facial Aesthetics",
    grafts: "1,200 - 2,500 Grafts",
  },
  {
    title: "Moustache Transplantation",
    desc: "Micro-slit single graft transplantation to repair trauma scars or genetic thinness above the upper lip.",
    badge: "High Precision",
    grafts: "600 - 1,200 Grafts",
  },
  {
    title: "Eyebrow Transplantation",
    desc: "Single follicle ultra-fine micro-implantation mimicking natural eyebrow arch, curvature, and feathering direction.",
    badge: "Subtle Artistry",
    grafts: "300 - 700 Grafts",
  },
  {
    title: "Body Hair Transplant (BHT)",
    desc: "Utilizing beard or chest donor hair as auxiliary grafts for high Norwood stage (5-7) scalp restorations.",
    badge: "Advanced Donor",
    grafts: "1,500 - 3,500 Grafts",
  },
];

export default function SpecialitiesSection({ onOpenConsultation }: SpecialitiesSectionProps) {
  return (
    <section className="py-20 bg-[#F7F5EF] border-b border-[#123B35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="text-eyebrow text-[#C5A46D]">
            SPECIALIZED MICRO-SURGERIES
          </span>

          <h2 className="text-h2-section font-serif text-[#123B35]">
            We Also Offer Hair Restoration Surgeries For:
          </h2>

          <p className="text-body-large text-[#242826]/80">
            Beyond scalp hair loss, our AIIMS surgeons specialize in facial and body hair micro-transplantation with high density.
          </p>
        </div>

        {/* Visual Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-[#123B35]/10 flex flex-col justify-between space-y-5 hover:border-[#C5A46D]/60 hover:shadow-xl transition-all group text-left"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#123B35] bg-[#F7F5EF] px-2.5 py-1 rounded border border-[#123B35]/10 uppercase tracking-wider">
                    {item.badge}
                  </span>
                  <Scissors className="w-4 h-4 text-[#C5A46D]" />
                </div>

                <h3 className="text-xl font-serif font-bold text-[#123B35]">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-[#242826]/75 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#123B35]/5 flex items-center justify-between">
                <span className="text-xs font-bold text-[#C5A46D]">{item.grafts}</span>
                {onOpenConsultation ? (
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-bold text-[#123B35] hover:text-[#C5A46D] flex items-center gap-1 transition-colors"
                  >
                    <span>Consult</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D]" />
                  </button>
                ) : (
                  <Link
                    href="/contact-us"
                    className="text-xs font-bold text-[#123B35] hover:text-[#C5A46D] flex items-center gap-1 transition-colors"
                  >
                    <span>Consult</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A46D]" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
