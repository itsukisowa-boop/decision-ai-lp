import type { LpPain } from "@/lib/lp/types";

type Props = {
  pain: LpPain;
};

export function Pain({ pain }: Props) {
  return (
    <section
      id="pain"
      className="scroll-mt-24 border-t border-white/[0.06] bg-da-surface py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{pain.heading}</h2>
        {pain.intro ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-da-fgMuted">{pain.intro}</p>
        ) : null}
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {pain.bullets.map((text) => (
            <li
              key={text}
              className="rounded-2xl border border-da-border bg-da-raised px-6 py-5 shadow-card transition hover:shadow-card-hover"
            >
              <span className="flex items-start gap-3">
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-da-accent"
                  aria-hidden
                />
                <span className="text-[15px] font-medium leading-relaxed text-da-fg">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
