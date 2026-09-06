"use client";

import Script from "next/script";

// ─────────────────────────────────────────────────────────────
// GA4 MEASUREMENT ID
// ─────────────────────────────────────────────────────────────
export const GA_ID = "G-BRKJEVXDTW";

// ─────────────────────────────────────────────────────────────
// HELPER — fire any GA4 event safely from anywhere
//
// Usage:
//   import { gaEvent } from "@/app/components/GoogleAnalytics";
//   gaEvent("whatsapp_click", { location: "header" });
// ─────────────────────────────────────────────────────────────
export function gaEvent(eventName, params = {}) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

// ─────────────────────────────────────────────────────────────
// COMPONENT — drop once into RootLayout
// ─────────────────────────────────────────────────────────────
export default function GoogleAnalytics() {
  return (
    <>
      {/* Load the gtag.js library — deferred, non-blocking */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />

      {/* Initialise GA4 */}
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
            send_page_view: true,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure'
          });
        `}
      </Script>
    </>
  );
}
