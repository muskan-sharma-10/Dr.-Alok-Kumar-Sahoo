import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import TrustStrip from "@/components/TrustStrip";
import ConsultationCTA from "@/components/ConsultationCTA";
import { Stethoscope } from "lucide-react";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import { siteImages } from "@/data/siteImages";

export const metadata: Metadata = {
  title: "Hair Transplant & Hair Loss Services | AlloRoots",
  description:
    "Explore AlloRoots hair restoration services: Realtime Bio-Enhanced FUE, Beard Transplant, Female Hairline Restoration, GFC, PRP, PRF & Scalp Micropigmentation.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans">
      <Navbar />

      <PageHeaderBanner
        badge="AIIMS Medical Hair Care Catalog"
        badgeIcon={<Stethoscope className="w-3.5 h-3.5 text-[#C6A15B]" />}
        title="Hair Transplant & Hair Loss"
        highlightText="Speciality Treatments"
        description="Comprehensive surgical and non-surgical restoration portfolio. From Realtime Bio-Enhanced FUE to cellular PRF & GFC, all procedures are executed under 100% direct AIIMS doctor leadership."
        breadcrumbs={[{ label: "Services" }]}
        primaryActionLabel="Book Doctor Slot"
        primaryActionHref="/contact-us"
        statCardTitle="AIIMS Surgical Precision"
        statCardValue="20+"
        statCardSubtext="Advanced surgical & cellular regenerative protocols offered"
        bgImage={siteImages.hero.aboutHero}
      />

      <TrustStrip />

      {/* Services Hub Component with real imagery */}
      <ServicesSection />

      <ConsultationCTA />

      <Footer />
    </main>
  );
}
