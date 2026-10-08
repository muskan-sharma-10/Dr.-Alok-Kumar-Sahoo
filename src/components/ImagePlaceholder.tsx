"use client";

import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
  height?: string;
}

export default function ImagePlaceholder({
  label,
  aspectRatio = "16/9",
  className = "",
  height = "h-64",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative w-full rounded-2xl bg-[#EBEBE3] border-2 border-dashed border-[#123B35]/20 flex flex-col items-center justify-center p-6 text-center ${height} ${className}`}
      style={{ aspectRatio: aspectRatio.replace("/", " / ") }}
    >
      <div className="w-12 h-12 rounded-xl bg-[#123B35]/10 border border-[#123B35]/20 flex items-center justify-center text-[#123B35] mb-2">
        <ImageIcon className="w-6 h-6 text-[#C5A46D]" />
      </div>
      <span className="text-xs font-bold uppercase tracking-wider text-[#123B35]">
        [ AlloRoots Existing Asset Placeholder ]
      </span>
      <span className="text-[11px] text-[#5A6B66] font-medium mt-1 max-w-xs line-clamp-2">
        {label}
      </span>
      <span className="mt-2 text-[10px] text-[#C5A46D] font-mono bg-[#123B35] px-2 py-0.5 rounded border border-[#C5A46D]/30">
        Aspect Ratio: {aspectRatio}
      </span>
    </div>
  );
}
