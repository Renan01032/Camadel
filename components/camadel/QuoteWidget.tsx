"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Trash2, X } from "lucide-react";
import { useQuote } from "@/lib/quote-context";
import { getQuoteWhatsAppUrl, getWhatsAppUrl } from "@/lib/whatsapp";

export function QuoteWidget() {
  const { items, count, isOpen, toggleOpen, close, removeItem, clear } = useQuote();

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-[min(90vw,360px)] overflow-hidden rounded-sm border border-camadel-red bg-camadel-charcoal shadow-2xl shadow-black/60"
          >
            <div className="flex items-center justify-between border-b border-camadel-steel bg-camadel-charcoal2 px-4 py-3">
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-wide text-camadel-silverHi">
                  Sua Cotação
                </p>
                <p className="text-xs text-camadel-muted">
                  {count > 0 ? `${count} ${count === 1 ? "item selecionado" : "itens selecionados"}` : "Nenhum item selecionado"}
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Fechar"
                className="rounded-sm p-1.5 text-camadel-muted transition-colors hover:bg-camadel-black hover:text-camadel-silverHi"
              >
                <X size={16} />
              </button>
            </div>

            {count > 0 ? (
              <>
                <ul className="max-h-56 divide-y divide-camadel-steel overflow-y-auto">
                  {items.map((item) => (
                    <li key={item} className="flex items-center justify-between gap-3 px-4 py-2.5">
                      <span className="text-sm text-camadel-silverHi">{item}</span>
                      <button
                        type="button"
                        onClick={() => removeItem(item)}
                        aria-label={`Remover ${item}`}
                        className="shrink-0 text-camadel-muted transition-colors hover:text-camadel-red"
                      >
                        <X size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 border-t border-camadel-steel p-3">
                  <button
                    type="button"
                    onClick={clear}
                    className="inline-flex items-center gap-1.5 rounded-sm px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-camadel-muted transition-colors hover:text-camadel-red"
                  >
                    <Trash2 size={13} />
                    Limpar
                  </button>
                  <a
                    href={getQuoteWhatsAppUrl(items)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-camadel-red px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-camadel-redDark"
                  >
                    <MessageCircle size={14} />
                    Enviar no WhatsApp
                  </a>
                </div>
              </>
            ) : (
              <div className="p-4">
                <p className="mb-4 text-sm leading-relaxed text-camadel-muted">
                  Navegue pelo catálogo e adicione itens à sua cotação, ou fale com a gente
                  agora mesmo.
                </p>
                <a
                  href={getWhatsAppUrl("Olá, Camadel! Gostaria de solicitar um orçamento para a minha obra.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-sm bg-camadel-red px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-camadel-redDark"
                >
                  <MessageCircle size={14} />
                  Falar no WhatsApp
                </a>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={toggleOpen}
        whileTap={{ scale: 0.94 }}
        aria-label="Abrir cotação / WhatsApp"
        className="relative flex size-14 items-center justify-center rounded-full bg-camadel-red text-white shadow-lg shadow-camadel-red/30 transition-transform hover:scale-105"
      >
        <MessageCircle size={26} />
        {count > 0 && (
          <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full border-2 border-camadel-black bg-camadel-silverHi text-[11px] font-bold text-camadel-black">
            {count}
          </span>
        )}
      </motion.button>
    </div>
  );
}
