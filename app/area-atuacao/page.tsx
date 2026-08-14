import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { AREA_ATUACAO, WHATSAPP_LINK } from "@/lib/constants";
import { ICON_MAP } from "@/lib/icon-map";
import { PageIntro } from "@/components/camadel/PageIntro";
import { BlueprintFrame } from "@/components/camadel/BlueprintFrame";
import { TrustStrip } from "@/components/camadel/TrustStrip";

export const metadata: Metadata = {
  title: "Área de Atuação",
  description:
    "A Camadel atende toda a capital paulista e região metropolitana de São Paulo, com foco no ABC Paulista.",
};

export default function AreaAtuacaoPage() {
  return (
    <main>
      <PageIntro eyebrow={AREA_ATUACAO.eyebrow} title={AREA_ATUACAO.title}>
        {AREA_ATUACAO.text}
      </PageIntro>

      <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
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
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {AREA_ATUACAO.benefits.map((b) => {
            const Icon = ICON_MAP[b.icon];
            return (
              <div
                key={b.title}
                className="rounded-xl border border-camadel-line bg-camadel-charcoal p-6"
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
          <Link
            href="/contato"
            className="inline-flex items-center gap-2 rounded-full bg-camadel-red px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-camadel-redDark"
          >
            Falar com consultor agora
          </Link>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-camadel-silverHi transition-colors hover:border-camadel-red hover:text-camadel-red"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>
      </section>

      <TrustStrip />
    </main>
  );
}
