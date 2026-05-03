import type { LpCompare } from "@/lib/lp/types";

type Props = {
  compare: LpCompare;
};

export function Compare({ compare }: Props) {
  const beforeLabel = compare.beforeLabel ?? "Before";
  const afterLabel = compare.afterLabel ?? "After";

  return (
    <section
      id="compare"
      className="scroll-mt-24 border-t border-white/[0.06] bg-da-bg py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{compare.heading}</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.06] bg-da-surface/60 p-8 shadow-card">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-da-subtle">
              {beforeLabel}
            </p>
            <ul className="mt-6 space-y-4">
              {compare.before.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 text-[15px] text-da-fgMuted"
                >
                  <span className="text-da-subtle" aria-hidden>
                    —
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-da-accent/35 bg-da-surface p-8 shadow-[0_0_40px_-12px_rgba(56,189,248,0.35)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-da-accent">
              {afterLabel}
            </p>
            <ul className="mt-6 space-y-4">
              {compare.after.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 text-[15px] font-medium text-da-fg"
                >
                  <span className="text-da-accent" aria-hidden>
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
