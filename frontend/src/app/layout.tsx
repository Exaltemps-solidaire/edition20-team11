import type { Metadata } from "next";
import { Archivo_Black, Libre_Franklin } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const archivoBlack = Archivo_Black({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const libreFranklin = Libre_Franklin({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "L'BURN — Tableau de bord",
  description: "Les BURN'ettes — accompagnement des femmes en reconstruction après un burn-out",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${archivoBlack.variable} ${libreFranklin.variable}`}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
