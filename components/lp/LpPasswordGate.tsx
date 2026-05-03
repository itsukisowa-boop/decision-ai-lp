"use client";

import { type ReactNode, useState } from "react";

const PASSWORD = "hopefield-ai";

type Props = {
  children: ReactNode;
};

export function LpPasswordGate({ children }: Props) {
  const [value, setValue] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PASSWORD) {
      setUnlocked(true);
      setShowError(false);
      return;
    }
    setShowError(true);
  };

  if (unlocked) {
    return <>{children}</>;
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-da-bg px-4 py-16">
      <div className="w-full max-w-md rounded-2xl border border-da-border bg-da-surface p-8 shadow-card">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-da-accent">
          Decision AI
        </p>
        <h1 className="mt-4 text-center text-lg font-semibold tracking-tight text-da-fg">
          パスワードを入力してください
        </h1>
        <p className="mt-2 text-center text-sm leading-relaxed text-da-fgMuted">
          このページは関係者向けのプレビューです。
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <label htmlFor="lp-password" className="sr-only">
            パスワード
          </label>
          <input
            id="lp-password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setShowError(false);
            }}
            className="w-full rounded-xl border border-white/[0.12] bg-da-bg px-4 py-3 text-sm text-da-fg outline-none ring-da-accent/40 placeholder:text-da-subtle focus:border-da-accent/40 focus:ring-2"
            placeholder="パスワード"
          />
          {showError ? (
            <p className="text-center text-sm text-red-400" role="alert">
              パスワードが正しくありません。
            </p>
          ) : null}
          <button
            type="submit"
            className="w-full rounded-full bg-da-accent py-3 text-sm font-semibold text-da-bg shadow-[0_0_24px_-6px_rgba(56,189,248,0.55)] transition hover:bg-sky-300"
          >
            表示する
          </button>
        </form>
      </div>
    </div>
  );
}
