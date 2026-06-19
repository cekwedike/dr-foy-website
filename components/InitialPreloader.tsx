"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import BrandWordmark from "@/components/BrandWordmark";

const SONAR_PULSES = [0, 0.9, 1.8, 2.7] as const;
const RADIAL_LINES = 12;

const enterEase = [0.22, 1, 0.36, 1] as const;

export default function InitialPreloader() {
  const [visible, setVisible] = useState(true);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (process.env.NODE_ENV === "development" && "serviceWorker" in navigator) {
      void navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          void registration.unregister();
        });
      });
    }

    let done = false;
    const fixedTimeMs = 3000;
    const start = performance.now();

    const finish = () => {
      if (done) return;
      done = true;
      const elapsed = performance.now() - start;
      const remaining = Math.max(fixedTimeMs - elapsed, 0);
      window.setTimeout(() => setVisible(false), remaining);
    };

    const preload = (src: string) =>
      new Promise<void>((resolve) => {
        const img = new window.Image();
        img.onload = () => resolve();
        img.onerror = () => resolve();
        img.src = src;
      });

    Promise.allSettled([
      preload("/images/hero-section.jpg"),
      preload("/images/foy-the-great.png"),
      preload("/images/foy.jpg"),
      preload("/images/foy-the-energetic.jpg"),
      preload("/images/foy-1.jpg"),
      preload("/images/dr-foy.jpg")
    ]).finally(() => {
      // no-op: we still honor the fixed duration
    });

    const maxId = window.setTimeout(finish, fixedTimeMs);

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.clearTimeout(maxId);
      window.removeEventListener("load", finish);
    };
  }, []);

  const frameMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5, ease: enterEase }
      };

  const centerMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, scale: 0.94, filter: "blur(6px)" },
        animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
        transition: { duration: 0.65, ease: enterEase }
      };

  return (
    <div
      aria-hidden="true"
      className={[
        "fixed inset-0 z-[200] grid place-items-center bg-[var(--color-bg-deep)] transition-opacity duration-500",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      ].join(" ")}
    >
      <motion.div className="pointer-events-none absolute inset-0 overflow-hidden" {...frameMotion}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 42%, rgba(45,191,177,0.14) 0%, transparent 42%), radial-gradient(circle at 18% 78%, rgba(217,101,74,0.1) 0%, transparent 38%), radial-gradient(circle at 82% 22%, rgba(45,191,177,0.08) 0%, transparent 35%)"
          }}
        />

        <div
          className="absolute inset-0 opacity-55"
          style={{
            backgroundImage:
              "linear-gradient(rgba(45,191,177,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(45,191,177,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(circle at center, black 8%, transparent 78%)"
          }}
        />

        {!prefersReducedMotion ? (
          <>
            <motion.div
              className="absolute left-1/2 top-1/2 h-[min(95vw,820px)] w-[min(95vw,820px)] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, rgba(45,191,177,0.12), transparent, rgba(217,101,74,0.08), transparent)"
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            />

            {Array.from({ length: RADIAL_LINES }).map((_, index) => (
              <motion.div
                key={index}
                className="absolute left-1/2 top-1/2 w-px origin-bottom bg-gradient-to-t from-teal/35 to-transparent"
                style={{
                  height: "min(48vh, 320px)",
                  transform: `translateX(-50%) rotate(${index * (360 / RADIAL_LINES)}deg)`
                }}
                animate={{ opacity: [0.12, 0.45, 0.12], scaleY: [0.85, 1.05, 0.85] }}
                transition={{ duration: 4.2, repeat: Infinity, delay: index * 0.18, ease: "easeInOut" }}
              />
            ))}

            <motion.div
              className="absolute inset-x-[8%] h-px bg-gradient-to-r from-transparent via-teal/55 to-transparent"
              animate={{ top: ["14%", "86%", "14%"], opacity: [0.2, 0.7, 0.2] }}
              transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute inset-y-[12%] w-px bg-gradient-to-b from-transparent via-coral/40 to-transparent"
              animate={{ left: ["12%", "88%", "12%"], opacity: [0.15, 0.55, 0.15] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
          </>
        ) : null}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(14,19,24,0.25)_40%,rgba(14,19,24,0.96)_100%)]" />

        <motion.p
          className="absolute left-6 top-6 font-display text-[10px] uppercase tracking-[0.38em] text-teal/55 md:left-10 md:top-10 md:text-[11px]"
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, x: -8 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.65, ease: enterEase }
              })}
        >
          Physician · Strategist · Builder
        </motion.p>

        {["tl", "tr", "bl", "br"].map((corner) => (
          <motion.div
            key={corner}
            className={[
              "absolute h-14 w-14 md:h-20 md:w-20",
              corner === "tl" ? "left-5 top-5 border-l border-t border-teal/40 md:left-10 md:top-10" : "",
              corner === "tr" ? "right-5 top-5 border-r border-t border-teal/40 md:right-10 md:top-10" : "",
              corner === "bl" ? "bottom-5 left-5 border-b border-l border-coral/35 md:bottom-10 md:left-10" : "",
              corner === "br" ? "bottom-5 right-5 border-b border-r border-coral/35 md:bottom-10 md:right-10" : ""
            ].join(" ")}
            {...(prefersReducedMotion
              ? {}
              : {
                  initial: { opacity: 0, scale: 0.88 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.65, ease: enterEase }
                })}
          />
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center px-6"
        {...centerMotion}
      >
        <div className="relative">
          {!prefersReducedMotion ? (
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              {SONAR_PULSES.map((delay) => (
                <motion.span
                  key={delay}
                  className="absolute h-24 w-24 rounded-full border border-teal/50"
                  initial={{ scale: 0.55, opacity: 0.65 }}
                  animate={{ scale: 5.2, opacity: 0 }}
                  transition={{ duration: 3.2, repeat: Infinity, delay, ease: "easeOut" }}
                />
              ))}
            </div>
          ) : null}
          <div className="absolute inset-0 -z-10 rounded-full bg-teal/25 blur-2xl animate-[pulse_1.2s_ease-in-out_infinite]" />
          <div
            aria-hidden
            className="absolute -inset-3 rounded-full border-2 border-teal/70 border-t-transparent animate-spin"
          />
          <Image
            src="/images/favicon/android-chrome-192x192.png"
            alt=""
            width={92}
            height={92}
            priority
            className="rounded-full border border-teal/15 bg-[rgba(20,26,33,0.65)]"
          />
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 text-center md:mt-10">
          <BrandWordmark className="text-[clamp(1.15rem,3.8vw,1.75rem)] text-coral" />
          <p className="max-w-sm font-display text-[10px] uppercase tracking-[0.36em] text-ink/55 md:text-[11px]">
            Faith-rooted culture · Built to last
          </p>
        </div>
      </motion.div>
    </div>
  );
}
