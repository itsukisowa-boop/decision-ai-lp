"use client";

import Link from "next/link";
import { mailtoFor } from "@/lib/lp/mail";
import {
  computeDiagnosisResult,
  DIAGNOSIS_STORAGE_KEY,
  type DiagnosisComputedResult,
  type DiagnosisGrade,
  type DiagnosisStoredPayload,
} from "@/lib/diagnosis/scoring";
import { useEffect, useState } from "react";

function scoreStatusSuffix(grade: DiagnosisGrade): string {
  return grade === "A" ? "｜高評価" : "｜改善余地あり";
}

function benchmarkCopy(grade: DiagnosisGrade): string {
  return grade === "A"
    ? "同規模企業と比較すると、意思決定精度は平均以上の水準です。"
    : "同規模企業と比較すると、意思決定精度は平均以下です";
}

function tierStyles(percent: number) {
  if (percent >= 80) {
    return {
      border: "border-emerald-500/40",
      bg: "bg-emerald-500/[0.07]",
      grade: "text-emerald-400",
      percentText: "text-emerald-200/85",
    };
  }
  if (percent >= 60) {
    return {
      border: "border-amber-400/45",
      bg: "bg-amber-500/[0.08]",
      grade: "text-amber-400",
      percentText: "text-amber-200/75",
    };
  }
  if (percent >= 40) {
    return {
      border: "border-orange-500/45",
      bg: "bg-orange-500/[0.08]",
      grade: "text-orange-400",
      percentText: "text-orange-200/75",
    };
  }
  return {
    border: "border-red-500/45",
    bg: "bg-red-500/[0.07]",
    grade: "text-red-400",
    percentText: "text-red-200/80",
  };
}

export function DiagnosisResultView() {
  const freeConsultHref = mailtoFor("Decision AI ｜ 無料相談");
  const [status, setStatus] = useState<"loading" | "ready" | "missing">("loading");
  const [result, setResult] = useState<DiagnosisComputedResult | null>(null);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(DIAGNOSIS_STORAGE_KEY);
      if (!raw) {
        setStatus("missing");
        return;
      }
      const data = JSON.parse(raw) as DiagnosisStoredPayload;
      if (!data?.answers || !Array.isArray(data.answers)) {
        setStatus("missing");
        return;
      }
      const computed = computeDiagnosisResult(data.answers);
      setResult(computed);
      setStatus("ready");
    } catch {
      setStatus("missing");
    }
  }, []);

  const primaryCtaClass =
    "inline-flex justify-center rounded-full bg-da-accent px-8 py-3 text-center text-sm font-semibold text-da-bg shadow-[0_0_28px_-6px_rgba(56,189,248,0.65)] transition hover:bg-sky-300";

  const secondaryCtaClass =
    "inline-flex justify-center rounded-full border border-white/[0.18] bg-da-bg/80 px-8 py-3 text-center text-sm font-semibold text-da-fg transition hover:border-white/[0.28] hover:bg-da-bg";

  if (status === "loading") {
    return (
      <main className="mx-auto max-w-lg rounded-2xl border border-da-border bg-da-surface px-6 py-16 text-center shadow-card">
        <p className="text-sm text-da-fgMuted">結果を読み込んでいます…</p>
      </main>
    );
  }

  if (status === "missing" || !result) {
    return (
      <main className="mx-auto max-w-lg rounded-2xl border border-da-border bg-da-surface px-6 py-10 text-center shadow-card sm:px-10 sm:py-12">
        <p className="text-sm text-da-fgMuted">
          診断の回答が見つかりませんでした。もう一度診断からお試しください。
        </p>
        <Link
          href="/diagnosis"
          className="mt-8 inline-flex rounded-full bg-da-accent px-8 py-3 text-sm font-semibold text-da-bg transition hover:bg-sky-300"
        >
          診断へ戻る
        </Link>
      </main>
    );
  }

  const tier = tierStyles(result.percent);
  const statusSuffix = scoreStatusSuffix(result.grade);

  return (
    <main className="mx-auto max-w-lg rounded-2xl border border-da-border bg-da-surface px-5 py-8 shadow-card sm:px-8 sm:py-9">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-da-accent">
        Decision AI
      </p>
      <h1 className="mt-2 text-center text-xl font-bold tracking-tight text-da-fg sm:text-2xl">
        診断結果
      </h1>

      {/* 1. スコア */}
      <div className={`mt-5 rounded-xl border px-4 py-5 text-center ${tier.border} ${tier.bg}`}>
        <p className="text-[15px] leading-snug text-da-fg sm:text-base">
          あなたの意思決定レベル：
          <span className={`font-bold ${tier.grade}`}>{result.grade}</span>
          <span className={`font-semibold ${tier.percentText}`}>（{result.percent}%）</span>
          <span className="font-medium text-da-fgMuted">{statusSuffix}</span>
        </p>
        <p className="mt-3 text-xs leading-relaxed text-da-fgMuted sm:text-[13px]">
          {benchmarkCopy(result.grade)}
        </p>
      </div>

      <p className="mt-3 text-center text-[11px] leading-relaxed text-da-subtle">
        診断結果は簡易分析に基づいています。
      </p>

      {/* 2. 現状 */}
      <div className="mt-5 space-y-3 text-sm leading-relaxed text-da-fgMuted">
        <p>
          現状、<strong className="font-semibold text-da-fg">要件定義</strong>と
          <strong className="font-semibold text-da-fg">ROI設計</strong>
          に課題があります。
        </p>
        {/* 3. リスク */}
        <p>
          この状態で進めると、要件定義のズレやROI説明不足により、プロジェクト失敗リスクが高まります。
        </p>
        {/* 4. 次アクションの示唆 */}
        <p>
          まずは診断結果をもとに、投資判断・要件定義・ROIの論点を整理することをおすすめします。
        </p>
      </div>

      {/* 5. 意思決定トリガー */}
      <p className="mt-5 text-center text-sm font-medium leading-relaxed text-da-fg">
        このまま進めるか、ここで立て直すかはあなた次第です。
      </p>

      {/* 6. CTA */}
      <div className="mt-6 flex flex-col items-stretch gap-2 sm:items-center">
        <div className="flex flex-col items-center gap-1.5">
          {freeConsultHref ? (
            <a href={freeConsultHref} className={`${primaryCtaClass} w-full sm:w-auto`}>
              無料相談する
            </a>
          ) : (
            <Link href="/lp-a#cta" className={`${primaryCtaClass} w-full sm:w-auto`}>
              無料相談する
            </Link>
          )}
          <p className="text-center text-[11px] leading-snug text-da-subtle">
            ※ 無理な営業は一切行いません
          </p>
        </div>
        <Link
          href="/lp-a#consultant-tiers"
          className={`${secondaryCtaClass} w-full sm:w-auto sm:self-center`}
        >
          AIコンサルタントを選ぶ
        </Link>
      </div>
    </main>
  );
}
