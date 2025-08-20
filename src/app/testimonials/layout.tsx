import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Testimonials - Agape Studios",
  description: "See what our satisfied clients have to say about our professional 3D virtual tours and how they've transformed their property marketing and business growth.",
  keywords: [
    "client testimonials",
    "3D virtual tour reviews", 
    "property marketing success",
    "virtual tour results",
    "Agape Studios reviews",
    "estate agent testimonials",
    "restaurant virtual tours",
    "business growth",
    "customer feedback"
  ],
  openGraph: {
    title: "Client Testimonials - Agape Studios",
    description: "See what our satisfied clients have to say about our professional 3D virtual tours and how they've transformed their property marketing and business growth.",
    type: "website",
  },
  twitter: {
    title: "Client Testimonials - Agape Studios", 
    description: "See what our satisfied clients have to say about our professional 3D virtual tours and how they've transformed their property marketing and business growth.",
  },
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
