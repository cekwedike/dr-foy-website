"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { workItems } from "@/app/data/siteContent";

const items = workItems.slice(0, 3);

const SLIDE_BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Cdefs%3E%3CradialGradient id='g' cx='70%25' cy='40%25' r='90%25'%3E%3Cstop offset='0%25' stop-color='%232a3542' stop-opacity='0.55'/%3E%3Cstop offset='55%25' stop-color='%230e1318' stop-opacity='0.92'/%3E%3Cstop offset='100%25' stop-color='%230e1318'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='24' height='16' fill='url(%23g)'/%3E%3C/svg%3E";

export default function HorizontalBuildsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [viewportWidth, setViewportWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;
    const update = () => {
      const w = window.innerWidth;
      setViewportWidth(w);
      setIsMobile(w < 768);
    };
    update();
    const onResize = () => {
      update();
    };
    window.addEventListener("resize", onResize, { passive: true } as AddEventListenerOptions);
    return () => {
      window.removeEventListener("resize", onResize as EventListener);
    };
  }, [prefersReducedMotion]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Mobile: continuous spring-smoothed translation (feels much smoother on touch devices).
  // Desktop: keep the snap-to-slide behavior.
  const x = useSpring(0, {
    stiffness: isMobile ? 160 : 280,
    damping: isMobile ? 34 : 40,
    mass: isMobile ? 0.9 : 0.55
  });

  useEffect(() => {
    if (prefersReducedMotion) return;
    const unsub = scrollYProgress.on("change", (p) => {
      const clamped = Math.max(0, Math.min(0.9999, p));
      const w = viewportWidth || window.innerWidth;
      if (isMobile) {
        // Smoothly translate across the full range.
        x.set(-clamped * (items.length - 1) * w);
      } else {
        // Snap: only one slide visible at a time.
        const index = Math.min(items.length - 1, Math.floor(clamped * items.length));
        x.set(-w * index);
      }
    });
    return () => unsub();
  }, [prefersReducedMotion, scrollYProgress, viewportWidth, x, isMobile]);

  if (prefersReducedMotion) {
    return (
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-10">
          <p className="font-display text-xs uppercase tracking-[0.32em] text-teal md:text-sm">What he builds</p>
          <div className="mt-6 h-px w-full bg-teal/25" />

          <div className="mt-10 grid grid-cols-1 gap-12 md:gap-16">
            {items.map((item, index) => (
              <article
                key={item.slug}
                className={`grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10 ${
                  index % 2 === 1 ? "md:[&>div]:order-2" : ""
                }`}
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,19,24,0.55),transparent_60%)]" />
                </div>

                <div>
                  <h3 className="font-heading text-[clamp(2rem,4.8vw,3.6rem)] leading-[0.95] text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-xl font-body text-base leading-relaxed text-ink/78 md:text-lg">
                    {item.subtitle}
                  </p>
                  <Link
                    href={`/work/${item.slug}`}
                    className="mt-6 inline-flex border-b border-teal/45 pb-1.5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-teal"
                  >
                    Explore
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const outerHeight = `${items.length * 100}svh`;

  return (
    <div ref={containerRef} className="relative w-full bg-[var(--color-bg-deep)]" style={{ height: outerHeight }}>
      <section className="sticky top-0 flex h-[100svh] min-h-[560px] w-full overflow-hidden">
        {/* Ambient framing: keep drama on the LEFT, leave RIGHT clearer for text */}
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(to right, rgba(14,19,24,0.92) 0%, rgba(14,19,24,0.65) 42%, rgba(14,19,24,0.18) 72%, rgba(14,19,24,0) 100%)"
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-[linear-gradient(to_right,var(--color-bg-deep),transparent)] md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-[linear-gradient(to_left,var(--color-bg-deep),transparent)] md:w-24" />

        {/* Section label / progress */}
        <div className="absolute inset-x-0 top-0 z-30 px-5 pt-8 md:px-10 md:pt-12">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="font-display text-xs uppercase tracking-[0.32em] text-teal md:text-sm">
                What he builds
              </p>
              <div className="mt-4 h-px w-[min(520px,68vw)] bg-teal/25" />
            </div>
            <p className="hidden font-display text-xs uppercase tracking-[0.28em] text-ink/55 md:block">
              Scroll to reveal
            </p>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex h-full w-max items-stretch will-change-transform"
        >
          {items.map((item, index) => (
            <article
              key={item.slug}
              className="relative flex h-full w-[100vw] shrink-0 items-stretch"
            >
              {/* Full-height image like the section above */}
              <div className="absolute inset-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="100vw"
                  className="object-cover object-top md:object-[center_30%]"
                  priority={index === 0}
                  loading="eager"
                  quality={72}
                  placeholder="blur"
                  blurDataURL={SLIDE_BLUR}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,19,24,0.55),rgba(14,19,24,0.86))]" />
              </div>

              {/* Text overlay (right-aligned, ABOVE all overlays) */}
              <div className="relative z-40 flex w-full items-end px-6 pb-14 pt-28 md:px-12 md:pb-20 md:pt-36">
                <div className="ml-auto w-[min(560px,92vw)]">
                  <div className="rounded-[28px] bg-[rgba(10,14,18,0.74)] px-7 py-7 backdrop-blur-lg md:px-10 md:py-9">
                    <p className="text-right font-display text-[11px] uppercase tracking-[0.34em] text-ink/90">
                      {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 text-right font-heading text-[clamp(2.2rem,7vw,4.4rem)] leading-[0.92] text-ink [text-shadow:0_14px_34px_rgba(0,0,0,0.78)]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-right font-body text-base leading-relaxed text-ink/95 [text-shadow:0_10px_28px_rgba(0,0,0,0.65)] md:text-xl">
                      {item.subtitle}
                    </p>
                    <div className="mt-7 flex justify-end">
                      <Link
                        href={`/work/${item.slug}`}
                        className="inline-flex border-b border-teal/80 pb-1.5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-teal"
                      >
                        Explore
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {index < items.length - 1 ? (
                <div className="pointer-events-none absolute right-0 top-1/2 h-[62%] w-px -translate-y-1/2 bg-teal/18" />
              ) : null}
            </article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
