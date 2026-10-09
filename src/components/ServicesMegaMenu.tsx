"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Scissors, Activity, Dna, Pill, Microscope, Zap, CheckCircle2, ChevronRight, Crown } from "lucide-react";
import { siteImages } from "@/data/siteImages";

const serviceCategories = [
  {
    id: "hair-transplant",
    title: "Hair Transplant",
    subtitle: "Natural & Permanent Results",
    icon: Scissors,
    services: [
      { title: "Male Hair Transplant", desc: "Restore hair & confidence", href: "/hair-transplant-services", image: siteImages.results.case1 },
      { title: "Female Hair Transplant", desc: "Natural density & coverage", href: "/hair-transplant-services", image: siteImages.results.case2 },
      { title: "Hairline Reconstruction", desc: "Redesign your hairline", href: "/hair-transplant-services", image: siteImages.results.case3 },
      { title: "Failed Hair Transplant Repair", desc: "Correct previous transplant", href: "/hair-transplant-services", image: siteImages.results.case4 },
      { title: "Beard & Moustache Reconstruction", desc: "Permanent beard enhancement", href: "/hair-transplant-services", image: siteImages.hero.mainBanner },
      { title: "Eyebrow Transplantation", desc: "Thicker, natural-looking brows", href: "/hair-transplant-services", image: siteImages.hero.aboutHero },
      { title: "Body Hair Transplant", desc: "Effective for body areas", href: "/hair-transplant-services", image: siteImages.hero.aboutTeam },
      { title: "Crown Hair Transplant", desc: "Restore crown density", href: "/hair-transplant-services", image: siteImages.hero.aboutExcellence },
      { title: "Non-Shave / Long Hair FUE", desc: "No shaving, natural results", href: "/hair-transplant-services", image: siteImages.results.case5 },
      { title: "Scarring Alopecia", desc: "Expert treatment for scarred areas", href: "/hair-transplant-services", image: siteImages.results.case6 },
    ],
  },
  {
    id: "hair-loss-treatment",
    title: "Hair Loss Treatment",
    subtitle: "Advanced Non-Surgical Care",
    icon: Activity,
    services: [
      { title: "Male Hair Loss Therapy", desc: "Multi-modal protocols", href: "/hair-transplant-services", image: siteImages.results.case7 },
      { title: "Female Hair Thinning", desc: "Hormonal & nutritional care", href: "/hair-transplant-services", image: siteImages.results.case8 },
      { title: "Mesotherapy Infusions", desc: "Direct nourishment", href: "/hair-transplant-services", image: siteImages.hero.mainBanner },
    ],
  },
  {
    id: "regenerative",
    title: "Regenerative Trichology",
    subtitle: "Cellular & Growth Therapies",
    icon: Dna,
    services: [
      { title: "PRP Therapy", desc: "Autologous growth concentration", href: "/hair-transplant-services", image: siteImages.results.case9 },
      { title: "Injectable PRF", desc: "Next-gen fibrin scaffold", href: "/hair-transplant-services", image: siteImages.results.case10 },
      { title: "GFC Therapy", desc: "High-potency activation", href: "/hair-transplant-services", image: siteImages.hero.aboutHero },
    ],
  },
  {
    id: "medications",
    title: "Hair Medications",
    subtitle: "FDA Approved Solutions",
    icon: Pill,
    services: [
      { title: "Medical Pharmacotherapy", desc: "Minoxidil & Finasteride", href: "/hair-transplant-services", image: siteImages.hero.aboutTeam },
    ],
  },
  {
    id: "scalp-problems",
    title: "Hair & Scalp Problems",
    subtitle: "Diagnosis & Treatment",
    icon: Microscope,
    services: [
      { title: "Scalp Conditions", desc: "Dandruff & Alopecia Areata", href: "/hair-transplant-services", image: siteImages.hero.aboutExcellence },
    ],
  },
  {
    id: "laser-reduction",
    title: "Laser Hair Reduction",
    subtitle: "Safe & Effective Technology",
    icon: Zap,
    services: [
      { title: "Full Body Laser", desc: "Triple-wavelength removal", href: "/hair-transplant-services", image: siteImages.results.case11 },
    ],
  },
];

export default function ServicesMegaMenu() {
  const [activeTab, setActiveTab] = useState(serviceCategories[0].id);

  const activeCategory = serviceCategories.find((c) => c.id === activeTab) || serviceCategories[0];

  return (
    <div className="w-[1200px] flex flex-col bg-white">
      <div className="flex h-[450px]">
        {/* Left Sidebar */}
        <div className="w-[300px] bg-[#FAF7F1] flex flex-col p-4 gap-2 overflow-y-auto">
          {serviceCategories.map((cat) => {
            const isActive = activeTab === cat.id;
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onMouseEnter={() => setActiveTab(cat.id)}
                className={`flex items-center justify-between p-3 rounded-xl transition-all ${
                  isActive ? "bg-[#FDF3E9] text-[#042926] shadow-sm border border-[#D87852]/20" : "hover:bg-white text-[#5A7370] border border-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${isActive ? "bg-[#D87852]/10" : "bg-white border border-[#0B4F4A]/5"}`}>
                    <Icon className={`w-5 h-5 ${isActive ? "text-[#D87852]" : "text-[#0B4F4A]"}`} />
                  </div>
                  <div className="text-left">
                    <p className={`text-[13px] font-bold ${isActive ? "text-[#D87852]" : "text-[#042926]"}`}>{cat.title}</p>
                    <p className="text-[11px] text-[#8A9E9B] leading-tight">{cat.subtitle}</p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 ${isActive ? "text-[#D87852]" : "text-[#8A9E9B]/50"}`} />
              </button>
            );
          })}
        </div>

        {/* Middle Content */}
        <div className="flex-1 p-6 flex flex-col overflow-y-auto bg-white">
          <div className="flex justify-between items-end mb-6 border-b border-[#0B4F4A]/10 pb-4">
            <div>
              <h3 className="text-2xl font-serif text-[#042926]">{activeCategory.title} Services</h3>
              <p className="text-[13px] text-[#5A7370] mt-1">Advanced techniques for natural and permanent hair restoration</p>
            </div>
            <Link href="/hair-transplant-services" className="text-[#D87852] text-[13px] font-semibold flex items-center gap-1 hover:underline">
              View All Services <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 gap-x-4 gap-y-4">
            {activeCategory.services.map((service, i) => (
              <Link key={i} href={service.href} className="flex items-center gap-3 p-2 rounded-xl hover:bg-[#FAF7F1] transition-colors group">
                <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-[#0B4F4A]/10">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[13px] font-bold text-[#042926] group-hover:text-[#D87852] transition-colors truncate">{service.title}</p>
                  <p className="text-[11px] text-[#8A9E9B] truncate">{service.desc}</p>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-[#8A9E9B] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Right Featured Card */}
        <div className="w-[320px] bg-[#042926] relative overflow-hidden flex flex-col">
          <div className="absolute inset-0 opacity-40">
            <Image src={siteImages.hero.aboutHero} alt="Featured" fill className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#042926] via-[#042926]/80 to-transparent" />
          
          <div className="relative z-10 flex flex-col h-full justify-end p-6">
            <p className="text-[10px] font-bold tracking-widest text-[#C9A45C] uppercase mb-2">Featured</p>
            <h4 className="text-2xl font-serif text-white leading-tight mb-4">Advanced<br/>Hair Transplant<br/>Solutions</h4>
            
            <ul className="space-y-2 mb-6">
              {["Natural Hairline Design", "Maximum Graft Survival", "Minimal Downtime"].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-white/90 text-[12px]">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A45C]" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/hair-transplant-services" className="bg-white text-[#D87852] font-semibold text-[13px] py-2.5 px-4 rounded-full text-center flex items-center justify-center gap-2 hover:bg-[#FAF7F1] transition-colors">
              Explore All Treatments <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          
          {/* Floating Badge */}
          <div className="absolute bottom-6 right-[-10px] bg-white px-3 py-2 rounded-xl shadow-xl flex items-center gap-2 transform translate-x-2 border border-[#C9A45C]/30">
            <Crown className="w-5 h-5 text-[#C9A45C]" />
            <div className="text-left">
              <p className="text-[12px] font-bold text-[#042926]">3,000+</p>
              <p className="text-[9px] text-[#5A7370] leading-none">Successful<br/>Surgeries</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#FDF3E9] p-4 flex items-center justify-between border-t border-[#D87852]/20">
        <div className="flex gap-8">
          <Link href="/bollywood-celebrity-hair-transplant-analysis" className="flex items-center gap-3 group">
            <div className="bg-white p-2 rounded-full border border-[#D87852]/20 group-hover:border-[#D87852]/50 transition-colors">
              <Activity className="w-4 h-4 text-[#D87852]" />
            </div>
            <div>
              <p className="text-[12px] font-bold text-[#042926]">Celebrity HT Analysis</p>
              <p className="text-[10px] text-[#8A9E9B]">Expert analysis & insights</p>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#8A9E9B] group-hover:text-[#D87852]" />
          </Link>
          
          <Link href="/hair-transplant-services" className="flex items-center gap-3 group">
            <div className="bg-white p-2 rounded-full border border-[#D87852]/20 group-hover:border-[#D87852]/50 transition-colors">
              <Dna className="w-4 h-4 text-[#D87852]" />
            </div>
            <div>
              <p className="text-[12px] font-bold text-[#042926]">PRP Therapy</p>
              <p className="text-[10px] text-[#8A9E9B]">Stimulate natural growth</p>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#8A9E9B] group-hover:text-[#D87852]" />
          </Link>

          <Link href="/hair-transplant-services" className="flex items-center gap-3 group">
            <div className="bg-white p-2 rounded-full border border-[#D87852]/20 group-hover:border-[#D87852]/50 transition-colors">
              <Zap className="w-4 h-4 text-[#D87852]" />
            </div>
            <div>
              <p className="text-[12px] font-bold text-[#042926]">GFC Therapy</p>
              <p className="text-[10px] text-[#8A9E9B]">Advanced growth factors</p>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#8A9E9B] group-hover:text-[#D87852]" />
          </Link>

          <Link href="/hair-transplant-services" className="flex items-center gap-3 group">
            <div className="bg-white p-2 rounded-full border border-[#D87852]/20 group-hover:border-[#D87852]/50 transition-colors">
              <Microscope className="w-4 h-4 text-[#D87852]" />
            </div>
            <div>
              <p className="text-[12px] font-bold text-[#042926]">ACell + PRP</p>
              <p className="text-[10px] text-[#8A9E9B]">Regenerative solution</p>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-[#8A9E9B] group-hover:text-[#D87852]" />
          </Link>
        </div>

        <Link href="/hair-transplant-services" className="text-[#D87852] text-[13px] font-semibold flex items-center gap-1 hover:underline pr-4">
          View All Services <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

function ArrowRight(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  );
}
