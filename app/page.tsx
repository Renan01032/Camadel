import { Hero } from "@/components/camadel/Hero";
import { Diferenciais } from "@/components/camadel/Diferenciais";
import { CategoriasGrid } from "@/components/camadel/CategoriasGrid";
import { QuemSomosSection } from "@/components/camadel/QuemSomosSection";
import { AreaAtuacaoSection } from "@/components/camadel/AreaAtuacaoSection";
import { MarcasParceiras } from "@/components/camadel/MarcasParceiras";
import { ContatoSection } from "@/components/camadel/ContatoSection";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Diferenciais />
      <CategoriasGrid />
      <QuemSomosSection />
      <AreaAtuacaoSection />
      <MarcasParceiras />
      <ContatoSection />
    </main>
  );
}
