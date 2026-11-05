import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "BondInWater — Extraordinary Environments for Life",
  description: "Aquatic environments, animal habitats and architectural solutions — designed, built and cared for by BondInWater.",
  keywords: "BondInWater, Aquatic Environments, Animal Habitats, Zoo Masterplanning, Custom Aquariums, Natural Ponds, Paludariums, Acrylic Craftsmanship, Aviary Engineering, Mumbai",
  authors: [{ name: "BondInWater" }],
  openGraph: {
    title: "BondInWater — Extraordinary Environments for Life",
    description: "Aquatic environments, animal habitats and architectural solutions — designed, built and cared for by BondInWater.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${spaceMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#E9EFE7] text-[#27302B] font-sans selection:bg-[#1F4338] selection:text-[#E9EFE7]">
        {children}
      </body>
    </html>
  );
}