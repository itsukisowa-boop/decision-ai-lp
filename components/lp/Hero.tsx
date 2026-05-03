import Link from "next/link";
import type { LpHero } from "@/lib/lp/types";
import type { ResolveMailHref } from "./resolveHref";

type Props = {
  hero: LpHero;
  resolveMailHref: ResolveMailHref;
};

export function Hero({ hero, resolveMailHref }: Props) {
  const primaryNavigate = hero.primaryCta.navigateHref;
  const primaryMailHref =
    hero.primaryCta.mailSubject != null && hero.primaryCta.mailSubject !== ""
      ? resolveMailHref(hero.primaryCta.mailSubject, hero.primaryCta.hrefFallback)
      : null;

  return (
    <section className="relative overflow-hidden bg-hero-dark">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-glow-line opacity-70"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-12 sm:px-6 sm:pb-24 sm:pt-16">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-da-accent">
          {hero.kicker}
        </p>
        <h1 className="max-w-[min(100%,42rem)] text-[1.65rem] font-bold leading-snug tracking-tight sm:text-4xl md:text-[2.35rem] md:leading-[1.2]">
          {hero.titleLines.map((line, i) => (
            <span key={`hero-line-${i}`}>
              {line}
              {i < hero.titleLines.length - 1 ? (
                <br className="hidden sm:block" />
              ) : null}
            </span>
          ))}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-da-fgMuted sm:text-lg">
          {hero.subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {primaryNavigate ? (
            <Link
              href={primaryNavigate}
              className="inline-flex items-center justify-center rounded-full bg-da-accent px-7 py-3.5 text-sm font-semibold text-da-bg shadow-[0_0_28px_-6px_rgba(56,189,248,0.65)] transition hover:bg-sky-300"
            >
              {hero.primaryCta.label}
            </Link>
          ) : primaryMailHref ? (
            <a
              href={primaryMailHref}
              className="inline-flex items-center justify-center rounded-full bg-da-accent px-7 py-3.5 text-sm font-semibold text-da-bg shadow-[0_0_28px_-6px_rgba(56,189,248,0.65)] transition hover:bg-sky-300"
            >
              {hero.primaryCta.label}
            </a>
          ) : (
            <a
              href={hero.primaryCta.hrefFallback}
              className="inline-flex items-center justify-center rounded-full bg-da-accent px-7 py-3.5 text-sm font-semibold text-da-bg shadow-[0_0_28px_-6px_rgba(56,189,248,0.65)] transition hover:bg-sky-300"
            >
              {hero.primaryCta.label}
            </a>
          )}
          <a
            href={hero.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border border-white/[0.14] bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-da-fg transition hover:border-da-accent/40 hover:bg-white/[0.07]"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
