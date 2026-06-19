"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { depthReveal3D, staggerContainer } from "@/components/motion/tokens";

type ScrollReveal3DProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
  amount?: number;
  stagger?: boolean;
};

export default function ScrollReveal3D({
  children,
  className = "",
  as = "div",
  amount = 0.22,
  stagger = false
}: ScrollReveal3DProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];

  return (
    <Component
      className={`perspective-[1400px] ${className}`}
      initial={prefersReducedMotion ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={stagger ? staggerContainer : depthReveal3D}
    >
      {children}
    </Component>
  );
}
