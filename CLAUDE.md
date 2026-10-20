# CLAUDE.md

Guia para o Claude Code (e para qualquer dev) trabalhar neste repositório.

## Visão geral

Site institucional do **Grupo de Pesquisa Saúde Digital (UFCSPA)**: React 19 + TypeScript, TanStack Start/Router (SSR), Vite 8, Tailwind CSS v4 e React Query. Sem backend por enquanto: os `services` leem dados locais (`src/data/`) por um backend de mentira (`src/services/mock/`). O contrato da API está em `docs/api/openapi.yaml`.

O projeto está ligado ao **Lovable** (veja `AGENTS.md`): nunca reescreva histórico já publicado (force push, rebase, amend, squash) e mantenha a branch `main` sempre funcionando.

## Comandos

```bash
npm install --force      # --force é necessário: o package.json tem uma dependência só de Windows
npm run dev              # servidor local (porta 8080)
npm run build            # build de produção
npm run lint             # ESLint + Prettier (deve passar sem erros)
npm run format           # Prettier
npx tsc --noEmit -p .    # checagem de tipos (não há script; deve passar sem erros)
```

Antes de considerar uma tarefa pronta: `tsc`, `lint` e `build` passam, e a tela foi conferida em **computador e celular** (390px).

## Estrutura de pastas

```
src/
├── routes/                 rotas (index.tsx só monta a página; __root.tsx é o shell)
├── features/<secao>/       uma pasta por seção da página (hero, about, research-lines, team,
│                           projects, publications, instagram, partners, contact)
├── components/
│   ├── design-system/      Button, Card, Heading, Text, Badge, SectionLabel, FormField, Filters
│   ├── layout/             SiteHeader, SiteFooter, MobileMenu, SkipLink
│   ├── shared/             PageSection, ListFeedback, LoadMoreButton, ScrollCarousel, LattesLink
│   └── ui/                 shadcn: só dialog e sheet (veja "Armadilhas")
├── services/               *Service.ts, client.ts e mock/
├── hooks/                  hooks compartilhados (useInfiniteList, useDebouncedValue, useActiveSection)
├── data/                   conteúdo do site em arquivos (membros, projetos, publicações...)
├── types/                  tipos do domínio (espelham o contrato da API)
├── styles/                 tokens (cores, tipografia, raios), layout e base
└── lib/utils.ts            `cn()` (junta classes)
docs/api/openapi.yaml       contrato da API (fonte da verdade)
```

`@/` é um alias para `src/`.

## Nomenclatura

- **Nomes de código em inglês** (componentes, funções, variáveis, tipos). **Textos exibidos ao usuário em português (pt-BR)**.
- Componentes: `PascalCase.tsx`, **um por arquivo**, export **nomeado** (sem `export default`). Props em um tipo `NomeProps` no mesmo arquivo.
- Hooks: `useNomeEmCamelCase.ts`. Hooks de uma seção ficam na pasta da seção; só vão para `src/hooks/` se forem usados por mais de uma.
- Services: `NomeService.ts` (ex.: `ProjectsService.ts`), funções exportadas como `listProjects`, `sendContactMessage`.
- Dados e tipos: `kebab-case.ts` (`research-lines.ts`). Constantes de dado em `UPPER_SNAKE` (`RESEARCH_LINES`).
- Props booleanas começam com `is`/`has` (`isTinted`, `hasAccentBar`); callbacks com `on` (`onOpenDetails`). Handlers locais com `handle` (`handleSubmit`).
- Ids de recurso são texto legível (slug): `ciberseguranca-em-saude`. Nomes de parâmetro são específicos: `researchLineId`, não `id`.
- Comentários: poucos, em português, só para explicar um **porquê** não óbvio. Nada de comentar o que o código já diz.

## Estilos (Tailwind v4 + tokens)

- **Cores, tipografia e raios vivem só em `src/styles/tokens/`.** Para mudar uma cor do site, mude lá. Use os tokens semânticos (`bg-primary`, `text-muted-foreground`, `border-border`), nunca hexadecimais nem cores soltas.
- **Tipografia: use sempre as classes padronizadas**: `text-display`, `text-heading-1/2/3`, `text-body-lg`, `text-body`, `text-body-sm`, `text-label`, `text-caption`. Não use `text-sm`, `text-4xl` etc.
- **Layout: `layout-container`, `layout-section`, `touch-target`** (em `styles/layout.css`). A variante `roomy:` vale para telas largas **e** altas.
- **Nas telas, prefira os componentes de `design-system/` a escrever classes de aparência.** `className` nas telas é para layout (`grid`, `gap-6`, `mt-4`, `md:grid-cols-2`). Se um padrão visual se repete, vira componente ou variante (`cva`) no design system.
- **Marca institucional (UFCSPA): não mude logo nem cores.** O dourado (`accent`) é decoração e destaque sobre o azul; **não use como cor de texto sobre fundo claro** (contraste insuficiente).

## Acessibilidade (obrigatório)

- Áreas de toque de **pelo menos 44px** (`touch-target`). Texto nunca menor que 12px (`text-caption`).
- Todo campo de formulário tem `<label>` ligado ao campo (nos filtros, `sr-only` quando o rótulo é redundante). Placeholder não substitui rótulo.
- Ícones decorativos com `aria-hidden`; botões só com ícone têm `aria-label`; links que abrem em nova aba avisam com `sr-only` ("abre em nova aba") e usam `rel="noreferrer"`.
- Imagens têm `alt` descritivo. Listas são `<ul>/<li>`; títulos seguem a hierarquia (`h1` → `h2` → `h3`).
- Respeite `prefers-reduced-motion` (já tratado em `base.css`). Mantenha o foco visível.
- No máximo **uma área de rolagem** por vez (ex.: no modal da linha de pesquisa, só a lista de participantes rola em telas amplas).

## Dados e services

- Todo acesso a dados passa por `services/` → `client`. **Telas e hooks nunca leem `src/data/` diretamente**; só o mock (`services/mock/handlers.ts`) lê.
- Cada função de service traz a rota `/v1/...` dentro dela e devolve `Promise<ApiResponse<T>>`:
  ```ts
  export function listProjects(
    params: ListProjectsParams,
  ): Promise<ApiResponse<Paginated<Project>>> {
    return client.get("/v1/projects", { params });
  }
  ```
- Toda lista da API é paginada: `{ items, page, pageSize, total }` (`Paginated<T>`), com `page`, `pageSize` e `query`. **Nunca** devolva um array solto.
- `client` usa o mock quando `VITE_API_BASE_URL` está vazia; com ela preenchida, faz `fetch` de verdade.
- **Ao criar ou alterar um endpoint, atualize `docs/api/openapi.yaml` e `src/types/`** no mesmo commit. Mudança que quebra o contrato vai para `/v2`.
- Listas com "Ver mais": `useInfiniteList` + `ListFeedback` (carregando, erro, vazio) + `LoadMoreButton`. Filtros usam `FilterBar`/`SearchField`/`FilterSelect`/`FilterChips`; busca com `useDebouncedValue`.

## Conteúdo

- **Não invente dados.** Equipe, projetos e números do topo são **exemplos** e estão marcados como tal. Use dados reais (ex.: publicações com DOI e resumo reais) ou deixe vazio. Antes de afirmar algo institucional (apoio do CNPq, financiamento), confirme com o grupo.
- Logos de instituições: só as **versões oficiais** (manual de marca), em `src/assets/partners/`. Nunca desenhe ou imite uma marca.
- O conteúdo do Instagram é do próprio grupo; use só postagens da conta do grupo ou de colaborações confirmadas.

## Manutenibilidade > perfeição

Prefira código simples de ler e manter. Antes de adicionar proteção, abstração ou otimização, pergunte: **esse cenário acontece de verdade neste site, hoje?** Sem evidência, não trate.

- Sem defensividade especulativa: não valide o que o TypeScript já garante.
- Sem abstração prematura: só extraia hook/componente na **terceira** repetição real.
- Sem props ou configuração "para o futuro" (YAGNI).
- Sem `useMemo`/`useCallback`/`React.memo` reflexivos; só com problema de desempenho observado.
- Trate os casos que o fluxo real produz: carregando, erro, lista vazia, filtro sem resultado.

## Armadilhas conhecidas

- **`cn()` (`lib/utils.ts`) precisa conhecer as classes de texto do design system.** Ao criar uma classe `text-*` nova em `typography.css`, registre-a na lista de `extendTailwindMerge`; senão o merge a confunde com uma cor e a apaga (já derrubou todos os títulos para 16px).
- **`components/ui/` só tem `dialog.tsx` e `sheet.tsx`** (shadcn). Os demais foram removidos por não serem usados; se precisar de outro, adicione com o CLI do shadcn.
- **`src/dataconnect-generated/`, `dataconnect/` e `firebase.json`** são do Firebase Data Connect (exemplo de app de filmes, sem uso no site). O ESLint ignora a pasta gerada. Não edite à mão.
- **Instagram** usa iframes diretos de `https://www.instagram.com/p/<código>/embed/` (`features/instagram`); basta o link da postagem em `data/instagram-posts.ts`. Não use o `embed.js` do Instagram: ele é bloqueado. O iframe tem altura fixa (`h-[36rem]`), então legendas muito longas ficam cortadas. Há cookies de terceiros: considere aviso de cookies (LGPD).
- **Formulário de contato** ainda abre o e-mail do visitante (`mailto:`). `ContactService.sendContactMessage` já existe para quando houver backend.
- **Primeira carga das listas** acontece no navegador (React Query); o HTML do servidor mostra "Carregando…". Se o SEO exigir, carregue a primeira página no `loader` da rota.
- Os scripts de teste visual (Puppeteer) não fazem parte do projeto; não os adicione à raiz.

## Mapa da documentação

- `docs/api/openapi.yaml`: contrato da API (importe no Swagger Editor ou no Postman)
- `AGENTS.md`: regra do Lovable sobre o histórico do git
