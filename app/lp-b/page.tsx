import { LpView } from "@/components/lp/LpView";
import { patternB } from "@/lib/lp/pattern-b";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decision AI | AI整理 × プロ伴走の意思決定支援",
  description:
    "AIで整理し、プロが意思決定を伴走する。リアルコンサルが必要に応じて稼働の30〜50%で参画、4レイヤー体制をご用意。",
};

export default function LpBPage() {
  return <LpView pattern={patternB} />;
}
