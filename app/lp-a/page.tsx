import { LpView } from "@/components/lp/LpView";
import { patternA } from "@/lib/lp/pattern-a";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decision AI | 無料診断で意思決定を一枚に",
  description:
    "その投資判断、本当に説明できますか？無料診断で論点整理、AIコンサル選択、個別相談まで一気通貫。",
};

export default function LpAPage() {
  return <LpView pattern={patternA} />;
}
