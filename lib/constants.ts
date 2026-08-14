// -----------------------------------------------------------------------
// Camadel — camada de dados. Nenhum componente deve conter texto/imagem
// "hardcoded"; tudo o que é conteúdo vive aqui. Mudanças de conteúdo ou
// de assets (fotos) devem ser feitas neste arquivo, nunca no JSX.
// -----------------------------------------------------------------------

export const SITE_NAME = "Camadel Ferramentas";
export const SITE_URL = "https://www.camadel.com.br";

export const WHATSAPP_PHONE_DISPLAY = "(11) 99168-0717";
export const WHATSAPP_PHONE_E164 = "5511991680717";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE_E164}`;
export const CONTACT_PHONE = WHATSAPP_PHONE_DISPLAY;
export const CONTACT_EMAIL = "contato@camadel.com.br";
export const CONTACT_ADDRESS = "ABC Paulista, São Paulo — SP";

export const NAV_LINKS = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Catálogo", href: "/catalogo" },
  { label: "Área de Atuação", href: "/area-atuacao" },
  { label: "Contato", href: "/contato" },
] as const;

// -----------------------------------------------------------------------
// Hero (Home)
// -----------------------------------------------------------------------
export const HERO = {
  eyebrow: "Ferramentas & Equipamentos para Construção",
  title: "O prazer no trabalho",
  titleAccent: "aperfeiçoa a obra.",
  subtitle:
    "Soluções completas em ferramentas, máquinas, EPIs, abrasivos, fixação e muito mais para atender sua obra do início ao fim.",
  image: "/images/hero-fullbleed.jpg",
  imageAlt: "Profissional Camadel utilizando martelete Makita em canteiro de obras, com ferramentas Vonder, Bosch e MTX",
} as const;

// -----------------------------------------------------------------------
// Diferenciais — 3 usam os selos gerados a partir do material da Camadel,
// 2 usam ícone Lucide desenhados no mesmo padrão visual (anel vermelho).
// -----------------------------------------------------------------------
export type Diferencial = {
  title: string;
  text: string;
  badgeImage?: string;
  icon?: string;
};

export const DIFERENCIAIS: Diferencial[] = [
  {
    title: "Produtos de Qualidade",
    text: "Marcas reconhecidas e materiais testados para o dia a dia pesado da obra.",
    badgeImage: "/images/badge-qualidade.png",
  },
  {
    title: "Entrega Rápida",
    text: "Agilidade logística para sua obra nunca parar por falta de material.",
    badgeImage: "/images/badge-entrega.png",
  },
  {
    title: "Atendimento Especializado",
    text: "Equipe técnica pronta para indicar a ferramenta certa para cada etapa.",
    badgeImage: "/images/badge-atendimento.png",
  },
  {
    title: "Marcas Líderes",
    text: "Vonder, Bosch, Makita, Würth, Fischer, Hilti, 3M e outras referências do mercado.",
    icon: "Award",
  },
  {
    title: "Soluções Completas",
    text: "Do fundamento ao acabamento: tudo em um único fornecedor.",
    icon: "PackageCheck",
  },
];

// -----------------------------------------------------------------------
// Categorias / Catálogo — fonte única de verdade para o menu, a grade da
// home e as páginas dinâmicas de catálogo (app/catalogo/[categoria]).
// -----------------------------------------------------------------------
export type Category = {
  slug: string;
  title: string;
  navLabel: string;
  tagline: string;
  intro: string;
  icon: string;
  image?: { panel: string; card: string; alt: string };
  items: string[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "manuais",
    title: "Ferramentas Manuais",
    navLabel: "Ferramentas Manuais",
    tagline: "Resistência para o dia a dia da obra.",
    intro:
      "Martelos, marretas, pás e ferramentas de acabamento com a robustez que o canteiro exige — pensadas para uso profissional intenso, turno após turno.",
    icon: "Hammer",
    image: {
      panel: "/images/categoria-manuais.jpg",
      card: "/images/categoria-manuais-card.jpg",
      alt: "Ferramentas manuais profissionais: martelo, marreta, pá e trena sobre bancada",
    },
    items: [
      "Martelos e marretas",
      "Pás e cavadeiras",
      "Enxadas e picaretas",
      "Talhadeiras e ponteiras",
      "Níveis e esquadros",
      "Trenas e prumos",
      "Colheres e desempenadeiras",
      "Réguas e escantilhões",
    ],
  },
  {
    slug: "eletricas",
    title: "Ferramentas Elétricas",
    navLabel: "Ferramentas Elétricas",
    tagline: "Potência para sua obra.",
    intro:
      "Furadeiras, marteletes, esmerilhadeiras e serras das marcas líderes do mercado, com desempenho para concreto, alvenaria, madeira e metal.",
    icon: "Zap",
    image: {
      panel: "/images/categoria-eletricas.jpg",
      card: "/images/categoria-eletricas-card.jpg",
      alt: "Profissional utilizando martelete Makita em bloco de concreto, com faíscas",
    },
    items: [
      "Furadeiras e parafusadeiras",
      "Marteletes rompedores",
      "Esmerilhadeiras angulares",
      "Serras circulares e tico-tico",
      "Lixadeiras orbitais",
      "Kits e maletas profissionais",
      "Baterias e carregadores",
      "Brocas e acessórios",
    ],
  },
  {
    slug: "abrasivos",
    title: "Abrasivos",
    navLabel: "Abrasivos",
    tagline: "O melhor acabamento.",
    intro:
      "Discos de corte, desbaste e flap, escovas de aço e cintas abrasivas para precisão de corte e acabamento em metal, concreto e madeira.",
    icon: "CircleDot",
    items: [
      "Discos de corte",
      "Discos de desbaste",
      "Discos flap",
      "Discos de fibra",
      "Escovas de aço",
      "Pontas montadas",
      "Cintas abrasivas",
      "Lixas em folha",
    ],
  },
  {
    slug: "epis",
    title: "Equipamentos de Proteção (EPIs)",
    navLabel: "EPIs",
    tagline: "Segurança em primeiro lugar.",
    intro:
      "Capacetes, óculos, luvas e proteção contra queda: equipamentos homologados para manter sua equipe segura em qualquer etapa da obra.",
    icon: "ShieldCheck",
    items: [
      "Capacetes de segurança",
      "Óculos de proteção",
      "Luvas de segurança",
      "Botinas e botas",
      "Cintos e talabartes",
      "Coletes refletivos",
      "Protetores auriculares",
      "Sinalização de obra",
    ],
  },
  {
    slug: "construcao",
    title: "Construção Civil",
    navLabel: "Construção Civil",
    tagline: "Tudo para cada etapa.",
    intro:
      "Da fundação ao reboco: carrinhos, betoneiras, argamassas e impermeabilizantes para manter o cronograma da obra em dia.",
    icon: "Building2",
    items: [
      "Ferramentas para alvenaria",
      "Betoneiras e acessórios",
      "Carrinhos de mão",
      "Elétrica e iluminação",
      "Hidráulica e conexões",
      "Cimentos e argamassas",
      "Impermeabilizantes",
      "Madeiras e compensados",
    ],
  },
  {
    slug: "limpeza",
    title: "Limpeza e Escritório",
    navLabel: "Limpeza e Escritório",
    tagline: "Organização e praticidade.",
    intro:
      "Itens de limpeza para o canteiro e materiais de escritório para o dia a dia administrativo da obra, em um único fornecedor.",
    icon: "Sparkles",
    items: [
      "Vassouras e rodos",
      "Baldes e produtos de limpeza",
      "Água sanitária e detergentes",
      "Papelaria e cadernos",
      "Canetas e marcadores",
      "Fitas adesivas",
      "Organização e arquivo",
      "Sacos e descartáveis",
    ],
  },
  {
    slug: "fixacao",
    title: "Acessórios e Fixação",
    navLabel: "Acessórios e Fixação",
    tagline: "Segurança em cada detalhe.",
    intro:
      "Parafusos, buchas, chumbadores e fixadores químicos de marcas como Fischer, Vonder, Hilti e Würth — resistência certificada para cada aplicação.",
    icon: "Bolt",
    image: {
      panel: "/images/categoria-fixacao.jpg",
      card: "/images/categoria-fixacao-card.jpg",
      alt: "Parafusos, buchas e fixadores das marcas Fischer, Vonder, Hilti e Würth",
    },
    items: [
      "Parafusos",
      "Porcas e arruelas",
      "Buchas e âncoras",
      "Chumbadores",
      "Abraçadeiras",
      "Barras roscadas",
      "Fixadores químicos",
      "Cabos e correntes",
    ],
  },
];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

// -----------------------------------------------------------------------
// Marcas parceiras
// -----------------------------------------------------------------------
export type Brand = {
  name: string;
  color: string;
  /** Caminho para o logo oficial (public/images/brands/*), quando disponível. */
  logo?: string;
  /** Cor do cartão que melhor contrasta com o logo (marcas com conteúdo
   * branco, como Bosch e Pado, precisam de cartão escuro). */
  card?: "light" | "dark";
};

export const BRANDS: Brand[] = [
  { name: "Vonder", color: "#F2A900", logo: "/images/brands/vonder.png", card: "dark" },
  { name: "Bosch", color: "#E20015", logo: "/images/brands/bosch.png", card: "dark" },
  { name: "Makita", color: "#0068B3", logo: "/images/brands/makita.png", card: "dark" },
  { name: "MTX", color: "#D8232A", logo: "/images/brands/mtx-white.png", card: "dark" },
  { name: "Starrett", color: "#E2001A", logo: "/images/brands/starrett.png", card: "dark" },
  { name: "Pado", color: "#E5175E", logo: "/images/brands/pado.png", card: "dark" },
];

// -----------------------------------------------------------------------
// Diferenciais/ícones da faixa de confiança (usados no topo de páginas
// internas)
// -----------------------------------------------------------------------
export const TRUST_STRIP = [
  { icon: "ShieldCheck", text: "Produtos de qualidade" },
  { icon: "Truck", text: "Entrega rápida" },
  { icon: "Headphones", text: "Atendimento especializado" },
  { icon: "PackageCheck", text: "Soluções completas" },
] as const;

// -----------------------------------------------------------------------
// Quem Somos
// -----------------------------------------------------------------------
export const QUEM_SOMOS = {
  eyebrow: "Quem somos",
  title: "Sua parceria para o sucesso da obra",
  image: "/images/institucional.jpg",
  imageAlt: "Profissional Camadel analisando planta de obra vestindo jaqueta com a marca",
  paragraphs: [
    "A Camadel Ferramentas fornece materiais para construção civil na região metropolitana de São Paulo, com foco em atender construtoras, engenheiros, mestres de obra e profissionais autônomos com agilidade e preço competitivo.",
    "Trabalhamos com marcas líderes de mercado — Vonder, Bosch, Makita, Würth, Fischer, Hilti e outras — para garantir que cada ferramenta entregue tenha a durabilidade que o canteiro de obras exige.",
    "Nossa equipe técnica está pronta para entender a necessidade do seu projeto e recomendar a solução certa, do primeiro ao último dia da obra.",
  ],
  highlight: "Nosso compromisso é com qualidade, confiança e parceria.",
} as const;

// -----------------------------------------------------------------------
// Área de Atuação
// -----------------------------------------------------------------------
export const AREA_ATUACAO = {
  eyebrow: "Área de atuação",
  title: "Atendimento focado e eficiente",
  image: "/images/mapa-area-atuacao.jpg",
  imageAlt: "Mapa de cobertura Camadel: foco em São Paulo capital e região metropolitana",
  text:
    "Localizados no ABC Paulista, atendemos toda a capital paulista e região metropolitana com estoque completo e agilidade de entrega para não deixar sua obra parar.",
  benefits: [
    {
      icon: "MapPin",
      title: "São Paulo e região",
      text: "Atendimento focado na capital paulista e no ABC.",
    },
    {
      icon: "Truck",
      title: "Entrega rápida",
      text: "Logística ágil para sua obra não parar.",
    },
    {
      icon: "ShieldCheck",
      title: "Parceria e confiança",
      text: "Relacionamento sólido com construtoras e profissionais.",
    },
    {
      icon: "PackageCheck",
      title: "Estoque completo",
      text: "Tudo o que você precisa em um só fornecedor.",
    },
  ],
} as const;

// -----------------------------------------------------------------------
// Contato
// -----------------------------------------------------------------------
export const CONTATO_SUBJECTS = [
  "Orçamento",
  "Visita técnica",
  "Dúvida sobre produto",
  "Outro assunto",
] as const;
