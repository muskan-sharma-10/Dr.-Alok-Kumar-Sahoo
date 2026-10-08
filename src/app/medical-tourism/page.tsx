import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import NumbersSection from "@/components/NumbersSection";
import Image from "next/image";
import Link from "next/link";
import { Plane, CheckCircle2, ArrowRight } from "lucide-react";
import { siteImages } from "@/data/siteImages";
import PageHeaderBanner from "@/components/PageHeaderBanner";

export const metadata: Metadata = {
  title: "Medical Tourism for Hair Transplant in India | AlloRoots",
  description: "Explore affordable, world-class hair transplant medical tourism in India with expert surgeons and personalized care at AlloRoots.",
};

export default function MedicalTourismPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans">
      <Navbar />

      <PageHeaderBanner
        badge="International Patient Concierge"
        badgeIcon={<Plane className="w-3.5 h-3.5 text-[#C6A15B]" />}
        title="Hair Transplant Medical Tourism in"
        highlightText="India (Delhi NCR)"
        description="Receive world-class AIIMS doctor-led Bio-Enhanced FUE hair restoration at a fraction of US/UK/European costs. Includes 5-star airport pickup, boutique hotel concierge, and remote post-op teleconsultation."
        breadcrumbs={[{ label: "Medical Tourism" }]}
        primaryActionLabel="Request Travel Package"
        primaryActionHref="/contact-us"
        statCardTitle="Global Patient Standard"
        statCardValue="70% Save"
        statCardSubtext="Compared to US & UK surgical rates, with superior AIIMS physician care"
        bgImage={siteImages.hero.aboutHero}
      />

      <TrustStrip />

      <section className="py-20 md:py-28 bg-white border-b border-[#0B4F4A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative h-[440px] sm:h-[500px] w-full rounded-2xl overflow-hidden bg-[#073A37] border border-[#C9A45C]/30 shadow-xl">
                <Image
                  src={siteImages.hero.aboutHero}
                  alt="Medical Tourism at AlloRoots"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#C9A45C] font-semibold">
                  WORLD CLASS CARE
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#042926] font-normal">
                  Premium Hair Restoration For International Patients
                </h2>
              </div>

              <p className="text-base text-[#5A7370] leading-relaxed">
                India has become a leading destination for medical tourism, particularly for cosmetic and hair restoration procedures. At AlloRoots, we offer <strong className="text-[#042926] font-semibold">AIIMS doctor-led</strong> hair transplants that match international standards at highly competitive costs.
              </p>

              <p className="text-base text-[#5A7370] leading-relaxed">
                We understand that traveling to a new country for a medical procedure can be daunting. That's why our dedicated international patient concierge team takes care of everything from visa assistance and airport transfers to accommodation and post-operative care.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#FAF7F1] p-5 rounded-2xl border border-[#0B4F4A]/10 space-y-1">
                  <div className="flex items-center gap-2 text-base font-serif text-[#042926]">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A45C]" />
                    <span>Travel & Stay Support</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#5A7370] leading-relaxed">
                    Assistance with visa, local accommodation, and seamless airport transfers.
                  </p>
                </div>

                <div className="bg-[#FAF7F1] p-5 rounded-2xl border border-[#0B4F4A]/10 space-y-1">
                  <div className="flex items-center gap-2 text-base font-serif text-[#042926]">
                    <CheckCircle2 className="w-5 h-5 text-[#C9A45C]" />
                    <span>Dedicated Concierge</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-[#5A7370] leading-relaxed">
                    A personal coordinator to guide you through your entire journey in India.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="px-7 py-3.5 rounded-xl bg-[#0B4F4A] text-white font-medium text-sm hover:bg-[#073A37] transition-all flex items-center gap-2 shadow-md"
                >
                  <span>Plan Your Trip</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A45C]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NumbersSection />

      <Footer />
    </main>
  );
}
