import type { Metadata } from "next";

export const SITE_NAME = "Dr. Tochukwu Macfoy";
export const SITE_TAGLINE = "Physician · Creative Strategist · Culture Builder";

export type OgImageContent = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export type PageMetaEntry = {
  path: string;
  title: string;
  description: string;
  ogAlt: string;
  og: OgImageContent;
};

export const PAGE_META = {
  home: {
    path: "/",
    title: `${SITE_NAME} | ${SITE_TAGLINE}`,
    description:
      "Official portfolio of Dr. Tochukwu Macfoy, physician and creative strategist leading Energize Central across media, music, and live culture.",
    ogAlt: `${SITE_NAME} — ${SITE_TAGLINE}`,
    og: {
      eyebrow: SITE_TAGLINE,
      title: SITE_NAME,
      subtitle: "Building infrastructure for African faith-rooted creativity."
    }
  },
  about: {
    path: "/about",
    title: `About | ${SITE_NAME}`,
    description:
      "From medicine to media to Energize Central — the story of Dr. Tochukwu Macfoy, physician, strategist, and culture builder.",
    ogAlt: `About ${SITE_NAME}`,
    og: {
      eyebrow: "About",
      title: SITE_NAME,
      subtitle: "Still a doctor. Now building culture infrastructure."
    }
  },
  contact: {
    path: "/contact",
    title: `Contact | ${SITE_NAME}`,
    description:
      "Book Dr. Tochukwu Macfoy for speaking, advisory, media, and partnership inquiries.",
    ogAlt: `Contact ${SITE_NAME}`,
    og: {
      eyebrow: "Bookings & Inquiries",
      title: "Let's build something that lasts.",
      subtitle: "Speaking · Advisory · Media · Partnerships"
    }
  },
  press: {
    path: "/press",
    title: `Press Room | ${SITE_NAME}`,
    description:
      "Press coverage and verified sources on Dr. Tochukwu Macfoy, Energize Central, and the African creative economy.",
    ogAlt: `Press Room — ${SITE_NAME}`,
    og: {
      eyebrow: "Press Room",
      title: "Featured in Nigeria's leading culture press.",
      subtitle: "BusinessDay · The Guardian · The Sun · TurnTable Charts"
    }
  },
  "work/energize-music": {
    path: "/work/energize-music",
    title: `Energize Music | ${SITE_NAME}`,
    description:
      "Energize Music — faith-rooted music with global distribution intent, including the 2024 Orchard × Sony Music alliance.",
    ogAlt: "Energize Music — Energize Central",
    og: {
      eyebrow: "Energize Central",
      title: "Energize Music",
      subtitle: "Faith-rooted music with global distribution intent."
    }
  },
  "work/energize-fest": {
    path: "/work/energize-fest",
    title: `Energize Fest | ${SITE_NAME}`,
    description:
      "Energize Fest — where faith, family, and culture gather at scale in Lagos.",
    ogAlt: "Energize Fest — Energize Central",
    og: {
      eyebrow: "Energize Central",
      title: "Energize Fest",
      subtitle: "Where faith, family, and culture gather at scale."
    }
  },
  "work/next": {
    path: "/work/next",
    title: `NEXT | ${SITE_NAME}`,
    description:
      "NEXT — New Era Xceptional Talent. Africa's pan-African Afrogospel talent competition and creative incubator.",
    ogAlt: "NEXT — New Era Xceptional Talent",
    og: {
      eyebrow: "Energize Music Presents",
      title: "NEXT",
      subtitle: "New Era Xceptional Talent — Africa's Afrogospel platform."
    }
  },
  "work/same-energy": {
    path: "/work/same-energy",
    title: `Same Energy Global | ${SITE_NAME}`,
    description:
      "Same Energy Global — a movement for visionary creatives building in Christian entertainment.",
    ogAlt: "Same Energy Global — Energize Central",
    og: {
      eyebrow: "Energize Central",
      title: "Same Energy Global",
      subtitle: "A movement for visionary faith-rooted creatives."
    }
  },
  "work/speaking": {
    path: "/work/speaking",
    title: `Speaking & Advisory | ${SITE_NAME}`,
    description:
      "Book Dr. Tochukwu Macfoy for keynotes, advisory, and culture strategy engagements.",
    ogAlt: `Speaking & Advisory — ${SITE_NAME}`,
    og: {
      eyebrow: "Engagements",
      title: "Speaking & Advisory",
      subtitle: "Culture, communication, and scalable creative systems."
    }
  }
} as const satisfies Record<string, PageMetaEntry>;

export type PageMetaKey = keyof typeof PAGE_META;

export const SITE_URL = "https://drmacfoy.com";

export function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : SITE_URL)
  );
}

export function createPageMetadata(key: PageMetaKey): Metadata {
  const page = PAGE_META[key];

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: page.path
    },
    openGraph: {
      type: "website",
      url: page.path,
      siteName: SITE_NAME,
      title: page.title,
      description: page.description
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description
    }
  };
}
