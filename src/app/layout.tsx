import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: "Caretta Hospitality: Manali Cottages, Delhi NCR Tiffin & Canteen Services",
  description:
    "Experience top-tier hospitality with Caretta. We offer luxury cottages in Manali, healthy and delicious tiffin services in Delhi NCR, and professional canteen management for corporate and educational institutions.",
  keywords:
    "Caretta Hospitality, cottage in Manali, Manali luxury stay, tiffin service Delhi NCR, healthy meal delivery, corporate canteen services, institutional catering, hospitality services India",
  openGraph: {
    title: "Caretta Hospitality: Premium Stays, Tiffin, and Canteen Services",
    description: "From serene Manali cottages to reliable Delhi NCR tiffin and canteen solutions, Caretta Hospitality delivers excellence.",
    url: "https://www.carettahospitality.com", // Replace with your actual domain
    siteName: "Caretta Hospitality",
    images: [
      {
        url: "/og-image.jpg", // Make sure to add an og-image.jpg in your public folder
        width: 1200,
        height: 630,
        alt: "A collage of Caretta Hospitality services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Caretta Hospitality: Manali Cottages, Delhi NCR Tiffin & Canteen Services",
    description: "Discover luxury cottages in Manali, healthy tiffin services in Delhi NCR, and professional canteen solutions with Caretta Hospitality.",
    images: ["/twitter-image.jpg"], // Make sure to add a twitter-image.jpg in your public folder
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
