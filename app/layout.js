import "./globals.css";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import GoogleAnalytics from "./components/GoogleAnalytics";

// ─────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────
const SITE_URL  = "https://errand.ltd";
const SITE_NAME = "Errand Service";
const OG_TITLE  = "Errand Service – Same-Day Local Delivery from ₹49 | Chennai";
const OG_DESC   = "Top-rated same-day errand service in Chennai. Shopping, medicines, documents, parcels & more. Trusted by 100+ clients. Starting ₹49. WhatsApp us now!";
const CANONICAL = `${SITE_URL}/`;
const EMAIL     = "errandsupport@gmail.com";

// ─────────────────────────────────────────────
// OG IMAGE MAP  (all variants from /public)
//
// Naming convention used in the file tree:
//   og-image-poster.jpg                           ← primary JPEG  (WhatsApp requires JPEG)
//   og_variants/og-image-poster_1200x630.webp     ← rectangular WebP  (Facebook / LinkedIn)
//   og_variants/og-image-poster_1200x630.png      ← rectangular PNG   (fallback)
//   og_variants/og-image-poster_600x315.webp      ← small rectangular WebP
//   og_variants/og-image-poster_600x315.png       ← small rectangular PNG
//   og_variants/og-image-square-poster_800x800.webp ← square WebP     (Twitter / Instagram)
//   og_variants/og-image-square-poster_800x800.png  ← square PNG      (fallback)
//   og_variants/og-image-square-poster_400x400.webp ← small square WebP
//   og_variants/og-image-square-poster_400x400.png  ← small square PNG
//
// Strategy:
//   • WhatsApp / Facebook: og:image → primary JPEG (crawlers prefer JPEG, no WebP support)
//   • Google / rich results: rectangular PNG 1200×630 as the Next.js metadata image
//   • Twitter card: square PNG 800×800 (summary_large_image ignores aspect ratio but
//     square looks cleaner on mobile notifications)
//   • Multiple og:image tags: Facebook / LinkedIn pick the largest image they can render
// ─────────────────────────────────────────────
const OG = {
  // Primary JPEG — WhatsApp, iMessage, Telegram (best crawler compat)
  jpegRect:       `${SITE_URL}/og-image-poster.jpg`,

  // Rectangular variants
  webpRect1200:   `${SITE_URL}/og_variants/og-image-poster_1200x630.webp`,
  pngRect1200:    `${SITE_URL}/og_variants/og-image-poster_1200x630.png`,
  webpRect600:    `${SITE_URL}/og_variants/og-image-poster_600x315.webp`,
  pngRect600:     `${SITE_URL}/og_variants/og-image-poster_600x315.png`,

  // Square variants
  webpSq800:      `${SITE_URL}/og_variants/og-image-square-poster_800x800.webp`,
  pngSq800:       `${SITE_URL}/og_variants/og-image-square-poster_800x800.png`,
  webpSq400:      `${SITE_URL}/og_variants/og-image-square-poster_400x400.webp`,
  pngSq400:       `${SITE_URL}/og_variants/og-image-square-poster_400x400.png`,

  alt:            `${SITE_NAME} – Fast & Reliable Same-Day Delivery in Chennai`,
};

// ─────────────────────────────────────────────
// FAVICON MAP  (all sizes from /public)
// ─────────────────────────────────────────────
const FAVICON = {
  ico:   "/favicon.png",          // default fallback (browsers request /favicon.ico)
  gif:   "/favicon.gif",          // animated favicon (shown in some browsers while loading)
  p16:   "/favicon-16x16.png",
  p32:   "/favicon-32x32.png",
  p48:   "/favicon-48x48.png",
  p64:   "/favicon-64x64.png",
  p128:  "/favicon-128x128.png",
  p180:  "/favicon-180x180.png",  // Apple touch icon
  p192:  "/favicon-192x192.png",  // Android home screen
  p512:  "/favicon-512x512.png",  // PWA splash / maskable
};

// ─────────────────────────────────────────────
// FONTS
// ─────────────────────────────────────────────
const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// ─────────────────────────────────────────────
// NEXT.JS METADATA  (Google, Bing, rich results)
// WhatsApp/Facebook crawlers don't run JS —
// those are handled by hardcoded <meta> in <head>.
// ─────────────────────────────────────────────
export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:  OG_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: OG_DESC,
  keywords: [
    "errand service chennai",
    "same-day delivery chennai",
    "local delivery chennai",
    "courier service chennai",
    "pickup and drop chennai",
    "medicine delivery chennai",
    "document delivery chennai",
    "grocery delivery chennai",
    "errand service",
    "parcel delivery",
    "shopping assistant chennai",
    "gift delivery chennai",
    "business errand service",
    "24/7 delivery service",
    "trusted riders chennai",
  ].join(", "),

  authors:   [{ name: SITE_NAME, url: SITE_URL }],
  creator:   SITE_NAME,
  publisher: SITE_NAME,
  category:  "Delivery Service",

  alternates: {
    canonical: CANONICAL,
    languages: { "en-IN": CANONICAL, en: CANONICAL },
  },

  // ── Open Graph (Google rich results, Slack, Discord)
  openGraph: {
    type:        "website",
    locale:      "en_IN",
    url:         CANONICAL,
    siteName:    SITE_NAME,
    title:       OG_TITLE,
    description: OG_DESC,
    images: [
      // 1200×630 WebP — modern crawlers (Slack, Discord, LinkedIn)
      {
        url:    OG.webpRect1200,
        width:  1200,
        height: 630,
        alt:    OG.alt,
        type:   "image/webp",
      },
      // 1200×630 PNG — fallback for crawlers that don't support WebP
      {
        url:    OG.pngRect1200,
        width:  1200,
        height: 630,
        alt:    OG.alt,
        type:   "image/png",
      },
      // 600×315 PNG — low-bandwidth / older crawlers
      {
        url:    OG.pngRect600,
        width:  600,
        height: 315,
        alt:    OG.alt,
        type:   "image/png",
      },
      // 800×800 PNG — square crop for platforms that show square previews
      {
        url:    OG.pngSq800,
        width:  800,
        height: 800,
        alt:    OG.alt,
        type:   "image/png",
      },
    ],
  },

  // ── Twitter / X
  twitter: {
    card:        "summary_large_image",
    site:        "@errandservice",
    creator:     "@errandservice",
    title:       OG_TITLE,
    description: OG_DESC,
    images: [
      {
        url:    OG.pngSq800,   // square looks best on Twitter mobile cards
        alt:    OG.alt,
      },
    ],
  },

  robots: {
    index:               true,
    follow:              true,
    "max-image-preview": "large",
    "max-snippet":       -1,
    "max-video-preview": -1,
    googlebot: "index, follow, max-snippet:-1, max-image-preview:large",
  },

  manifest: "/manifest.json",

  // ── Favicons (all sizes)
  icons: {
    icon: [
      { url: FAVICON.p16,  sizes: "16x16",   type: "image/png" },
      { url: FAVICON.p32,  sizes: "32x32",   type: "image/png" },
      { url: FAVICON.p48,  sizes: "48x48",   type: "image/png" },
      { url: FAVICON.p64,  sizes: "64x64",   type: "image/png" },
      { url: FAVICON.p128, sizes: "128x128", type: "image/png" },
      { url: FAVICON.p192, sizes: "192x192", type: "image/png" },
      { url: FAVICON.p512, sizes: "512x512", type: "image/png" },
    ],
    shortcut: FAVICON.ico,
    apple: [
      { url: FAVICON.p180, sizes: "180x180", type: "image/png" },
    ],
    other: [
      // Animated favicon — shown in browser tab during page load in some browsers
      { rel: "icon", url: FAVICON.gif, type: "image/gif" },
    ],
  },

  appleWebApp: {
    capable:         true,
    statusBarStyle:  "black",
    title:           SITE_NAME,
    startupImage:    FAVICON.p512,
  },

  verification: {
    // Uncomment and fill in after Search Console / Bing WMT setup:
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",
    // other:  { "msvalidate.01": "YOUR_BING_TOKEN" },
  },
};

// ─────────────────────────────────────────────
// ROOT LAYOUT
// ─────────────────────────────────────────────
export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f3b308" />

        {/*
          ══ OPEN GRAPH — HARDCODED FOR WHATSAPP / FACEBOOK ══════════════════
          WhatsApp's crawler (facebookexternalhit/1.1) never runs JavaScript.
          The metadata export above is invisible to it.
          These raw <meta> tags are the ONLY thing WA reads.

          Tag order matters: WhatsApp picks the FIRST og:image it finds.
          → Put the primary JPEG first (best crawler compatibility).
          → Rectangular WebP/PNG follow for Facebook/LinkedIn which
            support multiple og:image tags and pick the best one.
          → Square PNG last for platforms preferring square crops.
        */}

        {/* Core */}
        <meta property="og:type"        content="website" />
        <meta property="og:site_name"   content={SITE_NAME} />
        <meta property="og:url"         content={CANONICAL} />
        <meta property="og:title"       content={OG_TITLE} />
        <meta property="og:description" content={OG_DESC} />
        <meta property="og:locale"      content="en_IN" />

        {/* ── Image 1: Primary JPEG 1200×630  (WhatsApp, iMessage, Telegram) */}
        <meta property="og:image"             content={OG.jpegRect} />
        <meta property="og:image:secure_url"  content={OG.jpegRect} />
        <meta property="og:image:type"        content="image/jpeg" />
        <meta property="og:image:width"       content="1200" />
        <meta property="og:image:height"      content="630" />
        <meta property="og:image:alt"         content={OG.alt} />

        {/* ── Image 2: WebP 1200×630  (Facebook, LinkedIn — modern crawlers) */}
        <meta property="og:image"             content={OG.webpRect1200} />
        <meta property="og:image:secure_url"  content={OG.webpRect1200} />
        <meta property="og:image:type"        content="image/webp" />
        <meta property="og:image:width"       content="1200" />
        <meta property="og:image:height"      content="630" />
        <meta property="og:image:alt"         content={OG.alt} />

        {/* ── Image 3: PNG 1200×630  (fallback for no-WebP crawlers) */}
        <meta property="og:image"             content={OG.pngRect1200} />
        <meta property="og:image:secure_url"  content={OG.pngRect1200} />
        <meta property="og:image:type"        content="image/png" />
        <meta property="og:image:width"       content="1200" />
        <meta property="og:image:height"      content="630" />
        <meta property="og:image:alt"         content={OG.alt} />

        {/* ── Image 4: PNG 600×315  (low-bandwidth / older parsers) */}
        <meta property="og:image"             content={OG.pngRect600} />
        <meta property="og:image:secure_url"  content={OG.pngRect600} />
        <meta property="og:image:type"        content="image/png" />
        <meta property="og:image:width"       content="600" />
        <meta property="og:image:height"      content="315" />
        <meta property="og:image:alt"         content={OG.alt} />

        {/* ── Image 5: PNG 800×800  (square crop — Instagram, Twitter sidebar) */}
        <meta property="og:image"             content={OG.pngSq800} />
        <meta property="og:image:secure_url"  content={OG.pngSq800} />
        <meta property="og:image:type"        content="image/png" />
        <meta property="og:image:width"       content="800" />
        <meta property="og:image:height"      content="800" />
        <meta property="og:image:alt"         content={OG.alt} />

        {/* ── Twitter / X card */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:site"        content="@errandservice" />
        <meta name="twitter:creator"     content="@errandservice" />
        <meta name="twitter:title"       content={OG_TITLE} />
        <meta name="twitter:description" content={OG_DESC} />
        <meta name="twitter:image"       content={OG.pngSq800} />
        <meta name="twitter:image:alt"   content={OG.alt} />

        {/* ── Mobile / PWA ─────────────────────────────────────────────── */}
        <meta name="mobile-web-app-capable"                content="yes" />
        <meta name="apple-mobile-web-app-capable"          content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title"            content="Errand" />
        <meta name="MobileOptimized"                       content="width" />
        <meta name="HandheldFriendly"                      content="true" />

        {/* ── Security / compat ────────────────────────────────────────── */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="referrer"             content="strict-origin-when-cross-origin" />
        <meta name="format-detection"     content="telephone=no, email=no" />

        {/* ── Favicons (explicit <link> tags — belt-and-suspenders alongside
             the metadata icons array above, for browsers that parse <head>
             directly instead of relying on Next.js icon injection) ──────── */}
        <link rel="icon" type="image/png" sizes="16x16"   href={FAVICON.p16} />
        <link rel="icon" type="image/png" sizes="32x32"   href={FAVICON.p32} />
        <link rel="icon" type="image/png" sizes="48x48"   href={FAVICON.p48} />
        <link rel="icon" type="image/png" sizes="64x64"   href={FAVICON.p64} />
        <link rel="icon" type="image/png" sizes="128x128" href={FAVICON.p128} />
        <link rel="icon" type="image/png" sizes="192x192" href={FAVICON.p192} />
        <link rel="icon" type="image/png" sizes="512x512" href={FAVICON.p512} />
        <link rel="icon" type="image/gif"                 href={FAVICON.gif} />
        <link rel="apple-touch-icon"      sizes="180x180" href={FAVICON.p180} />
        <link rel="shortcut icon"         type="image/png" href={FAVICON.ico} />
        <link rel="manifest" href="/manifest.json" />

        {/* ── Performance: DNS prefetch for external services ───────────── */}
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//api.whatsapp.com" />
        <link rel="preconnect"   href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Google Analytics 4 — DNS prefetch (script loads after interactive) */}
        <link rel="dns-prefetch"  href="//www.googletagmanager.com" />
        <link rel="preconnect"    href="https://www.google-analytics.com" />
      </head>
      <body className={`${display.variable} ${body.variable}`}>
        {/* GA4 — loads after hydration so it never blocks First Paint */}
        <GoogleAnalytics />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}