/**
 * Conteúdo estático da Landing Page Camadel.
 * Mantido separado dos componentes visuais para facilitar futura
 * migração para CMS (ex.: alimentar Categorias a partir do catálogo real).
 */

export const NAV_LINKS = [
  { label: "Ferramentas Elétricas", href: "#categorias" },
  { label: "Manuais", href: "#" },
  { label: "Kit de Ferramentas", href: "#categorias" },
  { label: "Contato", href: "#contato" },
] as const;

export const HERO_STATS = [
  { number: "12+", label: "anos de mercado" },
  { number: "50 mil+", label: "obras atendidas" },
  { number: "4.9/5", label: "avaliação média" },
] as const;

export const DIFERENCIAIS = [
  {
    icon: "ShieldCheck",
    title: "Durabilidade Extrema",
    text: "Aço tratado e componentes forjados para resistir a impacto, corrosão e uso intensivo diário.",
  },
  {
    icon: "Compass",
    title: "Precisão de Engenharia",
    text: "Tolerâncias milimétricas testadas em bancada — cada peça calibrada antes de sair da fábrica.",
  },
  {
    icon: "Hand",
    title: "Ergonomia Avançada",
    text: "Empunhaduras antiderrapantes e peso balanceado para reduzir fadiga em jornadas longas.",
  },
  {
    icon: "Headphones",
    title: "Suporte Especializado",
    text: "Time técnico que entende de obra — assistência rápida e peças de reposição originais.",
  },
] as const;

export const CATEGORIAS = [
  {
    icon: "Hammer",
    title: "Martelos e Marretas",
    text: "Impacto controlado para cada tipo de serviço, do acabamento à demolição.",
    // TODO(produto): substituir pela foto real do produto, ex: "/products/martelos.jpg"
    image: null as string | null,
  },
  {
    icon: "Scissors",
    title: "Serras de Precisão",
    text: "Corte limpo e reto em madeira, metal e alvenaria leve.",
    image: null as string | null,
  },
  {
    icon: "Zap",
    title: "Kits de Ferramentas Elétricas",
    text: "Baterias de longa duração e potência real para o dia a dia da obra.",
    image: null as string | null,
  },
  {
    icon: "Ruler",
    title: "Chaves e Medição",
    text: "Paquímetros, trenas e chaves calibradas com precisão de engenharia.",
    image: null as string | null,
  },
] as const;

export const DEPOIMENTOS = [
  {
    name: "Eng. Rafael Souza",
    role: "Engenheiro Civil, RS Construções",
    text: "Uso as ferramentas Camadel em todos os canteiros que coordeno. Baixíssima taxa de manutenção mesmo em obras pesadas.",
  },
  {
    name: "Marcos Vieira",
    role: "Empreiteiro, MV Reformas",
    text: "A durabilidade compensa o investimento. Comprei o kit elétrico há dois anos e ainda funciona como novo.",
  },
  {
    name: "Eng. Camila Torres",
    role: "Gerente de Obras, Torres Engenharia",
    text: "Precisão de verdade nos instrumentos de medição. Isso reduz retrabalho e erro de projeto em campo.",
  },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Produtos",
    links: ["Ferramentas Manuais", "Ferramentas Elétricas", "Kits Profissionais", "Medição e Precisão"],
  },
  {
    title: "Empresa",
    links: ["Sobre a Camadel", "Trabalhe Conosco", "Revenda Autorizada"],
  },
  {
    title: "Suporte",
    links: ["Central de Ajuda", "Garantia", "Assistência Técnica"],
  },
] as const;

// TODO: substituir pelo link real do WhatsApp Business (ADR-009) e telefone/CNPJ oficiais.
export const WHATSAPP_LINK = "https://wa.me/5511000000000";
export const CONTACT_PHONE = "(11) 4000-0000";
export const CONTACT_EMAIL = "contato@camadel.com.br";
