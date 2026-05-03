import Link from "next/link";
import type { LpNavItem } from "@/lib/lp/types";
import { createResolveMailHref } from "@/components/lp/resolveHref";

type StickyCta = {
  label: string;
  mailSubject: string;
  hrefFallback: string;
};

type Props = {
  basePath: string;
  nav: LpNavItem[];
  stickyCta: StickyCta;
};

export function SiteHeader({ basePath, nav, stickyCta }: Props) {
  const resolveMailHref = createResolveMailHref();
  const stickyHref = resolveMailHref(stickyCta.mailSubject, stickyCta.hrefFallback);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.08] bg-da-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={basePath} className="flex flex-col leading-tight">
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-da-accent">
            Product
          </span>
          <span className="text-lg font-semibold tracking-tight text-da-fg">Decision AI</span>
        </Link>
        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="ページ内">
          {nav.map((s) => (
            <a
              key={s.id}
              href={`${basePath}#${s.id}`}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-da-fgMuted transition hover:bg-white/[0.06] hover:text-da-fg"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <a
          href={stickyHref}
          className="shrink-0 rounded-full bg-da-accent px-4 py-2 text-sm font-semibold text-da-bg shadow-[0_0_24px_-4px_rgba(56,189,248,0.55)] transition hover:bg-sky-300"
        >
          {stickyCta.label}
        </a>
      </div>
    </header>
  );
}
