"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMemo } from "react";
import { homeContent } from "@/app/data/siteContent";
import { easings, fadeUpVariant, staggerContainer } from "@/components/motion/tokens";

const headingWords = homeContent.title.split(" ");

export default function HeroSection() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 260, damping: 18, mass: 0.45 });
  const sy = useSpring(my, { stiffness: 260, damping: 18, mass: 0.45 });

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
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/hero-section.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
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
            variants={staggerContainer}
            className="font-heading mt-5 text-[clamp(3rem,10vw,7.5rem)] font-light leading-[0.92] text-ink"
          >
            {headingWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="mr-[0.22ch] inline-block"
                variants={{
                  hidden: { opacity: 0, y: 48 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.75, ease: easings.smoothOut }
                  }
                }}
              >
                {word}
              </motion.span>
            ))}
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
