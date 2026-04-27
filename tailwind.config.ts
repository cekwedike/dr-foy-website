import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#141A21",
        surface: "#1B232C",
        "surface-alt": "#242E38",
        ink: "#F2E8DC",
        muted: "#93A8B8",
        teal: "#2DBFB1",
        coral: "#D9654A",
        border: "rgba(45, 191, 177, 0.22)",
        clay: "#2A3542"
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-dm)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
        wordmark: ["var(--font-wordmark)", "cursive"]
      },
      boxShadow: {
        neu: "-6px -6px 18px rgba(255,255,255,0.05), 10px 10px 26px rgba(0,0,0,0.55)",
        "neu-in": "inset 8px 8px 18px rgba(0,0,0,0.52), inset -5px -5px 14px rgba(255,255,255,0.04)"
      },
      keyframes: {
        ambientDrift: {
          "0%": { backgroundPosition: "0% 40%, 100% 60%, 50% 50%" },
          "100%": { backgroundPosition: "100% 60%, 0% 40%, 50% 50%" }
        },
        floatBlob: {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(12px,-18px) scale(1.06)" }
        },
        pulseLine: {
          "0%, 100%": { opacity: "0.35", transform: "scaleY(0.88)" },
          "50%": { opacity: "1", transform: "scaleY(1)" }
        },
        shimmerSweep: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: {
        ambient: "ambientDrift 14s ease-in-out infinite alternate",
        "float-blob": "floatBlob 11s ease-in-out infinite",
        "pulse-line": "pulseLine 2.2s ease-in-out infinite",
        shimmer: "shimmerSweep 10s linear infinite"
      }
    }
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        ".noise": {
          position: "relative",
          overflow: "hidden"
        },
        ".noise::before": {
          content: '""',
          position: "absolute",
          inset: "0",
          pointerEvents: "none",
          opacity: "0.07",
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Cfilter id="n" x="0" y="0" width="100%25" height="100%25"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="200" height="200" filter="url(%23n)" opacity="1"/%3E%3C/svg%3E\')',
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
          mixBlendMode: "overlay"
        }
      });
    })
  ]
};

export default config;
