"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { CONTATO_SUBJECTS } from "@/lib/constants";
import { useQuote } from "@/lib/quote-context";
import { buildQuoteMessage, buildWhatsAppUrl } from "@/lib/whatsapp";

export function ContactForm() {
  const { items } = useQuote();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState<string>(CONTATO_SUBJECTS[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const note = [email ? `E-mail: ${email}` : null, message || null]
      .filter(Boolean)
      .join("\n");
    const text = buildQuoteMessage(items, {
      name,
      phone,
      company: company || undefined,
      subject,
      note: note || undefined,
    });
    window.open(buildWhatsAppUrl(text), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-camadel-line bg-camadel-charcoal p-6 lg:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-camadel-silverHi">
          Nome completo
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-lg border border-camadel-line bg-camadel-black px-4 py-3 text-white outline-none focus:border-camadel-red"
            placeholder="Seu nome"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-camadel-silverHi">
          Telefone / WhatsApp
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-lg border border-camadel-line bg-camadel-black px-4 py-3 text-white outline-none focus:border-camadel-red"
            placeholder="(11) 99999-9999"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-camadel-silverHi">
          E-mail corporativo
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-camadel-line bg-camadel-black px-4 py-3 text-white outline-none focus:border-camadel-red"
            placeholder="voce@empresa.com.br"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-camadel-silverHi">
          Empresa <span className="text-camadel-muted">(opcional)</span>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="rounded-lg border border-camadel-line bg-camadel-black px-4 py-3 text-white outline-none focus:border-camadel-red"
            placeholder="Nome da construtora / empresa"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-camadel-silverHi sm:col-span-2">
          Assunto
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="rounded-lg border border-camadel-line bg-camadel-black px-4 py-3 text-white outline-none focus:border-camadel-red"
          >
            {CONTATO_SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2 text-sm text-camadel-silverHi sm:col-span-2">
          Mensagem
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="resize-none rounded-lg border border-camadel-line bg-camadel-black px-4 py-3 text-white outline-none focus:border-camadel-red"
            placeholder={
              items.length
                ? `Sua lista de cotação (${items.length} ite${items.length > 1 ? "ns" : "m"}) será enviada junto com esta mensagem.`
                : "Liste os itens e quantidades, ou descreva sua necessidade"
            }
          />
        </label>
      </div>

      <p className="mt-4 text-xs text-camadel-muted">
        Ao enviar, abriremos o WhatsApp com sua solicitação já preenchida
        para envio direto à equipe Camadel.
      </p>

      <button
        type="submit"
        className="mt-4 flex w-full items-center justify-center gap-3 rounded-full bg-camadel-red px-5 py-4 font-display text-sm font-bold uppercase tracking-wide text-white transition hover:bg-camadel-redDark"
      >
        <MessageCircle size={18} />
        Enviar solicitação via WhatsApp
        <ArrowRight size={18} />
      </button>

      {sent && (
        <p className="mt-4 text-center text-sm text-camadel-red">
          WhatsApp aberto em nova aba com sua solicitação. Se não abriu,
          verifique o bloqueador de pop-ups do navegador.
        </p>
      )}
    </form>
  );
}
