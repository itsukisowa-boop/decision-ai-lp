import type { LpWhyItem } from "@/lib/lp/types";

type Props = {
  heading: string;
  items: LpWhyItem[];
};

export function Why({ heading, items }: Props) {
  return (
    <section
      id="why"
      className="scroll-mt-24 border-t border-white/[0.06] bg-da-surface py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{heading}</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-da-border bg-da-raised p-6 shadow-card"
            >
              <h3 className="text-lg font-semibold text-da-fg">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-da-fgMuted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
