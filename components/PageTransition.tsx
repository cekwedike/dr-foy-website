"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: prefersReducedMotion ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }
        }}
        exit={
          prefersReducedMotion
            ? { opacity: 1 }
            : { opacity: 0, y: -14, filter: "blur(6px)", transition: { duration: 0.28, ease: "easeOut" } }
        }
        style={{ willChange: "opacity, transform" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
