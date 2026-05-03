import type { LpPattern } from "./types";

/** Pattern A：診断訴求型LP */
export const patternA: LpPattern = {
  id: "a",
  basePath: "/lp-a",
  nav: [
    { id: "pain", label: "課題" },
    { id: "journey", label: "流れ" },
    { id: "solution", label: "解決策" },
    { id: "features", label: "機能" },
    { id: "materials", label: "資料" },
    { id: "compare", label: "Before/After" },
    { id: "why", label: "強み" },
    { id: "cta", label: "相談" },
  ],
  hero: {
    kicker: "Decision AI",
    stickyNavCtaLabel: "無料診断",
    titleLines: ["その投資判断、", "本当に説明できますか？"],
    subtitle:
      "無料診断で論点とギャップを短時間で可視化。AIコンサルの範囲を選び、相談まで一気通貫で進められます。",
    primaryCta: {
      label: "無料診断を申し込む",
      mailSubject: "Decision AI ｜ 無料診断",
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
  journey: {
    heading: "診断から相談までの流れ",
    intro: "まずは無料診断で現状を一枚に。次にAIコンサルの支援範囲を選び、個別相談で進め方を確定します。",
    steps: [
      {
        title: "無料診断",
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
    heading: "まずは無料診断から、現状を一枚にしませんか？",
    body: "診断ご希望・資料請求・導入スケジュールのご相談まで、お気軽にお問い合わせください。",
    envHint:
      "本番では `.env` に `NEXT_PUBLIC_CONTACT_EMAIL` を設定すると、ボタンからメールが開きます。",
    primary: {
      label: "無料診断を申し込む",
      mailSubject: "Decision AI ｜ 無料診断",
      hrefFallback: "#materials",
    },
    secondary: {
      label: "問い合わせ",
      mailSubject: "Decision AI ｜ お問い合わせ",
      hrefFallback: "#materials",
    },
  },
};
