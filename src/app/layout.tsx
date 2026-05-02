import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";

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
  openGraph: {
    title: "Vengelic | High-End SEO Authority",
    description: "Bespoke SEO strategies for brands that demand authority and elegance.",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
};

import { ModalProvider } from "@/lib/ModalContext";
import { ConsultationModal } from "@/components/ConsultationModal";
import { ScrollProgress } from "@/components/animations/ScrollProgress";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-inter bg-linen text-espresso">
        <ScrollProgress />
        <ModalProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <MobileCTA />
          <ConsultationModal />
        </ModalProvider>
      </body>
    </html>
  );
}
