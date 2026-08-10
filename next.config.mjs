/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Adicione aqui os domínios de um futuro CDN/CMS de imagens
    // (ex.: Vercel Blob, Cloudinary, S3) quando as fotos reais dos
    // produtos forem integradas às Categorias.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
