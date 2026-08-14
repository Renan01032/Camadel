import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { AREA_ATUACAO, WHATSAPP_LINK } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";
import { RulerDivider } from "./RulerDivider";
import { BlueprintFrame } from "./BlueprintFrame";

export function AreaAtuacaoSection() {
  return (
    <section id="area-atuacao" className="scroll-mt-24 bg-camadel-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <RulerDivider label={AREA_ATUACAO.eyebrow} />

        <div className="mt-8 max-w-2xl">
          <h2 className="section-title">{AREA_ATUACAO.title}</h2>
          <p className="mt-5 text-sm leading-relaxed text-camadel-muted sm:text-base">
            {AREA_ATUACAO.text}
          </p>
        </div>

        <div className="mt-10">
          <BlueprintFrame label="Cobertura Camadel">
            <div className="overflow-hidden rounded-xl border border-camadel-line">
              <Image
                src={AREA_ATUACAO.image}
                alt={AREA_ATUACAO.imageAlt}
                width={1600}
                height={800}
                className="aspect-[2/1] w-full object-cover"
              />
            </div>
          </BlueprintFrame>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AREA_ATUACAO.benefits.map((b) => {
            const Icon = ICON_MAP[b.icon];
            return (
              <div
                key={b.title}
                className="rounded-xl border border-camadel-line bg-camadel-black p-6"
              >
                <Icon className="mb-3 text-camadel-red" size={24} />
                <h3 className="mb-1.5 font-display text-sm font-semibold uppercase tracking-wide text-camadel-silverHi">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-camadel-muted">{b.text}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-full bg-camadel-red px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-camadel-redDark"
          >
            Falar com consultor agora
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-camadel-line px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-camadel-silverHi transition-colors hover:border-camadel-red hover:text-camadel-red"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
