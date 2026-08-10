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
          steel: "#2A2A2A", // bordas padrão
          steelLight: "#3A3A3A", // bordas em hover/estado ativo
          red: "#E2231A", // vermelho vibrante — CTAs, ícones, destaques
          redDark: "#A61B14", // hover do vermelho
          silverHi: "#F2F2F0", // topo do gradiente metálico (texto principal)
          silverLo: "#8E8E8C", // base do gradiente metálico
          muted: "#9C9C9A", // texto secundário
        },
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"], // headline / wordmark — réplica do peso da logo
        body: ["var(--font-roboto)", "sans-serif"], // texto corrido
        mono: ["var(--font-roboto-mono)", "monospace"], // eyebrows técnicos / specs
      },
      boxShadow: {
        "red-glow": "0 8px 30px rgba(226, 35, 26, 0.45)",
      },
      backgroundImage: {
        "carbon-weave":
          "repeating-linear-gradient(115deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 8px)",
        "metal-text": "linear-gradient(180deg, #F2F2F0 40%, #8E8E8C 100%)",
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
      },
      animation: {
        "pulse-glow": "pulseGlow 2.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
