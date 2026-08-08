import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "有趣企劃｜FUN PROJECT",
  description: "有趣企劃：讓好玩的被看見。品牌策略、社群行銷與創意企劃。",
  openGraph: {
    title: "有趣企劃｜FUN PROJECT",
    description: "讓好玩的被看見。",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
