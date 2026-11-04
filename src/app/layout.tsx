import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
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
  title: "BondInWater — Aquatic Design, Habitat Engineering & Turnkey Solutions",
  description: "BondInWater specializes in custom acrylic aquariums, natural koi ponds, bio-authentic vivariums, zoo masterplanning, and turnkey aquatic engineering.",
  keywords: "BondInWater, Aquatic Design, Habitat Engineering, Zoo Masterplanning, Acrylic Swimming Pools, Natural Koi Ponds, Paludariums, Animal Enclosures, Life Support Systems, Mumbai",
  authors: [{ name: "BondInWater" }],
  openGraph: {
    title: "BondInWater — Aquatic Design, Habitat Engineering & Turnkey Solutions",
    description: "Design, build, and maintain turnkey aquatic architecture, public oceanariums, and living habitats.",
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
      className={`${barlowCondensed.variable} ${inter.variable} ${spaceMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#CED2D2] text-[#171A19] font-sans selection:bg-[#171A19] selection:text-[#F1F1ED]">
        {children}
      </body>
    </html>
  );
}
