import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "猫咪心情研究所｜测测你是什么猫咪性格",
  description: "24道治愈系情境题，发现住在你心里的猫咪人格。",
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
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}
