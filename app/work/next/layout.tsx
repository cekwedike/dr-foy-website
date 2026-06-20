import type { ReactNode } from "react";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata = createPageMetadata("work/next");

export default function NextLayout({ children }: { children: ReactNode }) {
  return children;
}
