"use client";

import { useReducedMotion } from "framer-motion";

export default function HeroPatternOverlay() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="hero-pattern-overlay pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
      <div className="hero-pattern-overlay__stripes" />
      <svg
        preserveAspectRatio="xMidYMid slice"
        className={[
          "hero-pattern-overlay__mesh",
          prefersReducedMotion ? "hero-pattern-overlay__mesh--static" : ""
        ].join(" ")}
        viewBox="0 0 120 104"
      >
        <defs>
          <linearGradient id="hero-cube-dark" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0e1318" />
            <stop offset="100%" stopColor="#2a3542" />
          </linearGradient>
          <linearGradient id="hero-cube-mid" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2dbfb1" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1b232c" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="hero-cube-light" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d9654a" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#3a4a58" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <g fill="none" strokeWidth="0.35" opacity="0.85">
          <path d="M10 26 L30 16 L50 26 L30 36 Z" stroke="url(#hero-cube-mid)" />
          <path d="M30 16 L30 36 L30 56 L30 36" stroke="url(#hero-cube-dark)" />
          <path d="M50 26 L50 46 L30 56 L30 36 Z" stroke="url(#hero-cube-light)" />
          <path d="M50 26 L70 16 L90 26 L70 36 Z" stroke="url(#hero-cube-mid)" />
          <path d="M70 16 L70 36 L70 56 L70 36" stroke="url(#hero-cube-dark)" />
          <path d="M90 26 L90 46 L70 56 L70 36 Z" stroke="url(#hero-cube-light)" />
          <path d="M10 56 L30 46 L50 56 L30 66 Z" stroke="url(#hero-cube-mid)" />
          <path d="M50 56 L70 46 L90 56 L70 66 Z" stroke="url(#hero-cube-mid)" />
          <path d="M10 86 L30 76 L50 86 L30 96 Z" stroke="url(#hero-cube-light)" />
          <path d="M50 86 L70 76 L90 86 L70 96 Z" stroke="url(#hero-cube-light)" />
        </g>
      </svg>
    </div>
  );
}
