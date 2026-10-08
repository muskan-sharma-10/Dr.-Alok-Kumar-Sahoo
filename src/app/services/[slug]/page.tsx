import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import ConsultationCTA from "@/components/ConsultationCTA";
import { servicesData } from "@/data/services";
import { Stethoscope, CheckCircle2, ArrowRight } from "lucide-react";
import PageHeaderBanner from "@/components/PageHeaderBanner";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) {
    return { title: "Service Not Found | AlloRoots" };
  }
  return {
    title: `${service.title} | AlloRoots Hair Restoration`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans">
      <Navbar />

      <PageHeaderBanner
        badge={service.badge || "AIIMS Certified Protocol"}
        badgeIcon={<Stethoscope className="w-3.5 h-3.5 text-[#C6A15B]" />}
        title={service.title}
        description={service.shortDesc}
        breadcrumbs={[
          { label: "Services", href: "/hair-transplant-services" },
          { label: service.title },
        ]}
        primaryActionLabel="Book Consultation"
        primaryActionHref="/contact-us"
        statCardTitle="Supervision & Execution"
        statCardValue={service.doctorInCharge ? "AIIMS MD" : "99.4%"}
        statCardSubtext={service.doctorInCharge || "100% Doctor-Led Implantation"}
        bgImage={service.image}
      />

      <TrustStrip />

      {/* Main Content Details */}
      <section className="py-20 md:py-28 bg-white border-b border-[#0B4F4A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-serif text-[#042926] font-normal">
                  Clinical Overview & Protocol
                </h2>
                <p className="text-base text-[#5A7370] leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>

              {/* Key Benefits */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-[#042926] font-normal">
                  Key Medical Benefits
                </h3>
                <div className="grid sm:grid-cols-2 gap-3.5">
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="bg-[#FAF7F1] p-4 rounded-xl border border-[#0B4F4A]/10 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A45C] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-[#042926] font-medium leading-snug">{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedure Steps */}
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-[#042926] font-normal">
                  Step-by-Step Surgical Protocol
                </h3>
                <div className="space-y-3">
                  {service.procedureSteps.map((step, idx) => (
                    <div key={idx} className="bg-[#FAF7F1] p-4 rounded-xl border border-[#0B4F4A]/10 flex items-start gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#0B4F4A] text-[#C9A45C] font-serif font-bold text-sm flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-[#5A7370] leading-relaxed">{step}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Candidate */}
              <div className="p-6 rounded-2xl bg-[#042926] text-white space-y-2 border border-[#C9A45C]/30">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#C9A45C]">
                  Who Is An Ideal Candidate?
                </h4>
                <p className="text-sm text-[#DFCA95] leading-relaxed">
                  {service.idealFor}
                </p>
              </div>
            </div>

            {/* Right Card Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* Real Service Image */}
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden bg-[#073A37] border border-[#C9A45C]/30 shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="bg-[#FAF7F1] rounded-2xl p-7 border border-[#0B4F4A]/10 space-y-5 text-left">
                <h4 className="font-serif text-[#042926] text-xl font-normal">
                  Book AIIMS Doctor Assessment
                </h4>
                <p className="text-sm text-[#5A7370]">
                  Consult directly with senior AIIMS dermatologists to verify your candidacy for {service.title}.
                </p>

                <div className="space-y-2 text-xs text-[#042926]">
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A45C]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact-us"
                  className="w-full py-3.5 rounded-xl bg-[#0B4F4A] text-white font-medium text-xs uppercase tracking-wider hover:bg-[#073A37] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A45C]" />
                </Link>
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
