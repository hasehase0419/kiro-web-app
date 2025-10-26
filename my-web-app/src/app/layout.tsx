import type { Metadata } from "next";
import { Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif_JP({ 
  subsets: ["latin"], 
  weight: ["400", "700"]
});

export const metadata: Metadata = {
  title: "血統深掘り | 競馬分析サイト",
  description: "特定の血統がどの競馬場、馬場、距離に強いのかを徹底分析するサイトです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSerif.className} antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
