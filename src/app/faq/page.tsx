import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FaqSection from "@/components/FaqSection";
import TrustStrip from "@/components/TrustStrip";
import ConsultationCTA from "@/components/ConsultationCTA";
import { HelpCircle } from "lucide-react";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import { siteImages } from "@/data/siteImages";

export const metadata: Metadata = {
  title: "FAQ & Knowledge Base | AlloRoots Hair Transplant Clinic",
  description:
    "Find clear medical answers to questions on Realtime Bio-Enhanced FUE, graft survival rates, recovery timeline, AIIMS doctors, and pricing at AlloRoots.",
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans">
      <Navbar />

      <PageHeaderBanner
        badge="Clinical Knowledge & FAQ"
        badgeIcon={<HelpCircle className="w-3.5 h-3.5 text-[#C6A15B]" />}
        title="Frequently Asked"
        highlightText="Medical Questions"
        description="Comprehensive, evidence-based answers to patient queries regarding hair transplant candidacy, pain management, graft survival rates, recovery timelines, and EMI payment options at AlloRoots."
        breadcrumbs={[{ label: "FAQs" }]}
        primaryActionLabel="Ask A Doctor"
        primaryActionHref="/contact-us"
        statCardTitle="Transparent Patient Care"
        statCardValue="100%"
        statCardSubtext="Honest medical counsel with zero commercial sales pressure"
        bgImage={siteImages.hero.aboutExcellence}
      />

      <TrustStrip />

      <FaqSection />

      <ConsultationCTA />

      <Footer />
    </main>
  );
}
