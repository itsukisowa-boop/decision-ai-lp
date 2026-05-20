import type { LpPattern } from "./types";

/** Pattern A：診断訴求型LP */
export const patternA: LpPattern = {
  id: "a",
  basePath: "/lp-a",
  nav: [
    { id: "pain", label: "課題" },
    { id: "diagnostic-outcomes", label: "診断" },
    { id: "journey", label: "流れ" },
    { id: "solution", label: "解決策" },
    { id: "features", label: "機能" },
    { id: "consultant-tiers", label: "AI支援" },
    { id: "ai-real", label: "伴走" },
    { id: "materials", label: "資料" },
    { id: "compare", label: "事例" },
    { id: "why", label: "強み" },
    { id: "cta", label: "診断" },
  ],
  hero: {
    kicker: "Decision AI",
    stickyNavCtaLabel: "3分診断",
    titleLines: ["その投資判断、", "本当に説明できますか？"],
    subtitle:
      "3分で現状を一枚に。論点・ギャップ・稟議で問われる説明責任まで短時間で棚卸しし、次のアクションが見える状態へ進めます。",
    primaryCta: {
      label: "3分診断を開始する",
      navigateHref: "/diagnosis",
      hrefFallback: "#cta",
    },
    secondaryCta: {
      label: "資料を見る",
      href: "#materials",
    },
  },
  pain: {
    heading: "こんな課題ありませんか？",
    intro:
      "稟議に載せる前に「説明できる状態」へそろえたい——そのストレスは、情シス・経企・DX推進で共通しています。",
    bullets: [
      "要件定義が曖昧なまま進む",
      "コンサルに依存してブラックボックス",
      "稟議資料作成に時間がかかる",
      "ROIの根拠が弱い",
    ],
  },
  diagnosticOutcomes: {
    heading: "診断でわかること",
    intro: "短時間の質問と構造化により、意思決定プロセスのボトルネックを言語化します。",
    items: [
      {
        title: "意思決定成熟度",
        desc: "論点設計・証跡・説明責任がどこまで整っているかをスコープごとに把握できます。",
      },
      {
        title: "プロジェクト失敗リスク",
        desc: "要件ブレ・ステークホルダー認識ズレ・実行ギャップなど、先行きのリスクを可視化します。",
      },
      {
        title: "稟議に足りない論点",
        desc: "比較軸・前提・未決事項が不足していないか、稟議で突っ込まれやすい論点を洗い出します。",
      },
      {
        title: "ROI説明の不足ポイント",
        desc: "定量・定性の説明が薄い箇所や、投資判断として成立しないギャップを特定します。",
      },
    ],
  },
  journey: {
    heading: "診断から相談までの流れ",
    intro: "まずは3分診断で現状を一枚に。次にAIコンサルの支援範囲を選び、個別相談で進め方を確定します。",
    steps: [
      {
        title: "3分診断",
        desc: "論点・前提・ギャップを短時間で棚卸しし、「説明に必要な材料」を揃えるための第一歩です。",
      },
      {
        title: "AIコンサル選択",
        desc: "スピード優先／網羅優先など、支援テンプレから範囲を選択。稟議・PoCに必要な成果物イメージもそろえます。",
      },
      {
        title: "個別相談",
        desc: "社内調整・セキュリティ・契約まで、次のアクションをすり合わせ。必要ならリアル伴走も検討できます。",
      },
    ],
  },
  consultantTiers: {
    heading: "診断後に選べるAIコンサルタント",
    intro: "診断結果にあわせて、支援の厚みとスピードのバランスを選べます（すべてAI支援テンプレとして選択）。",
    cards: [
      { role: "レジェンド", tagline: "経営判断・超上流" },
      { role: "マネージャー", tagline: "ROI設計・リスク分析" },
      { role: "コンサルタント", tagline: "要件整理・実務伴走" },
      { role: "アソシエイト", tagline: "質問型・思考整理" },
    ],
  },
  aiToReal: {
    heading: "AIからリアル伴走へ",
    lines: [
      "AIで整理し、必要なタイミングだけプロが伴走します。",
      "1.0人月前提ではなく、30〜50%の部分稼働で支援可能です。",
    ],
  },
  solution: {
    heading: "Decision AIが解決します",
    bodyBefore: "超上流コンサルメソッドをAI化し、",
    emphasis: "課題整理から稟議資料までを一気通貫で支援",
    bodyAfter:
      "します。論点・前提・比較軸をそろえたうえで、経営層・現場の両方に伝わる形へ整形します。診断結果を起点に、次に取るべき判断が見える状態へ寄せていきます。",
    disclaimer:
      "※ 生成物はドラフトであり、最終判断・公開可否・コンプライアンスは貴社にてご確認ください。",
  },
  features: {
    heading: "できること",
    items: [
      {
        title: "現状分析（As-Is）",
        desc: "プロセス・制約・関係者の論点を整理し、認識のズレを減らす。",
      },
      { title: "To-Be設計", desc: "目標状態とギャップを構造化し、実現パスの選択肢を並べる。" },
      {
        title: "ROI試算",
        desc: "定量・定性の効果を束ね、説明責任を成立させるたたき台を用意。",
      },
      {
        title: "稟議書生成",
        desc: "判断サマリー・根拠・リスクを一つの資料構成へ収束させる。",
      },
      {
        title: "RFP作成支援",
        desc: "要件の曖昧さを減らし、vendor比較に耐える文章構造を支援。",
      },
    ],
  },
  materials: {
    title: "製品概要資料",
    description:
      "機能範囲・ユースケース・セキュリティ観点のFAQなどをまとめています。ご請求いただければ共有します。",
    buttonLabel: "資料を請求する",
    mailSubject: "Decision AI ｜ 資料請求",
  },
  compare: {
    heading: "Before / After",
    before: ["感覚的な判断", "時間がかかる", "説得力が弱い"],
    after: ["整理された判断", "スピード向上", "稟議が通る"],
  },
  why: {
    heading: "なぜDecision AIなのか",
    items: [
      {
        title: "コンサルメソッドベース",
        body: "ファクト整理・論点設計・合意形成の型をプロダクトに落とし込み、属人性を下げる。",
      },
      {
        title: "AI×実務設計",
        body: "「書類が綺麗」だけでなく、稟議で問われる比較・ROI・リスクまで踏み込む。",
      },
      {
        title: "再現性",
        body: "案件をまたいでも再現できるフローで、組織の判断プロセスを育てられる。",
      },
    ],
  },
  cta: {
    heading: "まずは3分で、貴社の意思決定レベルを診断しませんか？",
    body: "診断結果の読み解きから、AIコンサル・リアル伴走の組み合わせまで、その場で次の一手をご提案します。",
    primary: {
      label: "3分診断を開始する",
      navigateHref: "/diagnosis",
      hrefFallback: "#materials",
    },
    secondary: {
      label: "デモ相談する",
      mailSubject: "Decision AI ｜ デモ相談",
      hrefFallback: "#materials",
    },
  },
};
