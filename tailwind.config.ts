import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0C0C0C",
        surface: "#161412",
        "accent-ember": "#E8572A",
        "accent-lime": "#C8F04D",
        "text-primary": "#F5F0E8",
        "text-muted": "#8A8070",
        border: "rgba(232, 87, 42, 0.2)"
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-dm)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"]
      },
      keyframes: {
        aurora: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "25%": { transform: "translate(-2%, 1%)" },
          "50%": { transform: "translate(1%, -2%)" },
          "75%": { transform: "translate(2%, 2%)" }
        }
      },
      animation: {
        aurora: "aurora 8s infinite alternate",
        float: "float 4s ease-in-out infinite",
        grain: "grain 0.1s steps(2) infinite"
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
          opacity: "0.08",
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 200\"%3E%3Cfilter id=\"n\" x=\"0\" y=\"0\" width=\"100%25\" height=\"100%25\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.9\" numOctaves=\"2\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"200\" height=\"200\" filter=\"url(%23n)\" opacity=\"1\"/%3E%3C/svg%3E')",
          backgroundRepeat: "repeat",
          backgroundSize: "180px 180px",
          mixBlendMode: "overlay"
        }
      });
    })
  ]
};

export default config;