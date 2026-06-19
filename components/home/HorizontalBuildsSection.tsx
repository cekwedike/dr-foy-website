"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion";
import { type ReactNode, useEffect, useLayoutEffect, useRef, useState } from "react";
import { homeAboutTeaserNarrative, workItems } from "@/app/data/siteContent";

const workSlides = workItems.slice(0, 3);

const SLIDE_COUNT = 1 + workSlides.length;

const MOBILE_BREAKPOINT = 768;

const SLIDE_BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Cdefs%3E%3CradialGradient id='g' cx='70%25' cy='40%25' r='90%25'%3E%3Cstop offset='0%25' stop-color='%232a3542' stop-opacity='0.55'/%3E%3Cstop offset='55%25' stop-color='%230e1318' stop-opacity='0.92'/%3E%3Cstop offset='100%25' stop-color='%230e1318'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='24' height='16' fill='url(%23g)'/%3E%3C/svg%3E";

const ABOUT_BLUR =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='16'%3E%3Cdefs%3E%3CradialGradient id='g' cx='55%25' cy='35%25' r='92%25'%3E%3Cstop offset='0%25' stop-color='%233a4a58' stop-opacity='0.5'/%3E%3Cstop offset='60%25' stop-color='%2310191f' stop-opacity='0.92'/%3E%3Cstop offset='100%25' stop-color='%230e1318'/%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width='24' height='16' fill='url(%23g)'/%3E%3C/svg%3E";

function SectionHeader({ hint }: { hint: string }) {
  return (
    <div className="absolute inset-x-0 top-0 z-30 flex justify-end px-4 pt-6 sm:px-5 sm:pt-8 md:px-10 md:pt-10">
      <p className="shrink-0 font-display text-[9px] uppercase tracking-[0.22em] text-ink/55 sm:text-xs sm:tracking-[0.28em]">
        {hint}
      </p>
    </div>
  );
}

function SlideCounter({ index }: { index: number }) {
  return (
    <p className="text-right font-display text-[10px] uppercase tracking-[0.3em] text-ink/90 sm:text-[11px] sm:tracking-[0.34em]">
      {String(index + 1).padStart(2, "0")} / {String(SLIDE_COUNT).padStart(2, "0")}
    </p>
  );
}

function AboutSlideContent() {
  return (
    <>
      <SlideCounter index={0} />
      <p className="mt-2 text-right font-display text-[9px] uppercase tracking-[0.22em] text-teal sm:mt-3 sm:text-[10px] sm:tracking-[0.28em] md:text-[11px] md:tracking-[0.32em]">
        The man behind the movement
      </p>
      <h3 className="mt-1.5 text-right font-heading text-[clamp(1.35rem,5vw,4rem)] leading-[0.9] text-ink [text-shadow:0_14px_34px_rgba(0,0,0,0.78)] sm:mt-2 sm:leading-[0.92] md:mt-3">
        Not just a label.
        <span className="block accent-gradient-text">A legacy.</span>
      </h3>
      <div className="mt-2 space-y-1.5 text-right font-body text-[clamp(0.68rem,2.45vw,1.125rem)] leading-[1.38] text-ink/90 [text-shadow:0_10px_28px_rgba(0,0,0,0.65)] sm:mt-3 sm:space-y-2 sm:leading-[1.45] md:space-y-4 md:text-base md:leading-relaxed lg:text-lg">
        {homeAboutTeaserNarrative.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-3 flex justify-end sm:mt-5 md:mt-7">
        <Link
          href="/about"
          className="inline-flex border-b border-teal/80 pb-1 font-display text-[10px] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:text-teal sm:pb-1.5 sm:text-xs sm:tracking-[0.14em] md:text-sm"
        >
          Meet Dr. Foy
        </Link>
      </div>
    </>
  );
}

function WorkSlideContent({ index, title, subtitle, slug }: { index: number; title: string; subtitle: string; slug: string }) {
  return (
    <>
      <SlideCounter index={index} />
      <h3 className="mt-3 text-right font-heading text-[clamp(1.85rem,7vw,4.4rem)] leading-[0.92] text-ink [text-shadow:0_14px_34px_rgba(0,0,0,0.78)] sm:mt-4">
        {title}
      </h3>
      <p className="mt-3 text-right font-body text-[0.9rem] leading-relaxed text-ink/95 [text-shadow:0_10px_28px_rgba(0,0,0,0.65)] sm:mt-4 sm:text-base md:text-xl">
        {subtitle}
      </p>
      <div className="mt-5 flex justify-end sm:mt-7">
        <Link
          href={`/work/${slug}`}
          className="inline-flex border-b border-teal/80 pb-1.5 font-display text-xs font-semibold uppercase tracking-[0.14em] text-ink transition-colors hover:text-teal sm:text-sm"
        >
          Explore
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
  priority = false,
  compact = false,
  layout = "fixed"
}: {
  slideWidth?: number;
  children: ReactNode;
  image: string;
  imageAlt?: string;
  imageClassName?: string;
  blurDataURL: string;
  priority?: boolean;
  compact?: boolean;
  layout?: "fixed" | "fluid";
}) {
  const widthStyle =
    layout === "fluid"
      ? undefined
      : { width: slideWidth && slideWidth > 0 ? slideWidth : "100%" };

  return (
    <article
      className={[
        "relative flex h-full shrink-0 items-stretch",
        layout === "fluid" ? "w-full min-w-full snap-start snap-always" : ""
      ].join(" ")}
      style={widthStyle}
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

      <div
        className={[
          "relative z-40 flex w-full px-3 pb-[max(2.75rem,env(safe-area-inset-bottom))] sm:px-6 sm:pb-14 md:px-12 md:pb-20",
          compact
            ? "items-end pt-[5.75rem] sm:items-end sm:pt-28 md:pt-36"
            : "items-end pt-24 sm:pt-28 md:pt-36"
        ].join(" ")}
      >
        <div className="ml-auto w-full max-w-[min(600px,96vw)]">
          <div
            className={[
              "rounded-[18px] bg-[rgba(10,14,18,0.82)] backdrop-blur-lg sm:rounded-[24px] md:rounded-[28px]",
              compact ? "px-3.5 py-3.5 sm:px-7 sm:py-7 md:px-10 md:py-9" : "px-5 py-5 sm:px-7 sm:py-7 md:px-10 md:py-9"
            ].join(" ")}
          >
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}

function MobileSlideProgress({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-[max(0.85rem,env(safe-area-inset-bottom))] z-30 flex flex-col items-center gap-2.5">
      <p className="font-display text-[10px] uppercase tracking-[0.3em] text-ink/70">
        {String(activeIndex + 1).padStart(2, "0")} / {String(SLIDE_COUNT).padStart(2, "0")}
      </p>
      <div className="flex items-center gap-2">
        {Array.from({ length: SLIDE_COUNT }).map((_, index) => (
          <span
            key={index}
            className={[
              "h-1 rounded-full transition-all duration-300",
              index === activeIndex ? "w-7 bg-teal" : "w-1.5 bg-ink/35"
            ].join(" ")}
          />
        ))}
      </div>
    </div>
  );
}

function MobileHorizontalCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const updateActiveIndex = () => {
      const width = scroller.clientWidth;
      if (width <= 0) return;
      const index = Math.round(scroller.scrollLeft / width);
      setActiveIndex(Math.min(SLIDE_COUNT - 1, Math.max(0, index)));
    };

    updateActiveIndex();
    scroller.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      scroller.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, []);

  return (
    <section className="relative isolate h-[100svh] w-full overflow-hidden border-t border-teal/15 bg-[var(--color-bg-deep)]">
      <SectionHeader hint="Swipe →" />

      <div
        ref={scrollerRef}
        className="flex h-full snap-x snap-mandatory overflow-x-auto overflow-y-hidden overscroll-x-contain [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <SlideShell
          layout="fluid"
          image="/images/foy-the-great.png"
          imageClassName="object-cover object-top"
          blurDataURL={ABOUT_BLUR}
          priority
          compact
        >
          <AboutSlideContent />
        </SlideShell>

        {workSlides.map((item, index) => (
          <SlideShell
            key={item.slug}
            layout="fluid"
            image={item.image}
            imageAlt={item.title}
            imageClassName="object-cover object-top"
            blurDataURL={SLIDE_BLUR}
          >
            <WorkSlideContent index={index + 1} title={item.title} subtitle={item.subtitle} slug={item.slug} />
          </SlideShell>
        ))}
      </div>

      <MobileSlideProgress activeIndex={activeIndex} />
    </section>
  );
}

function DesktopHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLElement>(null);
  const slideWidthMv = useMotionValue(0);
  const [slideWidth, setSlideWidth] = useState(0);

  useLayoutEffect(() => {
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
  }, [slideWidthMv]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const rawX = useTransform(scrollYProgress, (progress) => {
    const clamped = Math.max(0, Math.min(0.9999, progress));
    const width = Math.max(slideWidthMv.get(), 1);
    return -clamped * (SLIDE_COUNT - 1) * width;
  });

  const x = useSpring(rawX, {
    stiffness: 220,
    damping: 36,
    mass: 0.65
  });

  const outerHeight = `${SLIDE_COUNT * 100}svh`;

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-x-clip bg-[var(--color-bg-deep)]"
      style={{ height: outerHeight }}
    >
      <section ref={viewportRef} className="sticky top-0 h-[100svh] w-full overflow-hidden">
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

        <SectionHeader hint="Scroll to reveal" />

        <motion.div style={{ x }} className="flex h-full w-max items-stretch will-change-transform">
          <SlideShell
            slideWidth={slideWidth}
            image="/images/foy-the-great.png"
            imageClassName="object-cover object-top md:object-[center_28%]"
            blurDataURL={ABOUT_BLUR}
            priority
            compact
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
              <WorkSlideContent index={index + 1} title={item.title} subtitle={item.subtitle} slug={item.slug} />
            </SlideShell>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

function ReducedMotionLayout() {
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
                <WorkSlideContent index={index + 1} title={item.title} subtitle={item.subtitle} slug={item.slug} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HorizontalBuildsSection() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const updateLayout = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateLayout();
    mediaQuery.addEventListener("change", updateLayout);

    return () => {
      mediaQuery.removeEventListener("change", updateLayout);
    };
  }, []);

  if (prefersReducedMotion) {
    return <ReducedMotionLayout />;
  }

  if (isMobile === null) {
    return <section className="h-[100svh] w-full bg-[var(--color-bg-deep)]" aria-hidden />;
  }

  if (isMobile) {
    return <MobileHorizontalCarousel />;
  }

  return <DesktopHorizontalScroll />;
}
