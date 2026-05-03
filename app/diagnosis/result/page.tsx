import Link from "next/link";
import { DiagnosisResultView } from "@/components/diagnosis/DiagnosisResultView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "診断結果 | Decision AI",
  description: "意思決定レベル診断の結果と次のアクション。",
};

export default function DiagnosisResultPage() {
  return (
    <div className="min-h-screen bg-da-bg px-4 py-6 text-da-fg sm:py-8">
      <div className="mx-auto mb-4 flex max-w-lg flex-wrap items-center justify-between gap-4 text-sm">
        <Link href="/diagnosis" className="text-da-fgMuted transition hover:text-da-accent">
          ← 診断にもう一度
        </Link>
        <Link href="/lp-a" className="text-da-fgMuted transition hover:text-da-accent">
          LPに戻る
        </Link>
      </div>

      <DiagnosisResultView />
    </div>
  );
}
