import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "BondInWater | Bespoke Aquariums, Koi Ponds & Aquatic Habitats",
  description: "Where Living Nature Meets Intelligent Design. Bespoke luxury acrylic aquariums, natural koi ponds, waterfalls, paludariums, and architectural aquatic engineering.",
  keywords: "BondInWater, Luxury Aquariums, Acrylic Swimming Pools, Natural Koi Ponds, Paludariums, Animal Enclosures, Aquatic Engineering, Karan Tak, Mumbai",
  authors: [{ name: "BondInWater" }],
  openGraph: {
    title: "BondInWater | Bespoke Aquariums, Koi Ponds & Aquatic Habitats",
    description: "Where Living Nature Meets Intelligent Design. Bespoke luxury acrylic aquariums, natural koi ponds, and architectural ecosystems.",
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
      className={`${cormorant.variable} ${manrope.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F5F2E9] text-[#292C25] font-sans selection:bg-[#344B38] selection:text-[#F5F2E9]">
        {children}
      </body>
    </html>
  );
}
