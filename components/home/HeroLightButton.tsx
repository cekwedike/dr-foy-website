"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type HeroLightButtonProps = {
  href: string;
  label: string;
};

export default function HeroLightButton({ href, label }: HeroLightButtonProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "-8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={rootRef}
      className={[
        "hero-lamp-button inline-flex justify-center [perspective:900px]",
        inView ? "hero-lamp-button--visible" : ""
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link href={href} className="hero-lamp-btn group">
        <span className="hero-lamp-btn__rig" aria-hidden>
          <span className="hero-lamp-btn__flame">
            <span className="hero-lamp-btn__flame-halo" />
            <span className="hero-lamp-btn__flame-outer" />
            <span className="hero-lamp-btn__flame-mid" />
            <span className="hero-lamp-btn__flame-core" />
            <span className="hero-lamp-btn__flame-base" />
          </span>

          <span className="hero-lamp-btn__light">
            <span className="hero-lamp-btn__light-hot" />
            <span className="hero-lamp-btn__light-pool" />
            <span className="hero-lamp-btn__light-ambient" />
          </span>
        </span>

        <span className="hero-lamp-btn__face">
          <span className="hero-lamp-btn__lit-wash" aria-hidden />
          <span className="hero-lamp-btn__lit-rim" aria-hidden />
          <span className="hero-lamp-btn__label">{label}</span>
        </span>
      </Link>
    </div>
  );
}
