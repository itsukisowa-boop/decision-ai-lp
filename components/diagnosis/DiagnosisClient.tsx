"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const CHOICES = [
  "非常に明確",
  "ある程度明確",
  "どちらでもない",
  "曖昧",
  "ほとんどない",
] as const;

const QUESTIONS = [
  "要件定義は明確になっていますか？",
  "ROIを定量的に説明できますか？",
  "プロジェクトの目的は全員一致していますか？",
  "稟議で突っ込まれそうな論点は洗い出せていますか？",
  "ステークホルダーの認識のズレは把握できていますか？",
  "投資対効果の前提条件は文書化されていますか？",
  "実施しない場合のリスクは説明できますか？",
  "ベンダー選定の比較軸は固まっていますか？",
  "スコープとマイルストーンは関係者と合意されていますか？",
  "意思決定の記録・トレーサビリティは確保できていますか？",
];

const TOTAL = QUESTIONS.length;

export function DiagnosisClient() {
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);

  const question = QUESTIONS[index];
  const progress = index + 1;
  const isLast = index >= TOTAL - 1;

  const goNext = () => {
    if (selected === null) return;
    if (isLast) {
      router.push("/diagnosis/result");
      return;
    }
    setIndex((i) => i + 1);
    setSelected(null);
  };

  return (
    <div className="mx-auto w-full max-w-lg rounded-2xl border border-da-border bg-da-surface px-6 py-8 shadow-card sm:px-8 sm:py-10">
      <div className="mb-6 flex items-center justify-between gap-4 text-sm text-da-fgMuted">
        <span>
          質問 {progress} / {TOTAL}
        </span>
        <span className="font-mono text-da-accent">{Math.round((progress / TOTAL) * 100)}%</span>
      </div>
      <div className="mb-8 h-1.5 overflow-hidden rounded-full bg-da-bg">
        <div
          className="h-full rounded-full bg-da-accent transition-[width] duration-300 ease-out"
          style={{ width: `${(progress / TOTAL) * 100}%` }}
        />
      </div>

      <h2 className="text-lg font-semibold leading-snug text-da-fg sm:text-xl">{question}</h2>
      <p className="mt-2 text-xs text-da-subtle">該当するものを1つ選んでください。</p>

      <div className="mt-8 space-y-2" role="radiogroup" aria-label="回答の選択">
        {CHOICES.map((label, i) => {
          const active = selected === i;
          return (
            <button
              key={label}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => setSelected(i)}
              className={`flex w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                active
                  ? "border-da-accent/50 bg-da-accent/10 text-da-fg ring-1 ring-da-accent/40"
                  : "border-white/[0.08] bg-da-bg/40 text-da-fgMuted hover:border-white/[0.14] hover:bg-da-bg/70"
              }`}
            >
              <span
                className={`mr-3 mt-0.5 flex h-4 w-4 shrink-0 rounded-full border-2 ${
                  active ? "border-da-accent bg-da-accent" : "border-da-subtle"
                }`}
              />
              {label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 flex justify-end">
        <button
          type="button"
          disabled={selected === null}
          onClick={goNext}
          className="rounded-full bg-da-accent px-8 py-2.5 text-sm font-semibold text-da-bg shadow-[0_0_24px_-8px_rgba(56,189,248,0.55)] transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-40 disabled:shadow-none"
        >
          {isLast ? "完了する" : "次へ"}
        </button>
      </div>
    </div>
  );
}
