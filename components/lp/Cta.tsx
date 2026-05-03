import type { LpCtaBlock } from "@/lib/lp/types";
import type { ResolveMailHref } from "./resolveHref";

type Props = {
  cta: LpCtaBlock;
  resolveMailHref: ResolveMailHref;
};

export function Cta({ cta, resolveMailHref }: Props) {
  return (
    <section
      id="cta"
      className="scroll-mt-24 border-t border-da-accent/25 bg-gradient-to-b from-da-bg to-da-surface py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl md:text-[1.65rem]">
          {cta.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-da-fgMuted">{cta.body}</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={resolveMailHref(cta.primary.mailSubject, cta.primary.hrefFallback)}
            className="inline-flex rounded-full bg-da-accent px-8 py-3 text-sm font-semibold text-da-bg shadow-[0_0_28px_-6px_rgba(56,189,248,0.65)] transition hover:bg-sky-300"
          >
            {cta.primary.label}
          </a>
          <a
            href={resolveMailHref(cta.secondary.mailSubject, cta.secondary.hrefFallback)}
            className="inline-flex rounded-full border border-white/[0.14] bg-white/[0.04] px-8 py-3 text-sm font-semibold text-da-fg transition hover:border-da-accent/35 hover:bg-white/[0.07]"
          >
            {cta.secondary.label}
          </a>
        </div>
      </div>
    </section>
  );
}
