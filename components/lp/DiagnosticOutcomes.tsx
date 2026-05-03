import type { LpDiagnosticOutcomes } from "@/lib/lp/types";

type Props = {
  block: LpDiagnosticOutcomes;
};

export function DiagnosticOutcomes({ block }: Props) {
  return (
    <section
      id="diagnostic-outcomes"
      className="scroll-mt-24 border-t border-white/[0.06] bg-da-bg py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{block.heading}</h2>
        {block.intro ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-da-fgMuted">{block.intro}</p>
        ) : null}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {block.items.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-da-border bg-da-surface p-6 shadow-card transition hover:border-da-accent/25"
            >
              <h3 className="text-lg font-semibold text-da-fg">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-da-fgMuted">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
