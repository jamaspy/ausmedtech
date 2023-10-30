import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Australasian MedTech Alliance",
  description:
    "AMTA is Australiasian MedTech Alliance focused on the development of the MedTech industry in Australia and New Zealand.",
  openGraph: {
    title: "Australasian MedTech Alliance",
    description:
      "AMTA is Australiasian MedTech Alliance focused on the development of the MedTech industry in Australia and New Zealand.",
    url: "https://amta.com.au/",
    siteName: "AMTA",
    images: [
      {
        url: "https://nextjs.org/logo.svg",
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/doc.jpg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
