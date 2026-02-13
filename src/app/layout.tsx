import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import { Header } from "@/components/layout/header";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Malva — Pastelería Artesanal",
  description:
    "Pastelería artesanal donde cada creación es una expresión de amor por los sabores auténticos. Pasteles, tartas, bombones y macarons en Madrid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={cormorant.variable}>
        <Header />
        <main className="min-h-screen bg-background">{children}</main>
      </body>
    </html>
  );
}
