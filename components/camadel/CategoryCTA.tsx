"use client";

import { MessageCircle } from "lucide-react";
import type { CatalogCategory } from "@/lib/constants";
import { buildQuoteMessage, getWhatsAppUrl } from "@/lib/whatsapp";

export function CategoryCTA({ category }: { category: CatalogCategory }) {
  const labels = category.subsections.map((sub) => `${sub.title} (${category.navLabel})`);
  const href = getWhatsAppUrl(buildQuoteMessage(labels));

  return (
    <div className="rounded-sm border border-camadel-red bg-camadel-charcoal2 p-8 text-center sm:p-10">
      <h3 className="mb-3 font-display text-xl font-semibold text-camadel-silverHi sm:text-2xl">
        Precisa de {category.navLabel.toLowerCase()} para sua obra?
      </h3>
      <p className="mx-auto mb-6 max-w-lg text-sm text-camadel-muted">
        Fale agora com um especialista Camadel e receba uma cotação para a linha completa de{" "}
        {category.navLabel}.
      </p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-sm bg-camadel-red px-7 py-3.5 font-body text-sm font-semibold tracking-wide text-white transition-all hover:bg-camadel-redDark hover:shadow-red-glow"
      >
        <MessageCircle size={16} />
        Solicitar Orçamento desta Linha
      </a>
    </div>
  );
}
