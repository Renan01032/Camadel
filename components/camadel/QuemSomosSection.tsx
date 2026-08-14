import { ArrowRight } from "lucide-react";
import { QUEM_SOMOS } from "@/lib/constants";
import { SplitPanel } from "./SplitPanel";

export function QuemSomosSection() {
  return (
    <SplitPanel
      id="quem-somos"
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
      <a
        href="#contato"
        className="mt-2 inline-flex w-fit items-center gap-3 border-b border-camadel-red pb-2 font-display font-bold uppercase text-camadel-silverHi hover:text-camadel-red"
      >
        Converse com nossa equipe <ArrowRight size={17} />
      </a>
    </SplitPanel>
  );
}
