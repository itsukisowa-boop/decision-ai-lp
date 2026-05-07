import { LpPasswordGate } from "@/components/lp/LpPasswordGate";
import { LpView } from "@/components/lp/LpView";
import { patternB } from "@/lib/lp/pattern-b";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decision AI | AI×リアルコンサル伴走型LP",
  description:
    "AIで要件定義・ROI・稟議論点を構造化し、必要なタイミングだけリアルコンサルが伴走する高単価支援モデル。",
};

export default function LpBPage() {
  return (
    <LpPasswordGate>
      <LpView pattern={patternB} />
    </LpPasswordGate>
  );
}
