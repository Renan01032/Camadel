import { Hero } from "@/components/camadel/Hero";
import { Diferenciais } from "@/components/camadel/Diferenciais";
import { Categorias } from "@/components/camadel/Categorias";
import { FeaturedProducts } from "@/components/camadel/FeaturedProducts";
import { BrandsMarquee } from "@/components/camadel/BrandsMarquee";
import { CompromissoBanner } from "@/components/camadel/CompromissoBanner";
import { CTAFinal } from "@/components/camadel/CTAFinal";
import { TrustBar } from "@/components/camadel/TrustBar";

export default function HomePage() {
  return (
    <main id="inicio">
      <Hero />
      <div className="mx-auto -mt-1 max-w-7xl px-5 sm:px-8">
        <TrustBar className="relative z-10 -translate-y-6 sm:-translate-y-8" />
      </div>
      <Diferenciais />
      <Categorias />
      <FeaturedProducts />
      <BrandsMarquee />
      <section className="bg-camadel-black py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <CompromissoBanner />
        </div>
      </section>
      <CTAFinal />
    </main>
  );
}
