import Link from "next/link";
import { mailtoFor } from "@/lib/lp/mail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "診断結果 | Decision AI",
  description: "意思決定レベル診断の結果と次のアクション。",
};

/** 簡易スコア（将来は回答から算出して渡す想定） */
const SCORE_PERCENT = 62;
const SCORE_GRADE = "B";

function scoreTierStyles(pct: number) {
  if (pct >= 80) {
    return {
      border: "border-emerald-500/40",
      bg: "bg-emerald-500/[0.07]",
      grade: "text-emerald-400",
      percent: "text-emerald-200/85",
    };
  }
  if (pct >= 50) {
    return {
      border: "border-amber-400/45",
      bg: "bg-amber-500/[0.08]",
      grade: "text-amber-400",
      percent: "text-amber-200/75",
    };
  }
  return {
    border: "border-red-500/45",
    bg: "bg-red-500/[0.07]",
    grade: "text-red-400",
    percent: "text-red-200/80",
  };
}

export default function DiagnosisResultPage() {
  const freeConsultHref = mailtoFor("Decision AI ｜ 無料相談");
  const tier = scoreTierStyles(SCORE_PERCENT);

  const primaryCtaClass =
    "inline-flex justify-center rounded-full bg-da-accent px-8 py-3 text-center text-sm font-semibold text-da-bg shadow-[0_0_28px_-6px_rgba(56,189,248,0.65)] transition hover:bg-sky-300";

  const secondaryCtaClass =
    "inline-flex justify-center rounded-full border border-white/[0.18] bg-da-bg/80 px-8 py-3 text-center text-sm font-semibold text-da-fg transition hover:border-white/[0.28] hover:bg-da-bg";

  return (
    <div className="min-h-screen bg-da-bg px-4 py-12 text-da-fg sm:py-16">
      <div className="mx-auto mb-8 flex max-w-lg flex-wrap items-center justify-between gap-4 text-sm">
        <Link href="/diagnosis" className="text-da-fgMuted transition hover:text-da-accent">
          ← 診断にもう一度
        </Link>
        <Link href="/lp-a" className="text-da-fgMuted transition hover:text-da-accent">
          LPに戻る
        </Link>
      </div>

      <main className="mx-auto max-w-lg rounded-2xl border border-da-border bg-da-surface px-6 py-10 shadow-card sm:px-10 sm:py-12">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-da-accent">
          Decision AI
        </p>
        <h1 className="mt-4 text-center text-2xl font-bold tracking-tight text-da-fg sm:text-[1.65rem]">
          診断結果
        </h1>

        <div
          className={`mt-10 rounded-xl border px-6 py-7 text-center ${tier.border} ${tier.bg}`}
        >
          <p className="text-base leading-snug text-da-fg sm:text-lg">
            あなたの意思決定レベル：
            <span className={`font-bold ${tier.grade}`}>{SCORE_GRADE}</span>
            <span className={`font-semibold ${tier.percent}`}>（{SCORE_PERCENT}%）</span>
          </p>
        </div>

        <p className="mt-4 text-center text-xs leading-relaxed text-da-subtle">
          診断結果は簡易分析に基づいています。
        </p>

        <p className="mt-6 text-center text-sm leading-relaxed text-da-fgMuted">
          まずは診断結果をもとに、投資判断・要件定義・ROIの論点を整理することをおすすめします。
        </p>

        <div className="mt-10 space-y-4 text-sm leading-relaxed text-da-fgMuted">
          <p>
            現状、<strong className="font-semibold text-da-fg">要件定義</strong>と
            <strong className="font-semibold text-da-fg">ROI設計</strong>
            に課題があります。
          </p>
          <p>
            この状態で進めると、要件定義のズレやROI説明不足により、プロジェクト失敗リスクが高まります。
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          {freeConsultHref ? (
            <a href={freeConsultHref} className={primaryCtaClass}>
              無料相談する
            </a>
          ) : (
            <Link href="/lp-a#cta" className={primaryCtaClass}>
              無料相談する
            </Link>
          )}
          <Link href="/lp-a#consultant-tiers" className={secondaryCtaClass}>
            AIコンサルタントを選ぶ
          </Link>
        </div>
      </main>
    </div>
  );
}
