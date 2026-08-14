"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useQuote } from "@/lib/quote-context";
import { buildQuoteMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export function QuickLeadForm() {
  const { items } = useQuote();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const message = buildQuoteMessage(items, {
      name: name || undefined,
      phone: phone || undefined,
      note: note || undefined,
    });
    window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="bg-camadel-charcoal py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-sm border border-camadel-line bg-camadel-black p-8 sm:p-10"
        >
          <div className="mb-7 text-center">
            <p className="eyebrow">Resposta rápida</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-camadel-silverHi sm:text-3xl">
              Receba seu orçamento em até 2 horas úteis
            </h2>
            <p className="mt-2 text-sm text-camadel-muted">
              Deixe nome, WhatsApp e o que sua obra precisa — nossa equipe
              retorna com uma proposta.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm text-camadel-silverHi">
              Nome
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-sm border border-camadel-line bg-camadel-charcoal px-4 py-3 text-white outline-none focus:border-camadel-red"
                placeholder="Seu nome"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-camadel-silverHi">
              WhatsApp
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-sm border border-camadel-line bg-camadel-charcoal px-4 py-3 text-white outline-none focus:border-camadel-red"
                placeholder="(11) 99999-9999"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-camadel-silverHi sm:col-span-2">
              O que sua obra precisa?
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                className="resize-none rounded-sm border border-camadel-line bg-camadel-charcoal px-4 py-3 text-white outline-none focus:border-camadel-red"
                placeholder={
                  items.length
                    ? `Sua lista de cotação com ${items.length} ite${items.length > 1 ? "ns" : "m"} será enviada junto.`
                    : "Descreva produtos, quantidades ou aplicação (opcional)"
                }
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-camadel-red px-6 py-3.5 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-camadel-redDark sm:col-span-2"
            >
              <MessageCircle size={18} />
              Receber orçamento via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
