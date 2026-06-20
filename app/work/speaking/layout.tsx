import type { ReactNode } from "react";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata = createPageMetadata("work/speaking");

export default function SpeakingLayout({ children }: { children: ReactNode }) {
  return children;
}
