"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { homeContent } from "@/app/data/siteContent";
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
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 260, damping: 18, mass: 0.45 });
  const sy = useSpring(my, { stiffness: 260, damping: 18, mass: 0.45 });

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
        initial: { opacity: 0, x: 26, rotate: 0.25, filter: "blur(4px)" },
        animate: { opacity: 1, x: 0, rotate: 0, filter: "blur(0px)" },
        exit: { opacity: 0, x: -18, rotate: -0.2, filter: "blur(3px)" },
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

  const ctaHandlers = useMemo(
    () => ({
      onMouseMove: (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const localX = event.clientX - rect.left - rect.width / 2;
        const localY = event.clientY - rect.top - rect.height / 2;
        const radius = 32;
        mx.set(Math.max(-radius, Math.min(radius, localX * 0.22)));
        my.set(Math.max(-radius, Math.min(radius, localY * 0.22)));
      },
      onMouseLeave: () => {
        mx.set(0);
        my.set(0);
      }
    }),
    [mx, my]
  );

  return (
    <section className="relative h-screen min-h-[680px] w-full overflow-hidden">
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
          className="object-cover object-top md:object-[center_40%] lg:object-[center_55%] 2xl:object-[center_60%]"
        />
      </motion.div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,19,24,0.28),rgba(14,19,24,0.93))]" />

      <motion.div
        className="pointer-events-none absolute -left-28 -top-28 h-[480px] w-[480px] rounded-full blur-2xl"
        style={{
          background: "radial-gradient(circle, rgba(45,191,177,0.38), transparent 68%)"
        }}
        animate={{ scale: [1, 1.18, 1], x: [0, 36, 0], y: [0, 22, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-20 h-[440px] w-[440px] rounded-full blur-2xl"
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

      <div className="relative z-10 flex h-full items-center justify-center px-5 text-center md:px-10">
        <motion.div className="mx-auto max-w-6xl" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.p
            variants={fadeUpVariant}
            className="mx-auto max-w-3xl font-display text-xs uppercase tracking-[0.34em] text-teal sm:text-sm"
          >
            {homeContent.eyebrow}
          </motion.p>

          <motion.h1
            variants={fadeUpVariant}
            className="font-heading mt-5 text-[clamp(3rem,10vw,7.5rem)] font-light leading-[0.92] text-ink"
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
            className="mx-auto mt-6 max-w-3xl font-body text-lg text-ink/82 sm:text-xl md:text-2xl"
          >
            {homeContent.subtitle}
          </motion.p>

          <motion.div variants={fadeUpVariant} className="mt-10 flex justify-center">
            <motion.div
              style={{ x: sx, y: sy }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
              className="cta-clay-wrap"
              onMouseMove={ctaHandlers.onMouseMove}
              onMouseLeave={ctaHandlers.onMouseLeave}
            >
              <Link
                href={homeContent.cta.href}
                className="cta-clay-inner inline-flex rounded-full px-9 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink sm:px-11 sm:py-4"
              >
                {homeContent.cta.label}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <span className="kinetic-line pointer-events-none absolute bottom-7 left-1/2 h-[68px] w-px -translate-x-1/2 bg-gradient-to-b from-teal to-coral" />
    </section>
  );
}
