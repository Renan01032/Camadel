export const HERO_IMAGE = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-fFJEWqzzXMRuyclBzAGDMo0iDsBP8u.jpeg";
export const INSTITUTIONAL_IMAGE = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-yqDaMoPxbU8MvFWg696RsTMPZHoHdO.jpeg";
export const AREA_IMAGE = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-655obevt1YHr3PslS2SuF9H7YGwTgL.jpeg";
export const WHATSAPP_LINK = "https://wa.me/5511991680717";
export const CONTACT_PHONE = "(11) 99168-0717";
export const CONTACT_EMAIL = "contato@camadel.com.br";

export const BRANDS = ["Vonder", "Bosch", "Makita", "MTX", "Norton", "3M", "Würth", "Dewalt"] as const;

export const CATEGORIES = [
  { id: "manuais", icon: "Hammer", label: "Linha 01", title: "Ferramentas manuais", text: "Resistência para o dia a dia da obra.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-bdHqETNI9xnb9uqxQwNPc4gFcU7t1U.jpeg" },
  { id: "eletricas", icon: "Zap", label: "Linha 02", title: "Ferramentas elétricas", text: "Potência para sua obra.", image: HERO_IMAGE },
  { id: "abrasivos", icon: "CircleDot", label: "Linha 03", title: "Abrasivos", text: "O melhor acabamento.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/9-9oU1pLEZd0yIopzzCsqx3ipqz8P6DI.jpeg" },
  { id: "epis", icon: "ShieldCheck", label: "Linha 04", title: "EPIs", text: "Segurança em primeiro lugar.", image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5-kayizhJ21JJWwxLdGButs09B5HMdc4.jpeg" },
] as const;
export const CATEGORIAS = CATEGORIES;

export const CATALOG = [
  { id: "manuais", label: "Ferramentas manuais", title: "Resistência para o dia a dia", items: ["Martelos e marretas", "Pás e cavadeiras", "Enxadas", "Picaretas", "Talhadeiras", "Níveis e esquadros", "Prumos", "Colheres de pedreiro"] },
  { id: "eletricas", label: "Ferramentas elétricas", title: "Potência para sua obra", items: ["Furadeiras", "Marteletes", "Esmerilhadeiras", "Serras circulares", "Lixadeiras", "Parafusadeiras", "Acessórios elétricos", "Kits profissionais"] },
  { id: "abrasivos", label: "Abrasivos", title: "O melhor acabamento", items: ["Discos de corte", "Discos de desbaste", "Discos flap", "Discos de fibra", "Escovas de aço", "Pontas montadas", "Cintas abrasivas", "Discos de polimento"] },
  { id: "epis", label: "Equipamentos de proteção", title: "Segurança em primeiro lugar", items: ["Capacetes", "Óculos de proteção", "Luvas", "Botinas e botas", "Cintos e proteção", "Coletes refletivos", "Capa de chuva", "Sinalização"] },
  { id: "construcao", label: "Construção civil", title: "Tudo para cada etapa", items: ["Ferramentas para construção", "Betoneiras e acessórios", "Ferragens e fixação", "Elétricos e iluminação", "Hidráulicos", "Cimentos e argamassas", "Tintas e impermeabilizantes", "Madeiras e compensados"] },
  { id: "limpeza", label: "Limpeza e escritório", title: "Organização e praticidade", items: ["Vassourões e vassouras", "Rodos e acessórios", "Produtos de limpeza", "Água sanitária", "Papéis e cadernos", "Escrita e marcação", "Fitas e adesivos", "Organização e arquivo"] },
  { id: "fixacao", label: "Acessórios e fixação", title: "Segurança em cada detalhe", items: ["Parafusos", "Porcas e arruelas", "Buchas e âncoras", "Pregos e grampos", "Chumbadores", "Abraçadeiras", "Barras roscadas", "Cabos e correntes"] },
] as const;

export const NAV_LINKS = [{ label: "Catálogo", href: "#catalogo" }, { label: "Contato", href: "#contato" }] as const;
export const HERO_STATS = [{ number: "ABC", label: "Paulista e região" }, { number: "100%", label: "foco na sua obra" }] as const;
export const DIFERENCIAIS = [
  { icon: "ShieldCheck", title: "Qualidade em cada produto", text: "Marcas reconhecidas para sua operação." },
  { icon: "Award", title: "Marcas líderes", text: "As melhores marcas em um só lugar." },
  { icon: "Truck", title: "Entrega rápida", text: "Agilidade para sua obra não parar." },
  { icon: "Headphones", title: "Atendimento especializado", text: "Equipe pronta para entender sua necessidade." },
] as const;
export const DEPOIMENTOS = [{ name: "Clientes e parceiros Camadel", role: "Construção civil", text: "Qualidade, confiança e parceria para o sucesso da sua obra." }] as const;
export const FOOTER_COLUMNS = [{ title: "Camadel", links: ["Quem somos", "Catálogo", "Contato"] }] as const;
