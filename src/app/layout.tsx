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
  title: "UB Motors - Distribuidor de Audi | Sitio Oficial",
  description: "Descubrí la gama completa de vehículos Audi en Argentina. Modelos sedan, sportback, SUV y e-tron. Tecnología, diseño y rendimiento premium.",
  keywords: "Audi, Audi Argentina, autos premium, SUV, sedan, sportback, e-tron, quattro, vehículos eléctricos",
  authors: [{ name: "Audi Argentina" }],
  openGraph: {
    title: "Audi Argentina | Sitio Oficial",
    description: "Descubrí la gama completa de vehículos Audi en Argentina. Tecnología, diseño y rendimiento premium.",
    url: "https://www.audi.com.ar",
    siteName: "Audi Argentina",
    images: [
      {
        url: "/og-image.jpg", // Agregá esta imagen en /public
        width: 1200,
        height: 630,
        alt: "Audi Argentina",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audi Argentina | Sitio Oficial",
    description: "Descubrí la gama completa de vehículos Audi en Argentina.",
    images: ["/og-image.jpg"],
    creator: "@AudiArg",
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
  verification: {
    google: "tu-codigo-google-search-console", // Agregá el código de Google Search Console
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