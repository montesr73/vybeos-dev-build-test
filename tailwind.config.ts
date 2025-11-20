// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#B3FF94", // accent green (callouts, highlighted words)
          surface: "#E6F7D0", // light card background (pale green)
          containerStart: "#193018", // gradient start
          containerEnd: "#1A1A1A", // gradient end
        },
        neutral: {
          bg: "#0E0F0E", // page background
          border: "#3E3F3E", // container border
          text: "#0E0F0E", // light text
          muted: "#BFC3BC", // muted description text
        },
        badge: {
          border: "#0E0F0E", // badge border
        },
      },
      fontFamily: {
        "pp-machina": [
          '"PP Neue Machina"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
        ],
        "pp-montreal": [
          '"PP Neue Montreal"',
          "Inter",
          "ui-sans-serif",
          "system-ui",
        ],
      },
      fontSize: {
        // semantic sizes mapped from Figma
        "display-lg": ["48px", { lineHeight: "1", letterSpacing: "0" }], // mobile headline
        "display-md": ["36px", { lineHeight: "1", letterSpacing: "0" }], // desktop headline
        "body-md": ["16px", { lineHeight: "1.5" }], // body
      },
      borderRadius: {
        card: "8px",
        large: "12px",
      },
      boxShadow: {
        "card-lg": "0 10px 30px rgba(0,0,0,0.6)",
      },
      spacing: {
        // custom spacing: 18px
        "4.5": "18px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
} as Config;
