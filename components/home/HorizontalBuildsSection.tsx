"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { workItems } from "@/app/data/siteContent";

const items = workItems.slice(0, 3);

const SLIDE_BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Cdefs%3E%3CradialGradient id='g' cx='70%25' cy='40%25' r='90%25'%3E%3Cstop offset='0%25' stop-color='%232a3542' stop-opacity='0.55'/%3E%3Cstop offset='55%25' stop-color='%230e1318' stop-opacity='0.92'/%3E%3Cstop offset='100%25' stop-color='%230e1318'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='24' height='16' fill='url(%23g)'/%3E%3C/svg%3E";

function BuildsVerticalList() {
  return (
    <section className="bg-background py-14 sm:py-16 md:py-24">
      <div className="page-container max-w-6xl">
        <p className="font-display text-xs uppercase tracking-[0.22em] text-teal sm:tracking-[0.32em] md:text-sm">
          What he builds
        </p>
        <div className="mt-6 h-px w-full bg-teal/25" />

        <div className="mt-10 grid grid-cols-1 gap-12 md:gap-16">
          {items.map((item, index) => (
            <article
              key={item.slug}
              className={`grid min-w-0 grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10 ${
                index % 2 === 1 ? "md:[&>div]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,19,24,0.55),transparent_60%)]" />
              </div>

              <div className="min-w-0">
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

export default function HorizontalBuildsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [useVerticalLayout, setUseVerticalLayout] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 1024
  );
  const slideWidth = useMotionValue(0);

  useLayoutEffect(() => {
    const update = () => {
      const width = stickyRef.current?.clientWidth ?? window.innerWidth;
      slideWidth.set(width);
      setUseVerticalLayout(window.innerWidth < 1024);
    };

    update();
    window.addEventListener("resize", update, { passive: true });

    const observer = new ResizeObserver(update);
    const sticky = stickyRef.current;
    if (sticky) {
      observer.observe(sticky);
    }

    return () => {
      window.removeEventListener("resize", update);
      observer.disconnect();
    };
  }, [slideWidth]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rawX = useTransform(scrollYProgress, (progress) => {
    const clamped = Math.max(0, Math.min(0.9999, progress));
    const width = Math.max(slideWidth.get(), 1);
    const index = Math.min(items.length - 1, Math.floor(clamped * items.length));
    return -width * index;
  });

  const x = useSpring(rawX, {
    stiffness: 280,
    damping: 40,
    mass: 0.55
  });

  if (prefersReducedMotion || useVerticalLayout) {
    return <BuildsVerticalList />;
  }

  const outerHeight = `${items.length * 100}svh`;
  const slideShare = `${100 / items.length}%`;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-x-clip bg-[var(--color-bg-deep)]"
      style={{ height: outerHeight }}
    >
      <section
        ref={stickyRef}
        className="sticky top-0 flex h-[100svh] min-h-[480px] w-full overflow-hidden sm:min-h-[560px]"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(to right, rgba(14,19,24,0.92) 0%, rgba(14,19,24,0.65) 42%, rgba(14,19,24,0.18) 72%, rgba(14,19,24,0) 100%)"
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-[linear-gradient(to_right,var(--color-bg-deep),transparent)] sm:w-14 md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-[linear-gradient(to_left,var(--color-bg-deep),transparent)] sm:w-14 md:w-24" />

        <div className="absolute inset-x-0 top-0 z-30 px-5 pt-6 sm:pt-8 md:px-10 md:pt-12">
          <div className="flex items-end justify-between gap-4">
            <div className="min-w-0">
              <p className="font-display text-xs uppercase tracking-[0.22em] text-teal sm:tracking-[0.32em] md:text-sm">
                What he builds
              </p>
              <div className="mt-4 h-px w-full max-w-[min(520px,68vw)] bg-teal/25" />
            </div>
            <p className="hidden shrink-0 font-display text-xs uppercase tracking-[0.2em] text-ink/55 md:block">
              Scroll to reveal
            </p>
          </div>
        </div>

        <motion.div
          style={{ x, width: `${items.length * 100}%` }}
          className="flex h-full items-stretch will-change-transform"
        >
          {items.map((item, index) => (
            <article
              key={item.slug}
              className="relative flex h-full shrink-0 items-stretch"
              style={{ width: slideShare }}
            >
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
                  unoptimized
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,19,24,0.55),rgba(14,19,24,0.86))]" />
              </div>

              <div className="relative z-40 flex w-full min-w-0 items-end px-4 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:px-12 md:pb-20 md:pt-36">
                <div className="ml-auto w-full max-w-[min(560px,92vw)]">
                  <div className="rounded-2xl bg-[rgba(10,14,18,0.74)] px-5 py-6 backdrop-blur-lg sm:rounded-[28px] sm:px-7 sm:py-7 md:px-10 md:py-9">
                    <p className="text-right font-display text-[10px] uppercase tracking-[0.22em] text-ink/90 sm:text-[11px] sm:tracking-[0.34em]">
                      {String(index + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-balance text-right font-heading text-[clamp(1.9rem,5.5vw,4.4rem)] leading-[0.92] text-ink [text-shadow:0_14px_34px_rgba(0,0,0,0.78)] sm:mt-4">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-pretty text-right font-body text-sm leading-relaxed text-ink/95 [text-shadow:0_10px_28px_rgba(0,0,0,0.65)] sm:mt-4 sm:text-base md:text-xl">
                      {item.subtitle}
                    </p>
                    <div className="mt-5 flex justify-end sm:mt-7">
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
                <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[62%] w-px -translate-y-1/2 bg-teal/18 lg:block" />
              ) : null}
            </article>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
