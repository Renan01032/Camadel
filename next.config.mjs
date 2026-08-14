/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Apenas WebP (evita gerar também AVIF — reduz pela metade as variações
    // que a Vercel precisa otimizar/armazenar em cache no plano gratuito).
    formats: ["image/webp"],
    // Conjunto enxuto de larguras, alinhado aos breakpoints reais do layout,
    // em vez da lista padrão (8 larguras x 8 tamanhos) do Next.js — reduz
    // bastante o número de variações geradas por imagem.
    deviceSizes: [640, 828, 1080, 1440, 1920],
    imageSizes: [64, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
