"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { aboutNarrative } from "@/app/data/siteContent";
import Tilt3D from "@/components/motion/Tilt3D";
import { depthChild3D, depthReveal3D, staggerContainer } from "@/components/motion/tokens";

const advisoryCards = [
  ["Energize Central", "Founder"],
  ["Elevate Africa", "Chief Storyteller"],
  ["Woodhall Capital", "Strategic Advisor"],
  ["Liberty Creative Circles", "African Creative Hub Lead"]
] as const;

export default function AboutPage() {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 48]);

  return (
    <main className="overflow-x-clip bg-background pt-20">
      <section
        ref={heroRef}
        className="perspective-[1400px] relative flex h-[42vh] min-h-[280px] items-center justify-center overflow-hidden md:h-[56vh] md:min-h-[420px]"
      >
        <motion.div
          className="absolute inset-0"
          style={prefersReducedMotion ? undefined : { scale: heroScale }}
        >
          <Image
            src="/images/foy-the-great.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top md:object-[center_30%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,19,24,0.22),rgba(14,19,24,0.9))]" />
        <motion.h1
          className="relative z-10 px-6 text-center font-heading text-[clamp(2.8rem,8vw,6.5rem)] text-ink preserve-3d"
          style={prefersReducedMotion ? undefined : { y: titleY, transformPerspective: 1400 }}
          initial={{ opacity: 0, rotateX: 24, y: 40 }}
          animate={{ opacity: 1, rotateX: 0, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          About Dr. Foy
        </motion.h1>
      </section>

      <motion.section
        className="mx-auto grid max-w-7xl grid-cols-1 gap-7 px-5 py-10 md:grid-cols-2 md:gap-10 md:px-10 md:py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <motion.div variants={depthReveal3D}>
          <Tilt3D intensity={12} lift={18}>
            <div className="relative h-[360px] w-full overflow-hidden rounded-[24px] shadow-neu md:h-[580px] md:rounded-[30px]">
              <Image
                src="/images/dr-foy-1.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(45,191,177,0.15),transparent_58%)]" />
            </div>
          </Tilt3D>
        </motion.div>
        <motion.div variants={staggerContainer} className="preserve-3d">
          <motion.p variants={depthChild3D} className="font-body text-sm uppercase tracking-[0.2em] text-teal">
            PHYSICIAN · STRATEGIST · BUILDER
          </motion.p>
          <motion.h2
            variants={depthChild3D}
            className="font-heading mt-4 text-[clamp(2.1rem,5vw,4.1rem)] leading-[0.94] text-ink"
          >
            Still a doctor.
            <span className="accent-gradient-text"> Now building culture infrastructure.</span>
          </motion.h2>
          <div className="mt-5 space-y-4 text-base leading-[1.72] text-ink/80 md:mt-6 md:space-y-5 md:text-lg md:leading-[1.85]">
            {aboutNarrative.map((paragraph) => (
              <motion.p key={paragraph} variants={depthChild3D}>
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </motion.section>

      <section className="bg-surface px-5 py-10 md:px-10 md:py-16">
        <div className="mx-auto max-w-7xl">
          <motion.h2
            className="text-center font-heading text-[clamp(2.1rem,4.5vw,3.85rem)] text-ink"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={depthReveal3D}
          >
            Where He Serves
          </motion.h2>
          <motion.div
            className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-10 lg:grid-cols-4 lg:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
          >
            {advisoryCards.map(([org, role]) => (
              <motion.div key={org} variants={depthChild3D}>
                <Tilt3D intensity={10} lift={14}>
                  <div className="clay-panel min-w-0 p-5 md:p-6">
                    <p className="font-heading text-xl text-ink sm:text-2xl">{org}</p>
                    <p className="mt-3 font-body text-base uppercase tracking-[0.06em] text-teal">{role}</p>
                  </div>
                </Tilt3D>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
