"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { workItems } from "@/app/data/siteContent";

const items = workItems.slice(0, 3);

/**
 * Vertical scroll drives horizontal translation via sticky + useScroll (no GSAP pin).
 * GSAP ScrollTrigger `pin` + Lenis smooth-scroll commonly produces blank viewport gaps.
 */
export default function HorizontalBuildsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const measure = () => {
    const track = trackRef.current;
    if (!track) return;
    const overflow = Math.max(track.scrollWidth - window.innerWidth, 0);
    setScrollDistance(overflow);
  };

  useLayoutEffect(() => {
    measure();
    const track = trackRef.current;
    if (!track) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(track);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [prefersReducedMotion]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const dist = scrollDistance ?? 0;
  const x = useTransform(scrollYProgress, (progress) => -progress * dist);

  if (prefersReducedMotion) {
    return (
      <section className="relative bg-background py-20 md:py-28">
        <div className="mx-auto max-w-[1640px] px-4 md:px-8">
          <p className="mb-12 text-center font-display text-xs uppercase tracking-[0.32em] text-teal md:text-sm">
            What he builds
          </p>
          <div className="flex flex-col gap-10">
            {items.map((item) => (
              <article key={item.slug} className="clay-band overflow-hidden rounded-[2rem]">
                <div className="relative aspect-[21/10] min-h-[280px] w-full md:aspect-[24/9]">
                  <Image src={item.image} alt={item.title} fill className="object-cover object-top" sizes="100vw" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,19,24,0.94)_0%,rgba(14,19,24,0.18)_58%,transparent_100%)]" />
                  <div className="absolute bottom-0 left-0 z-10 p-7 md:p-11">
                    <h3 className="font-heading text-[clamp(2rem,5vw,3.8rem)] leading-[0.92] text-ink">{item.title}</h3>
                    <p className="mt-3 max-w-2xl font-body text-base text-ink/85 md:text-lg">{item.subtitle}</p>
                    <Link
                      href={`/work/${item.slug}`}
                      className="mt-6 inline-flex font-display text-base text-teal transition-colors hover:text-coral"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const outerHeight =
    scrollDistance !== null ? `calc(100vh + ${Math.max(scrollDistance, 0)}px)` : "min(240vh, 3200px)";

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: outerHeight }}>
      <section className="sticky top-0 flex h-screen min-h-[560px] w-full overflow-hidden bg-[var(--color-bg-deep)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-[linear-gradient(to_bottom,var(--color-bg-deep),transparent)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-[linear-gradient(to_top,var(--color-bg-deep),transparent)]" />

        <div className="absolute left-6 top-1/2 z-20 hidden -translate-y-1/2 md:left-12 lg:block">
          <p className="font-display text-xs uppercase tracking-[0.38em] text-teal [writing-mode:vertical-rl] [text-orientation:mixed]">
            What he builds — scroll
          </p>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex h-full w-max items-stretch will-change-transform"
        >
          {items.map((item, index) => (
            <article
              key={item.slug}
              className="relative flex h-full w-[92vw] shrink-0 items-stretch md:w-[72vw] lg:w-[62vw]"
            >
              <div className="clay-band relative m-4 flex-1 overflow-hidden rounded-[2rem] md:m-8 md:rounded-[2.25rem]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 92vw, 62vw"
                  priority={index === 0}
                  onLoad={measure}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,19,24,0.94)_0%,rgba(14,19,24,0.12)_55%,transparent_100%)]" />
                <div className="absolute bottom-0 left-0 z-10 max-w-[92%] p-8 md:p-12">
                  <h3 className="font-heading text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.9] text-ink">{item.title}</h3>
                  <p className="mt-4 max-w-xl font-body text-base text-ink/88 md:text-xl">{item.subtitle}</p>
                  <Link
                    href={`/work/${item.slug}`}
                    className="neu-outline mt-8 inline-flex px-8 py-3 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-teal"
                  >
                    Explore →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
