import type { Metadata } from "next";
import { Radio_Canada} from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegisterButton from "@/components/RegisterButton";

const radio_canada = Radio_Canada({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "URL Shortener",
  description: "Simple URL shortener",
};

type LayoutProps = {
    children: React.ReactNode;
    modal: React.ReactNode;
}

export default function RootLayout({
  children, modal
}: Readonly<LayoutProps>) {
  return (
    <html lang="en">
      <body className={`${radio_canada.className} bg-slate-200 dark:bg-slate-800 dark:text-white min-h-screen flex flex-col justify-center gap-7`}>
      <header className="flex w-full flex-col items-center">
        <RegisterButton/>
        <Header/>
      </header>
      <main className="flex items-center justify-center min-h-[65vh] flex-col">
        {children}
        {modal}
      </main>
        <Footer/>
      </body>
    </html>
  );
}
