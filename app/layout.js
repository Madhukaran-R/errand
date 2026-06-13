import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";

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
  description: "Experience fast, reliable, and transparent local errand services. Same-day pickup, drop-off, and delivery. Trusted riders, 24/7 support. Starting from ₹49 for 2KM.",
  keywords: [
    "errand service",
    "local delivery",
    "same-day delivery",
    "courier service",
    "pickup and drop-off",
    "parcel delivery",
    "quick delivery",
    "fast courier",
    "transparent pricing",
    "trusted riders",
    "24/7 delivery service",
    "shopping assistant",
    "medicine delivery",
    "document delivery",
    "gift delivery",
    "returns service"
  ].join(", "),
  authors: [{ name: "Errand Service", url: "https://yourdomain.com/errand" }],
  creator: "Errand Service",
  publisher: "Errand Service",
  category: "Delivery Service",
  metadataBase: new URL("https://yourdomain.com"),
  
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Errand Service - Fast & Reliable Same-Day Local Delivery",
    description: "Same-day pickup and drop-off service with transparent pricing from ₹49. Trusted riders, 24/7 support.",
    siteName: "Errand Service",
    url: "https://yourdomain.com/errand/",
    images: [
      {
        url: "/errand/og-image.png",
        width: 1200,
        height: 630,
        alt: "Errand Service - Fast & Reliable Delivery",
        type: "image/png"
      },
      {
        url: "/errand/og-image-square.png",
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
    images: ["/errand/og-image.png"]
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
  
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code"
  },
  
  alternates: {
    canonical: "https://yourdomain.com/errand/",
    languages: {
      "en-US": "https://yourdomain.com/errand/",
      "en": "https://yourdomain.com/errand/"
    }
  },
  
  manifest: "/errand/manifest.json",
  
  icons: {
    icon: "/errand/favicon.gif",
    shortcut: "/errand/favicon.gif",
    apple: "/errand/favicon.gif",
    other: [
      {
        rel: "icon",
        url: "/errand/favicon.gif"
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover" />
        <meta name="theme-color" content="#f3b308" />
        
        {/* Mobile Optimization */}
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Errand" />
        
        {/* Search Engine Optimization */}
        <meta name="description" content="Fast, reliable and transparent local errand and delivery service. Same-day pickup and drop-off in your city. Starting from ₹49." />
        <meta name="keywords" content="errand service, delivery, local delivery, same-day delivery, courier service" />
        <meta name="author" content="Errand Service" />
        <meta name="publisher" content="Errand Service" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Security & Privacy */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="email=no" />
        
        {/* Font Optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Icons */}
        <link rel="icon" type="image/gif" href="/errand/favicon.gif" />
        <link rel="shortcut icon" type="image/gif" href="/errand/favicon.gif" />
        <link rel="apple-touch-icon" href="/errand/favicon.gif" sizes="180x180" />
        <link rel="manifest" href="/errand/manifest.json" />
        
        {/* Canonical & Alternates */}
        <link rel="canonical" href="https://yourdomain.com/errand/" />
        <link rel="alternate" hrefLang="en" href="https://yourdomain.com/errand/" />
        <link rel="alternate" hrefLang="en-US" href="https://yourdomain.com/errand/" />
      </head>
      <body className={`${display.variable} ${body.variable}`}>
        <a href="#main-content" className="skip-to-content">Skip to main content</a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
