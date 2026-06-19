"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { homeAboutTeaserNarrative, workItems } from "@/app/data/siteContent";

const workSlides = workItems.slice(0, 3);

const SLIDE_COUNT = 1 + workSlides.length;

const SLIDE_BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Cdefs%3E%3CradialGradient id='g' cx='70%25' cy='40%25' r='90%25'%3E%3Cstop offset='0%25' stop-color='%232a3542' stop-opacity='0.55'/%3E%3Cstop offset='55%25' stop-color='%230e1318' stop-opacity='0.92'/%3E%3Cstop offset='100%25' stop-color='%230e1318'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='24' height='16' fill='url(%23g)'/%3E%3C/svg%3E";

const ABOUT_BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Cdefs%3E%3CradialGradient id='g' cx='55%25' cy='35%25' r='92%25'%3E%3Cstop offset='0%25' stop-color='%233a4a58' stop-opacity='0.5'/%3E%3Cstop offset='60%25' stop-color='%2310191f' stop-opacity='0.92'/%3E%3Cstop offset='100%25' stop-color='%230e1318'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='24' height='16' fill='url(%23g)'/%3E%3C/svg%3E";

function SlideCounter({ index }: { index: number }) {
  return (
    <p className="text-right font-display text-[11px] uppercase tracking-[0.34em] text-ink/90">
      {String(index + 1).padStart(2, "0")} / {String(SLIDE_COUNT).padStart(2, "0")}
    </p>
  );
}

function AboutSlideContent() {
  return (
    <>
      <SlideCounter index={0} />
      <p className="mt-3 text-right font-display text-[10px] uppercase tracking-[0.26em] text-teal sm:mt-4 sm:text-[11px] sm:tracking-[0.32em]">
        The man behind the movement
      </p>
      <h3 className="mt-2 text-right font-heading text-[clamp(1.75rem,6.5vw,4rem)] leading-[0.92] text-ink [text-shadow:0_14px_34px_rgba(0,0,0,0.78)] sm:mt-3">
        Not just a label.
        <span className="block accent-gradient-text">A legacy.</span>
      </h3>
      <div className="mt-3 max-h-[28vh] space-y-2.5 overflow-y-auto pr-1 text-right font-body text-[0.9rem] leading-relaxed text-ink/90 [text-shadow:0_10px_28px_rgba(0,0,0,0.65)] sm:mt-4 sm:max-h-[32vh] sm:space-y-3 sm:text-sm md:max-h-none md:space-y-4 md:text-base md:leading-relaxed lg:text-lg">
        {homeAboutTeaserNarrative.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-5 flex justify-end sm:mt-6 md:mt-7">
        <Link
          href="/about"
          className="inline-flex border-b border-teal/80 pb-1.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-teal sm:text-sm"
        >
          Meet Dr. Foy
        </Link>
      </div>
    </>
  );
}

function SlideShell({
  slideWidth,
  children,
  image,
  imageAlt = "",
  imageClassName,
  blurDataURL,
  priority = false
}: {
  slideWidth: number;
  children: React.ReactNode;
  image: string;
  imageAlt?: string;
  imageClassName?: string;
  blurDataURL: string;
  priority?: boolean;
}) {
  return (
    <article
      className="relative flex h-full shrink-0 items-stretch"
      style={{ width: slideWidth > 0 ? slideWidth : "100%" }}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="100vw"
          className={imageClassName ?? "object-cover object-top"}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          quality={priority ? 78 : 72}
          placeholder="blur"
          blurDataURL={blurDataURL}
          unoptimized
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(14,19,24,0.5),rgba(14,19,24,0.9))]" />
      </div>

      <div className="relative z-40 flex w-full items-end px-4 pb-[max(3.25rem,env(safe-area-inset-bottom))] pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:px-12 md:pb-20 md:pt-36">
        <div className="ml-auto w-full max-w-[min(600px,94vw)]">
          <div className="rounded-[20px] bg-[rgba(10,14,18,0.78)] px-5 py-5 backdrop-blur-lg sm:rounded-[24px] sm:px-7 sm:py-7 md:rounded-[28px] md:px-10 md:py-9">
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function HorizontalBuildsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const slideWidthMv = useMotionValue(0);
  const [slideWidth, setSlideWidth] = useState(0);

  useLayoutEffect(() => {
    if (prefersReducedMotion) return;

    const viewport = viewportRef.current;
    if (!viewport) return;

    const updateWidth = () => {
      const width = viewport.clientWidth;
      slideWidthMv.set(width);
      setSlideWidth(width);
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(viewport);

    const visualViewport = window.visualViewport;
    visualViewport?.addEventListener("resize", updateWidth);
    window.addEventListener("orientationchange", updateWidth);

    return () => {
      resizeObserver.disconnect();
      visualViewport?.removeEventListener("resize", updateWidth);
      window.removeEventListener("orientationchange", updateWidth);
    };
  }, [prefersReducedMotion, slideWidthMv]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rawX = useTransform(scrollYProgress, (progress) => {
    const clamped = Math.max(0, Math.min(1, progress));
    const width = Math.max(slideWidthMv.get(), 1);
    return -clamped * (SLIDE_COUNT - 1) * width;
  });

  const x = useSpring(rawX, {
    stiffness: 220,
    damping: 36,
    mass: 0.65
  });

  if (prefersReducedMotion) {
    return (
      <section className="bg-background py-14 sm:py-16 md:py-24">
        <div className="page-container">
          <p className="font-display text-xs uppercase tracking-[0.32em] text-teal md:text-sm">What he builds</p>
          <div className="mt-4 h-px w-full bg-teal/25 sm:mt-6" />

          <div className="mt-8 grid grid-cols-1 gap-10 sm:mt-10 sm:gap-12 md:gap-16">
            <article className="grid grid-cols-1 items-center gap-5 sm:gap-6 md:grid-cols-2 md:gap-10">
              <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/10]">
                <Image
                  src="/images/foy-the-great.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(14,19,24,0.55),transparent_60%)]" />
              </div>
              <div className="text-left md:text-right">
                <AboutSlideContent />
              </div>
            </article>

            {workSlides.map((item, index) => (
              <article
                key={item.slug}
                className={`grid grid-cols-1 items-center gap-5 sm:gap-6 md:grid-cols-2 md:gap-10 ${
                  index % 2 === 0 ? "md:[&>div]:order-2" : ""
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

                <div className="md:text-right">
                  <SlideCounter index={index + 1} />
                  <h3 className="mt-3 font-heading text-[clamp(1.85rem,4.8vw,3.6rem)] leading-[0.95] text-ink sm:mt-4">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-xl font-body text-sm leading-relaxed text-ink/78 sm:mt-3 sm:text-base md:ml-auto md:text-lg">
                    {item.subtitle}
                  </p>
                  <Link
                    href={`/work/${item.slug}`}
                    className="mt-5 inline-flex border-b border-teal/45 pb-1.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-teal sm:mt-6 sm:text-sm"
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

  const outerHeight = `${SLIDE_COUNT * 100}svh`;

  return (
    <div
      ref={containerRef}
      className="relative w-full touch-pan-y overflow-x-clip bg-[var(--color-bg-deep)]"
      style={{ height: outerHeight }}
    >
      <section
        ref={viewportRef}
        className="sticky top-0 h-[100svh] w-full overflow-hidden overscroll-y-contain"
      >
        <div
          className="pointer-events-none absolute inset-0 z-0"
          aria-hidden
          style={{
            background:
              "linear-gradient(to right, rgba(14,19,24,0.92) 0%, rgba(14,19,24,0.65) 42%, rgba(14,19,24,0.18) 72%, rgba(14,19,24,0) 100%)"
          }}
        />
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-[linear-gradient(to_right,var(--color-bg-deep),transparent)] sm:w-14 md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-[linear-gradient(to_left,var(--color-bg-deep),transparent)] sm:w-14 md:w-24" />

        <div className="absolute inset-x-0 top-0 z-30 px-4 pt-6 sm:px-5 sm:pt-8 md:px-10 md:pt-12">
          <div className="flex items-end justify-between gap-4 sm:gap-6">
            <div className="min-w-0">
              <p className="font-display text-[10px] uppercase tracking-[0.28em] text-teal sm:text-xs sm:tracking-[0.32em] md:text-sm">
                What he builds
              </p>
              <div className="mt-3 h-px w-[min(520px,72vw)] bg-teal/25 sm:mt-4" />
            </div>
            <p className="shrink-0 font-display text-[9px] uppercase tracking-[0.22em] text-ink/55 sm:text-xs sm:tracking-[0.28em]">
              Scroll to reveal
            </p>
          </div>
        </div>

        <motion.div style={{ x }} className="flex h-full w-max items-stretch will-change-transform">
          <SlideShell
            slideWidth={slideWidth}
            image="/images/foy-the-great.png"
            imageClassName="object-cover object-top md:object-[center_28%]"
            blurDataURL={ABOUT_BLUR}
            priority
          >
            <AboutSlideContent />
          </SlideShell>

          {workSlides.map((item, index) => (
            <SlideShell
              key={item.slug}
              slideWidth={slideWidth}
              image={item.image}
              imageAlt={item.title}
              imageClassName="object-cover object-top md:object-[center_30%]"
              blurDataURL={SLIDE_BLUR}
            >
              <SlideCounter index={index + 1} />
              <h3 className="mt-3 text-right font-heading text-[clamp(1.85rem,7vw,4.4rem)] leading-[0.92] text-ink [text-shadow:0_14px_34px_rgba(0,0,0,0.78)] sm:mt-4">
                {item.title}
              </h3>
              <p className="mt-3 text-right font-body text-[0.9rem] leading-relaxed text-ink/95 [text-shadow:0_10px_28px_rgba(0,0,0,0.65)] sm:mt-4 sm:text-base md:text-xl">
                {item.subtitle}
              </p>
              <div className="mt-5 flex justify-end sm:mt-7">
                <Link
                  href={`/work/${item.slug}`}
                  className="inline-flex border-b border-teal/80 pb-1.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-teal sm:text-sm"
                >
                  Explore
                </Link>
              </div>
            </SlideShell>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
