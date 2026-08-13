# Camadel — Site de Captação de Leads (sem e-commerce)

Site institucional/catálogo técnico da Camadel Ferramentas, reestruturado
para **geração de leads via WhatsApp** — sem carrinho, sem checkout, sem
venda direta. Next.js 14 (App Router) + Tailwind CSS + Framer Motion +
Lucide React.

Todo o conteúdo técnico (categorias, itens, marcas, textos institucionais)
foi extraído dos panfletos oficiais da Camadel e vive em `lib/constants.ts`
como dados estruturados — nada de texto embutido em imagem.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

> As fontes (Oswald / Roboto / Roboto Mono) são auto-hospedadas via
> `@fontsource` — não dependem de acesso à internet durante o build
> (diferente de `next/font/google`). `npm run build` foi validado do zero
> (sem cache, com `npm ci`) antes desta entrega.

## Como funciona o fluxo de orçamento (sem formulário para o servidor)

Não existe backend nem banco de dados. O "orçamento" é só uma mensagem de
WhatsApp pré-formatada:

1. O usuário navega pelo catálogo (`/catalogo/[categoria]`) e clica em
   **"Adicionar à Cotação"** nos itens que interessam.
2. A seleção fica guardada em `lib/quote-context.tsx` (Context API +
   `localStorage`), então ela persiste entre páginas.
3. O widget flutuante (`QuoteWidget.tsx`), o botão do cabeçalho e o botão
   "Solicitar Orçamento desta Linha" de cada categoria montam a mensagem
   com `lib/whatsapp.ts` → `buildQuoteMessage()` e abrem
   `https://wa.me/<numero>?text=<mensagem>` numa nova aba.
4. A página `/contato` tem um formulário (nome, telefone, empresa,
   assunto, mensagem) que, ao enviar, monta o mesmo tipo de mensagem
   (incluindo os itens já selecionados, se houver) e abre o WhatsApp — não
   há envio para nenhum servidor.

Para trocar o número de WhatsApp, e-mail ou telefone, edite `BRAND` em
`lib/constants.ts`.

## Estrutura

```
app/
  layout.tsx                  # fontes, metadata, Header/Footer/QuoteWidget globais
  page.tsx                    # Home
  quem-somos/page.tsx
  area-de-atuacao/page.tsx
  contato/page.tsx
  catalogo/page.tsx           # índice das categorias
  catalogo/[categoria]/page.tsx  # template de categoria (gerado estaticamente)
components/camadel/
  Header.tsx                  # navbar + dropdown "Catálogo" + CTA WhatsApp
  Footer.tsx
  Hero.tsx                    # + GenerativeSparks (canvas)
  Diferenciais.tsx            # 5 diferenciais (panfleto 9)
  Categorias.tsx               # cards de categoria (home) → linkam para /catalogo/[slug]
  BrandsMarquee.tsx            # faixa de marcas em marquee (CSS animation)
  CompromissoBanner.tsx        # callout "Qualidade, confiança e parceria"
  CTAFinal.tsx
  TrustBar.tsx                 # tira de 4 selos reaproveitada nas páginas de catálogo
  GenerativeSparks.tsx          # canvas generativo (faíscas) — assinatura visual do Hero
  CoverageRadar.tsx             # canvas generativo (radar de cobertura) — Área de Atuação
  QuoteWidget.tsx                # widget flutuante de cotação + WhatsApp
  AddToQuoteButton.tsx           # botão de toggle usado nas linhas do catálogo
  CategoryIntro.tsx / CategorySubsections.tsx / CategoryCTA.tsx /
  CategoryBrands.tsx / ApplicationsRow.tsx / OtherCategories.tsx
                                  # blocos do template de página de categoria
  ContactForm.tsx                 # formulário de /contato (abre WhatsApp)
lib/
  constants.ts                    # todo o conteúdo (extraído dos panfletos)
  icon-map.tsx                    # nome de ícone (string) -> componente Lucide
  quote-context.tsx               # Context da seleção de cotação (localStorage)
  whatsapp.ts                     # montagem das mensagens e links wa.me
```

## Conteúdo

Editar textos, itens de catálogo, marcas ou dados de contato → só mexer em
`lib/constants.ts`. Os componentes são todos guiados por esses dados, então
qualquer alteração ali já reflete em todas as páginas (inclusive nas 7
páginas de categoria, geradas via `generateStaticParams`).

## Pendências conhecidas

- **Ferramentas Elétricas** não tinha panfleto dedicado nos materiais
  fornecidos — a página usa os produtos visíveis nas fotos dos outros
  panfletos (furadeira/martelete, esmerilhadeira, serra circular). Se
  houver um panfleto específico dessa linha, é só enriquecer a entrada
  correspondente em `CATALOG` (`lib/constants.ts`).
- **CNPJ / redes sociais**: não constavam nos panfletos fornecidos, então
  não foram incluídos no rodapé (evitar inventar dado institucional).
- **Logos de marca reais**: por enquanto só Vonder, Bosch, Makita e MTX
  têm arquivo de logo real (`public/brands/*.png`, recortados do material
  fornecido) — são as 4 marcas que aparecem em todos os panfletos. As
  demais marcas (Norton, 3M, Würth, Suvinil, Ypê etc.) aparecem como texto
  estilizado. Para trocar por logo real, salve o arquivo em
  `public/brands/<marca>.png` (fundo transparente) e adicione a entrada em
  `BRAND_LOGOS` (`lib/constants.ts`).

## Deploy (Vercel / CI)

Este projeto foi validado com `rm -rf node_modules .next && npm ci && npm run build`
(instalação limpa a partir do `package-lock.json`, sem cache) antes da entrega.
Se um deploy falhar, o mais comum é cache de build desatualizado — no
Vercel: **Deployments → menu "⋯" do deployment → Redeploy → desmarcar
"Use existing Build Cache"**.
