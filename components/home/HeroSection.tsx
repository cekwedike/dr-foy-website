"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { homeContent } from "@/app/data/siteContent";
import HeroLightButton from "@/components/home/HeroLightButton";
import HeroPatternOverlay from "@/components/home/HeroPatternOverlay";
import { fadeUpVariant, staggerContainer } from "@/components/motion/tokens";

const HERO_BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Cdefs%3E%3CradialGradient id='g' cx='65%25' cy='35%25' r='85%25'%3E%3Cstop offset='0%25' stop-color='%23304657' stop-opacity='0.55'/%3E%3Cstop offset='55%25' stop-color='%2310191f' stop-opacity='0.85'/%3E%3Cstop offset='100%25' stop-color='%230e1318'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='24' height='16' fill='url(%23g)'/%3E%3C/svg%3E";

const heroHeadlines = [
  homeContent.title,
  "Physician. Creative Strategist.",
  "Culture Builder. Ecosystem Architect."
];

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [transitionVariant, setTransitionVariant] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = window.setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % heroHeadlines.length);
      setTransitionVariant((prev) => (prev + 1) % 3);
    }, 4500);
    return () => window.clearInterval(id);
  }, [prefersReducedMotion]);

  const headlineMotion = useMemo(() => {
    // We cycle between a few tasteful transitions so it doesn't feel repetitive.
    // Variant 0: blur + vertical slide
    // Variant 1: soft dissolve + micro-scale
    // Variant 2: lateral glide + skew hint (very subtle)
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 1 },
        animate: { opacity: 1 },
        exit: { opacity: 1 },
        transition: { duration: 0 }
      } as const;
    }

    if (transitionVariant === 1) {
      return {
        initial: { opacity: 0, scale: 0.985, filter: "blur(2px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        exit: { opacity: 0, scale: 1.01, filter: "blur(3px)" },
        transition: { duration: 0.52, ease: "easeOut" }
      } as const;
    }

    if (transitionVariant === 2) {
      return {
        initial: { opacity: 0, x: 12, rotate: 0.15, filter: "blur(4px)" },
        animate: { opacity: 1, x: 0, rotate: 0, filter: "blur(0px)" },
        exit: { opacity: 0, x: -8, rotate: -0.1, filter: "blur(3px)" },
        transition: { duration: 0.55, ease: "easeOut" }
      } as const;
    }

    return {
      initial: { opacity: 0, y: 24, filter: "blur(6px)" },
      animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      exit: { opacity: 0, y: -16, filter: "blur(4px)" },
      transition: { duration: 0.5, ease: "easeOut" }
    } as const;
  }, [prefersReducedMotion, transitionVariant]);

  return (
    <section className="relative h-[100svh] min-h-[560px] w-full overflow-hidden sm:min-h-[620px] md:min-h-[680px]">
      <motion.div
        className="pointer-events-none absolute inset-0 scale-110"
        aria-hidden
        animate={{ scale: [1.08, 1.12, 1.08] }}
        transition={{ duration: 9.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/hero-section.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          quality={72}
          fetchPriority="high"
          placeholder="blur"
          blurDataURL={HERO_BLUR}
          className="object-cover object-top"
        />
      </motion.div>
      <HeroPatternOverlay />
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_bottom,rgba(14,19,24,0.22),rgba(14,19,24,0.78)_72%,var(--color-bg-deep))]" />

      <motion.div
        className="pointer-events-none absolute -left-28 -top-28 z-[2] h-[480px] w-[480px] rounded-full blur-2xl"
        style={{
          background: "radial-gradient(circle, rgba(45,191,177,0.38), transparent 68%)"
        }}
        animate={{ scale: [1, 1.18, 1], x: [0, 36, 0], y: [0, 22, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-20 z-[2] h-[440px] w-[440px] rounded-full blur-2xl"
        style={{
          background: "radial-gradient(circle, rgba(217,101,74,0.34), transparent 72%)"
        }}
        animate={{ scale: [1, 1.22, 1], x: [0, -28, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      <svg
        className="pointer-events-none absolute bottom-[18%] left-[8%] hidden h-40 w-40 text-teal opacity-[0.14] lg:block"
        viewBox="0 0 120 120"
        aria-hidden
      >
        <motion.g
          style={{ transformOrigin: "60px 60px" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="60" cy="60" r="54" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </motion.g>
      </svg>

      <div className="relative z-10 flex h-full items-center justify-center px-4 text-center sm:px-5 md:px-10">
        <motion.div className="mx-auto w-full max-w-6xl min-w-0" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.p
            variants={fadeUpVariant}
            className="mx-auto max-w-3xl text-balance font-display text-[0.62rem] uppercase tracking-[0.18em] text-teal sm:text-xs sm:tracking-[0.28em] md:text-sm md:tracking-[0.34em]"
          >
            {homeContent.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUpVariant}
            className="mt-4 overflow-hidden font-heading text-[clamp(2.4rem,10vw,7.5rem)] font-light leading-[0.92] text-ink sm:mt-5"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={heroHeadlines[headlineIndex]}
                className="inline-block"
                initial={headlineMotion.initial}
                animate={headlineMotion.animate}
                exit={headlineMotion.exit}
                transition={headlineMotion.transition}
              >
                {heroHeadlines[headlineIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.h1>

          <motion.p
            variants={fadeUpVariant}
            className="mx-auto mt-5 max-w-3xl text-pretty font-body text-base text-ink/82 sm:mt-6 sm:text-lg md:text-xl lg:text-2xl"
          >
            {homeContent.subtitle}
          </motion.p>

          <motion.div variants={fadeUpVariant} className="mt-10 flex justify-center sm:mt-11">
            <HeroLightButton href={homeContent.cta.href} label={homeContent.cta.label} />
          </motion.div>
        </motion.div>
      </div>

      <span className="kinetic-line pointer-events-none absolute bottom-7 left-1/2 h-[68px] w-px -translate-x-1/2 bg-gradient-to-b from-teal to-coral" />
    </section>
  );
}
