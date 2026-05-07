export type ConsultantId = "legend" | "senior-manager" | "consultant" | "associate";

export type ConsultantTier = {
  id: ConsultantId;
  title: string;
  tagline: string;
  description: string;
  href: `/consultants/${ConsultantId}`;
  feature: string;
  priceRange: string;
  firstMessages: readonly [string, string];
};

export const CONSULTANT_TIERS: readonly ConsultantTier[] = [
  {
    id: "legend",
    title: "レジェンド",
    tagline: "「その投資、本当に必要か？」",
    description: "経営視点から意思決定を見抜きます",
    href: "/consultants/legend",
    feature:
      "キャリア40年、超上流コンサル歴30年級。経営者からの信頼が厚いが、威圧感はなく、腰が低く何でも話せる雰囲気。",
    priceRange: "200〜300万円/月（部分稼働）",
    firstMessages: [
      "経営層や現場が考える要求定義を整理することが、失敗しないプロジェクトへの第一歩です。",
      "ぜひ、私にお手伝いさせてください。",
    ],
  },
  {
    id: "senior-manager",
    title: "シニアマネージャー",
    tagline: "「ROIとリスクで判断します」",
    description: "分析と構造化で精度を高めます",
    href: "/consultants/senior-manager",
    feature: "大手コンサルファーム経験を持ち、プロジェクト全体を構造化して導くタイプ。",
    priceRange: "150〜250万円/月（部分稼働）",
    firstMessages: [
      "企業の目指す方向性から、今回のプロジェクトの目的とゴールを設定していきましょう。",
      "ゴールまでの道筋を整理し、着実に導いていきます。",
    ],
  },
  {
    id: "consultant",
    title: "コンサルタント",
    tagline: "「実務を前に進めます」",
    description: "現場課題から要件整理まで伴走します",
    href: "/consultants/consultant",
    feature: "超上流コンサルAIメソッドに沿って、現場課題から要件整理まで伴走するタイプ。",
    priceRange: "120〜180万円/月（部分稼働）",
    firstMessages: [
      "超上流コンサルAIメソッドに沿って、コンサルティングを伴走します。",
      "まずは、現場で困っていることから教えてください。",
    ],
  },
  {
    id: "associate",
    title: "アソシエイト",
    tagline: "「まずは整理から」",
    description: "思考を引き出しながら進めます",
    href: "/consultants/associate",
    feature: "経験2〜3年程度。ユーザーと一緒に考えながら成長していく伸び代タイプ。",
    priceRange: "80〜120万円/月（部分稼働）",
    firstMessages: [
      "まずは状況整理から始めましょう！",
      "うまくまとまっていなくても大丈夫です。",
    ],
  },
] as const;

export function consultantTitleById(id: string | undefined): string | null {
  if (!id) return null;
  if (id === "manager") return "シニアマネージャー";
  const tier = CONSULTANT_TIERS.find((t) => t.id === id);
  return tier?.title ?? null;
}

export function getConsultantById(id: ConsultantId): ConsultantTier {
  const tier = CONSULTANT_TIERS.find((t) => t.id === id);
  if (!tier) {
    throw new Error(`Unknown consultant id: ${id}`);
  }
  return tier;
}
