import Link from "next/link";
import type { Metadata } from "next";
import { ConsultantsClient } from "@/components/consultants/ConsultantsClient";

export const metadata: Metadata = {
  title: "AIコンサルタントを選ぶ | Decision AI",
  description: "目的や課題に応じて、最適なAIコンサルタントを選択できます。",
};

export default function ConsultantsPage() {
  return (
    <div className="min-h-screen bg-da-bg bg-hero-dark text-da-fg">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 pb-2 pt-5 text-sm">
        <Link href="/diagnosis/result" className="text-da-fgMuted transition hover:text-da-accent">
          ← 診断結果に戻る
        </Link>
        <Link href="/lp-a" className="text-da-fgMuted transition hover:text-da-accent">
          LPに戻る
        </Link>
      </div>
      <ConsultantsClient />
    </div>
  );
}
