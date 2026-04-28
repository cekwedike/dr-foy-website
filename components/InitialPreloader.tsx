"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function InitialPreloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let done = false;
    const minTimeMs = 450;
    const maxTimeMs = 2400;
    const start = performance.now();

    const finish = () => {
      if (done) return;
      done = true;
      const elapsed = performance.now() - start;
      const remaining = Math.max(minTimeMs - elapsed, 0);
      window.setTimeout(() => setVisible(false), remaining);
    };

    const maxId = window.setTimeout(finish, maxTimeMs);

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
      <div className="flex flex-col items-center gap-5">
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-full bg-teal/25 blur-2xl animate-[pulse_1.2s_ease-in-out_infinite]" />
          <Image
            src="/images/favicon/android-chrome-192x192.png"
            alt=""
            width={72}
            height={72}
            priority
            className="rounded-2xl border border-teal/15 bg-[rgba(20,26,33,0.55)]"
          />
        </div>
        <p className="font-display text-xs uppercase tracking-[0.34em] text-ink/70">
          Loading
        </p>
      </div>
    </div>
  );
}

