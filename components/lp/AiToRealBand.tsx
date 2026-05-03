import type { LpAiToRealTransition } from "@/lib/lp/types";

type Props = {
  block: LpAiToRealTransition;
};

export function AiToRealBand({ block }: Props) {
  return (
    <section
      id="ai-real"
      className="scroll-mt-24 border-t border-da-accent/20 bg-gradient-to-br from-da-bg via-da-surface to-da-bg py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="rounded-2xl border border-da-accent/30 bg-da-bg/80 px-8 py-10 shadow-[0_0_48px_-16px_rgba(56,189,248,0.35)] sm:px-10">
          <h2 className="text-xl font-semibold tracking-tight text-da-fg sm:text-2xl">
            {block.heading}
          </h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-da-fgMuted sm:text-[15px]">
            {block.lines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
