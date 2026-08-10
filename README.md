# Camadel — Landing Page

Landing page institucional/comercial da Camadel Ferramentas. Next.js App
Router + Tailwind CSS + Framer Motion + Lucide React, seguindo a identidade
visual extraída da logo oficial (preto profundo + vermelho vibrante +
wordmark metálico).

## Rodar localmente

```bash
pnpm install
pnpm dev
```

Abra http://localhost:3000.

> Este pacote foi validado com `npm install && npx next build` (build de
> produção completo, incluindo type-check) antes da entrega. Rode
> `pnpm build` para confirmar no seu ambiente antes do deploy.

## Integração ao monorepo Camadel (Turborepo + pnpm)

Este código foi entregue como projeto standalone para facilitar a revisão
isolada. Para incorporar ao monorepo:

1. Mover `app/`, `components/camadel/`, `lib/` e `public/camadel-logo.jpg`
   para dentro do app Next.js existente (ex.: `apps/web/`).
2. Adicionar as dependências ao `package.json` do app:
   `framer-motion`, `lucide-react`.
3. Mesclar `tailwind.config.ts` — os tokens estão isolados sob o namespace
   `camadel.*` (`camadel-red`, `camadel-black`, etc.) para não colidir com
   outros tokens de design system já existentes no monorepo.
4. Mesclar `app/globals.css` e `app/layout.tsx` com o layout raiz existente
   (fontes Oswald/Roboto/Roboto Mono via `next/font/google`).

## Pendências conhecidas (marcadas com TODO no código)

- **Fotos de produto reais**: as 4 categorias (`lib/constants.ts` →
  `CATEGORIAS`) hoje usam um painel com ícone no lugar da foto. Assim que
  houver fotografia de produto, trocar pelo bloco comentado em
  `components/camadel/Categorias.tsx` (usa `next/image` com `fill`).
- **Imagem de fundo do Hero**: `components/camadel/Hero.tsx` tem um
  comentário indicando onde inserir uma foto real de ferramentas em uso.
- **Link do WhatsApp / telefone / e-mail**: `lib/constants.ts` tem
  placeholders (`WHATSAPP_LINK`, `CONTACT_PHONE`, `CONTACT_EMAIL`) — trocar
  pelo número oficial do WhatsApp Business (ADR-009) e dados de contato
  reais antes de publicar.
- **CNPJ no rodapé**: placeholder em `components/camadel/Footer.tsx`.
- **Open Graph image**: `app/layout.tsx` referencia a logo como imagem OG
  temporária; recomenda-se uma imagem 1200×630 dedicada.

## Estrutura

```
app/
  layout.tsx        # fontes (Oswald/Roboto/Roboto Mono), metadata, SEO
  page.tsx           # monta as seções na ordem do briefing
  globals.css         # Tailwind + estilos base + utilitário .text-metal
components/camadel/
  Header.tsx          # navbar sticky, logo com pulsação, menu mobile
  Hero.tsx             # headline, stats, CTAs
  Diferenciais.tsx      # 4 cards de diferenciais competitivos
  Categorias.tsx         # 4 cards de categorias de produto
  Depoimentos.tsx         # 3 depoimentos com estrelas
  CTAFinal.tsx             # faixa final com CTA de WhatsApp
  Footer.tsx                # rodapé
  RulerDivider.tsx           # elemento de assinatura (divisor tipo régua/paquímetro)
lib/
  constants.ts         # todo o conteúdo textual, separado da UI
  icon-map.tsx           # mapa nome-de-ícone -> componente Lucide
public/
  camadel-logo.jpg       # logo oficial fornecida
```
