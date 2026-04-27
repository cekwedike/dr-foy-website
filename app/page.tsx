"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  type Variants,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { useMemo, useRef, useState } from "react";
import GrainOverlay from "@/components/GrainOverlay";

const headingWords = ["Dr.", "Tochukwu", "Macfoy"];
const aboutHeadingWords = ["Not", "just", "a", "label.", "A", "legacy."];

const headingContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.55,
      staggerChildren: 0.12
    }
  }
};

const headingWord: Variants = {
  hidden: { opacity: 0, y: 72, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] }
  }
};

const revealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const revealItem: Variants = {
  hidden: { opacity: 0, y: 90 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] }
  }
};

const statsConfig = [
  {
    value: "#1",
    detail: "Highest-charting gospel album on Apple Music"
  },
  {
    value: "Lagos \u2192 World",
    detail: "Distributed to every continent via The Orchard \u00d7 Sony"
  },
  {
    value: "Faith + Commerce",
    detail: "The intersection that built Energize Central"
  }
] as const;

const buildRows = [
  {
    title: "Energize Music",
    copy: "The label of the future. Faith-rooted, globally distributed.",
    image: "/images/foy-the-energetic.webp",
    href: "/work/energize-music"
  },
  {
    title: "Energize Fest",
    copy: "Over 3,000 gathered. More are coming.",
    image: "/images/foy-1.webp",
    href: "/work/energize-fest"
  },
  {
    title: "Same Energy Global",
    copy: "A home for creatives who build, not just create.",
    image: "/images/dr-foy.webp",
    href: "/work/same-energy"
  }
] as const;

const logos = [
  { name: "Vanguard News", src: "/images/logos/vanguard.svg" },
  { name: "The Guardian Nigeria", src: "/images/logos/guardian.svg" },
  { name: "ThisDay", src: "/images/logos/thisday.svg" },
  { name: "The Orchard", src: "/images/logos/orchard.svg" },
  { name: "Champion Newspapers", src: "/images/logos/champion.svg" }
] as const;

export default function HomePage() {
  const [statsRevealed, setStatsRevealed] = useState(false);
  const aboutRef = useRef<HTMLElement | null>(null);
  const movementRef = useRef<HTMLElement | null>(null);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 240, damping: 20, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 240, damping: 20, mass: 0.5 });

  const ctaHandlers = useMemo(
    () => ({
      onMouseMove: (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const localX = event.clientX - rect.left - rect.width / 2;
        const localY = event.clientY - rect.top - rect.height / 2;
        const radius = 30;
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

  const { scrollYProgress: movementProgress } = useScroll({
    target: movementRef,
    offset: ["start end", "end start"]
  });
  const movementParallaxY = useTransform(movementProgress, [0, 1], ["-10%", "10%"]);

  const { scrollYProgress: aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "end start"]
  });
  const aboutParallaxY = useTransform(aboutProgress, [0, 1], [0, -30]);

  return (
    <main className="bg-[#0C0C0C]">
      <section className="relative h-screen w-full overflow-hidden">
        <Image
          src="/images/hero-section.webp"
          alt="Dr. Tochukwu Macfoy Hero Background"
          fill
          priority
          quality={100}
          className="object-cover object-[center_top]"
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(12,12,12,0.3) 0%, rgba(12,12,12,0.85) 100%)"
          }}
        />
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(circle, rgba(232,87,42,0.25), transparent 70%)",
            width: 600,
            height: 600,
            top: "-10%",
            left: "-7%"
          }}
          animate={{ scale: [1, 1.3, 1], x: [0, 60, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="pointer-events-none absolute"
          style={{
            background: "radial-gradient(circle, rgba(200,240,77,0.12), transparent 70%)",
            width: 500,
            height: 500,
            right: "-4%",
            bottom: "-14%"
          }}
          animate={{ scale: [1, 1.4, 1], x: [0, -40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <GrainOverlay />
        <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
          <div className="mx-auto max-w-5xl">
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
              className="text-[11px] uppercase tracking-[0.3em] text-[#C8F04D]"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              PHYSICIAN · CREATIVE STRATEGIST · CULTURE BUILDER
            </motion.p>
            <motion.h1
              variants={headingContainer}
              initial="hidden"
              animate="visible"
              className="mt-6 text-[clamp(56px,9vw,120px)] font-light leading-[0.98] text-[#F5F0E8]"
              style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}
            >
              {headingWords.map((word, index) => (
                <motion.span key={word + index} variants={headingWord} className="mr-[0.34ch] inline-block">
                  {word}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.9, ease: "easeOut" }}
              className="mx-auto mt-6 max-w-2xl text-[18px] text-[rgba(245,240,232,0.65)]"
              style={{ fontFamily: '"DM Sans", sans-serif' }}
            >
              Building the infrastructure African creativity deserves.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.45, duration: 0.8, ease: "easeOut" }}
              className="mt-10 flex justify-center"
            >
              <motion.div
                style={{ x: sx, y: sy }}
                animate={{ y: [0, -2, 0] }}
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 40px rgba(232,87,42,0.5)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  y: { duration: 2.6, repeat: Infinity, ease: "easeInOut" },
                  type: "spring",
                  stiffness: 320,
                  damping: 20
                }}
                className="rounded-full"
                onMouseMove={ctaHandlers.onMouseMove}
                onMouseLeave={ctaHandlers.onMouseLeave}
              >
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-[#E8572A] px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#0C0C0C]"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  BOOK DR. FOY
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <motion.span
          className="pointer-events-none absolute bottom-8 left-1/2 z-10 h-[60px] w-px -translate-x-1/2 bg-[#E8572A]"
          initial={{ scaleY: 0, opacity: 0.8 }}
          animate={{ scaleY: 1, opacity: [0.4, 1, 0.4] }}
          transition={{
            scaleY: { duration: 1, ease: "easeOut" },
            opacity: { duration: 1.8, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{ transformOrigin: "top center" }}
        />
      </section>

      <motion.section ref={aboutRef} className="bg-[#0C0C0C]" onViewportEnter={() => setStatsRevealed(true)}>
        <div className="grid min-h-[auto] grid-cols-1 md:min-h-[90vh] md:grid-cols-2">
          <motion.div style={{ y: aboutParallaxY }} className="relative min-h-[50vh] bg-[#120f0c] md:min-h-[90vh]">
            <Image
              src="/images/foy-the-great.webp"
              alt="Dr. Foy portrait"
              fill
              quality={100}
              className="object-contain object-center"
            />
            <div className="absolute inset-0 bg-[rgba(232,87,42,0.15)] mix-blend-multiply" />
          </motion.div>
          <div className="bg-[#0C0C0C] px-6 py-12 md:px-16 md:py-20">
            <div className="max-w-xl">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-[11px] uppercase tracking-[0.25em] text-[#E8572A]"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
              >
                THE MAN BEHIND THE MOVEMENT
              </motion.p>
              <motion.h2
                variants={headingContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="mt-5 text-[clamp(40px,5vw,72px)] font-light leading-[0.95] text-[#F5F0E8]"
                style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}
              >
                {aboutHeadingWords.map((word, index) => (
                  <motion.span key={word + index} variants={headingWord} className="mr-[0.26ch] inline-block">
                    {word}
                  </motion.span>
                ))}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }}
                className="mt-8 text-[16px] leading-[1.8] text-[rgba(245,240,232,0.75)]"
                style={{ fontFamily: '"DM Sans", sans-serif' }}
              >
                Dr. Foy is a physician who refused to stop at medicine. He still carries the title and the discipline
                that comes with it. But over the years, he layered something else on top: a creative empire. He built
                Energize Central into a music label, a festival, and a media network with Sony distribution. The
                mission is simple: give African faith-rooted creativity the infrastructure it deserves.
              </motion.p>
              <div className="mt-10 grid grid-cols-1 border-y border-[rgba(232,87,42,0.24)] sm:grid-cols-3">
                {statsConfig.map((stat, index) => (
                  <motion.div
                    key={stat.value}
                    initial={{ opacity: 0, y: 22, scale: 0.96 }}
                    animate={statsRevealed ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 22, scale: 0.96 }}
                    transition={{ delay: index * 0.14, duration: 0.7, ease: "easeOut" }}
                    className={`px-4 py-6 sm:px-5 ${index < 2 ? "sm:border-r sm:border-[rgba(232,87,42,0.24)]" : ""}`}
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={
                        statsRevealed
                          ? { opacity: 1, y: [4, 0], transition: { delay: 0.25 + index * 0.14, duration: 0.6 } }
                          : { opacity: 0 }
                      }
                      className={`leading-none text-[#E8572A] ${index === 0 ? "text-[56px]" : "text-[40px]"}`}
                      style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}
                    >
                      {stat.value}
                    </motion.p>
                    <p className="mt-3 text-[12px] text-[rgba(245,240,232,0.62)]" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                      {stat.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.div className="mt-8 inline-block" whileHover="hover" initial="rest" animate="rest">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 text-sm text-[#E8572A] transition-colors duration-300 hover:text-[#C8F04D]"
                  style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                >
                  Meet Dr. Foy
                  <motion.span variants={{ rest: { x: 0 }, hover: { x: 6 } }} transition={{ duration: 0.3, ease: "easeOut" }}>
                    →
                  </motion.span>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="bg-[#0C0C0C] px-4 py-20 md:px-8">
        <p className="mb-16 text-center text-[11px] uppercase tracking-[0.3em] text-[#E8572A]" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          WHAT HE BUILDS
        </p>
        <motion.div variants={revealContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="mx-auto flex w-full max-w-[1600px] flex-col gap-8">
          {buildRows.map((row) => (
            <motion.article key={row.title} variants={revealItem} whileHover="hover" className="group relative h-[80vw] min-h-[420px] w-full overflow-hidden md:h-[65vh]">
              <motion.div variants={{ hover: { scale: 1.04 } }} transition={{ duration: 0.6, ease: "easeOut" }} className="absolute inset-0">
                <Image src={row.image} alt={row.title} fill quality={100} className="object-contain object-center" sizes="100vw" />
              </motion.div>
              <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,12,12,0.95) 0%, rgba(12,12,12,0.2) 60%, transparent 100%)" }} />
              <div className="absolute bottom-0 left-0 z-10 p-8 md:p-12">
                <h3 className="text-[clamp(48px,5vw,72px)] font-light text-[#F5F0E8]" style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}>
                  {row.title}
                </h3>
                <p className="mt-2 max-w-xl text-[16px] text-[rgba(245,240,232,0.72)]" style={{ fontFamily: '"DM Sans", sans-serif' }}>
                  {row.copy}
                </p>
                <Link href={row.href} className="mt-6 inline-flex text-sm text-[#E8572A] transition-colors duration-300 hover:text-[#C8F04D]" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                  Explore →
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>

      <section className="overflow-hidden border-t border-[rgba(232,87,42,0.15)] bg-[#0C0C0C] py-10">
        <p className="mb-8 text-center text-[10px] uppercase tracking-[0.35em] text-[#8A8070]" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
          AS SEEN IN
        </p>
        <div className="mx-auto hidden max-w-7xl flex-wrap items-center justify-center gap-16 px-6 md:flex">
          {logos.map((logo) => (
            <motion.div
              key={logo.name}
              className="relative h-7 w-[170px]"
              style={{ filter: "grayscale(1) brightness(10) opacity(0.4)" }}
              whileHover={{ filter: "none", opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <Image src={logo.src} alt={logo.name} fill className="object-contain" />
            </motion.div>
          ))}
        </div>
        <div className="md:hidden">
          <motion.div className="flex w-max items-center gap-16 px-6" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 18, ease: "linear", repeat: Infinity }}>
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="relative h-6 w-[150px]"
                style={{ filter: "grayscale(1) brightness(10) opacity(0.4)" }}
              >
                <Image src={logo.src} alt={logo.name} fill className="object-contain" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={movementRef} className="relative h-[80vh] overflow-hidden">
        <motion.div style={{ y: movementParallaxY }} className="absolute inset-0">
          <Image src="/images/foy.webp" alt="Energize Fest crowd" fill quality={100} className="object-contain object-center" />
        </motion.div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(rgba(12,12,12,0.65), rgba(12,12,12,0.65))" }} />
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <motion.h2 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.55 }} transition={{ duration: 0.8, ease: "easeOut" }} className="text-[clamp(48px,7vw,96px)] font-light leading-[0.98] text-[#F5F0E8]" style={{ fontFamily: '"Cormorant Garamond", serif', fontWeight: 300 }}>
            Over 3,000 gathered.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.55 }} transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }} className="mt-4 text-[18px] text-[rgba(245,240,232,0.65)]" style={{ fontFamily: '"DM Sans", sans-serif' }}>
            The Afrogospel movement is just getting started.
          </motion.p>
          <motion.div whileHover={{ backgroundColor: "#E8572A", borderColor: "#E8572A", color: "#0C0C0C" }}>
            <Link href="/work/energize-fest" className="mt-8 inline-flex rounded-full border border-[#F5F0E8] px-8 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#F5F0E8] transition-colors duration-300" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
              SEE ENERGIZE FEST →
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
