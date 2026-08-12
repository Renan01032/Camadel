"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, MessageCircle, X } from "lucide-react";
import { useQuote } from "@/lib/quote-context";
import { buildContactMessage, getWhatsAppUrl } from "@/lib/whatsapp";

const SUBJECTS = ["Orçamento", "Visita Técnica", "Dúvida"] as const;

export function ContactForm() {
  const { items, removeItem } = useQuote();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [subject, setSubject] = useState<(typeof SUBJECTS)[number]>("Orçamento");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const fullMessage = buildContactMessage({
      name,
      company: company || undefined,
      contact,
      subject,
      message,
      items,
    });

    window.open(getWhatsAppUrl(fullMessage), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-camadel-steel bg-camadel-charcoal p-6 lg:p-8"
    >
      {items.length > 0 && (
        <div className="mb-6 rounded-sm border border-camadel-red/50 bg-camadel-red/5 p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-camadel-red">
            Itens selecionados no catálogo
          </p>
          <div className="flex flex-wrap gap-2">
            {items.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1.5 rounded-sm bg-camadel-black px-2.5 py-1 text-xs text-camadel-silverHi"
              >
                {item}
                <button
                  type="button"
                  onClick={() => removeItem(item)}
                  aria-label={`Remover ${item}`}
                  className="text-camadel-muted hover:text-camadel-red"
                >
                  <X size={11} />
                </button>
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-camadel-silverHi">
          Nome completo
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-camadel-steel bg-camadel-black px-4 py-3 text-white outline-none focus:border-camadel-red"
            placeholder="Seu nome"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-camadel-silverHi">
          Telefone / WhatsApp
          <input
            required
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="border border-camadel-steel bg-camadel-black px-4 py-3 text-white outline-none focus:border-camadel-red"
            placeholder="(11) 99999-9999"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-camadel-silverHi sm:col-span-2">
          Empresa (opcional)
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="border border-camadel-steel bg-camadel-black px-4 py-3 text-white outline-none focus:border-camadel-red"
            placeholder="Nome da construtora / empresa"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm text-camadel-silverHi sm:col-span-2">
          Assunto
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value as (typeof SUBJECTS)[number])}
            className="border border-camadel-steel bg-camadel-black px-4 py-3 text-white outline-none focus:border-camadel-red"
          >
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-2 text-sm text-camadel-silverHi sm:col-span-2">
          Mensagem
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="resize-none border border-camadel-steel bg-camadel-black px-4 py-3 text-white outline-none focus:border-camadel-red"
            placeholder="Liste os itens e quantidades aqui, ou descreva sua necessidade"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-3 bg-camadel-red px-5 py-4 font-display font-bold uppercase tracking-wide text-white transition-colors hover:bg-camadel-redDark"
      >
        <MessageCircle size={18} />
        Enviar Solicitação pelo WhatsApp
        <ArrowRight size={18} />
      </button>

      <p className="mt-3 text-center text-xs text-camadel-muted">
        Ao enviar, o WhatsApp abre em uma nova aba com sua mensagem pronta para envio.
      </p>

      {sent && (
        <p className="mt-4 text-center text-sm text-camadel-red">
          Sua mensagem foi montada e o WhatsApp foi aberto. Se não abriu automaticamente,
          verifique o bloqueador de pop-ups do seu navegador.
        </p>
      )}
    </form>
  );
}
