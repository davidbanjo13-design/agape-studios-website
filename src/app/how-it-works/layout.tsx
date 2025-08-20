import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works - Our 3D Virtual Tour Process",
  description: "Learn about our proven 4-step process for creating professional 3D virtual tours. From initial consultation to final delivery - discover how we bring your property to life.",
  keywords: [
    "3D virtual tour process",
    "how virtual tours work",
    "property tour creation",
    "virtual tour timeline",
    "3D scanning process",
    "Matterport process",
    "virtual tour consultation",
    "property photography process",
    "tour hosting packages"
  ],
  openGraph: {
    title: "How It Works - Our 3D Virtual Tour Process | Agape Studios",
    description: "Learn about our proven 4-step process for creating professional 3D virtual tours. From consultation to delivery.",
    type: "website",
    url: "https://www.agapestudios.co.uk/how-it-works",
    images: [
      {
        url: "/images/how-it-works-og.jpg",
        width: 1200,
        height: 630,
        alt: "How It Works - 3D Virtual Tour Process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How It Works - Our 3D Virtual Tour Process | Agape Studios",
    description: "Learn about our proven 4-step process for creating professional 3D virtual tours.",
    images: ["/images/how-it-works-twitter.jpg"],
  },
  alternates: {
    canonical: "https://www.agapestudios.co.uk/how-it-works",
  },
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
