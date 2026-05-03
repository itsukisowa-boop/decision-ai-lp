import type { LpFeatureItem } from "@/lib/lp/types";

type Props = {
  heading: string;
  items: LpFeatureItem[];
};

export function Features({ heading, items }: Props) {
  return (
    <section
      id="features"
      className="scroll-mt-24 border-t border-white/[0.06] bg-da-bg py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{heading}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <article
              key={f.title}
              className="flex flex-col rounded-2xl border border-da-border bg-da-surface p-6 shadow-card transition hover:border-da-accent/20 hover:shadow-card-hover"
            >
              <span className="font-mono text-xs font-semibold text-da-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-da-fg">{f.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-da-fgMuted">{f.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
