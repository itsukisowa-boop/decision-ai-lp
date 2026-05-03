import type { LpPattern } from "./types";

/** Pattern B：AI×リアルコンサル伴走型LP */
export const patternB: LpPattern = {
  id: "b",
  basePath: "/lp-b",
  nav: [
    { id: "pain", label: "課題" },
    { id: "layers", label: "体制" },
    { id: "solution", label: "解決策" },
    { id: "features", label: "機能" },
    { id: "materials", label: "資料" },
    { id: "compare", label: "Before/After" },
    { id: "why", label: "強み" },
    { id: "cta", label: "相談" },
  ],
  hero: {
    kicker: "Decision AI",
    stickyNavCtaLabel: "伴走プラン",
    titleLines: ["AIで整理し、", "プロが意思決定を伴走する"],
    subtitle:
      "AIだけで完結させず、必要に応じてリアルコンサルが稼働の30〜50%を担い、稟議から実行まで寄り添います。",
    primaryCta: {
      label: "伴走プランを相談する",
      mailSubject: "Decision AI ｜ 伴走プラン相談",
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
      "「AIツールを入れたが現場が動かない」「外注コンサルがブラックボックス」——意思決定と実行の間で消耗していませんか。",
    bullets: [
      "要件定義が曖昧なまま進む",
      "コンサルに依存してブラックボックス",
      "稟議資料作成に時間がかかる",
      "ROIの根拠が弱い",
    ],
  },
  consultLayers: {
    heading: "伴走体制（4レイヤー）",
    intro:
      "ピーク時だけプロファイルを厚くし、平常時はAIとジュニア層でスループットを確保する設計が可能です。",
    partialNote:
      "部分稼働は「月あたりの関与比率」の目安です。30〜50%はプロ側稼働を厚めに取るケースのレンジとしてご覧ください（実際の設計はスコープに応じて調整）。",
    layers: [
      {
        role: "レジェンド",
        monthlyRange: "約80〜150万円 / 月",
        allocationNote: "戦略判断・顧客責任者レベル。週0.5〜1日相当の定点レビューが中心。",
      },
      {
        role: "マネージャー",
        monthlyRange: "約45〜90万円 / 月",
        allocationNote: "ワークストリーム統括・品質ゲート。複数コンサルタントを束ねる稼働イメージ。",
      },
      {
        role: "コンサルタント",
        monthlyRange: "約35〜65万円 / 月",
        allocationNote: "設計・ファシリテーション・稟議ドラフトの実務オーナー。ピーク時に比率を上げやすい。",
      },
      {
        role: "アソシエイト",
        monthlyRange: "約25〜45万円 / 月",
        allocationNote: "調査・ドキュメント・レビュー準備。AIアウトプットの整形・突合を分担。",
      },
    ],
  },
  solution: {
    heading: "Decision AIが解決します",
    bodyBefore: "上流メソッドをAIで再現可能にしつつ、必要な局面だけコンサルが実害のあるレビュー・調整に入ります。",
    emphasis: "AIでスピード、プロで判断の筋を担保",
    bodyAfter:
      "。説明責任が問われる場面では「人の監査可能性」を残し、平常業務はAIとジュニア層で回せる設計にします。",
    disclaimer:
      "※ 稼働比率・レンジはイメージであり、契約は個別見積になります。生成物の最終判断は貴社にてご確認ください。",
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
    title: "製品概要・伴走モデル資料",
    description:
      "レイヤー構成・稼働イメージ・セキュリティ観点のFAQをまとめています。ご請求いただければ共有します。",
    buttonLabel: "資料を請求する",
    mailSubject: "Decision AI ｜ 資料請求（伴走モデル）",
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
    heading: "伴走の厚みとAIのスピード、両方を試しませんか？",
    body: "稼働レンジ・レイヤー構成・セキュリティ要件まで、30分のすり合わせから可能です。",
    envHint:
      "本番では `.env` に `NEXT_PUBLIC_CONTACT_EMAIL` を設定すると、ボタンからメールが開きます。",
    primary: {
      label: "伴走プランを相談する",
      mailSubject: "Decision AI ｜ 伴走プラン相談",
      hrefFallback: "#materials",
    },
    secondary: {
      label: "問い合わせ",
      mailSubject: "Decision AI ｜ お問い合わせ",
      hrefFallback: "#materials",
    },
  },
};
