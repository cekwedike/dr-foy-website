import type { ReactNode } from "react";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata = createPageMetadata("work/energize-fest");

export default function EnergizeFestLayout({ children }: { children: ReactNode }) {
  return children;
}
