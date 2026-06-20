import type { ReactNode } from "react";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata = createPageMetadata("work/energize-music");

export default function EnergizeMusicLayout({ children }: { children: ReactNode }) {
  return children;
}
