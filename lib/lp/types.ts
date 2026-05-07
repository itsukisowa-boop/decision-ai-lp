export type LpNavItem = { id: string; label: string };

/** メールより優先して内部リンクへ（例: /diagnosis） */
export type LpPrimaryCta = {
  label: string;
  hrefFallback: string;
  mailSubject?: string;
  navigateHref?: string;
};

export type LpHero = {
  kicker: string;
  titleLines: string[];
  subtitle: string;
  /** ヘッダー右の短いラベル（未指定時は primaryCta.label） */
  stickyNavCtaLabel?: string;
  primaryCta: LpPrimaryCta;
  secondaryCta: { label: string; href: string };
};

export type LpPain = {
  heading: string;
  intro?: string;
  bullets: string[];
};

export type LpSolution = {
  heading: string;
  bodyBefore: string;
  emphasis?: string;
  bodyAfter: string;
  disclaimer?: string;
};

export type LpFeatureItem = { title: string; desc: string };

export type LpMaterials = {
  title: string;
  description: string;
  buttonLabel: string;
  mailSubject: string;
};

export type LpCompare = {
  heading: string;
  beforeLabel?: string;
  afterLabel?: string;
  before: string[];
  after: string[];
};

export type LpWhyItem = { title: string; body: string };

export type LpJourneyStep = { title: string; desc: string };

export type LpJourney = {
  heading: string;
  intro?: string;
  steps: LpJourneyStep[];
};

export type LpConsultLayer = {
  role: string;
  monthlyRange: string;
  allocationNote: string;
};

export type LpConsultLayers = {
  heading: string;
  intro: string;
  partialNote: string;
  layers: LpConsultLayer[];
};

export type LpCtaButton = {
  label: string;
  hrefFallback: string;
  mailSubject?: string;
  navigateHref?: string;
};

export type LpCtaBlock = {
  heading: string;
  body: string;
  primary: LpCtaButton;
  secondary: LpCtaButton;
  tertiary?: LpCtaButton;
};

export type LpDiagnosticOutcomeItem = {
  title: string;
  desc: string;
};

export type LpDiagnosticOutcomes = {
  heading: string;
  intro?: string;
  items: LpDiagnosticOutcomeItem[];
};

export type LpConsultantTierCard = {
  role: string;
  tagline: string;
};

export type LpConsultantTierSection = {
  heading: string;
  intro?: string;
  cards: LpConsultantTierCard[];
};

export type LpAiToRealTransition = {
  heading: string;
  lines: string[];
};

export type LpPattern = {
  id: "a" | "b";
  basePath: "/lp-a" | "/lp-b";
  nav: LpNavItem[];
  hero: LpHero;
  pain: LpPain;
  diagnosticOutcomes?: LpDiagnosticOutcomes;
  journey?: LpJourney;
  consultLayers?: LpConsultLayers;
  consultantTiers?: LpConsultantTierSection;
  aiToReal?: LpAiToRealTransition;
  solution: LpSolution;
  features: { heading: string; items: LpFeatureItem[] };
  materials: LpMaterials;
  compare: LpCompare;
  why: { heading: string; items: LpWhyItem[] };
  cta: LpCtaBlock;
};
