import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { LpPattern } from "@/lib/lp/types";
import { AiToRealBand } from "./AiToRealBand";
import { Compare } from "./Compare";
import { ConsultLayers } from "./ConsultLayers";
import { ConsultantTierCards } from "./ConsultantTierCards";
import { Cta } from "./Cta";
import { DiagnosticOutcomes } from "./DiagnosticOutcomes";
import { Features } from "./Features";
import { Hero } from "./Hero";
import { Journey } from "./Journey";
import { Materials } from "./Materials";
import { Pain } from "./Pain";
import { createResolveMailHref } from "./resolveHref";
import { Solution } from "./Solution";
import { Why } from "./Why";

type Props = {
  pattern: LpPattern;
};

export function LpView({ pattern }: Props) {
  const resolveMailHref = createResolveMailHref();

  return (
    <>
      <SiteHeader
        basePath={pattern.basePath}
        nav={pattern.nav}
        stickyCta={{
          label: pattern.hero.stickyNavCtaLabel ?? pattern.hero.primaryCta.label,
          mailSubject: pattern.hero.primaryCta.mailSubject,
          navigateHref: pattern.hero.primaryCta.navigateHref,
          hrefFallback: `${pattern.basePath}#cta`,
        }}
      />
      <main className="text-da-fg">
        <Hero hero={pattern.hero} resolveMailHref={resolveMailHref} />
        <Pain pain={pattern.pain} />
        {pattern.diagnosticOutcomes ? (
          <DiagnosticOutcomes block={pattern.diagnosticOutcomes} />
        ) : null}
        {pattern.journey ? <Journey journey={pattern.journey} /> : null}
        {pattern.consultLayers ? <ConsultLayers block={pattern.consultLayers} /> : null}
        <Solution solution={pattern.solution} />
        <Features heading={pattern.features.heading} items={pattern.features.items} />
        {pattern.consultantTiers ? (
          <ConsultantTierCards block={pattern.consultantTiers} />
        ) : null}
        {pattern.aiToReal ? <AiToRealBand block={pattern.aiToReal} /> : null}
        <Materials materials={pattern.materials} resolveMailHref={resolveMailHref} />
        <Compare compare={pattern.compare} />
        <Why heading={pattern.why.heading} items={pattern.why.items} />
        <Cta cta={pattern.cta} resolveMailHref={resolveMailHref} />
      </main>
      <SiteFooter />
    </>
  );
}
