import CostCalculator from "@/components/CostCalculator";
import Navbar from "@/components/Navbar";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";
import { Stethoscope } from "lucide-react";
import PageHeaderBanner from "@/components/PageHeaderBanner";
import { siteImages } from "@/data/siteImages";

export default function HairTransplantServicesPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans">
      <Navbar />

      <PageHeaderBanner
        badge="AIIMS Medical Hair Care Catalog"
        badgeIcon={<Stethoscope className="w-3.5 h-3.5 text-[#C6A15B]" />}
        title="Hair Transplant &"
        highlightText="Clinical Trichology"
        description="From gold-standard Bio-Enhanced FUE surgeries to cellular PRF & GFC regenerative therapies. 100% doctor-led treatments with 99.4% graft survival, micro-slit angulation, and zero pain ring-block anesthesia."
        breadcrumbs={[{ label: "Services & Procedures" }]}
        primaryActionLabel="Book Procedure Slot"
        primaryActionHref="/contact-us"
        statCardTitle="Active Bio-Preservation"
        statCardValue="99.4%"
        statCardSubtext="Grafts stored in active ATP nutrient baths for zero hypoxia during harvesting"
        bgImage={siteImages.results.case4}
      />

      <TrustStrip />

      <ServicesSection />

      {/* New Cost Calculator Section */}
      <section className="bg-white py-12">
        <CostCalculator />
      </section>

      <ConsultationCTA />

      <Footer />
    </main>
  );
}
