import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/seo/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Agape Studios - Professional 3D Virtual Tours London",
    template: "%s | Agape Studios"
  },
  description: "Professional 3D virtual tours for properties, businesses, and real estate in London. Immersive digital experiences that bring your spaces to life. Contact us for your virtual tour needs.",
  keywords: [
    "3D virtual tours",
    "property tours",
    "real estate virtual tours",
    "London virtual tours",
    "virtual reality tours",
    "immersive property tours",
    "Matterport tours",
    "360 degree tours",
    "property photography",
    "real estate marketing",
    "virtual staging",
    "property viewings",
    "commercial property tours",
    "residential property tours",
    "Agape Studios"
  ],
  authors: [{ name: "Agape Studios", url: "https://www.agapestudios.co.uk" }],
  creator: "Agape Studios",
  publisher: "Agape Studios",
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
  openGraph: {
    title: "Agape Studios - Professional 3D Virtual Tours London",
    description: "Professional 3D virtual tours for properties, businesses, and real estate in London. Immersive digital experiences that bring your spaces to life.",
    type: "website",
    locale: "en_GB",
    url: "https://www.agapestudios.co.uk",
    siteName: "Agape Studios",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agape Studios - Professional 3D Virtual Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agape Studios - Professional 3D Virtual Tours London",
    description: "Professional 3D virtual tours for properties, businesses, and real estate in London.",
    creator: "@agapestudios",
    images: ["/images/twitter-card.jpg"],
  },
  metadataBase: new URL("https://www.agapestudios.co.uk"),
  alternates: {
    canonical: "https://www.agapestudios.co.uk",
  },
  category: "business",
  classification: "Professional Services",
  other: {
    "business:contact_data:street_address": "35 Hare St",
    "business:contact_data:locality": "London",
    "business:contact_data:postal_code": "SE18 6NE",
    "business:contact_data:country_name": "United Kingdom",
    "business:contact_data:email": "info@agapestudios.co.uk",
    "business:contact_data:phone_number": "+44 20 8129 5004",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
        <meta name="theme-color" content="#193c5a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=yes" />
        <StructuredData type="organization" />
        <StructuredData type="localBusiness" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col touch-manipulation`}
      >
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
