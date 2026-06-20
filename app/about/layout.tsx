import type { ReactNode } from "react";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata = createPageMetadata("about");

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
