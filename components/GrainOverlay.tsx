"use client";

import { useEffect, useRef } from "react";

export default function GrainOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let rafId = 0;
    let frame = 0;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(window.innerWidth * ratio);
      canvas.height = Math.floor(window.innerHeight * ratio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(1, 0, 0, 1, 0, 0);
      context.scale(ratio, ratio);
    };

    const draw = () => {
      frame += 1;

      if (frame % 2 === 0) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const image = context.createImageData(width, height);
        const pixels = image.data;

        for (let i = 0; i < pixels.length; i += 4) {
          const value = Math.random() > 0.5 ? 255 : 0;
          pixels[i] = value;
          pixels[i + 1] = value;
          pixels[i + 2] = value;
          pixels[i + 3] = 20;
        }

        context.putImageData(image, 0, 0);
      }

      rafId = window.requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[999] opacity-[0.035]"
    />
  );
}
