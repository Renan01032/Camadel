import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { QUEM_SOMOS } from "@/lib/constants";
import { SplitPanel } from "@/components/camadel/SplitPanel";
import { TrustStrip } from "@/components/camadel/TrustStrip";
import { MarcasParceiras } from "@/components/camadel/MarcasParceiras";
import { CTAFinal } from "@/components/camadel/CTAFinal";

export const metadata: Metadata = {
  title: "Quem Somos",
  description:
    "Conheça a Camadel Ferramentas: parceria, qualidade e atendimento especializado para construtoras e profissionais da construção civil.",
};

export default function QuemSomosPage() {
  return (
    <main className="pt-16">
      <SplitPanel
        eyebrow={QUEM_SOMOS.eyebrow}
        title={QUEM_SOMOS.title}
        image={QUEM_SOMOS.image}
        imageAlt={QUEM_SOMOS.imageAlt}
        frameLabel="Camadel / Equipe"
      >
        {QUEM_SOMOS.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <p className="font-display text-lg font-medium text-camadel-silverHi">
          {QUEM_SOMOS.highlight}
        </p>
        <Link
          href="/contato"
          className="mt-2 inline-flex w-fit items-center gap-3 border-b border-camadel-red pb-2 font-display font-bold uppercase text-camadel-silverHi hover:text-camadel-red"
        >
          Converse com nossa equipe <ArrowRight size={17} />
        </Link>
      </SplitPanel>

      <TrustStrip />
      <MarcasParceiras />
      <CTAFinal />
    </main>
  );
}
