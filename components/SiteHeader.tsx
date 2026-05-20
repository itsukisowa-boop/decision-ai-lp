import Link from "next/link";
import type { LpNavItem } from "@/lib/lp/types";
import { createResolveMailHref } from "@/components/lp/resolveHref";

const HOPEFIELD_SITE_URL = "https://hopefield.jp";

type StickyCta = {
  label: string;
  hrefFallback: string;
  mailSubject?: string;
  navigateHref?: string;
};

type Props = {
  basePath: string;
  nav: LpNavItem[];
  stickyCta: StickyCta;
};

export function SiteHeader({ basePath, nav, stickyCta }: Props) {
  const resolveMailHref = createResolveMailHref();
  const stickyMailHref =
    stickyCta.mailSubject != null && stickyCta.mailSubject !== ""
      ? resolveMailHref(stickyCta.mailSubject, stickyCta.hrefFallback)
      : null;

  const stickyClass =
    "shrink-0 whitespace-nowrap rounded-full bg-da-accent px-3.5 py-2 text-sm font-semibold text-da-bg shadow-[0_0_24px_-4px_rgba(56,189,248,0.55)] transition hover:bg-sky-300 sm:px-4";

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-da-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-2.5 sm:gap-3 sm:px-6 lg:gap-4">
        <div className="flex shrink-0 flex-col leading-tight">
          <a
            href={HOPEFIELD_SITE_URL}
            className="mb-1 inline-flex w-fit items-center text-[11px] text-da-fgMuted/40 transition hover:text-da-fgMuted/65"
          >
            ← HopeField
          </a>
          <Link href={basePath} className="flex flex-col">
            <span className="text-[10px] tracking-wide text-da-fgMuted/45">
              A HopeFieldOS Product
            </span>
            <span className="text-base font-semibold tracking-tight text-da-fg sm:text-[17px]">
              Decision AI
            </span>
          </Link>
        </div>
        <nav
          className="hidden min-w-0 flex-1 items-center justify-center gap-0 lg:flex"
          aria-label="ページ内"
        >
          {nav.map((s) => (
            <a
              key={s.id}
              href={`${basePath}#${s.id}`}
              className="whitespace-nowrap rounded-md px-2 py-1 text-xs font-medium tracking-tight text-da-fgMuted/90 transition hover:bg-white/[0.05] hover:text-da-fg xl:px-2.5 xl:text-[13px]"
            >
              {s.label}
            </a>
          ))}
        </nav>
        {stickyCta.navigateHref ? (
          <Link href={stickyCta.navigateHref} className={stickyClass}>
            {stickyCta.label}
          </Link>
        ) : stickyMailHref ? (
          <a href={stickyMailHref} className={stickyClass}>
            {stickyCta.label}
          </a>
        ) : (
          <a href={stickyCta.hrefFallback} className={stickyClass}>
            {stickyCta.label}
          </a>
        )}
      </div>
    </header>
  );
}
