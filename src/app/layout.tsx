import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Zeekers — Descubre comercios locales",
  description:
    "Encuentra los mejores comercios locales verificados: restaurantes, tiendas, servicios y más, todo en un solo lugar.",
  keywords: ["comercios locales", "directorio", "Mérida", "negocios"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
