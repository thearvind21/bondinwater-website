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
  title: "BondInWater — Natural History & Habitat Engineering Studio | Official Website",
  description: "BondInWater specializes in large-scale aquatic architecture, zoo masterplanning, custom acrylic engineering, bio-authentic habitats, and lifelong biological maintenance.",
  keywords: "BondInWater, Aquarium Architecture, Zoo Masterplanning, Acrylic Swimming Pools, Natural Koi Ponds, Paludariums, Animal Enclosures, Aquatic Engineering, Life Support Systems, Mumbai",
  authors: [{ name: "BondInWater" }],
  openGraph: {
    title: "BondInWater — Natural History & Habitat Engineering Studio",
    description: "Design, build, and operate turnkey aquatic architectures, public oceanariums, and wildlife habitats.",
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
      <body className="min-h-screen bg-[#0D0E11] text-neutral-200 font-sans selection:bg-[#3D4B3E] selection:text-white">
        {children}
      </body>
    </html>
  );
}
