import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import Image from "next/image";
import { Star, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Bollywood Celebrity Hair Transplant Analysis | AlloRoots",
  description: "Explore expert analysis of Bollywood celebrity hair transplants and techniques behind their natural transformations by Dr. Alok Sahoo.",
};

interface CelebrityAnalysis {
  name: string;
  image: string;
  overview: string;
  naturalnessRating: string;
  densityCoverage: string;
  longevity: string;
}

const celebrities: CelebrityAnalysis[] = [
  {
    name: "1. Salman Khan",
    image: "https://alloroots.com/wp-content/uploads/2025/03/Celebrity-Salman-Khan-Hair-Transplant-Analysis-1024x575.jpeg",
    overview: "Reports indicate Salman Khan underwent FUT first in 2003 in India, which was not that successful; followed by an FUE in 2007, which was successful and effective for 10 years and again in 2016 to maintain hair volume and appearance; combined with scalp micro-pigmentation for enhanced density and definition.",
    naturalnessRating: "3/5",
    densityCoverage: "Rating: Average",
    longevity: "Consistent grooming and occasional touch-ups (e.g., hair fibers) help sustain his look."
  },
  {
    name: "2. MS Dhoni",
    image: "https://alloroots.com/wp-content/uploads/2026/02/MSD.webp",
    overview: "MS Dhoni is speculated to have opted for non-surgical treatments (like PRP injections) and possibly a minor FUE procedure to enhance density. His subtle transformation suggests early intervention and regular maintenance.",
    naturalnessRating: "4/5",
    densityCoverage: "Improved frontal density with some sparse areas remaining at the crown. Rating: 3.5/5",
    longevity: "Results have held up well over recent years—likely supported by regular PRP and topical treatments."
  },
  {
    name: "3. Akshay Kumar",
    image: "https://alloroots.com/wp-content/uploads/2026/02/AK.webp",
    overview: "Akshay Kumar’s transformation suggests either a conservative hair transplant or non-surgical interventions (like PRP). The aim appears to be preserving a natural, age-appropriate look.",
    naturalnessRating: "3/5",
    densityCoverage: "Moderate improvement in density; not as full as some other cases.",
    longevity: "Some of his recent pictures are showing thinning in his hairline area."
  },
  {
    name: "4. Sanjay Dutt",
    image: "https://alloroots.com/wp-content/uploads/2026/02/SD.webp",
    overview: "Sanjay Dutt has likely undergone FUT, which was not successful; then he has undergone another surgery which is likely a full FUE hair transplant, evident by the marked change in his hairline and frontal density.",
    naturalnessRating: "4/5",
    densityCoverage: "Good frontal density with moderate improvement on the crown.",
    longevity: "Results have been sustained over time, with proper upkeep and occasional touch-ups."
  },
  {
    name: "5. Govinda",
    image: "https://alloroots.com/wp-content/uploads/2026/02/G.webp",
    overview: "Govinda has confirmed undergoing a hair transplant (likely FUE), resulting in a dramatic turnaround in both hairline and overall volume. Hairline not irregular, angle not proper, presence of thick hair, hairline looks sparse.",
    naturalnessRating: "3.5/5",
    densityCoverage: "Average density, but good coverage.",
    longevity: "Thinning over the years."
  }
];

export default function BollywoodAnalysisPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans">
      <Navbar />

      <section className="pt-36 pb-20 bg-[#042926] text-white relative border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#073A37] border border-[#C9A45C]/30 text-[#C9A45C] text-xs font-semibold uppercase tracking-wider">
            <Star className="w-4 h-4 text-[#C9A45C]" />
            <span>Expert Analysis</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal">
            Bollywood Celebrity Hair Transplant Analysis
          </h1>

          <p className="text-base sm:text-lg text-[#DFCA95] max-w-2xl mx-auto leading-relaxed">
            Medically reviewed by Dr. Alok Sahoo • Written by Aseema Mishra
          </p>
        </div>
      </section>

      <TrustStrip />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {celebrities.map((celeb, index) => (
            <div key={index} className="bg-[#FAF7F1] rounded-3xl overflow-hidden border border-[#0B4F4A]/10 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-8 border-b border-[#0B4F4A]/10">
                <h2 className="text-3xl font-serif text-[#042926]">{celeb.name}</h2>
              </div>
              
              <div className="relative w-full h-[300px] sm:h-[400px] bg-[#073A37]">
                <Image
                  src={celeb.image}
                  alt={celeb.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 space-y-8">
                <div className="space-y-3">
                  <h3 className="text-xl font-serif text-[#0B4F4A]">Procedure Details</h3>
                  <p className="text-[#5A7370] leading-relaxed">
                    <span className="font-semibold text-[#042926]">Overview: </span>
                    {celeb.overview}
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#042926]">Naturalness</h4>
                    <p className="text-[#5A7370] text-sm bg-white p-3 rounded-lg border border-[#0B4F4A]/5">
                      Rating: {celeb.naturalnessRating}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#042926]">Density & Coverage</h4>
                    <p className="text-[#5A7370] text-sm bg-white p-3 rounded-lg border border-[#0B4F4A]/5">
                      {celeb.densityCoverage}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-[#042926]">Longevity</h4>
                    <p className="text-[#5A7370] text-sm bg-white p-3 rounded-lg border border-[#0B4F4A]/5">
                      {celeb.longevity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="mt-12 bg-[#0B4F4A] p-6 rounded-2xl text-white flex gap-4 items-start shadow-xl">
            <AlertCircle className="w-6 h-6 text-[#C9A45C] shrink-0 mt-1" />
            <div className="space-y-2">
              <h4 className="font-serif text-lg text-[#C9A45C]">Disclaimer</h4>
              <p className="text-sm text-[#DFCA95] leading-relaxed">
                All the analyses here are based on publicly available images (we don't own any copyright to the images) and are speculative in nature. No official confirmation of procedures has been made by the celebrities or their representatives. The intent is to discuss aesthetic trends and possible approaches in a respectful, informative manner.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
