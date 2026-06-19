"use client";

import type { ReactNode } from "react";
import AmbientDepth from "@/components/motion/AmbientDepth";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export default function ClientProviders({ children }: { children: ReactNode }) {
  return (
    <SmoothScrollProvider>
      <AmbientDepth />
      {children}
    </SmoothScrollProvider>
  );
}
