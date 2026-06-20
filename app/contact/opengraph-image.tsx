import { createOgImageResponse, ogImageRouteConfig } from "@/app/lib/og-image";
import { PAGE_META } from "@/app/lib/site-metadata";

export const runtime = "edge";
export const size = ogImageRouteConfig.size;
export const contentType = ogImageRouteConfig.contentType;
export const alt = PAGE_META.contact.ogAlt;

export default async function Image() {
  return createOgImageResponse(PAGE_META.contact.og);
}
