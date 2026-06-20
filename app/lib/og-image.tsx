import { ImageResponse } from "next/og";
import type { OgImageContent } from "@/app/lib/site-metadata";

export const OG_SIZE = {
  width: 1200,
  height: 630
} as const;

const FONT_FILES = {
  heading:
    "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_iE9KnTOig.woff2",
  display:
    "https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj7aUXskPMA.woff2"
} as const;

async function loadFont(url: string) {
  return fetch(url, { cache: "force-cache" }).then((response) => {
    if (!response.ok) {
      throw new Error(`Unable to load font from ${url}`);
    }

    return response.arrayBuffer();
  });
}

export async function createOgImageResponse(content: OgImageContent) {
  const [headingFont, displayFont] = await Promise.all([
    loadFont(FONT_FILES.heading),
    loadFont(FONT_FILES.display)
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          width: "100%",
          height: "100%",
          padding: "72px 80px",
          background: "#0e1318",
          color: "#f2e8dc",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 12% 18%, rgba(45, 191, 177, 0.22), transparent 42%), radial-gradient(circle at 88% 78%, rgba(217, 101, 74, 0.18), transparent 38%)"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.16,
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(242,232,220,0.08) 0, rgba(242,232,220,0.08) 1px, transparent 1px, transparent 28px)"
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 6,
            height: "100%",
            background: "linear-gradient(180deg, #2dbfb1 0%, rgba(45, 191, 177, 0.15) 100%)"
          }}
        />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontFamily: "Space Grotesk",
              fontSize: 22,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#2dbfb1"
            }}
          >
            {content.eyebrow}
          </div>

          <div
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: content.title.length > 28 ? 78 : 96,
              lineHeight: 0.92,
              letterSpacing: "-0.02em",
              maxWidth: 980
            }}
          >
            {content.title}
          </div>

          {content.subtitle ? (
            <div
              style={{
                fontFamily: "Space Grotesk",
                fontSize: 30,
                lineHeight: 1.35,
                color: "rgba(242, 232, 220, 0.78)",
                maxWidth: 920
              }}
            >
              {content.subtitle}
            </div>
          ) : null}
        </div>

        <div
          style={{
            position: "absolute",
            right: 80,
            bottom: 56,
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontFamily: "Space Grotesk",
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(242, 232, 220, 0.42)"
          }}
        >
          <div
            style={{
              width: 48,
              height: 1,
              background: "rgba(45, 191, 177, 0.55)"
            }}
          />
          Dr. Tochukwu Macfoy
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Cormorant Garamond", data: headingFont, style: "normal", weight: 600 },
        { name: "Space Grotesk", data: displayFont, style: "normal", weight: 500 }
      ]
    }
  );
}

export const ogImageRouteConfig = {
  size: OG_SIZE,
  contentType: "image/png" as const
};
