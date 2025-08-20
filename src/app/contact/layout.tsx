import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Book Your 3D Virtual Tour",
  description: "Contact Agape Studios to book your professional 3D virtual tour in London. Get a quote for residential or commercial property tours. Located at 35 Hare St, London SE18 6NE.",
  keywords: [
    "contact Agape Studios",
    "book 3D virtual tour",
    "3D tour quote London",
    "virtual tour booking",
    "property tour consultation",
    "London virtual tour company",
    "35 Hare St London",
    "SE18 6NE virtual tours",
    "professional property photography"
  ],
  openGraph: {
    title: "Contact Us - Book Your 3D Virtual Tour | Agape Studios",
    description: "Contact Agape Studios to book your professional 3D virtual tour in London. Get a quote for residential or commercial property tours.",
    type: "website",
    url: "https://www.agapestudios.co.uk/contact",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Agape Studios - Professional 3D Virtual Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Book Your 3D Virtual Tour | Agape Studios", 
    description: "Contact Agape Studios to book your professional 3D virtual tour in London.",
    images: ["/images/contact-twitter.jpg"],
  },
  alternates: {
    canonical: "https://www.agapestudios.co.uk/contact",
  },
  other: {
    "geo.region": "GB-LND",
    "geo.placename": "London",
    "geo.position": "51.4934;0.1063",
    "ICBM": "51.4934, 0.1063"
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
