"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ConsultantId, ConsultantTier } from "@/lib/consultants";
import { CONSULTANT_TIERS } from "@/lib/consultants";

function ConsultantCard({
  tier,
  selected,
  onSelect,
}: {
  tier: ConsultantTier;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <article
      className={`flex flex-col rounded-2xl border bg-da-surface/90 px-5 py-5 shadow-card transition duration-200 hover:-translate-y-0.5 hover:shadow-card-hover ${
        selected
          ? "border-da-accent/55 ring-2 ring-da-accent/40 shadow-[0_0_28px_-8px_rgba(56,189,248,0.35)]"
          : "border-da-border hover:border-white/[0.14]"
      }`}
    >
      <h2 className="text-center text-lg font-bold tracking-tight text-da-fg">{tier.title}</h2>
      <p className="mt-3 text-center text-sm font-medium leading-snug text-da-accent">{tier.tagline}</p>
      <p className="mt-2 flex-1 text-center text-sm leading-relaxed text-da-fgMuted">{tier.description}</p>
      <button
        type="button"
        onClick={onSelect}
        className="mt-5 inline-flex w-full justify-center rounded-full bg-da-accent px-5 py-2.5 text-sm font-semibold text-da-bg shadow-[0_0_24px_-8px_rgba(56,189,248,0.55)] transition hover:bg-sky-300"
      >
        このコンサルを選ぶ
      </button>
    </article>
  );
}

export function ConsultantsClient() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<ConsultantId | null>(null);

  function handleChoose(id: ConsultantId) {
    setSelectedId(id);
    // 選択ハイライトを一瞬見せてから相談ページへ
    window.setTimeout(() => {
      router.push(`/contact?tier=${encodeURIComponent(id)}`);
    }, 220);
  }

  return (
    <div className="mx-auto max-w-5xl px-4 pb-14 pt-10 sm:pb-16 sm:pt-14">
      <header className="mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-da-accent">Decision AI</p>
        <h1 className="mt-3 text-balance text-xl font-bold tracking-tight text-da-fg sm:text-2xl">
          あなたに最適なAIコンサルタントを選択してください
        </h1>
        <p className="mt-3 text-pretty text-sm leading-relaxed text-da-fgMuted sm:text-[15px]">
          目的や課題に応じて、最適な思考支援を提供します
        </p>
      </header>

      <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
        {CONSULTANT_TIERS.map((tier) => (
          <ConsultantCard
            key={tier.id}
            tier={tier}
            selected={selectedId === tier.id}
            onSelect={() => handleChoose(tier.id)}
          />
        ))}
      </div>
    </div>
  );
}
