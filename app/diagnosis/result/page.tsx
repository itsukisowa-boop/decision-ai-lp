import Link from "next/link";
import { mailtoFor } from "@/lib/lp/mail";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "診断結果 | Decision AI",
  description: "意思決定レベル診断の結果（モック表示）。",
};

export default function DiagnosisResultPage() {
  const freeConsultHref = mailtoFor("Decision AI ｜ 無料相談");

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

        <div className="mt-10 rounded-xl border border-da-accent/25 bg-da-bg/60 px-6 py-7 text-center">
          <p className="text-base leading-snug text-da-fg sm:text-lg">
            あなたの意思決定レベル：
            <span className="font-bold text-da-accent">B</span>
            <span className="font-semibold text-da-fgMuted">（62%）</span>
          </p>
          <p className="mt-4 text-xs text-da-subtle">
            ※ スコアはモックです（回答からの自動算出ではありません）。
          </p>
        </div>

        <div className="mt-10 space-y-4 text-sm leading-relaxed text-da-fgMuted">
          <p>
            現状、<strong className="font-semibold text-da-fg">要件定義</strong>と
            <strong className="font-semibold text-da-fg">ROI設計</strong>
            に課題があります。
          </p>
          <p>このまま進めると、プロジェクト失敗リスクが高い状態です。</p>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/lp-a#consultant-tiers"
            className="inline-flex justify-center rounded-full bg-da-accent px-8 py-3 text-center text-sm font-semibold text-da-bg shadow-[0_0_28px_-6px_rgba(56,189,248,0.65)] transition hover:bg-sky-300"
          >
            AIコンサルタントを選ぶ
          </Link>
          {freeConsultHref ? (
            <a
              href={freeConsultHref}
              className="inline-flex justify-center rounded-full border border-white/[0.14] bg-white/[0.04] px-8 py-3 text-center text-sm font-semibold text-da-fg transition hover:border-da-accent/35 hover:bg-white/[0.07]"
            >
              無料相談する
            </a>
          ) : (
            <Link
              href="/lp-a#cta"
              className="inline-flex justify-center rounded-full border border-white/[0.14] bg-white/[0.04] px-8 py-3 text-center text-sm font-semibold text-da-fg transition hover:border-da-accent/35 hover:bg-white/[0.07]"
            >
              無料相談する
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
