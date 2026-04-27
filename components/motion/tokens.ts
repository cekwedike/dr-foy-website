import type { Transition, Variants } from "framer-motion";

export const easings = {
  smoothOut: [0.22, 1, 0.36, 1] as const,
  smoothInOut: [0.45, 0.05, 0.55, 0.95] as const
};

export const timings = {
  fast: 0.35,
  base: 0.6,
  slow: 0.9
} as const;

export const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: timings.base, ease: easings.smoothOut }
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08
    }
  }
};

export const hoverLiftTransition: Transition = {
  duration: timings.fast,
  ease: easings.smoothOut
};
