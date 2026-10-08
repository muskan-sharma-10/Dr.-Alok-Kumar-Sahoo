import { Star, ShieldCheck } from "lucide-react";

export default function GoogleTrustSection() {
  return (
    <section className="bg-[#FAF7F1] py-12 border-b border-[#0B4F4A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#0B4F4A]/10 shadow-sm max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          {/* Left Rating Info */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#042926] border border-[#C9A45C]/30 flex items-center justify-center font-serif text-2xl text-[#C9A45C] shadow-sm flex-shrink-0">
              5.0
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[#C9A45C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C9A45C] text-[#C9A45C]" />
                ))}
                <span className="text-xs font-semibold text-[#042926] ml-1">5.0 / 5.0 Rating</span>
              </div>

              <div className="text-xs text-[#5A7370] font-medium">
                Based on 163+ Verified Google Patient Reviews
              </div>
            </div>
          </div>

          {/* Right Verification Badge */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#0B4F4A]/5 text-[#042926] border border-[#0B4F4A]/15 text-xs font-medium">
              <ShieldCheck className="w-4 h-4 text-[#C9A45C]" />
              <span>Google Verified Clinic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
