export type ConsultantId = "legend" | "manager" | "consultant" | "associate";

export type ConsultantTier = {
  id: ConsultantId;
  title: string;
  tagline: string;
  description: string;
};

export const CONSULTANT_TIERS: readonly ConsultantTier[] = [
  {
    id: "legend",
    title: "レジェンド",
    tagline: "「その投資、本当に必要か？」",
    description: "経営視点から意思決定を見抜きます",
  },
  {
    id: "manager",
    title: "マネージャー",
    tagline: "「ROIとリスクで判断します」",
    description: "分析と構造化で精度を高めます",
  },
  {
    id: "consultant",
    title: "コンサルタント",
    tagline: "「一緒に整理しましょう」",
    description: "実務レベルで伴走支援します",
  },
  {
    id: "associate",
    title: "アソシエイト",
    tagline: "「まずは整理から」",
    description: "思考を引き出しながら進めます",
  },
] as const;

export function consultantTitleById(id: string | undefined): string | null {
  if (!id) return null;
  const tier = CONSULTANT_TIERS.find((t) => t.id === id);
  return tier?.title ?? null;
}
