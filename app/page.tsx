import { Hero } from "@/components/camadel/Hero";
import { Diferenciais } from "@/components/camadel/Diferenciais";
import { CategoriasGrid } from "@/components/camadel/CategoriasGrid";
import { MarcasParceiras } from "@/components/camadel/MarcasParceiras";
import { QuickLeadForm } from "@/components/camadel/QuickLeadForm";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Diferenciais />
      <CategoriasGrid />
      <MarcasParceiras />
      <QuickLeadForm />
    </main>
  );
}
