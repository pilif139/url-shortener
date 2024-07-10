import type { Metadata } from "next";
import { Radio_Canada} from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";

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
      <body className={`${radio_canada.className} bg-slate-200 min-h-screen flex flex-col items-center justify-center`}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
