"use client";

import { motion } from "framer-motion";
import React, { ReactNode } from "react";

interface StaggerGroupProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  viewportMargin?: string;
}

export function StaggerGroup({
  children,
  staggerDelay = 0.12,
  className = "",
  viewportMargin = "-60px",
}: StaggerGroupProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: viewportMargin }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  yOffset = 30,
}: {
  children: ReactNode;
  className?: string;
  yOffset?: number;
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
