# Camadel — Site Institucional / Captação de Leads

Redesign completo do site da Camadel Ferramentas: **catálogo digital para
geração de leads**, sem carrinho de compras nem pagamento online. O
visitante monta uma lista de itens de interesse e solicita orçamento
diretamente pelo WhatsApp, com a mensagem já pré-formatada.

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion +
Lucide React, seguindo a identidade visual da marca (preto profundo +
vermelho vibrante + wordmark metálico).

## Rodar localmente

```bash
npm install
npm run build   # build de produção completo, incluindo type-check
npm run dev     # http://localhost:3000
```

## O que mudou nesta versão

- **Estrutura multipágina real** (antes era uma página única com âncoras):
  - `/` — Home (hero, diferenciais, categorias, marcas, formulário rápido)
  - `/quem-somos`
  - `/catalogo` — índice de categorias
  - `/catalogo/[categoria]` — 7 páginas de categoria (geradas estaticamente)
  - `/area-atuacao`
  - `/contato`
- **Fotos reais da Camadel** aplicadas em vez de placeholders: hero,
  Quem Somos, mapa de área de atuação e 3 categorias de catálogo (Ferramentas
  Manuais, Ferramentas Elétricas, Acessórios e Fixação). As demais 4
  categorias (Abrasivos, EPIs, Construção Civil, Limpeza) usam tratamento
  com ícone — **três fotos que você mencionou (EPIs, abrasivos, canteiro
  com cimento/Vedacit) apareceram na conversa mas não chegaram como arquivo
  enviado**; me envie de novo que eu troco o ícone pela foto real nessas
  categorias.
- **Lista de cotação com localStorage** (`lib/quote-context.tsx`): ao clicar
  em "Adicionar à cotação" em qualquer produto/categoria, o item é salvo no
  navegador (persiste entre páginas e ao fechar/reabrir o site) e aparece
  no ícone de lista no cabeçalho e no botão flutuante, com contador.
- **Botão flutuante "carrinho"**: abre um painel lateral com os itens
  selecionados agrupados por categoria, controle de quantidade (+/-),
  remoção individual e botão "Limpar lista".
- **Envio direto pelo WhatsApp** (`lib/whatsapp.ts`): o botão "Enviar via
  WhatsApp" (no painel de cotação, no formulário de contato e no
  formulário rápido da home) monta automaticamente uma mensagem de texto
  com todos os itens selecionados, agrupados por categoria, e abre o
  `wa.me/5511991680717` com o texto já preenchido — sem passar por
  nenhum backend.

## Testes já realizados antes da entrega

- `npm run build` — build de produção limpo, zero erros de TypeScript,
  15 páginas geradas (incluindo as 7 categorias via SSG).
- `npx tsc --noEmit` — checagem de tipos isolada, sem erros.
- Servidor de produção (`next start`) + verificação de status HTTP em
  **todas** as rotas (200 nas páginas válidas, 404 correto em categoria
  inexistente).
- Conferência de conteúdo renderizado (título, textos, botões, links do
  menu, todas as 7 categorias no dropdown, imagens retornando 200).
- Teste isolado da função que monta a mensagem do WhatsApp (agrupamento
  por categoria, quantidades, encoding da URL, mensagem padrão quando a
  lista está vazia).

Não há navegador headless neste ambiente para captura de tela, então a
validação visual final (posicionamento, cores, animações) vale a pena
conferir com `npm run dev` antes do deploy.

## Ajustes desta rodada (feedback sobre o primeiro entregável)

- **Hero em tela cheia**: trocado o painel contido por uma imagem de fundo
  em largura total (ação de furadeira Makita + faíscas + maletas Vonder/mtx),
  com gradiente escuro à esquerda para legibilidade do texto — no padrão da
  referência enviada.
- **Marcas parceiras com logos reais**: as 6 logos enviadas (Vonder, Bosch,
  Makita, MTX, Starrett, Pado) foram recortadas e tratadas (fundo removido)
  e substituem o texto puro.
- **CTA final duplicado removido**: a faixa "Pronto para elevar o nível da
  sua construção?" foi retirada de todas as páginas — cada página já tem
  uma chamada de contato própria (formulário rápido na home, aba Contato no
  menu), então a faixa extra era redundante.
- **Contato clicável**: telefone abre o WhatsApp direto, e-mail abre o
  cliente de e-mail — tanto no rodapé quanto na página de Contato.
- **Botões mais ergonômicos**: troca de cantos quase retos (`rounded-sm`)
  por botões em pílula (`rounded-full`) e cartões com cantos mais suaves
  (`rounded-lg`/`rounded-xl`) em todo o site.

## Segunda rodada de ajustes

- **Hero com menos zoom**: a imagem de fundo foi recortada numa proporção
  mais larga (1.5:1 em vez de ~1.2:1) e a altura da seção foi recalculada
  para exigir bem menos corte automático do navegador. Em telas muito
  largas ainda pode haver algum corte (é assim que `object-fit: cover`
  funciona), mas a composição ficou bem mais fiel à foto original. Ponto
  focal ajustável em `object-[58%_46%]` dentro de `Hero.tsx`.
- **Logos das marcas em cartão preto uniforme**: todas as 6 logos agora
  usam fundo preto. A logo da MTX (que tinha traço preto, invisível em
  fundo preto) foi recolorida para branco especificamente para essa versão
  (`mtx-white.png`) — o arquivo original com traço preto foi removido.
- **Lista de texto das outras marcas removida**: a seção "Marcas
  Parceiras" agora mostra só as 6 logos reais, sem nomes soltos em texto
  abaixo (menções a outras marcas em textos soltos do site, como no card
  "Marcas Líderes" dos diferenciais, continuam normalmente — não fazem
  parte dessa seção).



Como aprendemos em sessões anteriores, **sempre substitua o conteúdo do
repositório por completo** — misturar com o scaffolding antigo é a causa
mais comum de erro de build na Vercel.

```powershell
# dentro da pasta do repositório clonado
Remove-Item -Recurse -Force * -Exclude .git
# extraia o zip entregue diretamente na raiz do repositório (não em subpasta)
npm install
npm run build   # confirma localmente antes de subir
git add -A
git commit -m "Redesign completo: multipágina, cotação com localStorage, WhatsApp"
git push
```

> A pasta do projeto está no OneDrive — se o `npm install` travar ou
> corromper o `node_modules`, mova a pasta para fora do OneDrive
> temporariamente (ex.: `C:\dev\camadel`) e rode o install de lá.

## Estrutura

```
app/
  layout.tsx              # fontes (self-hosted @fontsource), metadata, providers
  page.tsx                 # Home
  quem-somos/page.tsx
  catalogo/page.tsx          # índice de categorias
  catalogo/[categoria]/page.tsx  # página dinâmica por categoria (7 rotas)
  area-atuacao/page.tsx
  contato/page.tsx
  globals.css
components/camadel/
  Header.tsx                # navbar fixa, dropdown de catálogo, ícone de cotação
  Footer.tsx
  Hero.tsx                   # hero com painel de imagem "moldura de projeto"
  Diferenciais.tsx             # 5 selos (3 fotos reais + 2 ícones no mesmo padrão)
  CategoriasGrid.tsx / CategoryCard.tsx
  MarcasParceiras.tsx
  QuickLeadForm.tsx             # formulário rápido da home -> WhatsApp
  ContactForm.tsx                 # formulário completo da página de contato -> WhatsApp
  AddToQuoteButton.tsx              # botão reutilizável "Adicionar à cotação"
  CategoryItemsGrid.tsx              # grade de itens de uma categoria
  CatalogSidebar.tsx                   # navegação entre categorias
  QuoteWidget.tsx                        # botão flutuante + painel da lista de cotação
  SplitPanel.tsx / PageIntro.tsx           # blocos reutilizáveis de cabeçalho de página
  BlueprintFrame.tsx / RulerDivider.tsx      # elementos de assinatura visual (régua/planta)
lib/
  constants.ts              # todo o conteúdo textual e dados de categorias/catálogo
  quote-context.tsx           # contexto React + persistência em localStorage
  whatsapp.ts                   # montagem da mensagem e URL do WhatsApp
  icon-map.tsx                    # mapa nome-de-ícone -> componente Lucide
public/
  images/                    # fotos processadas a partir do material enviado
  images/brands/               # logos reais das marcas parceiras (recortados)
  icons/                          # favicon / ícones de app
```

## Pendências conhecidas

- **3 fotos de categoria não recebidas** (ver seção acima) — Abrasivos,
  EPIs e Construção Civil estão com tratamento de ícone até você reenviar
  as imagens.
- **CNPJ e redes sociais** no rodapé ainda não têm link real — placeholders
  (`#`) até você confirmar os perfis oficiais.
- **Google Fonts**: as fontes (Oswald/Roboto/Roboto Mono) são carregadas
  via pacotes `@fontsource/*` (self-hosted), não via Google Fonts CDN —
  evita dependência de rede externa no build da Vercel.
