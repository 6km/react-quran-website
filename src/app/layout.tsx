import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "react-quran/fonts/index.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" translate="no" dir="rtl">
      <body className={`pt-16 ${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
