"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const SHAPES = [
  {
    className: "left-[6%] top-[18%] h-44 w-44 border-teal/25 md:h-56 md:w-56",
    animate: { rotateX: [0, 24, 0], rotateY: [0, 48, 0], rotateZ: [0, 12, 0] },
    duration: 22
  },
  {
    className: "right-[8%] top-[42%] h-32 w-32 border-coral/20 md:h-40 md:w-40",
    animate: { rotateX: [12, -18, 12], rotateY: [0, -36, 0], rotateZ: [0, -20, 0] },
    duration: 18
  },
  {
    className: "bottom-[22%] left-[38%] h-24 w-24 border-teal/15 md:h-28 md:w-28",
    animate: { rotateX: [-8, 16, -8], rotateY: [24, -12, 24], rotateZ: [6, -6, 6] },
    duration: 26
  }
];

export default function AmbientDepth() {
  const prefersReducedMotion = useReducedMotion();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const update = () => setShow(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  if (prefersReducedMotion || !show) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-60"
      style={{ perspective: "1200px" }}
    >
      <div className="preserve-3d relative h-full w-full">
        {SHAPES.map((shape, index) => (
          <motion.div
            key={index}
            className={`preserve-3d absolute rounded-full border ${shape.className}`}
            animate={shape.animate}
            transition={{ duration: shape.duration, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          />
        ))}
        <motion.div
          className="absolute left-1/2 top-[12%] h-px w-[min(72vw,640px)] -translate-x-1/2 bg-gradient-to-r from-transparent via-teal/35 to-transparent"
          animate={{ rotateX: [78, 82, 78], opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>
    </div>
  );
}
