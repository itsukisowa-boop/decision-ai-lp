import type { LpJourney } from "@/lib/lp/types";

type Props = {
  journey: LpJourney;
};

export function Journey({ journey }: Props) {
  return (
    <section
      id="journey"
      className="scroll-mt-24 border-t border-white/[0.06] bg-da-bg py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{journey.heading}</h2>
        {journey.intro ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-da-fgMuted">{journey.intro}</p>
        ) : null}
        <ol className="mt-10 space-y-4">
          {journey.steps.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-4 rounded-2xl border border-da-border bg-da-surface px-5 py-5 shadow-card"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-da-accent text-sm font-bold text-da-bg">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold text-da-fg">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-da-fgMuted">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
