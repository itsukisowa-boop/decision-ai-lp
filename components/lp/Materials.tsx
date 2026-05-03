import type { LpMaterials } from "@/lib/lp/types";
import type { ResolveMailHref } from "./resolveHref";

type Props = {
  materials: LpMaterials;
  resolveMailHref: ResolveMailHref;
};

export function Materials({ materials, resolveMailHref }: Props) {
  const href = resolveMailHref(materials.mailSubject, "#cta");

  return (
    <section id="materials" className="scroll-mt-24 border-t border-white/[0.06] bg-da-surface py-12">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-2xl border border-da-border bg-da-raised px-6 py-8 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:px-8">
          <div>
            <p className="text-sm font-semibold text-da-fg">{materials.title}</p>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-da-fgMuted">
              {materials.description}
            </p>
          </div>
          <div className="mt-6 shrink-0 sm:mt-0">
            <a
              href={href}
              className="inline-flex rounded-full border border-white/[0.14] bg-white/[0.05] px-6 py-2.5 text-sm font-semibold text-da-fg transition hover:border-da-accent/35"
            >
              {materials.buttonLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
