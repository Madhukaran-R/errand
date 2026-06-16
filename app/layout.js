import "./globals.css";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";

const SITE_URL = "https://errand.ltd";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata = {
  title: "Errand Service - Fast & Reliable Same-Day Local Delivery Starting ₹49",
  description: "Fast, reliable, and transparent local errand service in Chennai. Same-day pickup, drop-off, and delivery with trusted riders and 24/7 support. Starting from ₹49 for 2 km.",
  keywords: [
    "errand service",
    "errand service chennai",
    "local delivery",
    "local delivery chennai",
    "same-day delivery",
    "same-day delivery chennai",
    "courier service",
    "courier service chennai",
    "pickup and drop-off",
    "pickup and drop chennai",
    "parcel delivery",
    "parcel delivery chennai",
    "quick delivery",
    "fast courier",
    "transparent pricing",
    "trusted riders",
    "24/7 delivery service",
    "shopping assistant",
    "grocery delivery chennai",
    "medicine delivery",
    "medicine delivery chennai",
    "document delivery",
    "document delivery chennai",
    "gift delivery",
    "returns service"
  ].join(", "),
  authors: [{ name: "Errand Service", url: SITE_URL }],
  creator: "Errand Service",
  publisher: "Errand Service",
  category: "Delivery Service",
  metadataBase: new URL(SITE_URL),
  
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Errand Service - Fast & Reliable Same-Day Local Delivery",
    description: "Same-day pickup and drop-off service with transparent pricing from ₹49. Trusted riders, 24/7 support.",
    siteName: "Errand Service",
    url: `${SITE_URL}/`,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Errand Service - Fast & Reliable Delivery",
        type: "image/png"
      },
      {
        url: "/og-image-square.png",
        width: 800,
        height: 800,
        alt: "Errand Service Logo"
      }
    ]
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Errand Service - Same-Day Local Delivery",
    description: "Fast, reliable delivery from ₹49. Trusted riders, 24/7 support.",
    creator: "@errandservice",
    images: ["/og-image.png"]
  },
  
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    "googlebot": "index, follow",
    "bingbot": "index, follow"
  },
  
  alternates: {
    canonical: `${SITE_URL}/`,
    languages: {
      "en-US": `${SITE_URL}/`,
      "en": `${SITE_URL}/`
    }
  },
  
  manifest: "/manifest.json",
  
  icons: {
    icon: "/favicon.gif",
    shortcut: "/favicon.gif",
    apple: "/favicon.gif",
    other: [
      {
        rel: "icon",
        url: "/favicon.gif"
      }
    ]
  },
  
  appleWebApp: {
    capable: true,
    statusBarStyle: "black",
    title: "Errand Service"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#f3b308" />
        
        {/* Mobile Optimization */}
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Errand" />
        
        {/* Search Engine Optimization */}
        
        
        {/* Security & Privacy */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="email=no" />
        
        {/* Icons */}
        <link rel="icon" type="image/gif" href="/favicon.gif" />
        <link rel="shortcut icon" type="image/gif" href="/favicon.gif" />
        <link rel="apple-touch-icon" href="/favicon.gif" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        
      </head>
      <body className={`${display.variable} ${body.variable}`}>
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
