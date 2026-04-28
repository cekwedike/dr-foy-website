"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { fadeUpVariant, staggerContainer } from "@/components/motion/tokens";

const MOVEMENT_BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Cdefs%3E%3CradialGradient id='g' cx='45%25' cy='35%25' r='92%25'%3E%3Cstop offset='0%25' stop-color='%232a3542' stop-opacity='0.45'/%3E%3Cstop offset='55%25' stop-color='%230e1318' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%230e1318'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='24' height='16' fill='url(%23g)'/%3E%3C/svg%3E";

export default function MovementSection() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const isContentInView = useInView(contentRef, {
    once: true,
    amount: 0.08,
    margin: "28% 0px"
  });

  const animateState =
    prefersReducedMotion ? "visible" : isContentInView ? "visible" : "hidden";

  return (
    <section className="relative h-[78vh] min-h-[520px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/foy.jpg"
          alt=""
          fill
          className="object-cover object-top md:object-[center_28%]"
          sizes="100vw"
          quality={74}
          placeholder="blur"
          blurDataURL={MOVEMENT_BLUR}
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,19,24,0.82),rgba(14,19,24,0.78))]" />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/4 h-[min(55vw,420px)] w-[min(55vw,420px)] -translate-x-1/2 rounded-full bg-coral/20 blur-3xl"
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center"
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate={animateState}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeUpVariant}
          className="font-heading text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.9] text-ink"
        >
          Over 3,000 gathered.
        </motion.h2>
        <motion.p
          variants={fadeUpVariant}
          className="mt-4 max-w-2xl font-body text-lg text-ink/82 sm:text-2xl"
        >
          The Afrogospel movement is still early. The infrastructure is just beginning.
        </motion.p>
        <motion.div variants={fadeUpVariant} whileHover={{ scale: 1.03 }}>
          <Link
            href="/work/energize-fest"
            className="mt-8 inline-flex border-b border-teal/45 pb-1.5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-teal"
          >
            See Energize Fest →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
