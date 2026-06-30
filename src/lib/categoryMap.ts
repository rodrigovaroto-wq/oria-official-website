/** Mapa de slug técnico → rótulo legível para exibição das categorias de notícias */
export const CATEGORY_MAP: Record<string, string> = {
  insolvencia: "Insolvência",
  reestruturacao: "Reestruturação",
  desinvestimento: "Desinvestimento",
  ma: "M&A",
  emissao: "Emissão de Dívida",
  captacao: "Captação",
  governanca: "Governança",
  liquidez: "Liquidez",
};

export function getCategoryLabel(slug: string | undefined): string {
  if (!slug) return "";
  return CATEGORY_MAP[slug.toLowerCase()] ?? slug;
}
