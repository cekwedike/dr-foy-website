import type { ReactNode } from "react";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata = createPageMetadata("press");

export default function PressLayout({ children }: { children: ReactNode }) {
  return children;
}
