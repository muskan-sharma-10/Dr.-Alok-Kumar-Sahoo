"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface RevealImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  delay?: number;
  duration?: number;
  direction?: "left" | "right" | "top" | "bottom";
  hoverScale?: boolean;
}

export default function RevealImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  imageClassName = "",
  priority = false,
  sizes,
  delay = 0.1,
  duration = 1.1,
  direction = "left",
  hoverScale = true,
}: RevealImageProps) {
  const getInitialClipPath = () => {
    switch (direction) {
      case "right":
        return "inset(0 0 0 100%)";
      case "top":
        return "inset(100% 0 0 0)";
      case "bottom":
        return "inset(0 0 100% 0)";
      case "left":
      default:
        return "inset(0 100% 0 0)";
    }
  };

  return (
    <motion.div
      initial={{ clipPath: getInitialClipPath() }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`relative overflow-hidden group ${className}`}
    >
      <div
        className={`w-full h-full transition-transform duration-700 ease-out ${
          hoverScale ? "group-hover:scale-[1.03]" : ""
        }`}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes || "(max-width: 768px) 100vw, 50vw"}
            priority={priority}
            className={imageClassName}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 600}
            height={height || 400}
            priority={priority}
            className={imageClassName}
          />
        )}
      </div>
    </motion.div>
  );
}
