import type { ReactNode } from "react";
import { createPageMetadata } from "@/app/lib/site-metadata";

export const metadata = createPageMetadata("contact");

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
