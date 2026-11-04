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
  title: "BondInWater — Nature Engineered | Aquatic Architecture & Habitat Engineering",
  description: "From bespoke aquatic environments and natural habitats to architectural planning and precision engineering, BondInWater designs, builds and maintains extraordinary environments inspired by nature.",
  keywords: "BondInWater, Nature Engineered, Aquatic Design, Habitat Engineering, Zoo Masterplanning, Acrylic Swimming Pools, Natural Koi Ponds, Paludariums, Animal Enclosures, Life Support Systems, Mumbai",
  authors: [{ name: "BondInWater" }],
  openGraph: {
    title: "BondInWater — Nature Engineered | Aquatic Architecture & Habitat Engineering",
    description: "Design, build, and maintain turnkey aquatic architecture, public oceanariums, and living habitats inspired by nature.",
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
      <body className="min-h-screen bg-[#F3F3EC] text-[#202820] font-sans selection:bg-[#172D24] selection:text-[#F3F3EC]">
        {children}
      </body>
    </html>
  );
}
