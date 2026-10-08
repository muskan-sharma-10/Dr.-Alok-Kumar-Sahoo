import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import ConsultationCTA from "@/components/ConsultationCTA";
import Image from "next/image";
import Link from "next/link";
import { locationsData } from "@/data/locations";
import { MapPin, Phone, Clock, CheckCircle2, Calendar, ExternalLink } from "lucide-react";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import { siteImages } from "@/data/siteImages";

export const metadata: Metadata = {
  title: "Hair Transplant in Chennai | AlloRoots (AIIMS Surgeons)",
  description:
    "AlloRoots Hair Transplant Clinic in Chennai (K.K. Nagar). AIIMS M.D. Surgeons, Realtime Bio-Enhanced FUE & 0% EMI.",
};

export default function ChennaiLocationPage() {
  const clinic = locationsData.find((l) => l.id === "chennai") || locationsData[2];

  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans">
      <Navbar />

      <PageHeaderBanner
        badge="South India Surgical Excellence Centre"
        badgeIcon={<MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />}
        title="Hair Transplant in"
        highlightText="Chennai (Tamil Nadu)"
        description="Advanced hair restoration centre serving Chennai and South India. AIIMS surgical leadership, Sapphire FUE precision, zero linear scars, and permanent natural hair growth."
        breadcrumbs={[
          { label: "Clinics", href: "/#clinics" },
          { label: "Chennai Clinic" },
        ]}
        primaryActionLabel="Book Chennai Slot"
        primaryActionHref="/contact-us"
        statCardTitle="Chennai Surgical Facility"
        statCardValue="K.K. Nagar"
        statCardSubtext="No. 42, Munusamy Salai, K.K. Nagar West, Chennai"
        bgImage={siteImages.clinics.chennai}
      />

      <TrustStrip />

      {/* Location Details Grid */}
      <section className="py-20 md:py-28 bg-white border-b border-[#0B4F4A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative h-80 sm:h-[440px] w-full rounded-2xl overflow-hidden bg-[#073A37] border border-[#C9A45C]/30 shadow-xl">
                <Image
                  src={clinic.image}
                  alt={clinic.name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#C9A45C] font-semibold">
                  CLINIC ADDRESS & CONTACT
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#042926] font-normal">
                  {clinic.name}
                </h2>
              </div>

              <div className="space-y-3 bg-[#FAF7F1] p-6 sm:p-8 rounded-2xl border border-[#0B4F4A]/10 text-sm text-[#5A7370]">
                <p className="font-semibold text-base leading-relaxed text-[#042926]">{clinic.address} - {clinic.pincode}</p>
                <p className="text-xs text-[#5A7370]"><strong>Landmark:</strong> {clinic.landmark}</p>

                <div className="flex flex-wrap gap-6 pt-3 border-t border-[#0B4F4A]/10 text-xs sm:text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#C9A45C]" />
                    <a href={`tel:${clinic.phone.replace(/\s+/g, '')}`} className="hover:text-[#C9A45C] text-[#042926]">{clinic.phone}</a>
                  </div>
                  <div className="flex items-center gap-2 text-[#5A7370]">
                    <Clock className="w-4 h-4 text-[#C9A45C]" />
                    <span>{clinic.hours}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif text-xl text-[#042926] font-normal">
                  Chennai Clinic Highlights:
                </h3>
                <div className="grid sm:grid-cols-2 gap-2.5">
                  {clinic.features.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 bg-[#FAF7F1] p-3.5 rounded-xl border border-[#0B4F4A]/10 text-xs sm:text-[13px] text-[#042926] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A45C] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/contact-us"
                  className="px-8 py-4 rounded-xl bg-[#0B4F4A] text-white font-medium text-sm hover:bg-[#073A37] transition-all flex items-center gap-2 shadow-md"
                >
                  <Calendar className="w-4 h-4 text-[#C9A45C]" />
                  <span>Book Appointment in Chennai</span>
                </Link>

                <a
                  href={clinic.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl border border-[#0B4F4A]/20 text-[#042926] font-medium text-sm hover:bg-[#FAF7F1] transition-all flex items-center gap-2"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-4 h-4 text-[#C9A45C]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />

      <Footer />
    </main>
  );
}
