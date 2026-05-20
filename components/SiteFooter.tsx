const HOPEFIELD_SITE_URL = "https://hopefield.jp";

const corpUrl = process.env.NEXT_PUBLIC_CORPORATE_SITE_URL ?? HOPEFIELD_SITE_URL;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-da-surface">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-da-fg">Decision AI</p>
          <p className="mt-1 text-sm text-da-fgMuted">運営：HopeField LLC</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          {corpUrl ? (
            <a
              href={corpUrl}
              className="font-medium text-da-accent underline-offset-4 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              コーポレートサイトへ
            </a>
          ) : null}
        </div>
      </div>
      <div className="border-t border-white/[0.06] px-4 py-5 text-center sm:px-6">
        <p className="text-[11px] tracking-wide text-da-subtle/55">
          <a
            href={HOPEFIELD_SITE_URL}
            className="transition hover:text-da-subtle/80"
          >
            HopeFieldOS
          </a>
          <span className="mx-1.5 text-da-subtle/40">·</span>
          <span>HopeField LLC</span>
        </p>
        <p className="mt-2 text-xs text-da-subtle">
          © {new Date().getFullYear()} HopeField LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
