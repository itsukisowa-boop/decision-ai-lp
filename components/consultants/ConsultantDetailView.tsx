"use client";

import Link from "next/link";
import { useState } from "react";
import type { ConsultantTier } from "@/lib/consultants";

type Props = {
  consultant: ConsultantTier;
};

export function ConsultantDetailView({ consultant }: Props) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (!message.trim()) {
      window.alert("メッセージを入力してください。");
      return;
    }
    window.alert("送信しました。");
    setMessage("");
  }

  function handleConsult() {
    window.alert(`${consultant.title}に相談するリクエストを受け付けました。`);
  }

  return (
    <div className="min-h-screen bg-da-bg bg-hero-dark px-4 py-10 text-da-fg sm:py-14">
      <main className="mx-auto max-w-3xl rounded-2xl border border-da-border bg-da-surface/95 p-6 shadow-card sm:p-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-da-accent">Decision AI</p>
        <h1 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">{consultant.title}</h1>

        <section className="mt-6 space-y-3 rounded-2xl border border-da-border bg-da-raised/80 p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-da-accent">特徴</p>
          <p className="text-sm leading-relaxed text-da-fgMuted">{consultant.feature}</p>
          <p className="pt-1 text-sm text-da-fg">
            <span className="font-semibold text-da-accent">参考単価レンジ：</span>
            {consultant.priceRange}
          </p>
          <p className="text-sm text-da-fgMuted">部分稼働 30〜50% 想定</p>
        </section>

        <section className="mt-5 space-y-2 rounded-2xl border border-da-accent/25 bg-da-accent/[0.07] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-da-accent">初回メッセージ</p>
          {consultant.firstMessages.map((line) => (
            <p key={line} className="text-sm leading-relaxed text-da-fg">
              「{line}」
            </p>
          ))}
        </section>

        <section className="mt-6">
          <label htmlFor="consultant-message" className="text-sm font-semibold text-da-fg">
            ご相談内容
          </label>
          <textarea
            id="consultant-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="例：要件定義が曖昧で、ROIの説明が通らず困っています。"
            className="mt-2 min-h-32 w-full rounded-xl border border-white/[0.14] bg-da-bg/80 px-4 py-3 text-sm leading-relaxed text-da-fg outline-none transition placeholder:text-da-subtle focus:border-da-accent/55 focus:ring-2 focus:ring-da-accent/35"
          />
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={handleSend}
              className="inline-flex items-center justify-center rounded-full border border-white/[0.2] bg-white/[0.04] px-6 py-2.5 text-sm font-semibold text-da-fg transition hover:border-da-accent/45 hover:bg-white/[0.08]"
            >
              送信
            </button>
            <button
              type="button"
              onClick={handleConsult}
              className="inline-flex items-center justify-center rounded-full bg-da-accent px-6 py-2.5 text-sm font-semibold text-da-bg shadow-[0_0_28px_-6px_rgba(56,189,248,0.65)] transition hover:bg-sky-300"
            >
              相談する
            </button>
          </div>
        </section>

        <Link
          href="/consultants"
          className="mt-7 inline-flex text-sm text-da-fgMuted transition hover:text-da-accent"
        >
          ← コンサル一覧に戻る
        </Link>
      </main>
    </div>
  );
}
