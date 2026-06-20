import type { ReactNode } from "react";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata = createPageMetadata("work/same-energy");

export default function SameEnergyLayout({ children }: { children: ReactNode }) {
  return children;
}
