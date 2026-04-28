"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUpVariant, staggerContainer } from "@/components/motion/tokens";

export default function MovementSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const isContentInView = useInView(contentRef, {
    once: true,
    amount: 0.08,
    margin: "28% 0px"
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.04]);

  const animateState =
    prefersReducedMotion ? "visible" : isContentInView ? "visible" : "hidden";

  return (
    <section ref={sectionRef} className="relative h-[82vh] min-h-[560px] overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <Image src="/images/foy.jpg" alt="" fill className="object-cover object-top" sizes="100vw" />
      </motion.div>

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
            className="neu-outline mt-8 inline-flex px-9 py-3.5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-teal"
          >
            See Energize Fest →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
