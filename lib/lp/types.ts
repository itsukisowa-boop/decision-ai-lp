export type LpNavItem = { id: string; label: string };

export type LpHero = {
  kicker: string;
  titleLines: string[];
  subtitle: string;
  /** ヘッダー右の短いラベル（未指定時は primaryCta.label） */
  stickyNavCtaLabel?: string;
  primaryCta: { label: string; mailSubject: string; hrefFallback: string };
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

export type LpCtaBlock = {
  heading: string;
  body: string;
  envHint?: string;
  primary: { label: string; mailSubject: string; hrefFallback: string };
  secondary: { label: string; mailSubject: string; hrefFallback: string };
};

export type LpPattern = {
  id: "a" | "b";
  basePath: "/lp-a" | "/lp-b";
  nav: LpNavItem[];
  hero: LpHero;
  pain: LpPain;
  journey?: LpJourney;
  consultLayers?: LpConsultLayers;
  solution: LpSolution;
  features: { heading: string; items: LpFeatureItem[] };
  materials: LpMaterials;
  compare: LpCompare;
  why: { heading: string; items: LpWhyItem[] };
  cta: LpCtaBlock;
};
