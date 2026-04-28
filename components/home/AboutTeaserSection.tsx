"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { homeAboutTeaserNarrative } from "@/app/data/siteContent";
import { fadeUpVariant, staggerContainer } from "@/components/motion/tokens";

const TEASER_BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Cdefs%3E%3CradialGradient id='g' cx='55%25' cy='35%25' r='92%25'%3E%3Cstop offset='0%25' stop-color='%233a4a58' stop-opacity='0.5'/%3E%3Cstop offset='60%25' stop-color='%2310191f' stop-opacity='0.92'/%3E%3Cstop offset='100%25' stop-color='%230e1318'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='24' height='16' fill='url(%23g)'/%3E%3C/svg%3E";

export default function AboutTeaserSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -36]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background">
      <div className="grid min-h-[auto] grid-cols-1 md:min-h-[88vh] md:grid-cols-2">
        <motion.div className="relative min-h-[52vh] md:min-h-[88vh]" style={{ y: imageY }}>
          <Image
            src="/images/foy-the-great.png"
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top md:object-[center_28%]"
            quality={74}
            placeholder="blur"
            blurDataURL={TEASER_BLUR}
          />
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
              {homeAboutTeaserNarrative.map((paragraph) => (
                <motion.p key={paragraph} variants={fadeUpVariant}>
                  {paragraph}
                </motion.p>
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
