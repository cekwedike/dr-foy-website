"use client";

import "lenis/dist/lenis.css";

import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";
import { type ReactNode, useEffect } from "react";

/** Lenis smooth scroll — native scroll position updates every frame (compatible with Framer useScroll). */
export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Native touch scroll keeps Framer scroll-driven sections (horizontal hijack) reliable on mobile.
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.35
    });

    let rafId = 0;
    const tick = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    const onResize = () => lenis.resize();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return <>{children}</>;
}
