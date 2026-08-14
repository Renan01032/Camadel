"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ClipboardList, Minus, Plus, Trash2, X } from "lucide-react";
import { useQuote, type QuoteItem } from "@/lib/quote-context";
import { quoteWhatsAppUrl } from "@/lib/whatsapp";

function groupByCategory(items: QuoteItem[]) {
  const map = new Map<string, QuoteItem[]>();
  for (const item of items) {
    const list = map.get(item.category) ?? [];
    list.push(item);
    map.set(item.category, list);
  }
  return Array.from(map.entries());
}

export function QuoteWidget() {
  const {
    items,
    count,
    hydrated,
    isDrawerOpen,
    openDrawer,
    closeDrawer,
    removeItem,
    updateQty,
    clear,
  } = useQuote();

  const grouped = groupByCategory(items);
  const waUrl = quoteWhatsAppUrl(items);

  return (
    <>
      <button
        type="button"
        onClick={openDrawer}
        aria-label="Abrir lista de cotação"
        className="fixed bottom-6 right-6 z-40 flex h-14 items-center gap-2 rounded-full bg-camadel-red px-5 text-white shadow-red-glow-lg transition hover:scale-105 hover:bg-camadel-redDark"
      >
        <ClipboardList size={22} />
        {hydrated && count > 0 && (
          <span className="font-display text-sm font-bold">{count}</span>
        )}
      </button>

      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-camadel-line bg-camadel-charcoal"
            >
              <div className="flex items-center justify-between border-b border-camadel-line px-5 py-4">
                <div>
                  <p className="eyebrow">Solicitação de orçamento</p>
                  <h2 className="font-display text-lg font-semibold text-camadel-silverHi">
                    Sua lista de cotação
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={closeDrawer}
                  aria-label="Fechar"
                  className="flex h-9 w-9 items-center justify-center rounded-sm text-camadel-muted hover:text-camadel-red"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-5 py-5">
                {items.length === 0 ? (
                  <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                    <ClipboardList size={40} className="text-camadel-steelLight" />
                    <div>
                      <p className="font-display text-base font-medium text-camadel-silverHi">
                        Sua lista está vazia
                      </p>
                      <p className="mt-1 max-w-xs text-sm text-camadel-muted">
                        Navegue pelo catálogo e clique em &ldquo;Adicionar à
                        cotação&rdquo; nos itens que sua obra precisa.
                      </p>
                    </div>
                    <Link
                      href="/catalogo"
                      onClick={closeDrawer}
                      className="mt-2 inline-flex items-center rounded-sm border border-camadel-red px-5 py-2.5 font-mono text-xs font-semibold uppercase tracking-wide text-camadel-red hover:bg-camadel-red hover:text-white"
                    >
                      Ver catálogo
                    </Link>
                  </div>
                ) : (
                  <div className="flex flex-col gap-6">
                    {grouped.map(([category, catItems]) => (
                      <div key={category}>
                        <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-camadel-red">
                          {category}
                        </p>
                        <div className="flex flex-col gap-2">
                          {catItems.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center justify-between gap-3 rounded-sm border border-camadel-line bg-camadel-black px-3 py-2.5"
                            >
                              <span className="text-sm text-camadel-silverHi">
                                {item.name}
                              </span>
                              <div className="flex shrink-0 items-center gap-2">
                                <div className="flex items-center rounded-sm border border-camadel-line">
                                  <button
                                    type="button"
                                    aria-label="Diminuir quantidade"
                                    onClick={() => updateQty(item.id, item.qty - 1)}
                                    className="flex h-7 w-7 items-center justify-center text-camadel-muted hover:text-camadel-red"
                                  >
                                    <Minus size={12} />
                                  </button>
                                  <span className="w-6 text-center font-mono text-xs text-camadel-silverHi">
                                    {item.qty}
                                  </span>
                                  <button
                                    type="button"
                                    aria-label="Aumentar quantidade"
                                    onClick={() => updateQty(item.id, item.qty + 1)}
                                    className="flex h-7 w-7 items-center justify-center text-camadel-muted hover:text-camadel-red"
                                  >
                                    <Plus size={12} />
                                  </button>
                                </div>
                                <button
                                  type="button"
                                  aria-label={`Remover ${item.name}`}
                                  onClick={() => removeItem(item.id)}
                                  className="flex h-7 w-7 items-center justify-center text-camadel-muted hover:text-camadel-red"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {items.length > 0 && (
                <div className="border-t border-camadel-line px-5 py-5">
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-sm bg-camadel-red px-5 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-camadel-redDark"
                  >
                    Enviar via WhatsApp
                  </a>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <Link
                      href="/contato"
                      onClick={closeDrawer}
                      className="text-xs text-camadel-muted underline-offset-4 hover:text-camadel-silverHi hover:underline"
                    >
                      Ir para o formulário de contato
                    </Link>
                    <button
                      type="button"
                      onClick={clear}
                      className="text-xs text-camadel-muted underline-offset-4 hover:text-camadel-red hover:underline"
                    >
                      Limpar lista
                    </button>
                  </div>
                </div>
              )}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
