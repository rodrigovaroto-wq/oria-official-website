## Plano de redesign — Oria Partners

Aplico todas as mudanças do prompt em uma sequência única, organizada por arquivo. Sem alterar textos fora do escopo descrito.

### 1. Tokens e tipografia globais (`src/index.css`)
- Atualizar `--background` para `#F6F4EE` (HSL `42 27% 95%`); manter `--paper-warm` igual ao background para colapsar variações.
- Trocar `font-family` do `body` para Inter (fonte sans já usada em UI shadcn). Aplicar a mesma família em `.font-serif-display` e `.font-mono-label` (mantendo só letter-spacing nas labels). Resultado: uma única família no site.
- Remover qualquer `italic`/`em` styling herdado via utilitário global `em { font-style: normal; }` para garantir que nada renderize em cursiva.

### 2. Navegação (`src/data/oria.ts` + `Nav.tsx`)
- `NAV_PT`/`NAV_EN` reduzidos a 5 itens: Quem Somos, Atuação, Casos, Sócios, Notícias (renomear "Sobre"→"Quem Somos"/"Who We Are"; remover "Quando Buscar", "Diferenciais" e "Contato" do array principal).
- "Atuação" continua apontando para `/atuacao` (página existente).
- Adicionar no `Nav.tsx` um botão CTA "Contato" (terracotta) à direita, antes do seletor de idioma, levando a `/#contato` (ou home + scroll). Mesma lógica no menu mobile.

### 3. Home — ordem (`src/pages/Index.tsx`)
- Reordenar para: Hero → Sobre (Quem Somos) → Numeros → Diferenciais → QuandoBuscar → NoticiasHome → Contato → Footer.

### 4. Quem Somos (`Sobre.tsx` + `oria.ts`)
- Remover label antigo e o `heading` grande. Não renderizar `SectionHeader`.
- Novo label "Quem somos" / "Who we are" em preto, maior, sem traço.
- Reescrever `SOBRE_PT.paragraphs` e `SOBRE_EN.paragraphs` em exatamente 3 parágrafos conforme briefing (sínteses + parágrafo 3 original preservado).

### 5. Nossos Números (`Numeros.tsx` + `oria.ts`)
- Trocar `7 bi` → value `7`, suffix `Bi +`, prefix `R$ ` (renderizar como `R$ 7Bi +`).
- Fundo `#11161D`, texto `#F6F4EE`. Remover grid de linhas/borders (sem `gap-px bg-rule`).
- Título "Nossos Números"/"Our numbers" em vez do eyebrow com traço.
- Hook `useCountUp` interno: IntersectionObserver dispara count 0→valor (1500ms ease-out), apenas uma vez. Aplicado a cada número.
- Números em sans-serif unificada, negrito, brancos (sem `text-accent`).

### 6. Diferenciais + Princípios Inegociáveis (`Diferenciais.tsx`)
- Título: "O que estrutura nossa atuação" / "What structures our work", sem itálico.
- Intro reduzida (~70%) — atualizar `UI.diferenciais.intro` PT/EN.
- Grid 3×2 de cards quadrados ~200×200px, sem números romanos. Estado padrão: só título centralizado. Hover: título fade-out, descrição fade-in (transição 0.3s, posicionamento absoluto para evitar sobreposição).
- Abaixo: subtítulo "Princípios inegociáveis" e grid 3×1 dos `INEGOCIAVEIS` no mesmo estilo (hover título↔texto).
- Mobile: 1 coluna.

### 7. Quando Buscar (`QuandoBuscar.tsx` + `oria.ts`)
- Reduzir `GATILHOS_PT/EN` para 3: Deterioração sem diagnóstico claro, Pressão por parte dos credores, Transações sob pressão de liquidez — com descrições curtas reescritas conforme briefing. Remover bullets/numeração.
- Banner achatado (padding `py-12 md:py-16`) com layout `md:grid-cols-3`: esquerda (col 1) com label "Quando buscar", título quebrado em 2 linhas conforme spec, CTA "Conversar com um sócio"; direita (col 2 spans 2) com 3 blocos lado a lado (título + 1 linha descrição). Mobile empilha.
- Sem itálico no título; fonte unificada; fundo `#11161D`, texto claro.

### 8. Notícias home (`NoticiasHome.tsx`)
- Label/heading sem `§` nem `—`, na fonte unificada, sem `<em italic>`. Manter os 3 cards.

### 9. Rodapé (`Footer.tsx`)
- Acima da linha atual (ou em coluna separada), adicionar lista vertical: Quem Somos, Atuação, Casos, Sócios, Notícias, Contato — usando `Link`/anchor. Manter logo, "Política de Privacidade" e copyright existentes.

### 10. Validação
- `tsgo` para verificar tipos.
- Playwright headless para tirar screenshot mobile + desktop da home, confirmando: fundo bege, números animando (estado final), grid de diferenciais, banner Quando Buscar, rodapé com navegação.

### Detalhes técnicos
- Não vou tocar `src/integrations/supabase/*`, `tailwind.config.ts` (cores semânticas via CSS vars cobrem), nem rotas.
- `font-serif-display` continuará existindo como classe (para não quebrar outros componentes) mas remapeada para Inter — efeito é uniforme.
- O CTA Contato no header usa `btn-primary` existente em escala compacta.

Após sua aprovação, executo tudo de uma vez e verifico.