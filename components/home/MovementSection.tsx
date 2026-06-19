"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { depthChild3D, depthReveal3D, staggerContainer } from "@/components/motion/tokens";

const MOVEMENT_BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Cdefs%3E%3CradialGradient id='g' cx='45%25' cy='35%25' r='92%25'%3E%3Cstop offset='0%25' stop-color='%232a3542' stop-opacity='0.45'/%3E%3Cstop offset='55%25' stop-color='%230e1318' stop-opacity='0.9'/%3E%3Cstop offset='100%25' stop-color='%230e1318'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='24' height='16' fill='url(%23g)'/%3E%3C/svg%3E";

export default function MovementSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.14, 1.02, 1.1]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  const isContentInView = useInView(contentRef, {
    once: true,
    amount: 0.15
  });

  const animateState = prefersReducedMotion ? "visible" : isContentInView ? "visible" : "hidden";

  return (
    <section
      ref={sectionRef}
      className="perspective-[1400px] relative min-h-[420px] overflow-hidden sm:min-h-[480px] md:min-h-[520px] lg:h-[78vh]"
    >
      <motion.div
        className="absolute inset-0"
        style={
          prefersReducedMotion
            ? undefined
            : { scale: imageScale, rotate: imageRotate, transformOrigin: "center center" }
        }
      >
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
      </motion.div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,19,24,0.82),rgba(14,19,24,0.78))]" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[12%] top-[18%] hidden h-36 w-36 rounded-full border border-teal/30 md:block"
        animate={{ rotateX: [0, 24, 0], rotateY: [0, -40, 0], rotateZ: [0, 16, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-[20%] right-[10%] hidden h-28 w-28 rounded-full border border-coral/25 md:block"
        animate={{ rotateX: [8, -12, 8], rotateY: [0, 28, 0], rotateZ: [0, -10, 0] }}
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      />

      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/4 h-[min(55vw,420px)] w-[min(55vw,420px)] -translate-x-1/2 rounded-full bg-coral/20 blur-3xl"
        animate={{ opacity: [0.25, 0.45, 0.25], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <motion.div
        ref={contentRef}
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center preserve-3d"
        initial={prefersReducedMotion ? "visible" : "hidden"}
        animate={animateState}
        variants={staggerContainer}
      >
        <motion.h2
          variants={depthReveal3D}
          className="font-heading text-[clamp(2.6rem,7vw,5.6rem)] leading-[0.9] text-ink"
        >
          Over 3,000 gathered.
        </motion.h2>
        <motion.p
          variants={depthChild3D}
          className="mt-4 max-w-2xl font-body text-lg text-ink/82 sm:text-2xl"
        >
          The Afrogospel movement is still early. The infrastructure is just beginning.
        </motion.p>
        <motion.div variants={depthChild3D}>
          <motion.div whileHover={{ scale: 1.04, rotateX: 8, z: 20 }} transition={{ type: "spring", stiffness: 280 }}>
            <Link
              href="/work/energize-fest"
              className="mt-8 inline-flex border-b border-teal/45 pb-1.5 font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink transition-colors hover:text-teal"
            >
              See Energize Fest →
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
