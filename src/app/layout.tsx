import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import HeroCanvas from "@/components/3d/HeroCanvas";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Consilium Septem — Consejo de Expertos Legales",
  description:
    "Consilium Septem es un bufete de abogados conformado por un consejo de 7 expertos en Derecho Civil, Penal, Constitucional, Laboral y Tributario.",
  keywords: [
    "abogados",
    "bufete",
    "derecho civil",
    "derecho penal",
    "derecho constitucional",
    "derecho laboral",
    "derecho tributario",
    "asesoría legal",
  ],
  openGraph: {
    title: "Consilium Septem — Consejo de Expertos Legales",
    description:
      "Siete expertos legales unidos por la excelencia. Asesoría integral en todas las ramas del derecho.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-midnight text-pearl font-sans antialiased">
        <SmoothScrollProvider>
          <HeroCanvas />
          <Navbar />
          <main style={{ position: "relative", zIndex: 1 }}>{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
