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
  switch (grade) {
    case "A":
      return "同規模企業と比較すると、意思決定精度は平均以上の水準です。";
    case "B":
      return "同規模企業と比較すると、意思決定精度は平均付近で、ばらつきが見られます。";
    case "C":
    case "D":
      return "同規模企業と比較すると、意思決定精度は平均以下です。";
  }
}

/** ランク別の本文（課題・要因・リスク・提案で整合） */
type TierCopy = {
  factorsTitle: string;
  challenges: readonly string[];
  factorsBody: string;
  risks: readonly string[];
  improvement: string;
};

const TIER_COPY: Record<DiagnosisGrade, TierCopy> = {
  A: {
    factorsTitle: "スコアを伸ばすためのポイント",
    challenges: [
      "意思決定レベルは高い状態です。",
      "さらなる精度向上の余地があります。",
    ],
    factorsBody:
      "ROIの定量説明や前提の共有がやや弱いと感じる場合は、さらに伸びしろがあります。",
    risks: [
      "より高度な意思決定のために、論点・ROI・根拠を一枚にそろえると、次の投資判断がより早く進みます。",
    ],
    improvement:
      "まずは診断結果をもとに、投資判断・要件定義・ROIの論点を整理することをおすすめします。",
  },
  B: {
    factorsTitle: "スコア低下の主な要因",
    challenges: [
      "一部に改善余地があります。",
      "要件定義やROI設計に課題が見られます。",
    ],
    factorsBody:
      "特に、要件定義の曖昧さとROIの説明不足が、スコア低下の主な要因です。",
    risks: [
      "この状態が続くと、稟議・実行の段階で手戻りや説明不足が目立ちやすくなります。",
    ],
    improvement:
      "まずは診断結果をもとに、投資判断・要件定義・ROIの論点を整理することをおすすめします。",
  },
  C: {
    factorsTitle: "スコア低下の主な要因",
    challenges: ["意思決定に課題があります。", "プロジェクト失敗リスクが高い状態です。"],
    factorsBody:
      "要件定義の曖昧さとROIの説明不足に加え、論点の抜けが重なりスコアを押し下げています。",
    risks: [
      "このまま進めると、承認・実行の両面でコストが膨らみ、判断がブレやすくなります。",
    ],
    improvement:
      "まずは診断結果をもとに、投資判断・要件定義・ROIの論点を整理することをおすすめします。",
  },
  D: {
    factorsTitle: "スコア低下の主な要因",
    challenges: [
      "意思決定プロセスの見直しが必要です。",
      "現状のまま進めると高確率で失敗します。",
    ],
    factorsBody:
      "要件が固定できず、ROIストーリーが成立していないことが、スコア低下の中心です。",
    risks: [
      "根拠・記録が弱いままでは判断の再現性がなく、投資判断のミスが連鎖しやすい状態です。",
    ],
    improvement:
      "まずは診断結果をもとに、投資判断・要件定義・ROIの論点を整理することをおすすめします。",
  },
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-4 border-t border-white/[0.06] pt-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-da-accent">
      {children}
    </p>
  );
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
  const copy = TIER_COPY[result.grade];

  return (
    <main className="mx-auto max-w-lg rounded-2xl border border-da-border bg-da-surface px-5 py-7 shadow-card sm:px-8 sm:py-8">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-da-accent">
        Decision AI
      </p>
      <h1 className="mt-2 text-center text-xl font-bold tracking-tight text-da-fg sm:text-2xl">
        診断結果
      </h1>

      {/* 診断結果（スコア） */}
      <div className={`mt-4 rounded-xl border px-4 py-4 text-center ${tier.border} ${tier.bg}`}>
        <p className="text-[15px] leading-snug text-da-fg sm:text-base">
          あなたの意思決定レベル：
          <span className={`font-bold ${tier.grade}`}>{result.grade}</span>
          <span className={`font-semibold ${tier.percentText}`}>（{result.percent}%）</span>
          <span className="font-medium text-da-fgMuted">{statusSuffix}</span>
        </p>
      </div>

      {/* 同規模企業との比較 */}
      <SectionLabel>同規模企業との比較</SectionLabel>
      <p className="mt-2 text-sm leading-relaxed text-da-fgMuted">{benchmarkCopy(result.grade)}</p>

      <p className="mt-3 text-center text-[11px] leading-relaxed text-da-subtle">
        診断結果は簡易分析に基づいています。
      </p>

      {/* 現在の課題 */}
      <SectionLabel>現在の課題</SectionLabel>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-da-fgMuted">
        {copy.challenges.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      {/* スコア低下の主な要因（Aは見出しのみ調整） */}
      <SectionLabel>{copy.factorsTitle}</SectionLabel>
      <p className="mt-2 text-sm leading-relaxed text-da-fgMuted">{copy.factorsBody}</p>

      {/* リスク説明 */}
      <SectionLabel>リスク</SectionLabel>
      <div className="mt-2 space-y-2 text-sm leading-relaxed text-da-fgMuted">
        {copy.risks.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      {/* 改善提案 */}
      <SectionLabel>改善提案</SectionLabel>
      <p className="mt-2 text-sm leading-relaxed text-da-fgMuted">{copy.improvement}</p>

      {/* CTA前の一言 */}
      <p className="mt-5 text-center text-sm font-medium leading-relaxed text-da-fg">
        この状態で進めると、投資判断のミスが起きる可能性があります。
      </p>

      {/* CTA */}
      <div className="mt-5 flex flex-col items-stretch gap-2 sm:items-center">
        <p className="text-center text-sm leading-snug text-da-fgMuted">
          すぐに改善すべき論点を整理できます。
        </p>
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
          href="/consultants"
          className={`${secondaryCtaClass} w-full sm:w-auto sm:self-center`}
        >
          AIコンサルタントを選ぶ
        </Link>
      </div>
    </main>
  );
}
