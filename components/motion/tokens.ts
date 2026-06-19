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

export const depthReveal3D: Variants = {
  hidden: {
    opacity: 0,
    y: 56,
    rotateX: 22,
    scale: 0.94,
    transformPerspective: 1400
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transformPerspective: 1400,
    transition: { duration: timings.slow, ease: easings.smoothOut }
  }
};

export const depthChild3D: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    rotateX: 16,
    z: -40
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    z: 0,
    transition: { duration: timings.base, ease: easings.smoothOut }
  }
};

export const floatPulse3D: Variants = {
  initial: { rotateX: 0, rotateY: 0, y: 0 },
  animate: {
    rotateX: [0, 6, 0, -4, 0],
    rotateY: [0, -8, 0, 10, 0],
    y: [0, -10, 0, 8, 0],
    transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
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
