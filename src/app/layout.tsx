import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HidroHuerto",
  description: "Guía de cultivos y sistemas hidropónicos para principiantes",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={geist.variable}>
        <div className="min-h-screen bg-green-50 text-gray-900">
          <Suspense fallback={null}>
            <Navbar />
          </Suspense>
          <main className="mx-auto max-w-5xl px-4 py-8">{children}</main>
          <footer className="border-t border-green-200 py-6 text-center text-sm text-green-800">
            HidroHuerto · Proyecto de Vibe Coding
          </footer>
        </div>
      </body>
    </html>
  );
}