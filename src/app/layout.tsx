import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { WhatsAppButton } from "@/components/Layout/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "UB Motors - Distribuidor Oficial Audi | Tucumán y Salta",
  description: "UB Motors es el distribuidor oficial de Audi en el Norte Argentino. Concesionarios en Tucumán (2 sucursales) y Salta. También Ducati en Salta. Descubrí la gama completa de vehículos Audi: A1, A3, A5, A6, Q2, Q3, Q5, Q7, Q8.",
  keywords: "UB Motors, Audi Tucumán, Audi Salta, concesionario Audi, distribuidor Audi, Audi Argentina, autos premium, SUV, sedan, sportback, Ducati Salta, vehículos premium",
  authors: [{ name: "UB Motors" }],
  openGraph: {
    title: "UB Motors - Distribuidor Oficial Audi | Tucumán y Salta",
    description: "Distribuidor oficial de Audi en el Norte Argentino. Concesionarios en Tucumán (2 sucursales) y Salta. También Ducati en Salta.",
    url: "https://www.ubmotors.com.ar",
    siteName: "UB Motors",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UB Motors - Distribuidor Oficial Audi",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UB Motors - Distribuidor Oficial Audi | Tucumán y Salta",
    description: "Distribuidor oficial de Audi en el Norte Argentino. Concesionarios en Tucumán y Salta.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
        style={{ backgroundColor: '#101319' }}
      >
        <Navbar />

        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}