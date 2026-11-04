import type { Metadata, Viewport } from "next";
import { Oswald, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
  title: "BondInWater — Extraordinary Environments. Engineered Around Nature.",
  description: "From bespoke aquariums and natural habitats to architectural water features and precision engineering, BondInWater designs, builds and maintains environments shaped by nature.",
  keywords: "BondInWater, Nature Engineered, Custom Aquariums, Natural Koi Ponds, Paludariums, Zoo Masterplanning, Acrylic Swimming Pools, Animal Enclosures, Aviary Engineering, Mumbai",
  authors: [{ name: "BondInWater" }],
  openGraph: {
    title: "BondInWater — Extraordinary Environments. Engineered Around Nature.",
    description: "Bespoke aquariums, natural habitats, architectural water features, and precision habitat engineering.",
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
      className={`${oswald.variable} ${inter.variable} ${spaceMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F4F4EF] text-[#202723] font-sans selection:bg-[#1D382B] selection:text-[#F4F4EF]">
        {children}
      </body>
    </html>
  );
}
