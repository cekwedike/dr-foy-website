"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function InitialPreloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let done = false;
    // Fixed-duration preloader (requested): keeps the overlay up long enough
    // for critical images to stream in behind the scenes.
    const fixedTimeMs = 3000;
    const start = performance.now();

    const finish = () => {
      if (done) return;
      done = true;
      const elapsed = performance.now() - start;
      const remaining = Math.max(fixedTimeMs - elapsed, 0);
      window.setTimeout(() => setVisible(false), remaining);
    };

    // Start preloading critical homepage imagery while the overlay is shown.
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

  return (
    <div
      aria-hidden="true"
      className={[
        "fixed inset-0 z-[200] grid place-items-center bg-[var(--color-bg-deep)] transition-opacity duration-500",
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      ].join(" ")}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-full bg-teal/25 blur-2xl animate-[pulse_1.2s_ease-in-out_infinite]" />
          {/* rotating line ring */}
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
      </div>
    </div>
  );
}

