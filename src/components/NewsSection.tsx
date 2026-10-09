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
    <section className="relative py-12 md:py-16 bg-white border-y border-[#0B4F4A]/6 overflow-hidden">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Editorial Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#C96F4F]">
              National Recognition &amp; Media
            </p>
            <h3 className="text-[22px] sm:text-[26px] font-serif font-normal text-[#202A28] mt-1">
              Alloroots in the News
            </h3>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="text-[12.5px] text-[#566965] max-w-sm"
          >
            Recognized nationwide across leading national publications and media channels for excellence in hair restoration.
          </motion.p>
        </div>

        {/* Continuous Infinite Marquee with Grayscale to Color on Hover */}
        <div className="relative overflow-hidden py-2">
          {/* Edge Blur Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex items-center gap-14 sm:gap-20">
            {[...mediaOutlets, ...mediaOutlets, ...mediaOutlets].map((outlet, idx) => (
              <div
                key={`${outlet.name}-${idx}`}
                data-cursor="view"
                className="flex-shrink-0 flex items-center justify-center h-14 sm:h-16 px-6 py-2 rounded-xl bg-[#FBF8F3]/60 border border-[#0B4F4A]/5 hover:border-[#C6A15B]/40 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-md"
              >
                <div className="relative h-9 w-32 sm:w-36 filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105">
                  <Image
                    src={outlet.image}
                    alt={outlet.name}
                    fill
                    sizes="144px"
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
