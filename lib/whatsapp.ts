import { BRAND } from "./constants";

/**
 * Monta a mensagem de orçamento que será enviada pelo próprio usuário
 * no WhatsApp da Camadel. A ideia: o usuário seleciona itens pelo
 * catálogo, e essa seleção vira o corpo da mensagem — pronta para enviar,
 * sem formulário, sem "carrinho", sem checkout.
 */
export function buildQuoteMessage(items: string[]): string {
  if (items.length === 0) {
    return "Olá, Camadel! Gostaria de solicitar um orçamento para a minha obra.";
  }

  const lista = items.map((item) => `• ${item}`).join("\n");
  return `Olá, Camadel! Gostaria de solicitar um orçamento para os seguintes itens:\n\n${lista}\n\nPodem me ajudar?`;
}

/**
 * Mensagem usada pelo formulário de contato — reúne os dados informados
 * e (se houver) os itens já selecionados no catálogo.
 */
export function buildContactMessage(input: {
  name: string;
  company?: string;
  contact: string;
  subject: string;
  message: string;
  items?: string[];
}): string {
  const lines = [
    `Olá, Camadel! Meu nome é ${input.name}.`,
    input.company ? `Empresa: ${input.company}` : null,
    `Contato: ${input.contact}`,
    `Assunto: ${input.subject}`,
    input.message ? `Mensagem: ${input.message}` : null,
    input.items && input.items.length > 0
      ? `Itens de interesse:\n${input.items.map((item) => `• ${item}`).join("\n")}`
      : null,
  ].filter(Boolean);

  return lines.join("\n");
}

export function getWhatsAppUrl(message: string): string {
  return `https://wa.me/${BRAND.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function getQuoteWhatsAppUrl(items: string[]): string {
  return getWhatsAppUrl(buildQuoteMessage(items));
}
