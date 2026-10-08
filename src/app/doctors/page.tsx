import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { doctorsData } from "@/data/doctors";
import { GraduationCap, ArrowRight, CheckCircle2, Award } from "lucide-react";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import { siteImages } from "@/data/siteImages";

export const metadata: Metadata = {
  title: "AIIMS Doctors Panel | AlloRoots Hair Restoration Clinic",
  description:
    "Meet Dr. Alok Kumar Sahoo (AIIMS Delhi) and the expert team of M.D. Dermatologists & Surgeons leading AlloRoots hair restoration.",
};

export default function DoctorsPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans">
      <Navbar />

      <PageHeaderBanner
        badge="AIIMS New Delhi Medical Panel"
        badgeIcon={<GraduationCap className="w-3.5 h-3.5 text-[#C6A15B]" />}
        title="Meet Our Doctors &"
        highlightText="AIIMS Surgeons"
        description="Every hair transplant, hairline design, and regenerative therapy at AlloRoots is personally performed by qualified M.D. Dermatologists and AIIMS New Delhi alumni. Critical extraction and slit-making are never delegated to technicians."
        breadcrumbs={[{ label: "Doctors Panel" }]}
        primaryActionLabel="Book Doctor Slot"
        primaryActionHref="/contact-us"
        statCardTitle="AIIMS Qualified Surgeons"
        statCardValue="100%"
        statCardSubtext="Zero technician delegation for graft extraction & slit-making"
        bgImage={siteImages.hero.aboutTeam}
      />

      {/* Doctors Grid */}
      <section className="py-20 md:py-28 bg-white border-b border-[#0B4F4A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid md:grid-cols-2 gap-10 text-left">
            {doctorsData.map((doc) => (
              <div
                key={doc.id}
                className="bg-[#FAF7F1] rounded-3xl p-8 border border-[#0B4F4A]/10 flex flex-col justify-between space-y-6 hover:border-[#C9A45C]/60 hover:shadow-xl transition-all group"
              >
                <div className="space-y-5">
                  {/* Doctor Real Photo */}
                  <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden bg-[#073A37]">
                    <Image
                      src={doc.image}
                      alt={`${doc.name} - Hair Transplant Surgeon at AlloRoots`}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 rounded bg-[#042926]/90 backdrop-blur-md text-[#C9A45C] text-xs font-semibold border border-[#C9A45C]/30">
                      AIIMS Delhi
                    </div>
                  </div>

                  <div>
                    <span className="px-3 py-1 rounded-full bg-[#0B4F4A] text-[#C9A45C] text-[11px] font-semibold uppercase tracking-wider">
                      {doc.role}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-serif text-[#042926] mt-3 font-normal">
                      {doc.name}
                    </h2>
                    <p className="text-xs sm:text-sm font-semibold text-[#0B4F4A] mt-1">
                      {doc.qualifications}
                    </p>
                    <p className="text-xs text-[#C9A45C] font-semibold mt-0.5">
                      {doc.experience} • {doc.institution}
                    </p>
                  </div>

                  <p className="text-sm text-[#5A7370] leading-relaxed">
                    {doc.bio}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[#0B4F4A]/10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#042926] block">Specializations:</span>
                    {doc.specializations.slice(0, 3).map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs sm:text-[13px] text-[#042926] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A45C] flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#0B4F4A]/10">
                  {doc.isChiefSurgeon ? (
                    <Link
                      href="/dr-alok-kumar-sahoo"
                      className="w-full py-3.5 rounded-xl bg-[#0B4F4A] text-white font-medium text-xs uppercase tracking-wider hover:bg-[#073A37] transition-all flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>View Dr. Alok's Full Profile</span>
                      <ArrowRight className="w-4 h-4 text-[#C9A45C]" />
                    </Link>
                  ) : (
                    <Link
                      href="/contact-us"
                      className="w-full py-3.5 rounded-xl bg-white border border-[#0B4F4A]/20 text-[#042926] font-medium text-xs uppercase tracking-wider hover:bg-[#0B4F4A] hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                      <span>Book Consultation With Doctor</span>
                      <ArrowRight className="w-4 h-4 text-[#C9A45C]" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
