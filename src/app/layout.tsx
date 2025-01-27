import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/dashboard/Header";
import Footer from "@/components/dashboard/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FakeStore",
  description: "FakeStore Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <Header />
         {children}
        <Footer />
      </body>
    </html>
  );
}
