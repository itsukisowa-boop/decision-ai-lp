import type { LpSolution } from "@/lib/lp/types";

type Props = {
  solution: LpSolution;
};

export function Solution({ solution }: Props) {
  return (
    <section
      id="solution"
      className="scroll-mt-24 border-t border-white/[0.06] bg-da-surface py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">{solution.heading}</h2>
        <div className="mt-8 rounded-2xl border border-da-border bg-da-raised p-8 shadow-card sm:p-10">
          <p className="text-base leading-[1.85] text-da-fgMuted">
            {solution.bodyBefore}
            {solution.emphasis ? (
              <strong className="font-semibold text-da-fg">{solution.emphasis}</strong>
            ) : null}
            {solution.bodyAfter}
          </p>
          {solution.disclaimer ? (
            <p className="mt-5 text-xs leading-relaxed text-da-subtle">{solution.disclaimer}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
