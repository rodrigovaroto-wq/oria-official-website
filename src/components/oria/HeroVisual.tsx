// Composição geométrica abstrata para a área visual do hero.
// Linhas, grid, círculo concêntrico, referência: blueprint financeiro / cartografia institucional.
// Sem fotos clichê. Tudo em tokens do design system.

export const HeroVisual = () => (
  <svg
    viewBox="0 0 600 600"
    className="w-full h-auto"
    role="img"
    aria-label="Composição geométrica abstrata representando coordenação e legibilidade"
  >
    <defs>
      <pattern id="oria-grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path
          d="M 40 0 L 0 0 0 40"
          fill="none"
          stroke="hsl(var(--rule))"
          strokeWidth="0.5"
        />
      </pattern>
      <linearGradient id="oria-fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="hsl(var(--background))" stopOpacity="0" />
        <stop offset="100%" stopColor="hsl(var(--background))" stopOpacity="0.6" />
      </linearGradient>
    </defs>

    {/* Background grid */}
    <rect width="600" height="600" fill="url(#oria-grid)" />

    {/* Rule lines (axes) */}
    <line x1="0" y1="300" x2="600" y2="300" stroke="hsl(var(--rule))" strokeWidth="1" />
    <line x1="300" y1="0" x2="300" y2="600" stroke="hsl(var(--rule))" strokeWidth="1" />

    {/* Concentric circles, coordenação */}
    <circle cx="300" cy="300" r="220" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1" opacity="0.18" />
    <circle cx="300" cy="300" r="160" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1" opacity="0.28" />
    <circle cx="300" cy="300" r="100" fill="none" stroke="hsl(var(--foreground))" strokeWidth="1" opacity="0.45" />

    {/* Diagonal, vetor decisão */}
    <line x1="80" y1="520" x2="520" y2="80" stroke="hsl(var(--accent))" strokeWidth="1.5" />

    {/* Anchored squares, partes envolvidas */}
    <g>
      <rect x="80" y="80" width="14" height="14" fill="hsl(var(--foreground))" />
      <rect x="506" y="506" width="14" height="14" fill="hsl(var(--foreground))" />
      <rect x="293" y="293" width="14" height="14" fill="hsl(var(--accent))" />
    </g>

    {/* Radial markers, cadência */}
    <g opacity="0.5">
      <circle cx="300" cy="80" r="3" fill="hsl(var(--foreground))" />
      <circle cx="520" cy="300" r="3" fill="hsl(var(--foreground))" />
      <circle cx="300" cy="520" r="3" fill="hsl(var(--foreground))" />
      <circle cx="80" cy="300" r="3" fill="hsl(var(--foreground))" />
    </g>

    {/* Tick marks (mono labels feel) */}
    <g fontFamily="JetBrains Mono, monospace" fontSize="9" fill="hsl(var(--muted))" letterSpacing="0.15em">
      <text x="312" y="50">N</text>
      <text x="540" y="305">E</text>
      <text x="312" y="558">S</text>
      <text x="50" y="305">O</text>
    </g>

    {/* Soft fade overlay on bottom */}
    <rect width="600" height="600" fill="url(#oria-fade)" />
  </svg>
);
