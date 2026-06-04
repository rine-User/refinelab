import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RefineLab | 無駄を削り、本質だけを残す。",
  description:
    "RefineLabは、業務の改善と効率化を通じて「頑張らなくても成果が出る仕組み」を提供します。",
  openGraph: {
    title: "RefineLab | 無駄を削り、本質だけを残す。",
    description: "業務効率化・AI活用で仕事をもっと自由に。",
    siteName: "RefineLab",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;900&family=Noto+Sans+JP:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
