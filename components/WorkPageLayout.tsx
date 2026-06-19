"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";
import { depthChild3D, depthReveal3D, staggerContainer } from "@/components/motion/tokens";

type WorkPageLayoutProps = {
  title: string;
  subtitle: string;
  heroImage: string;
  body: ReactNode;
  accentColor?: string;
  heroTitle?: ReactNode;
};

export default function WorkPageLayout({
  title,
  subtitle,
  heroImage,
  body,
  accentColor = "#D9654A",
  heroTitle
}: WorkPageLayoutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.12, 1.02]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const titleZ = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <main className="overflow-x-clip bg-background pt-20">
      <section
        ref={sectionRef}
        className="perspective-[1400px] relative flex h-[44vh] min-h-[280px] w-full items-center justify-center overflow-hidden md:h-[64vh] md:min-h-[440px]"
      >
        <motion.div
          className="absolute inset-0"
          style={
            prefersReducedMotion ? undefined : { scale: imageScale, y: imageY, transformOrigin: "center top" }
          }
        >
          <Image
            src={heroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-top md:object-[center_30%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,19,24,0.38),rgba(14,19,24,0.9))]" />
        <Link
          href="/"
          className="neu-outline absolute left-4 top-4 z-20 rounded-full px-3.5 py-1.5 font-body text-xs font-medium text-ink md:left-10 md:top-8 md:px-4 md:py-2 md:text-sm"
          style={{ color: accentColor }}
        >
          ← Back Home
        </Link>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 px-6 text-center preserve-3d"
          style={prefersReducedMotion ? undefined : { z: titleZ, transformPerspective: 1400 }}
        >
          {heroTitle ? (
            <>
              <h1 className="sr-only">{title}</h1>
              <motion.div variants={depthReveal3D} className="mx-auto w-full max-w-[min(92vw,36rem)]">
                {heroTitle}
              </motion.div>
            </>
          ) : (
            <motion.h1
              variants={depthReveal3D}
              className="font-heading text-[clamp(2.8rem,7vw,5.4rem)] text-ink"
            >
              {title}
            </motion.h1>
          )}
          <motion.p
            variants={depthChild3D}
            className="mx-auto mt-4 max-w-3xl font-body text-lg text-ink/84 md:text-2xl"
          >
            {subtitle}
          </motion.p>
        </motion.div>
      </section>

      <motion.section
        className="bg-surface px-5 py-10 md:px-10 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
      >
        <div className="mx-auto max-w-5xl perspective-[1400px]">
          <motion.div variants={depthChild3D} className="h-px w-full bg-teal/30" />
          <motion.article
            variants={depthReveal3D}
            className="min-w-0 py-8 text-left font-body text-base leading-[1.72] text-ink/86 sm:text-lg md:py-12 md:text-xl md:leading-[1.85] lg:text-2xl"
          >
            {body}
          </motion.article>
          <motion.div variants={depthChild3D} className="h-px w-full bg-teal/30" />
        </div>
      </motion.section>
    </main>
  );
}
