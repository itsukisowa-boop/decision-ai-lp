import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
  preload: true,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  title: "Decision AI | 意思決定をスピーディに整理",
  description:
    "要件定義・ROI・稟議資料の整理を支援。各LP（/lp-a /lp-b）で掲載内容が異なります。",
  openGraph: {
    title: "Decision AI",
    description:
      "要件定義・ROI・稟議資料を一気に整理する意思決定AI。合同会社HopeField。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJp.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
