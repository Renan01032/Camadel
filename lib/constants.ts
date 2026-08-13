// -----------------------------------------------------------------------
// lib/constants.ts
// -----------------------------------------------------------------------
// Todo o conteúdo textual do site vive aqui, separado da camada visual.
// Fonte: material extraído dos flyers oficiais da Camadel (panfletos 1–11).
// Nenhum texto ou dado técnico aqui foi inventado — apenas reorganizado
// para funcionar como conteúdo de site (elementos de texto reais, não
// texto incrustado em imagem).
// -----------------------------------------------------------------------

export const BRAND = {
  name: "Camadel",
  fullName: "Camadel Ferramentas para Construção",
  whatsappNumber: "5511991680717",
  whatsappDisplay: "(11) 99168-0717",
  email: "contato@camadel.com.br",
  site: "www.camadel.com.br",
  regionShort: "ABC Paulista, SP",
} as const;

// Mantido por compatibilidade com o link direto de WhatsApp já usado em CTAs.
export const WHATSAPP_LINK = `https://wa.me/${BRAND.whatsappNumber}`;
export const CONTACT_PHONE = BRAND.whatsappDisplay;
export const CONTACT_EMAIL = BRAND.email;

// -----------------------------------------------------------------------
// Navegação
// -----------------------------------------------------------------------

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Quem Somos", href: "/quem-somos" },
  { label: "Área de Atuação", href: "/area-de-atuacao" },
  { label: "Contato", href: "/contato" },
] as const;

// -----------------------------------------------------------------------
// Selo de confiança — tira de 4 ícones repetida em todos os panfletos
// -----------------------------------------------------------------------

export const TRUST_BADGES = [
  { icon: "Headphones", text: "Atendimento Especializado" },
  { icon: "Truck", text: "Entrega Rápida" },
  { icon: "Award", text: "Produtos de Qualidade" },
  { icon: "PackageCheck", text: "Estoque Completo" },
] as const;

// -----------------------------------------------------------------------
// Home — Hero (panfleto 1 / 9)
// -----------------------------------------------------------------------

export const HERO_CONTENT = {
  eyebrow: "Linha Premium de Ferramentas para Construção",
  title: "O prazer no trabalho aperfeiçoa a obra.",
  paragraph:
    "Soluções completas em ferramentas, máquinas, EPIs, abrasivos, fixação e muito mais para atender sua obra do início ao fim.",
  ctaPrimary: "Conheça Nosso Catálogo Técnico",
  ctaSecondary: "Falar com a Camadel",
} as const;

// -----------------------------------------------------------------------
// Home — Diferenciais (grid de 5, panfleto 9)
// -----------------------------------------------------------------------

export const DIFERENCIAIS = [
  {
    icon: "ShieldCheck",
    title: "Qualidade em Cada Produto",
    text: "Marcas reconhecidas e produtos certificados em cada linha que oferecemos.",
  },
  {
    icon: "Award",
    title: "Marcas Líderes em um Só Lugar",
    text: "Vonder, Bosch, Makita, MTX e outras marcas líderes reunidas em um único fornecedor.",
  },
  {
    icon: "Truck",
    title: "Entrega Rápida e Segura",
    text: "Agilidade para sua obra não parar por falta de material.",
  },
  {
    icon: "Headphones",
    title: "Atendimento Especializado",
    text: "Equipe pronta para entender sua necessidade e orientar a escolha certa.",
  },
  {
    icon: "HardHat",
    title: "Tudo para Sua Obra",
    text: "Do início ao acabamento, uma linha completa de produtos em um só lugar.",
  },
] as const;

// -----------------------------------------------------------------------
// Quem Somos (panfleto 2)
// -----------------------------------------------------------------------

export const QUEM_SOMOS = {
  title: "Quem Somos?",
  paragraphs: [
    "A Camadel Ferramentas atua ao longo dos anos de experiência fornecendo materiais para construção civil, dedicando-se a atender seus clientes e parceiros com preços competitivos e esforçando-se ao máximo para dar o melhor atendimento, focando em fazer o melhor para nossos clientes.",
    "Com foco na qualidade dos produtos, a nossa equipe da Camadel Ferramentas está pronta para atender e buscar o que há de melhor no mercado.",
  ],
  commitment:
    "Nosso compromisso é com qualidade, confiança e parceria para o sucesso da sua obra!",
} as const;

// -----------------------------------------------------------------------
// Área de Atuação (panfleto 3)
// -----------------------------------------------------------------------

export const AREA_ATUACAO = {
  title: "Área de Atuação",
  paragraph:
    "Localizados no ABC Paulista, trabalhamos com ferramentas elétricas, manuais, máquinas, equipamentos de proteção individual, acessórios e todos os demais itens para suprir as exigências da construção civil. Com foco na qualidade de seus produtos, a nossa equipe da Camadel Ferramentas está altamente preparada para atender as exigências da sua obra.",
  focusBox: {
    title: "Foco em São Paulo — SP",
    text: "Atendemos toda a capital e região metropolitana.",
  },
  highlights: [
    {
      icon: "MapPin",
      title: "Foco na Capital Paulista",
      text: "Atendemos toda a cidade de São Paulo.",
    },
    {
      icon: "Handshake",
      title: "Parceria e Confiança",
      text: "Relacionamentos sólidos com nossos clientes.",
    },
    {
      icon: "ClipboardCheck",
      title: "Soluções Completas",
      text: "Tudo o que você precisa, em um só lugar.",
    },
  ],
} as const;

// -----------------------------------------------------------------------
// Marcas — todas as marcas citadas nos panfletos
// -----------------------------------------------------------------------

export const BRANDS = [
  "Vonder",
  "Bosch",
  "Makita",
  "MTX",
  "Norton",
  "3M",
  "Würth",
  "DeWalt",
  "Tyrolit",
  "Suvinil",
  "Vedacit",
  "Votoran",
  "Votomassa",
  "Fortlev",
  "Ypê",
  "Veja",
  "Brilux",
  "Limppano",
  "Tesa",
  "Bic",
  "Report",
  "Pilot",
  "Ciser",
  "Fischer",
  "Ancora",
] as const;

// Logotipos reais (recortados do material fornecido) para as marcas
// parceiras "principais", presentes em todos os panfletos. As demais marcas
// seguem como wordmark estilizado até termos os arquivos de logo delas.
export const BRAND_LOGOS: Partial<Record<(typeof BRANDS)[number], string>> = {
  Vonder: "/brands/vonder.png",
  Bosch: "/brands/bosch.png",
  Makita: "/brands/makita.png",
  MTX: "/brands/mtx.png",
};

// -----------------------------------------------------------------------
// Home — Vitrine "Produtos em Destaque"
// -----------------------------------------------------------------------

export type FeaturedProduct = {
  name: string;
  brand: string;
  icon: string;
  categorySlug: string;
  categoryLabel: string;
};

export const FEATURED_PRODUCTS: readonly FeaturedProduct[] = [
  { name: "Furadeira de Impacto", brand: "Makita", icon: "Drill", categorySlug: "ferramentas-eletricas", categoryLabel: "Ferramentas Elétricas" },
  { name: "Serra Circular", brand: "Bosch", icon: "CircleDot", categorySlug: "ferramentas-eletricas", categoryLabel: "Ferramentas Elétricas" },
  { name: "Martelo Unha", brand: "Vonder", icon: "Hammer", categorySlug: "ferramentas-manuais", categoryLabel: "Ferramentas Manuais" },
  { name: "Nível de Bolha", brand: "MTX", icon: "Ruler", categorySlug: "ferramentas-manuais", categoryLabel: "Ferramentas Manuais" },
  { name: "Disco de Corte", brand: "Norton", icon: "Disc3", categorySlug: "abrasivos", categoryLabel: "Abrasivos" },
  { name: "Capacete de Segurança", brand: "Camadel", icon: "HardHat", categorySlug: "epis", categoryLabel: "EPI's" },
  { name: "Luvas de Proteção", brand: "Vonder", icon: "Hand", categorySlug: "epis", categoryLabel: "EPI's" },
  { name: "Botina de Segurança", brand: "Camadel", icon: "Footprints", categorySlug: "epis", categoryLabel: "EPI's" },
  { name: "Cimento CP-II", brand: "Votoran", icon: "Package", categorySlug: "construcao-civil", categoryLabel: "Construção Civil" },
  { name: "Betoneira 150L", brand: "Vonder", icon: "RotateCw", categorySlug: "construcao-civil", categoryLabel: "Construção Civil" },
  { name: "Carrinho de Mão", brand: "Camadel", icon: "Container", categorySlug: "construcao-civil", categoryLabel: "Construção Civil" },
  { name: "Parafusos e Fixação", brand: "Ciser", icon: "Nut", categorySlug: "acessorios-fixacao", categoryLabel: "Acessórios e Fixação" },
] as const;

// -----------------------------------------------------------------------
// Catálogo — categorias e linhas completas
// -----------------------------------------------------------------------

export type CatalogSubsection = {
  title: string;
  items: readonly string[];
};

export type CatalogHighlight = {
  icon: string;
  text: string;
};

export type CatalogCategory = {
  slug: string;
  icon: string;
  navLabel: string;
  eyebrow: string;
  title: string;
  kicker?: string;
  intro: string;
  highlights: readonly CatalogHighlight[];
  subsections: readonly CatalogSubsection[];
  brands: readonly string[];
  applications?: readonly CatalogHighlight[];
};

export const CATALOG: readonly CatalogCategory[] = [
  {
    slug: "ferramentas-manuais",
    icon: "Hammer",
    navLabel: "Ferramentas Manuais",
    eyebrow: "Linha 01",
    title: "Ferramentas Manuais",
    intro:
      "Ferramentas resistentes e de alta qualidade para os profissionais que constroem grandes obras todos os dias.",
    highlights: [
      { icon: "ShieldCheck", text: "Mais Resistência e Durabilidade" },
      { icon: "CheckCircle2", text: "Conforto e Segurança" },
      { icon: "Award", text: "Qualidade que Você Confia" },
    ],
    subsections: [
      { title: "Cavadeira", items: ["Americana", "Reta", "Bola", "Light"] },
      { title: "Enxada", items: ["Larga 2,5 Libras", "Estreita 2,5 Libras"] },
      { title: "Pá", items: ["Bico", "Vanga", "Quadrada", "Carvão"] },
      { title: "Picareta", items: ["Chibanca"] },
      { title: "Talhadeiras", items: ["Aço", "Chata", "Sextavada"] },
      { title: "Ponteiros", items: ["Aço", "Sextavado"] },
      { title: "Esquadro Alumínio", items: ["60x80"] },
      { title: "Nível", items: ["Mão", "Nível 3 Bolhas", "2 metros"] },
      { title: "Prumo", items: ["Centro", "Parede"] },
      { title: "Colher de Pedreiro", items: ["Canto Reto", "Oval"] },
      { title: "Martelo", items: ["Unha"] },
      { title: "Marreta Oitavada", items: [] },
      { title: "Alavanca Desforma", items: [] },
      { title: "Espátula", items: [] },
      { title: "Chibanca", items: [] },
    ],
    brands: ["Vonder", "Bosch", "Makita", "MTX"],
  },
  {
    slug: "ferramentas-eletricas",
    icon: "Zap",
    navLabel: "Ferramentas Elétricas",
    eyebrow: "Linha 02",
    title: "Ferramentas Elétricas",
    intro:
      "Potência para sua obra. Linha de furadeiras, marteletes, esmerilhadeiras e serras das marcas Makita e Bosch, para o profissional que não pode parar.",
    highlights: [
      { icon: "Zap", text: "Potência para Cada Etapa" },
      { icon: "ShieldCheck", text: "Segurança em Cada Uso" },
      { icon: "Award", text: "Marcas Líderes de Mercado" },
      { icon: "Headphones", text: "Suporte Técnico Especializado" },
    ],
    subsections: [
      { title: "Furadeiras / Marteletes", items: ["Impacto", "Rotativo", "SDS"] },
      { title: "Esmerilhadeiras Angulares", items: ["Pequeno porte", "Uso profissional"] },
      { title: "Serras Circulares", items: ["Corte em madeira e compensados"] },
      { title: "Parafusadeiras", items: [] },
      { title: "Lixadeiras", items: [] },
      { title: "Acessórios Elétricos", items: ["Brocas", "Bits", "Baterias", "Carregadores"] },
    ],
    brands: ["Makita", "Bosch", "Vonder", "MTX"],
  },
  {
    slug: "abrasivos",
    icon: "CircleDot",
    navLabel: "Abrasivos",
    eyebrow: "Linha 03",
    title: "Abrasivos",
    kicker: "Para cada desafio, o melhor acabamento.",
    intro:
      "Linha completa de abrasivos para corte, desbaste, acabamento e polimento. Máxima performance, segurança e durabilidade para profissionais exigentes.",
    highlights: [
      { icon: "ShieldCheck", text: "Alta Durabilidade" },
      { icon: "Target", text: "Corte e Desbaste de Precisão" },
      { icon: "ThumbsUp", text: "Excelente Acabamento" },
      { icon: "CheckCircle2", text: "Segurança e Confiança" },
    ],
    subsections: [
      { title: "Discos de Corte", items: ["Aço", "Inox", "Construção Civil", "Uso Geral"] },
      { title: "Discos de Desbaste", items: ["Metal", "Inox", "Alta Remoção", "Longa Durabilidade"] },
      { title: "Discos Flap", items: ["Zirconado", "Óxido de Alumínio", "Grãos 40 a 120"] },
      { title: "Discos Fibra", items: ["Alto Rendimento", "Fixação Rápida", "Metal / Inox", "Grãos 24 a 120"] },
      { title: "Rebolos", items: ["Retos", "Copo", "Concha", "Diversas Aplicações"] },
      { title: "Escovas de Aço", items: ["Copo", "Circular", "Trançada", "Ondulada"] },
      { title: "Pontas Montadas", items: ["Óxido de Alumínio", "Carbeto de Silício", "Diversos Formatos"] },
      { title: "Folhas e Telas", items: ["Lixas para Madeira", "Lixas para Massa", "Telas de Lixa"] },
      { title: "Cintas Abrasivas", items: ["Zirconada", "Óxido de Alumínio", "Para Lixadeiras"] },
      { title: "Discos de Polimento", items: ["Feltro", "Lã", "Boinas", "Acabamento Premium"] },
    ],
    brands: ["Norton", "3M", "Bosch", "Würth", "DeWalt", "Makita", "Tyrolit"],
    applications: [
      { icon: "CircleDot", text: "Corte de Metais" },
      { icon: "Hammer", text: "Desbaste Pesado" },
      { icon: "Sparkles", text: "Acabamento Fino" },
      { icon: "Disc3", text: "Polimento" },
      { icon: "SprayCan", text: "Limpeza e Remoção" },
      { icon: "TreePine", text: "Marcenaria e Madeira" },
      { icon: "Building2", text: "Construção Civil" },
      { icon: "Cog", text: "Manutenção Industrial" },
    ],
  },
  {
    slug: "epis",
    icon: "HardHat",
    navLabel: "EPI's",
    eyebrow: "Linha 04",
    title: "EPI's",
    kicker: "Segurança para quem constrói o futuro todos os dias.",
    intro:
      "Linha completa de Equipamentos de Proteção Individual com qualidade, conforto e certificação para garantir a segurança no canteiro de obras.",
    highlights: [
      { icon: "Shield", text: "Segurança em 1º Lugar" },
      { icon: "CheckCircle2", text: "Conforto no Uso Diário" },
      { icon: "BadgeCheck", text: "Produtos Certificados" },
      { icon: "ThumbsUp", text: "Alta Qualidade" },
    ],
    subsections: [
      { title: "Capacetes", items: ["Com Carneira", "Jugular", "MSA"] },
      { title: "Óculos de Proteção", items: ["RJ", "Águia", "Incolor", "Fumê"] },
      { title: "Luvas", items: ["Vaqueta Mista e Total", "Látex (P, M, G)", "Raspa"] },
      { title: "Botinas e Botas", items: ["Botina Nobuck", "Botina Couro com Biqueira", "Bota Borracha"] },
      { title: "Cintos e Proteção Contra Quedas", items: ["Cinto Paraquedista", "Talabarte", "Trava-quedas"] },
      { title: "Coletes Refletivos", items: ["Alta Visibilidade", "Faixas Refletivas"] },
      { title: "Capa de Chuva", items: ["M", "G", "GG", "XG"] },
      { title: "Sinalização", items: ["Cone Refletivo", "Fita Zebrada"] },
      { title: "Cordas", items: ["Corda Bombeiro", "Corda Nylon", "Corda Polietileno"] },
      { title: "Proteção das Mãos", items: ["Luvas para diversos tipos de atividade"] },
      { title: "Proteção Facial", items: ["Protetores Faciais", "Viseiras Incolores"] },
      { title: "Outros EPIs", items: ["Máscaras", "Protetores Auditivos", "Protetores Respiratórios"] },
    ],
    brands: ["Vonder", "Bosch", "Makita", "MTX"],
  },
  {
    slug: "construcao-civil",
    icon: "Building2",
    navLabel: "Construção Civil",
    eyebrow: "Linha 05",
    title: "Construção Civil",
    kicker: "Produtos essenciais para cada etapa da sua obra.",
    intro:
      "Tudo o que você precisa para construir com segurança, eficiência e qualidade. Materiais e equipamentos das melhores marcas para profissionais que não param.",
    highlights: [
      { icon: "ShieldCheck", text: "Qualidade que Gera Confiança" },
      { icon: "HardHat", text: "Soluções para Toda a Obra" },
      { icon: "Gauge", text: "Mais Produtividade no Canteiro" },
      { icon: "Award", text: "Melhores Marcas, Melhores Resultados" },
    ],
    subsections: [
      { title: "Ferramentas para Construção", items: ["Martelos e Marretas", "Talhadeiras e Ponteiros", "Níveis e Esquadros", "Trenas e Regras", "Desempenadeiras"] },
      { title: "Betoneiras e Acessórios", items: ["Betoneiras", "Carrinhos de Mão", "Caçambas", "Pás e Enxadas", "Baldes e Massas"] },
      { title: "Ferragens e Fixação", items: ["Pregos e Parafusos", "Arruelas e Buchas", "Vergalhões e Arames", "Telas e Colunas", "Barras Roscadas"] },
      { title: "Elétricos e Iluminação", items: ["Fios e Cabos", "Disjuntores e Quadros", "Tomadas e Interruptores", "Lâmpadas e Refletores", "Extensões e Carretéis"] },
      { title: "Hidráulicos", items: ["Tubos e Conexões", "Registros e Válvulas", "Caixas d'Água", "Bombas e Acessórios", "Selantes e Fitas"] },
      { title: "Cimentos e Argamassas", items: ["Cimentos", "Argamassas", "Rejuntes", "Cal e Aditivos"] },
      { title: "Tintas e Impermeabilizantes", items: ["Tintas", "Texturas e Fundos", "Impermeabilizantes", "Seladores"] },
      { title: "Louças e Metais", items: ["Louças Sanitárias", "Metais e Torneiras", "Cubas e Pias", "Acessórios"] },
      { title: "Madeiras e Compensados", items: ["Tábuas e Sarrafos", "Compensados", "Caibros e Ripas", "Portas e Batentes"] },
      { title: "Equipamentos de Proteção", items: ["Capacetes", "Luvas", "Óculos", "Botas", "Cintos e Talabartes"] },
    ],
    brands: ["Vonder", "Bosch", "Makita", "MTX", "Suvinil", "Vedacit", "Votoran", "Votomassa", "Fortlev"],
  },
  {
    slug: "limpeza-escritorio",
    icon: "Sparkles",
    navLabel: "Limpeza e Escritório",
    eyebrow: "Linha 06",
    title: "Limpeza & Material de Escritório",
    intro:
      "Organização, higiene e praticidade para o dia a dia do seu negócio e do seu canteiro de obras.",
    highlights: [
      { icon: "PackageCheck", text: "Estoque Completo" },
      { icon: "Truck", text: "Entrega Rápida" },
      { icon: "Award", text: "Produtos de Qualidade" },
      { icon: "Headphones", text: "Atendimento Especializado" },
    ],
    subsections: [
      { title: "Vassourões e Vassouras", items: ["Piaçava", "Nylon", "Pelo Sintético", "Multiuso"] },
      { title: "Rodos e Acessórios", items: ["Rodos", "Refis", "Cabos", "Suportes"] },
      { title: "Produtos de Limpeza", items: ["Detergente Neutro", "Desinfetantes", "Sabonete Líquido", "Limpadores Multiuso"] },
      { title: "Água Sanitária e Alvejantes", items: ["Água Sanitária", "Alvejantes", "Cloro Ativo"] },
      { title: "Removedores e Solventes", items: ["Removedor de Gordura", "Limpa Obra", "Solventes", "Tira Graxa"] },
      { title: "Papéis e Cadernos", items: ["Papel A4", "Cadernos", "Blocos", "Post-it"] },
      { title: "Escrita e Marcação", items: ["Canetas", "Lápis", "Marca-textos", "Canetinhas", "Corretivos"] },
      { title: "Fitas e Adesivos", items: ["Fita Adesiva", "Fita Crepe", "Fita Dupla Face", "Cola Branca", "Super Cola"] },
      { title: "Organização e Arquivo", items: ["Pastas e Envelopes", "Dossiês", "Clips e Grampos", "Etiquetas"] },
      { title: "Apoio para Canteiro e Uso Geral", items: ["Pranchetas", "Fita Zebrada", "Sacos de Lixo", "Luvas de Látex", "Panos e Flanelas"] },
    ],
    brands: ["Ypê", "Veja", "Brilux", "Limppano", "3M", "Tesa", "Bic", "Report", "Pilot"],
  },
  {
    slug: "acessorios-fixacao",
    icon: "Nut",
    navLabel: "Acessórios e Fixação",
    eyebrow: "Linha 07",
    title: "Acessórios & Fixação",
    intro:
      "Soluções completas em fixação e acessórios para garantir segurança, qualidade e resistência em cada detalhe da sua obra.",
    highlights: [
      { icon: "ShieldCheck", text: "Alta Resistência" },
      { icon: "BadgeCheck", text: "Qualidade Premium" },
      { icon: "ThumbsUp", text: "Máxima Segurança" },
      { icon: "Award", text: "Confiança em Cada Detalhe" },
    ],
    subsections: [
      { title: "Parafusos", items: ["Sextavados", "Allen", "Chipboard", "Auto Brocantes", "Drywall", "Madeira"] },
      { title: "Porcas e Arruelas", items: ["Porcas Sextavadas", "Porcas Travantes", "Arruelas Lisa", "Arruelas de Pressão"] },
      { title: "Buchas e Âncoras", items: ["Bucha de Nylon", "Bucha com Aba", "Âncora Parabolt", "Âncora Chumbador", "Âncora Química"] },
      { title: "Pregos e Grampos", items: ["Pregos Comuns", "Pregos com Cabeça", "Pregos para Concreto", "Grampos para Cerca"] },
      { title: "Arruelas e Calços", items: ["Arruela Lisa", "Arruela de Pressão", "Arruela Quadrada", "Calços Plásticos"] },
      { title: "Chumbadores", items: ["Chumbador Parabolt", "Chumbador CBA", "Chumbador W", "Chumbador Químico"] },
      { title: "Abraçadeiras", items: ["Tipo D", "Tipo U", "Com Cunha", "Inox"] },
      { title: "Cantoneiras e Suportes", items: ["Cantoneiras", "Mão Francesa", "Suportes", "Chapas Perfuradas"] },
      { title: "Barras Roscadas e Acessórios", items: ["Barra Roscada", "Porca Sextavada", "Luva de Emenda"] },
      { title: "Fixação Elétrica e Hidráulica", items: ["Abraçadeira Nylon", "Fita Perfurada", "Fixadores para Cabo", "Bucha para Eletroduto"] },
      { title: "Fitas e Selantes", items: ["Fita Silver Tape", "Fita Veda Rosca", "Fita Crepe", "Selante PU", "Silicone"] },
      { title: "Rebites e Rivets", items: ["Repuxo", "Pop", "Alumínio", "Aço"] },
      { title: "Cordeiro e Olhais", items: ["Cordeiro", "Olhal Parafusado", "Gancho com Trava", "Manilha"] },
      { title: "Cabos e Correntes", items: ["Cabo de Aço", "Corrente Soldada", "Esticador", "Sapatilho"] },
      { title: "Acessórios Diversos", items: ["Mosquetões", "Ganchos", "Argolas", "Fechos e Travas"] },
    ],
    brands: ["Ciser", "Fischer", "Vonder", "Ancora", "Bosch", "Würth", "DeWalt"],
  },
] as const;

export function getCatalogCategory(slug: string) {
  return CATALOG.find((category) => category.slug === slug);
}

// -----------------------------------------------------------------------
// Compatibilidade retroativa (usados por componentes já existentes)
// -----------------------------------------------------------------------

export const CATEGORIAS = CATALOG.map((c) => ({
  icon: c.icon,
  title: c.title,
  text: c.intro,
  slug: c.slug,
}));

export const DEPOIMENTOS = [] as const;
export const FOOTER_COLUMNS = [
  { title: "Catálogo", links: CATALOG.map((c) => ({ label: c.navLabel, href: `/catalogo/${c.slug}` })) },
] as const;
