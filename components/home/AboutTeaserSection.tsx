"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { aboutHighlights, aboutNarrative } from "@/app/data/siteContent";
import { fadeUpVariant, staggerContainer } from "@/components/motion/tokens";

export default function AboutTeaserSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -36]);

  return (
    <section ref={sectionRef} className="bg-background">
      <div className="grid min-h-[auto] grid-cols-1 md:min-h-[88vh] md:grid-cols-2">
        <motion.div className="relative min-h-[52vh] md:min-h-[88vh]" style={{ y: imageY }}>
          <Image src="/images/foy-the-great.png" alt="" fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(45,191,177,0.18),transparent_55%)] mix-blend-overlay" />
          <motion.div
            className="pointer-events-none absolute right-8 top-12 h-24 w-24 rounded-full bg-teal/25 blur-2xl"
            animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.div>

        <div className="relative bg-surface px-5 py-12 sm:px-7 md:px-14 md:py-16">
          <motion.div
            className="relative z-10 mx-auto max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeUpVariant}
              className="font-display text-xs uppercase tracking-[0.26em] text-teal sm:text-sm"
            >
              THE MAN BEHIND THE MOVEMENT
            </motion.p>
            <motion.h2
              variants={fadeUpVariant}
              className="font-heading mt-5 text-[clamp(2.4rem,5.2vw,4.6rem)] leading-[0.93] text-ink"
            >
              Not just a label.
              <span className="accent-gradient-text"> A legacy.</span>
            </motion.h2>

            <div className="mt-7 space-y-5 text-[1.02rem] leading-[1.85] text-ink/78 sm:text-lg">
              {aboutNarrative.slice(0, 2).map((paragraph) => (
                <motion.p key={paragraph} variants={fadeUpVariant}>
                  {paragraph}
                </motion.p>
              ))}
            </div>

            <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {aboutHighlights.map((item) => (
                <motion.div key={item.label} variants={fadeUpVariant} className="clay-panel p-5">
                  <p className="font-display text-[11px] uppercase tracking-[0.14em] text-muted">{item.label}</p>
                  <p className="font-heading mt-2 text-[1.45rem] leading-tight text-coral sm:text-[1.6rem]">
                    {item.value}
                  </p>
                  <p className="mt-2 font-body text-sm leading-relaxed text-ink/74">{item.detail}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUpVariant} className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-display text-base text-teal transition-colors hover:text-coral"
              >
                Meet Dr. Foy
                <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.24 }}>
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
