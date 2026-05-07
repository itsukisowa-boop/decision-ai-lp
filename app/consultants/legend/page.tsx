import type { Metadata } from "next";
import { ConsultantDetailView } from "@/components/consultants/ConsultantDetailView";
import { getConsultantById } from "@/lib/consultants";

const consultant = getConsultantById("legend");

export const metadata: Metadata = {
  title: `${consultant.title} | Decision AI`,
  description: `${consultant.title}の伴走相談ページ。`,
};

export default function LegendConsultantPage() {
  return <ConsultantDetailView consultant={consultant} />;
}
