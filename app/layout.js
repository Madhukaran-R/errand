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
  title: "Errand Service - Fast & Reliable Same-Day Local Delivery Starting ₹49 | Top Rated",
  description: "⭐ Top-rated same-day delivery service in Chennai. Fast errand service for shopping, medicines, documents & more. Trusted by 100+ clients. Starting ₹49. 24/7 support. Book now!",
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
    title: "Errand Service - Same-Day Local Delivery ₹49 | Fast & Reliable",
    description: "Same-day errand delivery in Chennai. Trusted by 100+ clients. Fast pickup/drop, shopping, medicines, documents. Transparent pricing from ₹49. WhatsApp us now!",
    siteName: "Errand Service",
    url: `${SITE_URL}/`,
    images: [
      {
        url: `${SITE_URL}/og-image-poster.jpg`,
        width: 1200,
        height: 630,
        alt: "Errand Service - Fast & Reliable Delivery",
        type: "image/jpeg"
      },
      {
        url: `${SITE_URL}/og-image-square-poster.jpg`,
        width: 800,
        height: 800,
        alt: "Errand Service - Fast & Reliable Delivery",
        type: "image/jpeg"
      }
    ]
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Errand Service - Same-Day Delivery | ₹49 Errand Service Chennai",
    description: "Same-day errand service in Chennai. 100+ happy customers. Fast delivery, trusted riders, 24/7 support. Book at https://errand.ltd",
    creator: "@errandservice",
    images: [`${SITE_URL}/og-image-poster.jpg`]
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
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon.png"
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
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        
      </head>
      <body className={`${display.variable} ${body.variable}`}>
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
