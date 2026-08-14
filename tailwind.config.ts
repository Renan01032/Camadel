import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // -----------------------------------------------------------------
      // Design tokens — extraídos diretamente da logo oficial da Camadel:
      // preto profundo de fundo, vermelho vibrante de destaque (os dois
      // paralelogramos "//") e wordmark em gradiente metálico branco/cinza.
      // -----------------------------------------------------------------
      colors: {
        camadel: {
          black: "#0A0A0A", // fundo principal
          charcoal: "#141414", // superfície de cards
          charcoal2: "#1B1B1B", // superfície elevada / gradientes
          steel: "#262626", // bordas padrão
          steelLight: "#3A3A3A", // bordas em hover/estado ativo
          red: "#E2231A", // vermelho vibrante — CTAs, ícones, destaques
          redDark: "#A61B14", // hover do vermelho
          redDeep: "#7A130E", // sombras / gradientes profundos
          silverHi: "#F4F4F2", // topo do gradiente metálico (texto principal)
          silverLo: "#8E8E8C", // base do gradiente metálico
          muted: "#9C9C9A", // texto secundário
          line: "#232323", // linhas/bordas sutis
        },
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-roboto)", "sans-serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
      },
      boxShadow: {
        "red-glow": "0 8px 30px rgba(226, 35, 26, 0.45)",
        "red-glow-lg": "0 20px 60px rgba(226, 35, 26, 0.28)",
      },
      backgroundImage: {
        "carbon-weave":
          "repeating-linear-gradient(115deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 8px)",
        "metal-text": "linear-gradient(180deg, #F4F4F2 35%, #8E8E8C 100%)",
        blueprint:
          "linear-gradient(rgba(226,35,26,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(226,35,26,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "34px 34px",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            filter: "drop-shadow(0 0 0px rgba(226,35,26,0))",
            transform: "scale(1)",
          },
          "50%": {
            filter: "drop-shadow(0 0 8px rgba(226,35,26,0.85))",
            transform: "scale(1.04)",
          },
        },
        slideUp: {
          "0%": { transform: "translateY(12px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 2.6s ease-in-out infinite",
        "slide-up": "slideUp 0.35s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
