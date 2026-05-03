import type { LpConsultantTierSection } from "@/lib/lp/types";

type Props = {
  block: LpConsultantTierSection;
};

export function ConsultantTierCards({ block }: Props) {
  return (
    <section
      id="consultant-tiers"
      className="scroll-mt-24 border-t border-white/[0.06] bg-da-surface py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{block.heading}</h2>
        {block.intro ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-da-fgMuted">{block.intro}</p>
        ) : null}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {block.cards.map((card) => (
            <article
              key={card.role}
              className="rounded-2xl border border-da-border bg-da-raised p-6 shadow-card transition hover:border-da-accent/20"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-da-accent">
                {card.role}
              </p>
              <p className="mt-3 text-[15px] font-medium leading-relaxed text-da-fg">{card.tagline}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
