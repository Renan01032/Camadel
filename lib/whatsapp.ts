import { WHATSAPP_LINK } from "./constants";
import type { QuoteItem } from "./quote-context";

type MessageOptions = {
  name?: string;
  phone?: string;
  company?: string;
  subject?: string;
  note?: string;
};

/**
 * Monta a mensagem de orçamento em texto puro, agrupando os itens
 * selecionados por categoria para facilitar a leitura da equipe comercial.
 */
export function buildQuoteMessage(items: QuoteItem[], opts: MessageOptions = {}): string {
  const lines: string[] = [];

  lines.push("Olá, Camadel! Gostaria de solicitar um orçamento.");

  const contactLines: string[] = [];
  if (opts.name) contactLines.push(`Nome: ${opts.name}`);
  if (opts.company) contactLines.push(`Empresa: ${opts.company}`);
  if (opts.phone) contactLines.push(`Telefone: ${opts.phone}`);
  if (opts.subject) contactLines.push(`Assunto: ${opts.subject}`);
  if (contactLines.length) {
    lines.push("");
    lines.push(...contactLines);
  }

  if (items.length > 0) {
    lines.push("");
    lines.push(`Itens de interesse (${items.length}):`);

    const byCategory = new Map<string, QuoteItem[]>();
    for (const item of items) {
      const list = byCategory.get(item.category) ?? [];
      list.push(item);
      byCategory.set(item.category, list);
    }

    for (const [category, catItems] of byCategory) {
      lines.push(`\n*${category}*`);
      for (const item of catItems) {
        const qtyLabel = item.qty > 1 ? ` — ${item.qty} un.` : "";
        lines.push(`• ${item.name}${qtyLabel}`);
      }
    }
  }

  if (opts.note) {
    lines.push("");
    lines.push(opts.note);
  }

  lines.push("");
  lines.push("Aguardo o retorno. Obrigado!");

  return lines.join("\n");
}

export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
}

export function quoteWhatsAppUrl(items: QuoteItem[], opts: MessageOptions = {}): string {
  return buildWhatsAppUrl(buildQuoteMessage(items, opts));
}
