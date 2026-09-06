"use client";

import { useEffect } from "react";
import { gaEvent } from "./GoogleAnalytics";

// ─────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────
const WA_HREF    = "wa.me";
const PHONE_HREF = "tel:";
const MAIL_HREF  = "mailto:";

// Map anchor id → human-readable section name for scroll events
const SECTION_IDS = {
  "hero":         "Hero",
  "services":     "Services",
  "pricing":      "Pricing",
  "how-it-works": "How It Works",
  "rider":        "Become a Rider",
  "contact":      "Contact",
};

// ─────────────────────────────────────────────────────────────
// HELPER — derive the "location" label from the clicked element
// by walking up to find the nearest landmark section / component.
// ─────────────────────────────────────────────────────────────
function resolveClickLocation(el) {
  const node = el.closest(
    "header, footer, [class*='cta-strip'], [class*='sticky-whatsapp'], " +
    "#hero, #services, #pricing, #how-it-works, #rider, #contact, " +
    "section[id], section[aria-label]"
  );
  if (!node) return "unknown";

  const tag = node.tagName.toLowerCase();
  if (tag === "header") return "header";
  if (tag === "footer") return "footer";

  const cls = node.className || "";
  if (cls.includes("cta-strip"))         return "cta_strip";
  if (cls.includes("sticky-whatsapp"))   return "sticky_fab";

  const id = node.id || "";
  return SECTION_IDS[id] || node.getAttribute("aria-label") || id || "unknown";
}

// ─────────────────────────────────────────────────────────────
// COMPONENT — renders nothing; wires listeners on mount
// ─────────────────────────────────────────────────────────────
export default function AnalyticsEvents() {
  // ── 1. CLICK TRACKING (event delegation — one listener for the page) ──
  useEffect(() => {
    function handleClick(e) {
      const anchor = e.target.closest("a[href], button[type='submit']");
      if (!anchor) return;

      const href = anchor.getAttribute("href") || "";

      if (href.includes(WA_HREF)) {
        gaEvent("whatsapp_click", {
          event_category: "engagement",
          event_label:    resolveClickLocation(anchor),
        });
        return;
      }

      if (href.startsWith(PHONE_HREF)) {
        gaEvent("phone_click", {
          event_category: "engagement",
          event_label:    resolveClickLocation(anchor),
        });
        return;
      }

      if (href.startsWith(MAIL_HREF)) {
        gaEvent("email_click", {
          event_category: "engagement",
          event_label:    resolveClickLocation(anchor),
        });
        return;
      }

      // Email intake form submit button
      if (anchor.tagName === "BUTTON" && anchor.type === "submit") {
        gaEvent("email_form_submit", {
          event_category: "lead",
          event_label:    "contact_section",
        });
      }
    }

    document.addEventListener("click", handleClick, { passive: true });
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // ── 2. SCROLL DEPTH TRACKING (IntersectionObserver) ──────────────────
  useEffect(() => {
    const fired = new Set(); // fire once per section per page load

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const id = entry.target.id;
          const label = SECTION_IDS[id];
          if (!label || fired.has(id)) return;

          fired.add(id);
          gaEvent("section_view", {
            event_category: "scroll_depth",
            event_label:    label,
            section_id:     id,
          });
        });
      },
      {
        root:       null,
        rootMargin: "0px",
        threshold:  0.3, // section is 30 % visible — counts as "seen"
      }
    );

    // Observe all tracked sections
    Object.keys(SECTION_IDS).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null; // purely behavioural
}
