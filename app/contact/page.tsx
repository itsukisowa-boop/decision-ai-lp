import Link from "next/link";
import type { Metadata } from "next";
import { mailtoFor } from "@/lib/lp/mail";
import { consultantTitleById } from "@/lib/consultants";

export const metadata: Metadata = {
  title: "ご相談 | Decision AI",
  description: "無料相談・お問い合わせ。",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string }>;
}) {
  const sp = await searchParams;
  const tierTitle = consultantTitleById(sp.tier);
  const mailHref = mailtoFor(
    tierTitle
      ? `Decision AI ｜ 無料相談（${tierTitle}）`
      : "Decision AI ｜ 無料相談",
  );

  return (
    <div className="min-h-screen bg-da-bg bg-hero-dark px-4 py-12 text-da-fg sm:py-16">
      <main className="mx-auto max-w-lg rounded-2xl border border-da-border bg-da-surface px-6 py-10 shadow-card sm:px-10">
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-da-accent">
          Decision AI
        </p>
        <h1 className="mt-3 text-center text-xl font-bold tracking-tight sm:text-2xl">ご相談</h1>
        <p className="mt-3 text-center text-sm leading-relaxed text-da-fgMuted">
          お問い合わせ・無料相談はこちらからどうぞ。
        </p>

        {tierTitle ? (
          <p className="mt-6 rounded-xl border border-da-accent/25 bg-da-accent/[0.06] px-4 py-3 text-center text-sm text-da-fg">
            選択いただいたコンサルタント：
            <span className="font-semibold text-da-accent"> {tierTitle}</span>
          </p>
        ) : null}

        <div className="mt-8 flex flex-col items-stretch gap-3">
          {mailHref ? (
            <a
              href={mailHref}
              className="inline-flex justify-center rounded-full bg-da-accent px-8 py-3 text-center text-sm font-semibold text-da-bg shadow-[0_0_28px_-6px_rgba(56,189,248,0.65)] transition hover:bg-sky-300"
            >
              メールで無料相談する
            </a>
          ) : (
            <Link
              href="/lp-a#cta"
              className="inline-flex justify-center rounded-full bg-da-accent px-8 py-3 text-center text-sm font-semibold text-da-bg shadow-[0_0_28px_-6px_rgba(56,189,248,0.65)] transition hover:bg-sky-300"
            >
              LPの無料相談へ
            </Link>
          )}
          <Link
            href="/consultants"
            className="inline-flex justify-center rounded-full border border-white/[0.18] bg-da-bg/80 px-8 py-3 text-center text-sm font-semibold transition hover:border-white/[0.28]"
          >
            コンサルタント選択に戻る
          </Link>
          <Link href="/" className="text-center text-sm text-da-fgMuted transition hover:text-da-accent">
            トップへ
          </Link>
        </div>
      </main>
    </div>
  );
}
