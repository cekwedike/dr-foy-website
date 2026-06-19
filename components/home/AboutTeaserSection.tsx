"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { aboutHighlights, homeAboutTeaserNarrative } from "@/app/data/siteContent";
import { depthChild3D, staggerContainer } from "@/components/motion/tokens";

const TEASER_BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Cdefs%3E%3CradialGradient id='g' cx='55%25' cy='35%25' r='92%25'%3E%3Cstop offset='0%25' stop-color='%233a4a58' stop-opacity='0.5'/%3E%3Cstop offset='60%25' stop-color='%2310191f' stop-opacity='0.92'/%3E%3Cstop offset='100%25' stop-color='%230e1318'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='24' height='16' fill='url(%23g)'/%3E%3C/svg%3E";

export default function AboutTeaserSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [32, -32]);
  const panelX = useTransform(scrollYProgress, [0, 1], [24, -12]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip bg-background py-14 sm:py-16 md:py-20 lg:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 15% 50%, rgba(217,101,74,0.08), transparent 55%), radial-gradient(ellipse 70% 50% at 88% 30%, rgba(45,191,177,0.07), transparent 50%)"
        }}
      />

      <div className="page-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-6">
          <motion.div
            className="relative lg:col-span-7"
            style={prefersReducedMotion ? undefined : { y: imageY }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/6] lg:aspect-auto lg:min-h-[min(72vh,680px)]">
              <div className="absolute inset-0 border border-ink/10 lg:inset-3 lg:border-teal/25" />
              <Image
                src="/images/foy-the-great.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-top lg:object-[center_22%]"
                quality={78}
                placeholder="blur"
                blurDataURL={TEASER_BLUR}
              />
              <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(14,19,24,0.05),rgba(14,19,24,0.55)_68%,rgba(14,19,24,0.88))] lg:bg-[linear-gradient(105deg,rgba(14,19,24,0.15),transparent_42%,rgba(14,19,24,0.75))]" />

              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 lg:bottom-8 lg:left-8 lg:right-8">
                <p className="font-display text-[10px] uppercase tracking-[0.38em] text-ink/70 sm:text-[11px]">
                  01 / About
                </p>
                <p className="hidden font-heading text-4xl text-ink/15 sm:block md:text-5xl">Dr. Foy</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative z-10 lg:col-span-6 lg:col-start-7 lg:-ml-[18%] xl:-ml-[14%]"
            style={prefersReducedMotion ? undefined : { x: panelX }}
          >
            <div className="relative border border-teal/20 bg-[rgba(14,19,24,0.92)] p-6 backdrop-blur-md sm:p-8 md:p-10 lg:p-12">
              <div
                aria-hidden
                className="absolute left-0 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-teal/60 via-teal/20 to-transparent"
              />

              <motion.div
                className="relative pl-5 sm:pl-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={staggerContainer}
              >
                <motion.p
                  variants={depthChild3D}
                  className="font-display text-[10px] uppercase tracking-[0.32em] text-teal sm:text-xs"
                >
                  The man behind the movement
                </motion.p>

                <motion.h2
                  variants={depthChild3D}
                  className="mt-4 font-heading text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.94] text-ink"
                >
                  Not just a label.
                  <span className="block accent-gradient-text">A legacy.</span>
                </motion.h2>

                <motion.div
                  variants={depthChild3D}
                  className="mt-6 grid grid-cols-1 gap-3 border-y border-teal/15 py-5 sm:grid-cols-3 sm:gap-4"
                >
                  {aboutHighlights.map((item) => (
                    <div key={item.label} className="min-w-0">
                      <p className="font-display text-[10px] uppercase tracking-[0.22em] text-teal/80">
                        {item.label}
                      </p>
                      <p className="mt-1 font-heading text-lg leading-tight text-ink sm:text-xl">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </motion.div>

                <motion.p
                  variants={depthChild3D}
                  className="mt-6 text-base leading-[1.8] text-ink/88 sm:text-lg sm:leading-[1.85]"
                >
                  {homeAboutTeaserNarrative[0]}
                </motion.p>

                <div className="mt-5 space-y-4 text-sm leading-[1.78] text-ink/72 sm:text-base sm:leading-[1.82]">
                  {homeAboutTeaserNarrative.slice(1).map((paragraph) => (
                    <motion.p key={paragraph} variants={depthChild3D}>
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                <motion.div variants={depthChild3D} className="mt-8 flex items-center gap-6">
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-3 border-b border-teal/50 pb-1 font-display text-sm uppercase tracking-[0.14em] text-ink transition-colors hover:border-coral hover:text-coral"
                  >
                    Meet Dr. Foy
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
