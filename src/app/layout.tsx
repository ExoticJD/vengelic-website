import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { MainWrapper } from "@/components/MainWrapper";
import { FAQModal } from "@/components/FAQModal";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vengelic | High-End SEO Authority",
  description: "Bespoke SEO strategies for brands that demand authority and elegance.",
  keywords: ["High-End SEO", "Bespoke SEO Strategy", "Search Engine Optimization", "B2B SEO Agency", "Local Search Dominance"],
  alternates: {
    canonical: "https://vengelic.com",
  },
  openGraph: {
    title: "Vengelic | High-End SEO Authority",
    description: "Bespoke SEO strategies for brands that demand authority and elegance.",
    images: [
      {
        url: "/Open%20Graph%20image.png",
        width: 1200,
        height: 630,
        alt: "Vengelic - High-End SEO Authority",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vengelic | High-End SEO Authority",
    description: "Bespoke SEO strategies for brands that demand authority and elegance.",
    images: ["/Open%20Graph%20image.png"],
  },
};

import { ModalProvider } from "@/lib/ModalContext";
import { ThemeProvider } from "@/lib/ThemeContext";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ScrollProgress } from "@/components/animations/ScrollProgress";
import { SchemaMarkup } from "@/components/SchemaMarkup";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased transition-colors duration-700`}
    >
      <body className="min-h-full flex flex-col font-inter bg-linen text-espresso selection:bg-espresso selection:text-linen">
        <SchemaMarkup />
        <div className="grain-overlay" />
        <ScrollProgress />
        <ThemeProvider>
          <ModalProvider>
            <Navbar />
            <MainWrapper>
              <main className="flex-grow">{children}</main>
              <Footer />
            </MainWrapper>
            <MobileCTA />
            <ConsultationModal />
            <FAQModal />
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
