import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// definition next13 app dirctorys metadata
export const metadata = {
  title: "単語帳 - TANGOAT",
  description: "単語帳アプリのTANGOAT",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
