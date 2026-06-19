"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { fadeUpVariant, staggerContainer } from "@/components/motion/tokens";

export default function HeroBuildsBridge() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(sectionRef, { once: true, amount: 0.35 });
  const animateState = prefersReducedMotion ? "visible" : isInView ? "visible" : "hidden";

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-[var(--color-bg-deep)]"
      aria-labelledby="hero-builds-bridge-heading"
    >
      <svg
        className="pointer-events-none absolute -top-px left-0 block h-8 w-full sm:h-12 md:h-14"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        aria-hidden
      >
        <defs>
          <linearGradient id="bridge-wave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(45,191,177,0.45)" />
            <stop offset="50%" stopColor="rgba(45,191,177,0.15)" />
            <stop offset="100%" stopColor="rgba(217,101,74,0.35)" />
          </linearGradient>
        </defs>
        <path
          d="M0,64 L0,34 C240,8 480,52 720,28 C960,4 1200,48 1440,22 L1440,64 Z"
          fill="var(--color-bg-deep)"
        />
        <path
          d="M0,34 C240,8 480,52 720,28 C960,4 1200,48 1440,22"
          fill="none"
          stroke="url(#bridge-wave)"
          strokeWidth="1"
        />
      </svg>

      <div
        className="pointer-events-none absolute inset-0 hidden opacity-35 sm:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(45,191,177,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(45,191,177,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)"
        }}
      />

      <div className="pointer-events-none absolute left-4 top-7 hidden h-9 w-9 border-l border-t border-teal/35 sm:block md:left-10 md:top-9 md:h-11 md:w-11" />
      <div className="pointer-events-none absolute bottom-4 right-4 hidden h-9 w-9 border-b border-r border-coral/30 sm:block md:right-10 md:bottom-6 md:h-11 md:w-11" />

      <div className="page-container relative pb-6 pt-11 sm:pb-8 sm:pt-14 md:pb-10 md:pt-16">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center px-1 text-center"
          initial={prefersReducedMotion ? "visible" : "hidden"}
          animate={animateState}
          variants={staggerContainer}
        >
          <motion.p
            variants={fadeUpVariant}
            className="font-display text-[9px] uppercase tracking-[0.24em] text-teal sm:text-[10px] sm:tracking-[0.3em] md:text-xs md:tracking-[0.34em]"
          >
            What he builds
          </motion.p>

          <motion.div variants={fadeUpVariant} className="mt-3 flex w-full max-w-xs items-center gap-2.5 sm:mt-4 sm:max-w-md sm:gap-3">
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-teal/45" />
            <span className="font-display text-[8px] uppercase tracking-[0.32em] text-ink/45 sm:text-[9px] sm:tracking-[0.38em]">
              02
            </span>
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-coral/35" />
          </motion.div>

          <motion.h2
            id="hero-builds-bridge-heading"
            variants={fadeUpVariant}
            className="mt-3 text-balance font-heading text-[clamp(1.4rem,4.8vw,2.75rem)] leading-[1.05] text-ink sm:mt-4 sm:leading-[1.02]"
          >
            Medicine trained the discipline.
            <span className="mt-0.5 block accent-gradient-text sm:mt-1">Culture demanded the build.</span>
          </motion.h2>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
    </section>
  );
}
