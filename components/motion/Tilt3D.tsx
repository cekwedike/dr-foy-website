"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type Tilt3DProps = {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  intensity?: number;
  lift?: number;
};

export default function Tilt3D({
  children,
  className = "",
  innerClassName = "",
  intensity = 14,
  lift = 12
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 200,
    damping: 24
  });
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 200,
    damping: 24
  });
  const translateZ = useSpring(useTransform(pointerY, [-0.5, 0.5], [lift * 0.5, lift]), {
    stiffness: 200,
    damping: 24
  });

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      className={`perspective-[1400px] ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <motion.div
        ref={ref}
        className={`preserve-3d will-change-transform ${innerClassName}`}
        style={{ rotateX, rotateY, z: translateZ }}
      >
        {children}
      </motion.div>
    </div>
  );
}
