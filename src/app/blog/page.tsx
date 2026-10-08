import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { blogsData } from "@/data/blogs";
import { Newspaper, ArrowRight, Clock, User } from "lucide-react";

export const metadata: Metadata = {
  title: "Hair Restoration Blog & Medical Articles | AlloRoots Clinic",
  description:
    "Read medical insights on Bio-Enhanced FUE, hairline design science, GFC vs PRP, and hair loss prevention by Dr. Alok Kumar Sahoo and AIIMS doctors.",
};

export default function BlogListingPage() {
  return (
    <main className="min-h-screen bg-[#FAF7F1] text-[#1E2E2C] flex flex-col font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-20 bg-[#042926] text-white border-b border-[#C9A45C]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#073A37] border border-[#C9A45C]/30 text-[#C9A45C] text-xs font-semibold uppercase tracking-wider">
            <Newspaper className="w-4 h-4 text-[#C9A45C]" />
            <span>AIIMS MEDICAL TRICHOLOGY ARTICLES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-normal">
            Hair Restoration Blog & Insights
          </h1>

          <p className="text-base sm:text-lg text-[#DFCA95] max-w-2xl mx-auto leading-relaxed">
            Evidence-based trichological articles, surgical technique breakdowns, and scalp care advice written by AIIMS doctors.
          </p>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section className="py-20 md:py-28 bg-white border-b border-[#0B4F4A]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {blogsData.map((blog) => (
              <article
                key={blog.id}
                className="bg-[#FAF7F1] rounded-3xl p-6 border border-[#0B4F4A]/10 flex flex-col justify-between space-y-5 hover:border-[#C9A45C]/60 hover:shadow-xl transition-all group"
              >
                <div className="space-y-4">
                  <div className="relative h-52 w-full rounded-2xl overflow-hidden bg-[#073A37]">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="flex items-center justify-between text-xs text-[#5A7370]">
                    <span className="px-2.5 py-1 rounded-full bg-[#0B4F4A] text-[#C9A45C] text-[10px] font-semibold uppercase tracking-wider">
                      {blog.category}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#C9A45C]" /> {blog.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-serif text-[#042926] group-hover:text-[#0B4F4A] leading-snug font-normal">
                    {blog.title}
                  </h2>

                  <p className="text-sm text-[#5A7370] leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#0B4F4A]/10 flex items-center justify-between">
                  <span className="text-xs text-[#5A7370] font-medium flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-[#C9A45C]" /> {blog.author}
                  </span>

                  <Link
                    href={`/services/hair-transplant`}
                    className="text-xs font-semibold text-[#0B4F4A] hover:text-[#C9A45C] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C9A45C]" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
