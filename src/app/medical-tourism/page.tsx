import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MedicalTourismView from "@/components/MedicalTourismView";

export const metadata: Metadata = {
  title: "Medical Tourism for Hair Transplant in India | All-Inclusive Packages | AlloRoots",
  description:
    "Explore affordable, world-class hair transplant medical tourism packages in India (Delhi & Bhubaneswar) starting at $2,199. 100% AIIMS doctor-led Bio-Enhanced FUE, VIP airport transfers, hotel concierge & free GFC therapy.",
  keywords: [
    "Medical Tourism Hair Transplant India",
    "Hair Transplant Packages India",
    "Hair Transplant Cost in India for Foreigners",
    "Best Hair Transplant Surgeon India",
    "Medical Tourism Delhi Hair Restoration",
    "AIIMS Doctor Hair Transplant",
    "Bio Enhanced FUE India",
    "Hair Transplant India vs Turkey",
    "Indian Medical Visa Hair Transplant",
  ],
  alternates: {
    canonical: "https://alloroots.com/medical-tourism/",
  },
  openGraph: {
    title: "Medical Tourism for Hair Transplant in India | AlloRoots Packages",
    description:
      "Save 70-75% on world-class hair restoration with AIIMS surgeons in India. Comprehensive packages from $2,199 with VIP transfers, luxury accommodation & free GFC therapy.",
    url: "https://alloroots.com/medical-tourism/",
    siteName: "AlloRoots Hair Transplant Clinic",
    locale: "en_US",
    type: "website",
  },
};

export default function MedicalTourismPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Medical Tourism for Hair Transplant in India",
    description:
      "All-inclusive hair restoration packages in India performed by AIIMS dermatologists and surgeons.",
    url: "https://alloroots.com/medical-tourism/",
    provider: {
      "@type": "MedicalClinic",
      name: "AlloRoots Hair Transplant Clinic",
      telephone: "+91-9717503031",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
      priceRange: "$2,199 - $4,199",
    },
    about: {
      "@type": "MedicalProcedure",
      name: "Realtime Bio-Enhanced FUE Hair Transplant",
      procedureType: "Surgical",
    },
  };

  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans selection:bg-[#C6A15B] selection:text-white">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Rich Interactive Medical Tourism Experience */}
      <MedicalTourismView />

      {/* Footer */}
      <Footer />
    </main>
  );
}
