import type { LpPattern } from "./types";

/** Pattern B：AI×リアルコンサル伴走型LP */
export const patternB: LpPattern = {
  id: "b",
  basePath: "/lp-b",
  nav: [
    { id: "pain", label: "AIだけでは不足" },
    { id: "layers", label: "伴走階層" },
    { id: "solution", label: "部分稼働モデル" },
    { id: "journey", label: "導入の流れ" },
    { id: "features", label: "支援内容" },
    { id: "materials", label: "資料請求" },
    { id: "why", label: "選ばれる理由" },
    { id: "cta", label: "相談" },
  ],
  hero: {
    kicker: "Decision AI",
    stickyNavCtaLabel: "伴走プラン",
    titleLines: ["AIで整理し、", "プロが意思決定を伴走する"],
    subtitle:
      "Decision AIは、要件定義・ROI・稟議の論点をAIで構造化し、必要なタイミングだけプロフェッショナルが伴走する新しい意思決定支援サービスです。",
    primaryCta: {
      label: "伴走プランを相談する",
      mailSubject: "Decision AI ｜ 伴走プラン相談",
      hrefFallback: "#cta",
    },
    secondaryCta: {
      label: "3分診断を見る",
      href: "/diagnosis",
    },
  },
  pain: {
    heading: "AIだけでは、最後の意思決定はできない",
    intro:
      "AIは論点整理や資料作成を高速化できます。しかし、投資判断・社内調整・経営合意には、経験あるプロの視点が必要です。",
    bullets: [
      "AIで整理しても、最後の意思決定で止まる",
      "稟議・経営会議で説明責任を通し切れない",
      "Decision AIは、AIで整理し、人が意思決定を確定させる仕組みです。",
      "高単価案件でも再現可能な伴走体制を提供します",
    ],
  },
  consultLayers: {
    heading: "伴走コンサルタント4階層",
    intro:
      "案件の重さや経営関与度に応じて、最適なレイヤーを選択できます。",
    partialNote:
      "参考単価はフルアサインではなく、部分稼働前提で設計します。実際のアサイン比率・体制は論点数と関係者数に応じて最適化します。",
    layers: [
      {
        role: "レジェンド",
        monthlyRange: "200〜300万円 / 月（基準）",
        allocationNote:
          "その投資、本当に必要か？ キャリア40年、超上流コンサル歴30年級の経営判断支援。経営者視点で本質を見抜きます。",
      },
      {
        role: "マネージャー",
        monthlyRange: "150〜250万円 / 月（基準）",
        allocationNote:
          "ROIとリスクで判断します。大手コンサルファーム経験を持つマネージャークラスが、予算・リスク・実行計画を構造化します。",
      },
      {
        role: "コンサルタント",
        monthlyRange: "120〜180万円 / 月（基準）",
        allocationNote:
          "実務を前に進めます。要件整理、資料化、関係者調整を伴走支援し、実行フェーズを着実に進めます。",
      },
      {
        role: "アソシエイト",
        monthlyRange: "80〜120万円 / 月（基準）",
        allocationNote:
          "まずは整理から始めます。ヒアリング、情報整理、資料作成を支援し、ユーザーと一緒に論点を整理します。",
      },
    ],
  },
  journey: {
    heading: "導入の流れ",
    steps: [
      { title: "3分診断", desc: "まず現状の意思決定課題を短時間で可視化します。" },
      {
        title: "AIによる課題整理",
        desc: "要件定義・ROI・稟議の論点をAIで構造化し、判断材料をそろえます。",
      },
      {
        title: "最適なAIコンサルタント選択",
        desc: "案件特性に合わせて、4階層から最適な伴走レイヤーを選定します。",
      },
      {
        title: "必要に応じてリアルコンサル伴走",
        desc: "意思決定の山場だけプロが入り、精度とスピードを両立させます。",
      },
      {
        title: "稟議・要件定義・投資判断へ反映",
        desc: "整理した論点を実際の社内意思決定に接続し、実行可能性を高めます。",
      },
    ],
  },
  solution: {
    heading: "フルタイムのコンサルは不要です",
    bodyBefore:
      "1.0人月で常駐するのではなく、30〜50%の部分稼働で、意思決定に必要なタイミングだけプロが関与します。",
    emphasis: "必要な時に、必要な厚みだけ",
    bodyAfter:
      "。投資判断の節目に絞って伴走することで、品質を落とさずコスト効率を維持します。",
    disclaimer:
      "※ 稼働比率・レンジは目安です。契約内容は個別設計となります。",
  },
  features: {
    heading: "部分稼働モデルの関与例",
    items: [
      {
        title: "月2回の経営レビュー",
        desc: "投資判断の論点を経営視点でチェックし、判断のブレを抑えます。",
      },
      {
        title: "週1回の要件定義レビュー",
        desc: "要件の曖昧さを早期に補正し、実行段階の手戻りを減らします。",
      },
      {
        title: "稟議前のROI妥当性チェック",
        desc: "根拠の薄い前提を事前に補強し、説明責任を強化します。",
      },
      {
        title: "プロジェクト開始前のリスク整理",
        desc: "主要リスクを構造化し、初期計画に織り込んだうえで着手できます。",
      },
    ],
  },
  materials: {
    title: "伴走モデル資料（投資判断向け）",
    description:
      "4階層体制・部分稼働レンジ・導入フローを1枚で把握できる概要資料です。投資家説明・役員説明の事前整理に活用いただけます。",
    buttonLabel: "資料を請求する",
    mailSubject: "Decision AI ｜ 資料請求（伴走モデル）",
  },
  compare: {
    heading: "導入前後の変化",
    before: ["感覚ベースの投資判断", "関係者ごとに論点がばらつく", "稟議前に手戻りが発生"],
    after: ["論点が構造化された投資判断", "経営・現場で判断軸が揃う", "稟議・実行までのリードタイム短縮"],
  },
  why: {
    heading: "なぜ高単価案件で選ばれるのか",
    items: [
      {
        title: "AI整理 × プロ意思決定の分業",
        body: "AIで高速化し、重要判断だけプロが担うことで、品質とコスト効率を両立します。",
      },
      {
        title: "部分稼働で高い費用対効果",
        body: "常駐前提ではなく30〜50%稼働を基準に、必要な局面に限定して上位層を投入できます。",
      },
      {
        title: "説明責任に耐える設計",
        body: "ROI・リスク・要件定義を一貫したストーリーで整え、社内外の合意形成を進めやすくします。",
      },
    ],
  },
  cta: {
    heading: "AIで整理した論点を、プロと一緒に意思決定へ変えませんか？",
    body: "まずは現状課題を共有いただければ、最適な伴走レイヤーと部分稼働プランをご提案します。",
    primary: {
      label: "伴走プランを相談する",
      mailSubject: "Decision AI ｜ 伴走プラン相談",
      hrefFallback: "#materials",
    },
    secondary: {
      label: "3分診断を開始する",
      hrefFallback: "/diagnosis",
      navigateHref: "/diagnosis",
    },
  },
};
