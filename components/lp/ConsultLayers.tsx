import type { LpConsultLayers } from "@/lib/lp/types";

type Props = {
  block: LpConsultLayers;
};

export function ConsultLayers({ block }: Props) {
  return (
    <section
      id="layers"
      className="scroll-mt-24 border-t border-white/[0.06] bg-da-bg py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{block.heading}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-da-fgMuted">{block.intro}</p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {block.layers.map((layer) => (
            <article
              key={layer.role}
              className="rounded-2xl border border-da-border bg-da-surface p-6 shadow-card transition hover:border-da-accent/20"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-da-fg">{layer.role}</h3>
                <p className="font-mono text-sm font-semibold text-da-accent">{layer.monthlyRange}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-da-fgMuted">{layer.allocationNote}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 rounded-xl border border-white/[0.06] bg-da-raised/80 px-5 py-4 text-xs leading-relaxed text-da-fgMuted">
          {block.partialNote}
        </p>
      </div>
    </section>
  );
}
