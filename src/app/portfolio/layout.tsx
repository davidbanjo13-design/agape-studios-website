import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Our 3D Virtual Tours",
  description: "Explore our portfolio of stunning 3D virtual tours for residential and commercial properties in London. See how we bring spaces to life with immersive virtual experiences.",
  keywords: [
    "3D virtual tour portfolio",
    "property tour examples", 
    "virtual tour gallery",
    "London property tours",
    "residential virtual tours",
    "commercial virtual tours",
    "Matterport examples",
    "360 tour portfolio",
    "property photography portfolio",
    "virtual staging examples"
  ],
  openGraph: {
    title: "Portfolio - Our 3D Virtual Tours | Agape Studios",
    description: "Explore our portfolio of stunning 3D virtual tours for residential and commercial properties in London.",
    type: "website",
    url: "https://www.agapestudios.co.uk/portfolio",
    images: [
      {
        url: "/images/portfolio-og.jpg",
        width: 1200,
        height: 630,
        alt: "Agape Studios Portfolio - 3D Virtual Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Our 3D Virtual Tours | Agape Studios",
    description: "Explore our portfolio of stunning 3D virtual tours for residential and commercial properties in London.",
    images: ["/images/portfolio-twitter.jpg"],
  },
  alternates: {
    canonical: "https://www.agapestudios.co.uk/portfolio",
  },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
