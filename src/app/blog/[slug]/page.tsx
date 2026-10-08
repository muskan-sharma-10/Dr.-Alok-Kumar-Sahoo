import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustStrip from "@/components/TrustStrip";
import ConsultationCTA from "@/components/ConsultationCTA";
import Image from "next/image";
import Link from "next/link";
import { blogsData } from "@/data/blogs";
import { Newspaper, User, Clock, ArrowLeft, Calendar, Award } from "lucide-react";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogsData.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);
  if (!blog) {
    return { title: "Article Not Found | AlloRoots" };
  }
  return {
    title: `${blog.title} | AlloRoots Medical Hair Knowledge`,
    description: blog.excerpt,
  };
}

export default async function BlogArticleDetailPage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F5EF] text-[#242826] flex flex-col font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-36 pb-16 bg-[#0E2925] text-[#F7F5EF] border-b border-[#C5A46D]/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#123B35] border border-[#C5A46D]/40 text-[#C5A46D] text-xs font-bold uppercase tracking-wider">
            <Newspaper className="w-4 h-4 text-[#C5A46D]" />
            <span>{blog.category}</span>
          </div>

          <h1 className="text-h2-section font-serif text-[#F7F5EF] leading-tight">
            {blog.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#A8B5A1] pt-2">
            <span className="flex items-center gap-1.5 font-semibold text-[#F7F5EF]">
              <User className="w-4 h-4 text-[#C5A46D]" /> {blog.author}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C5A46D]" /> {blog.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#C5A46D]" /> {blog.date}
            </span>
          </div>
        </div>
      </section>

      <TrustStrip />

      {/* Article Body */}
      <section className="py-16 md:py-24 bg-white border-b border-[#123B35]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#123B35] hover:text-[#C5A46D] transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 text-[#C5A46D]" />
            <span>Back to All Articles</span>
          </Link>

          <div className="relative h-72 sm:h-[420px] w-full rounded-2xl overflow-hidden bg-[#123B35] border border-[#C5A46D]/30 shadow-xl">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-[#242826]/85 leading-relaxed space-y-6">
            <p className="text-body-large font-medium text-[#123B35] leading-relaxed border-l-4 border-[#C5A46D] pl-4 italic">
              {blog.excerpt}
            </p>

            <div className="pt-4 border-t border-[#123B35]/10 whitespace-pre-line text-body text-[#242826]/85">
              {blog.content}
            </div>
          </div>

          {/* Author Bio Box */}
          <div className="bg-[#F7F5EF] p-8 rounded-2xl border border-[#123B35]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A46D]">
                <Award className="w-4 h-4" />
                <span>Verified Medical Author</span>
              </div>
              <h4 className="font-serif font-bold text-[#123B35] text-xl">{blog.author}</h4>
              <p className="text-xs sm:text-sm text-[#242826]/75">AlloRoots Senior Surgeon Panel (AIIMS New Delhi M.D.)</p>
            </div>

            <Link
              href="/contact-us"
              className="px-6 py-3 rounded-lg bg-[#123B35] text-[#F7F5EF] font-bold text-xs uppercase tracking-wider hover:bg-[#0E2925] transition-all flex items-center gap-2 border border-[#C5A46D]/40"
            >
              Consult This Doctor
            </Link>
          </div>

        </div>
      </section>

      <ConsultationCTA />

      <Footer />
    </main>
  );
}
