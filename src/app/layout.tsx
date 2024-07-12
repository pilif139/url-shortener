import type { Metadata } from "next";
import { Radio_Canada} from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Auth from "@/components/Auth";

const radio_canada = Radio_Canada({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "URL Shortener",
  description: "Simple URL shortener",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${radio_canada.className} bg-slate-200 dark:bg-slate-800 dark:text-white min-h-screen flex flex-col justify-center gap-5`}>
      <header className="w-full flex flex-col items-center">
        <Auth/>
        <Header/>
      </header>
      <main className="min-h-[65vh] flex items-center justify-center">
        {children}
      </main>
        <Footer/>
      </body>
    </html>
  );
}
