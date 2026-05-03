import Link from "next/link";
import { DiagnosisClient } from "@/components/diagnosis/DiagnosisClient";
import type { Metadata } from "next";

const TOTAL_QUESTIONS = 10;

export const metadata: Metadata = {
  title: "意思決定レベル診断 | Decision AI",
  description: `約3分で完了する意思決定レベルのモック診断です（全${TOTAL_QUESTIONS}問）。`,
};

export default function DiagnosisPage() {
  return (
    <div className="min-h-screen bg-da-bg px-4 py-12 text-da-fg sm:py-16">
      <div className="mx-auto mb-8 flex max-w-lg justify-between text-sm">
        <Link href="/lp-a" className="text-da-fgMuted transition hover:text-da-accent">
          ← LPに戻る
        </Link>
      </div>

      <header className="mx-auto mb-10 max-w-lg text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-da-accent">Decision AI</p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight text-da-fg sm:text-3xl">
          意思決定レベル診断
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-da-fgMuted">
          全{TOTAL_QUESTIONS}問・5段階選択式です。所要時間の目安は約3分です。（モック・結果は保存されません）
        </p>
      </header>

      <DiagnosisClient />
    </div>
  );
}
