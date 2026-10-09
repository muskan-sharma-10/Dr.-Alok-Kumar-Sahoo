"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteImages } from "@/data/siteImages";

const mediaOutlets = [
  { name: "ANI News", image: siteImages.news.ani, tag: "Leading National News Agency" },
  { name: "Business Standard", image: siteImages.news.businessStandard, tag: "National Financial Daily" },
  { name: "The Print", image: siteImages.news.thePrint, tag: "In-Depth Editorial Coverage" },
  { name: "The Indian Express", image: siteImages.news.indianExpress, tag: "National Daily Newspaper" },
  { name: "News India Talks", image: siteImages.news.newsIndiaTalks, tag: "Healthcare Feature" },
  { name: "India Breaking Buzz", image: siteImages.news.indiaBreakingBuzz, tag: "Medical Innovation" },
];

export default function NewsSection() {
  return (
    <section className="relative py-20 md:py-32 bg-white border-y border-[#0B4F4A]/8 overflow-hidden" id="news">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Editorial Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-[#0B4F4A]/8">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[12px] uppercase tracking-[0.2em] font-medium text-[#C96F4F] mb-2">
              National Recognition &amp; Media
            </p>
            <h3 className="text-[34px] sm:text-[44px] lg:text-[48px] font-serif font-normal text-[#202A28] leading-tight">
              Alloroots in the News
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15px] sm:text-[16px] text-[#566965] max-w-md font-light leading-relaxed"
          >
            Recognized nationwide across leading national publications and media channels for excellence in AIIMS-led hair restoration.
          </motion.p>
        </div>

        {/* Continuous Infinite Marquee with Grayscale to Color on Hover */}
        <div className="relative overflow-hidden py-4">
          {/* Edge Blur Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-14 sm:gap-20">
            {[...mediaOutlets, ...mediaOutlets, ...mediaOutlets].map((outlet, idx) => (
              <div
                key={`${outlet.name}-${idx}`}
                data-cursor="view"
                className="flex-shrink-0 flex items-center justify-center h-20 sm:h-24 px-8 sm:px-10 py-3 rounded-2xl bg-[#FBF8F3]/70 border border-[#0B4F4A]/8 hover:border-[#C6A15B]/50 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-lg"
              >
                <div className="relative h-11 w-36 sm:w-44 filter grayscale opacity-65 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                  <Image
                    src={outlet.image}
                    alt={outlet.name}
                    fill
                    sizes="176px"
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
