import Image from "next/image";
import {
  ArrowRight,
  Bike,
  BriefcaseBusiness,
  Car,
  Camera,
  Circle,
  FileText,
  Gift,
  Handshake,
  Headset,
  IndianRupee,
  Mail,
  MapPin,
  MessagesSquare,
  PackageOpen,
  PhoneCall,
  Pill,
  RotateCcw,
  Send,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Utensils,
  Zap,
} from "lucide-react";
import LottieAnimation from "./components/LottieAnimation";
import AnalyticsEvents from "./components/AnalyticsEvents";

// ─────────────────────────────────────────────
// CONSTANTS  (single source of truth)
// ─────────────────────────────────────────────
const SITE_URL  = "https://errand.ltd";
const WA_LINK   = "https://wa.me/919944006016";
const PHONE_TEL = "tel:+919944006016";
const PHONE_NUM = "99 44 00 6016";
const EMAIL     = "errandsupport@gmail.com";

const getAssetPath = (p) => (p.startsWith("/") ? p : `/${p}`);

// ─────────────────────────────────────────────
// STRUCTURED DATA  (JSON-LD)
// ─────────────────────────────────────────────
const structuredData = [
  // 1. Organization
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Errand Service",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Top-rated same-day errand service in Chennai. Fast delivery for shopping, medicines, documents & more. Trusted by 100+ clients. Starting ₹49. Available 24/7.",
    sameAs: [
      "https://www.instagram.com/errandservice",
      "https://twitter.com/errandservice",
      WA_LINK,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      telephone: "+91-9944006016",
      email: EMAIL,
      hoursAvailable: "24/7",
      availableLanguage: ["en", "ta"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
    },
  },

  // 2. LocalBusiness
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": SITE_URL,
    name: "Errand Service",
    url: SITE_URL,
    image: `${SITE_URL}/og-image-poster.jpg`,
    logo: `${SITE_URL}/logo.png`,
    description:
      "Same-day errand delivery service in Chennai. Fast, reliable & transparent pricing. 100+ happy customers. Shopping, medicines, documents, parcels & more. From ₹49.",
    priceRange: "₹49–₹99",
    telephone: "+91-9944006016",
    email: EMAIL,
    areaServed: {
      "@type": "City",
      name: "Chennai",
      sameAs: "https://en.wikipedia.org/wiki/Chennai",
    },
    serviceType: ["Delivery Service", "Courier Service", "Errand Service"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: "+91-9944006016",
      availableLanguage: ["en", "ta"],
      hoursAvailable: "24/7",
    },
  },

  // 3. Service + Offer Catalog
  {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Same-Day Errand Delivery – Chennai",
    description:
      "Fast, reliable, and transparent local delivery for shopping, medicines, parcels, food, and more across Chennai.",
    provider: { "@type": "LocalBusiness", name: "Errand Service", url: SITE_URL },
    areaServed: { "@type": "City", name: "Chennai" },
    availableLanguage: ["en", "ta"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Delivery Distance Pricing",
      itemListElement: [
        {
          "@type": "Offer",
          name: "0–2 km delivery",
          description: "Perfect for quick pick-ups & drop-offs",
          price: "49",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "2–5 km delivery",
          description: "Ideal for local errands & deliveries",
          price: "69",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "5–8 km delivery",
          description: "For farther errands within the city",
          price: "99",
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      ],
    },
  },

  // 4. FAQ
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Errand Service?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Errand Service is a fast, reliable same-day local delivery service in Chennai. We handle shopping, medicines, documents, food, gifts and more — starting at ₹49.",
        },
      },
      {
        "@type": "Question",
        name: "What is the minimum delivery charge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our minimum delivery charge is ₹49 for distances up to 2 km.",
        },
      },
      {
        "@type": "Question",
        name: "How long does delivery take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer same-day delivery. Most orders are completed within 25–90 minutes depending on distance and task type.",
        },
      },
      {
        "@type": "Question",
        name: "Are your riders verified?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Every rider is background-verified and trained before joining our network.",
        },
      },
      {
        "@type": "Question",
        name: "Is 24/7 support available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — our WhatsApp support team is available around the clock.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need to download an app?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No app needed. Just WhatsApp us at +91 99440 06016 and we'll handle everything.",
        },
      },
    ],
  },

  // 5. BreadcrumbList
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",         item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Services",     item: `${SITE_URL}/#services` },
      { "@type": "ListItem", position: 3, name: "Pricing",      item: `${SITE_URL}/#pricing` },
      { "@type": "ListItem", position: 4, name: "How It Works", item: `${SITE_URL}/#how-it-works` },
      { "@type": "ListItem", position: 5, name: "Contact",      item: `${SITE_URL}/#contact` },
    ],
  },

  // 6. WebSite (enables Google Sitelinks search box)
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Errand Service",
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
  },
];

// ─────────────────────────────────────────────
// NAVIGATION DATA
// ─────────────────────────────────────────────
const navLinks = [
  { label: "Home",           href: "#" },
  { label: "Services",       href: "#services" },
  { label: "Pricing",        href: "#pricing" },
  { label: "How It Works",   href: "#how-it-works" },
  { label: "Founders",       href: "/founders/" },
  { label: "Become a Rider", href: "#rider" },
  { label: "Contact Us",     href: "#contact" },
];

// ─────────────────────────────────────────────
// SECTION DATA
// ─────────────────────────────────────────────
const topPills = [
  { icon: "shield", label: "Trusted Riders" },
  { icon: "bolt",   label: "Fast & Reliable" },
  { icon: "rupee",  label: "Transparent Pricing" },
  { icon: "chat",   label: "24/7 Support" },
];

const serviceCards = [
  { icon: "cart",      title: "Shopping & Essentials",     desc: "Grocery pickup from supermarkets, malls & stores. Fast delivery of fresh groceries, staples & essentials.", tag: "Delivery", eta: "35–55 mins" },
  { icon: "medicine",  title: "Medicines & Healthcare",    desc: "Urgent pharmacy pickup & medicine delivery. All prescription medicines delivered safely & on time.", tag: "Urgent",   eta: "25–45 mins" },
  { icon: "doc",       title: "Documents & Parcels",       desc: "Secure document courier & parcel services. Important docs delivered with proof of delivery.", tag: "Secure",   eta: "30–50 mins" },
  { icon: "car",       title: "Pickup & Drop Services",    desc: "Reliable item pickup & drop across Chennai. Car pickup for servicing, rental returns & more.", tag: "Pickup",   eta: "30–60 mins" },
  { icon: "food",      title: "Food & Beverages",          desc: "Hot food delivery from local restaurants. Meals kept fresh and delivered on time.", tag: "Express",  eta: "25–40 mins" },
  { icon: "gift",      title: "Gifts & Surprises",         desc: "Surprise your loved ones with timely gift delivery. Personal gifts, flowers & more.", tag: "Scheduled", eta: "40–90 mins" },
  { icon: "bag",       title: "Local Shopping Assistance", desc: "Shop from local stores & get items delivered home. Personal shopping errand service.", tag: "Assisted", eta: "40–70 mins" },
  { icon: "returns",   title: "Returns & Exchanges",       desc: "Easy product returns & exchanges pickup. Hassle-free returns management service.", tag: "Support",  eta: "45–80 mins" },
  { icon: "briefcase", title: "Business Errands",          desc: "Office tasks, bank deposits & business errands. Professional & confidential service.", tag: "Business", eta: "30–65 mins" },
  { icon: "elderly",   title: "Elderly Assistance",        desc: "Compassionate service for seniors. Help with shopping, bill payments & daily needs.", tag: "Care",     eta: "35–70 mins" },
];

const pricing = [
  { range: "0 – 2 KMS", fare: "₹49", note: "Perfect for quick pick-ups & drop-offs",   bestFor: "Best for single-stop nearby tasks" },
  { range: "2 – 5 KMS", fare: "₹69", note: "Ideal for local errands & deliveries",      bestFor: "Most common for daily city errands", featured: true },
  { range: "5 – 8 KMS", fare: "₹99", note: "For farther errands within the city",       bestFor: "Best for long cross-area deliveries" },
];

const trustStats = [
  { value: "10k+",   label: "Errands Completed" },
  { value: "2–5 min", label: "First Response Time" },
  { value: "4.9/5",  label: "Customer Rating" },
  { value: "40+",    label: "Chennai Zones Served" },
];

const whyChoose = [
  { icon: "phone",    title: "No App Required",            desc: "Just WhatsApp us and we'll take care of the rest." },
  { icon: "whatsapp", title: "WhatsApp-Based",             desc: "Easy communication and real-time updates." },
  { icon: "bolt",     title: "Quick Response",             desc: "We respond fast and act even faster." },
  { icon: "rupee",    title: "Affordable Pricing",         desc: "Honest pricing with no hidden charges." },
  { icon: "shield",   title: "Trusted & Verified Riders",  desc: "Background-verified riders you can rely on." },
  { icon: "support",  title: "24/7 Customer Support",      desc: "We're here to help you anytime." },
];

const testimonials = [
  {
    quote:
      "I had to send medicines and a document to two different places in under an hour. The team coordinated everything on WhatsApp, shared rider updates quickly, and both deliveries were completed exactly on time. This is now my default service whenever I am in a rush.",
    name: "Priya S.",
    role: "Home Maker",
    locality: "T Nagar",
    date: "May 2026",
    featured: true,
    rating: 5,
  },
  {
    quote: "Got my important documents delivered within 30 minutes. Amazing service!",
    name: "Karthik R.",
    role: "Business Owner",
    locality: "Nungambakkam",
    date: "Apr 2026",
    rating: 5,
  },
  {
    quote: "Very professional and polite riders. Highly recommended!",
    name: "Anitha M.",
    role: "Private Employee",
    locality: "Velachery",
    date: "Mar 2026",
    rating: 5,
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Message Us",
    icon: "whatsapp",
    text: "Tell us what you need, where to pick it up from, and where to deliver it.",
  },
  {
    step: "02",
    title: "We Assign a Rider",
    icon: "rider",
    text: "Our team finds the nearest available rider and confirms the job quickly.",
  },
  {
    step: "03",
    title: "Done, Fast",
    icon: "package",
    text: "Track the task through WhatsApp while we complete the errand and update you.",
  },
];

const footerQuickLinks = navLinks;   // reuse — no duplication
const footerServices = [
  "Shopping & Essentials",
  "Medicines & Healthcare",
  "Documents & Parcels",
  "Pickup & Drop Services",
  "Food & Beverages",
  "Business Errands",
];

const currentYear = new Date().getFullYear();

// ─────────────────────────────────────────────
// ICON REGISTRY
// ─────────────────────────────────────────────
const ICON_COMPONENTS = {
  shield:    ShieldCheck,
  bolt:      Zap,
  rupee:     IndianRupee,
  chat:      MessagesSquare,
  cart:      ShoppingCart,
  medicine:  Pill,
  doc:       FileText,
  car:       Car,
  food:      Utensils,
  gift:      Gift,
  bag:       ShoppingBag,
  returns:   RotateCcw,
  briefcase: BriefcaseBusiness,
  elderly:   Handshake,
  phone:     PhoneCall,
  whatsapp:  Send,
  support:   Headset,
  rider:     Bike,
  package:   PackageOpen,
  instagram: Camera,
  email:     Mail,
  location:  MapPin,
};

const ICON_TONES = {
  shield:    { color: "#2dd4bf", bg: "rgba(45,212,191,0.18)" },
  bolt:      { color: "#f59e0b", bg: "rgba(245,158,11,0.20)" },
  rupee:     { color: "#22c55e", bg: "rgba(34,197,94,0.18)" },
  chat:      { color: "#38bdf8", bg: "rgba(56,189,248,0.18)" },
  cart:      { color: "#f97316", bg: "rgba(249,115,22,0.16)" },
  medicine:  { color: "#ef4444", bg: "rgba(239,68,68,0.14)" },
  doc:       { color: "#0ea5e9", bg: "rgba(14,165,233,0.14)" },
  car:       { color: "#6366f1", bg: "rgba(99,102,241,0.14)" },
  food:      { color: "#f59e0b", bg: "rgba(245,158,11,0.15)" },
  gift:      { color: "#ec4899", bg: "rgba(236,72,153,0.14)" },
  bag:       { color: "#10b981", bg: "rgba(16,185,129,0.14)" },
  returns:   { color: "#14b8a6", bg: "rgba(20,184,166,0.14)" },
  briefcase: { color: "#a855f7", bg: "rgba(168,85,247,0.14)" },
  elderly:   { color: "#eab308", bg: "rgba(234,179,8,0.16)" },
  phone:     { color: "#fb7185", bg: "rgba(251,113,133,0.16)" },
  whatsapp:  { color: "#22c55e", bg: "rgba(34,197,94,0.16)" },
  support:   { color: "#06b6d4", bg: "rgba(6,182,212,0.16)" },
  rider:     { color: "#f97316", bg: "rgba(249,115,22,0.16)" },
  package:   { color: "#3b82f6", bg: "rgba(59,130,246,0.16)" },
};

const getIconTone = (name) =>
  ICON_TONES[name] || { color: "#f3b308", bg: "rgba(243,179,8,0.16)" };

// ─────────────────────────────────────────────
// SHARED COMPONENTS
// ─────────────────────────────────────────────
function LibraryIcon({ name, className = "" }) {
  const Icon = ICON_COMPONENTS[name] || Circle;
  return (
    <Icon
      className={className}
      aria-hidden="true"
      size={18}
      strokeWidth={name === "whatsapp" ? 2.5 : 2.15}
    />
  );
}

/** Reusable WhatsApp CTA button */
function WaButton({ className = "btn-brand", label = "WhatsApp Now" }) {
  return (
    <a className={className} href={WA_LINK} target="_blank" rel="noreferrer">
      <LibraryIcon name="whatsapp" />
      {label}
    </a>
  );
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* JSON-LD structured data */}
      {structuredData.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ── HEADER ──────────────────────────────────────── */}
      <header className="site-header">
        <div className="header-inner">
          <div className="header-brand">
            <div className="site-logo">
              <LottieAnimation
                className="site-logo-lottie"
                src={getAssetPath("/lottie/logo.lottie")}
                ariaLabel="Errand logo"
              />
            </div>
            <div className="brand-text">
              <span className="brand-name">Errand</span>
              <span className="brand-tagline">We run errands, so you don&apos;t have to.</span>
            </div>
          </div>

          <nav className="header-nav" aria-label="Primary navigation">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <WaButton className="header-cta" label="WhatsApp Us" />
        </div>
      </header>

      {/* ── MAIN ────────────────────────────────────────── */}
      <main className="site-v2">
        <div className="glow glow-a" aria-hidden="true" />
        <div className="glow glow-b" aria-hidden="true" />

        {/* HERO */}
        <section className="hero-v2" aria-labelledby="hero-heading">
          <div className="hero-content">
            <p className="eyebrow">Anything. Anytime. We have got it done.</p>
            <h1 id="hero-heading">
              We Run Errands,<br />
              So <span className="hero-accent">You Don&apos;t Have To.</span>
            </h1>
            <p className="subcopy">
              From pickups and deliveries to everyday tasks, we have got it handled.
              Fast, reliable, and hassle-free.
            </p>
            <div className="action-row">
              <WaButton />
              <a className="btn-text-link" href="#services">View Services</a>
            </div>
            <p className="hero-response-note">
              Usually replies in under 5 minutes during business hours.
            </p>
            <div className="hero-trust">
              {topPills.map((pill) => (
                <div key={pill.label} className="trust-pill">
                  <span className="trust-pill-icon" style={getIconTone(pill.icon)}>
                    <LibraryIcon name={pill.icon} />
                  </span>
                  {pill.label}
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <LottieAnimation
              className="hero-img"
              src={getAssetPath("/lottie/hero.lottie")}
              ariaLabel="Errand rider delivering on a scooter"
            />
            <div className="hero-price-card hero-price-top-left">
              <div className="hero-price-left">
                <p className="hero-price-label">Starting From</p>
                <div className="hero-price-amount">₹49</div>
              </div>
              <div className="chat-tail chat-tail-left" />
            </div>
            <div className="hero-text-card hero-text-bottom-right">
              <p className="hero-text-content">
                Quick pick-up &amp; drop-off<br />Delivery at your doorstep
              </p>
              <div className="chat-tail chat-tail-right" />
            </div>
          </div>
        </section>

        {/* TRUST STATS */}
        <section className="trust-proof" aria-label="Trust statistics">
          <div className="trust-proof-grid">
            {trustStats.map((item) => (
              <article key={item.label} className="trust-proof-card">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="services-v2" aria-labelledby="services-heading">
          <div className="services-heading">
            <span className="rule" aria-hidden="true" />
            <h2 id="services-heading">Our Services</h2>
            <span className="rule" aria-hidden="true" />
          </div>
          <div className="service-grid-v2">
            {serviceCards.map((card) => (
              <article key={card.title} className="service-card-v2">
                <span
                  className="service-icon-wrap"
                  aria-hidden="true"
                  style={getIconTone(card.icon)}
                >
                  <LibraryIcon name={card.icon} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <div className="service-meta">
                  <span className="service-tag">{card.tag}</span>
                  <span className="service-eta">{card.eta}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="services-cta">
            <a className="btn-brand" href="#contact">
              Explore All Services &rarr;
            </a>
          </div>
        </section>

        {/* PRICING */}
        <section id="pricing" className="pricing-v2" aria-labelledby="pricing-heading">
          <h2 id="pricing-heading" className="pricing-heading">
            Simple, Fair &amp; Transparent Pricing
          </h2>
          <div className="pricing-layout">
            <div className="price-cards-row">
              {pricing.map((item) => (
                <article
                  key={item.range}
                  className={`price-card-v2${item.featured ? " is-featured" : ""}`}
                >
                  {item.featured && (
                    <span className="price-popular">Most Common</span>
                  )}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="price-pin"
                    aria-hidden="true"
                  >
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <p className="price-range">{item.range}</p>
                  <strong className="price-amount">{item.fare}</strong>
                  <span className="price-note">{item.note}</span>
                  <span className="price-best-for">{item.bestFor}</span>
                </article>
              ))}
            </div>
            <div className="pricing-notes">
              <ul>
                <li><strong>Waiting charge:</strong> ₹10 per 10 mins</li>
                <li><strong>Multiple stops:</strong> Extra charges applicable</li>
                <li><strong>Rain / night charges:</strong> Applicable</li>
              </ul>
              <a className="btn-outline pricing-details-btn" href="#contact">
                View Full Pricing Details &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section
          id="how-it-works"
          className="how-v2"
          aria-labelledby="how-heading"
        >
          <h2 id="how-heading" className="how-heading">
            How It Works
          </h2>
          <div className="how-grid">
            {howItWorks.map((item, idx) => (
              <div key={item.step} className="how-grid-slot">
                <article className="how-card">
                  <div className="how-card-top">
                    <p className="how-step">{item.step}</p>
                    <span
                      className="how-icon"
                      aria-hidden="true"
                      style={getIconTone(item.icon)}
                    >
                      <LibraryIcon name={item.icon} />
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
                {idx < howItWorks.length - 1 && (
                  <div className="how-connector" aria-hidden="true">
                    <ArrowRight size={20} strokeWidth={2.5} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOOSE */}
        <section className="why-v2" aria-labelledby="why-heading">
          <h2 id="why-heading" className="why-heading">
            Why Choose Errand?
          </h2>
          <div className="why-grid">
            {whyChoose.map((item) => (
              <div key={item.title} className="why-card">
                <span
                  className="why-card-icon"
                  aria-hidden="true"
                  style={getIconTone(item.icon)}
                >
                  <LibraryIcon name={item.icon} />
                </span>
                <strong>{item.title}</strong>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* BECOME A RIDER */}
        <section id="rider" className="rider-v2" aria-labelledby="rider-heading">
          <div className="rider-inner">
            <p className="rider-label">Become a Rider</p>
            <h2 id="rider-heading">Earn More. Ride Flexible.</h2>
            <p>
              Join Chennai&apos;s growing errand network and earn on your own terms.
            </p>
            <a className="btn-dark rider-btn" href="#contact">
              Apply Now &rarr;
            </a>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section
          className="testimonials-v2"
          aria-labelledby="testimonials-heading"
        >
          <h2 id="testimonials-heading" className="testimonials-heading">
            What Our Customers Say
          </h2>
          <p className="testimonials-subcopy">
            Verified feedback from customers across Chennai.
          </p>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article
                key={item.name}
                className={`testimonial-card${item.featured ? " testimonial-featured" : ""}`}
                itemScope
                itemType="https://schema.org/Review"
              >
                <div
                  className="testimonial-stars"
                  aria-label={`${item.rating} out of 5 stars`}
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                >
                  <meta itemProp="ratingValue" content={String(item.rating)} />
                  <meta itemProp="bestRating"  content="5" />
                  {"★".repeat(item.rating)}
                </div>
                <p
                  className="testimonial-quote"
                  itemProp="reviewBody"
                >
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="testimonial-person">
                  <span className="testimonial-avatar" aria-hidden="true">
                    {item.name.charAt(0)}
                  </span>
                  <div itemProp="author" itemScope itemType="https://schema.org/Person">
                    <strong itemProp="name">{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
                <div className="testimonial-meta">
                  <span>{item.locality}</span>
                  <time dateTime={item.date}>{item.date}</time>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-v2" aria-labelledby="contact-heading">
          <div className="contact-main">
            <p className="contact-title">Ready When You Are</p>
            <h2 id="contact-heading" className="contact-heading">
              Text or WhatsApp us now
            </h2>
            <a
              className="contact-number"
              href={PHONE_TEL}
              aria-label="Call 99 44 00 6016"
            >
              <LibraryIcon name="phone" />
              {PHONE_NUM}
            </a>
            <p className="contact-tag">
              One message can get it done. Fast reply, zero hassle.
            </p>
            <div className="contact-actions" aria-label="Contact options">
              <WaButton className="contact-action contact-action-primary" label="WhatsApp" />
              <a className="contact-action" href={`mailto:${EMAIL}`}>
                <LibraryIcon name="email" />
                Email
              </a>
            </div>

            {/* Email intake form */}
            <form
              className="email-intake-form"
              action={`mailto:${EMAIL}`}
              method="post"
              encType="text/plain"
            >
              <p className="email-intake-title">Send us your request by email</p>
              <div className="email-intake-grid">
                <label>
                  Name
                  <input type="text"  name="Name"  required />
                </label>
                <label>
                  Phone
                  <input type="tel"   name="Phone" required />
                </label>
              </div>
              <label>
                What do you need help with?
                <textarea
                  name="Request"
                  rows="3"
                  required
                  placeholder="Pickup groceries from ABC store and deliver to my home by 7 PM."
                />
              </label>
              <button
                type="submit"
                className="contact-action contact-action-primary email-intake-submit"
              >
                Open Email App With Details
              </button>
            </form>
          </div>

          <div className="contact-visual">
            <Image
              src={getAssetPath("/illustrations/chat-card.svg")}
              alt="Illustrated WhatsApp chat example showing a delivery request"
              width={640}
              height={430}
              className="chat-image"
            />
            <span className="contact-badge">Trusted Local Support</span>
          </div>
        </section>

        {/* CTA STRIP */}
        <section className="cta-strip-v2" aria-label="WhatsApp call to action">
          <div className="cta-strip-icon" aria-hidden="true">
            <LibraryIcon name="whatsapp" />
          </div>
          <div className="cta-strip-text">
            <p>Need Something Done?</p>
            <h2>Message Us On WhatsApp</h2>
          </div>
          <div className="cta-strip-phone">
            {PHONE_NUM.replace(/ /g, "\u00A0")}
            <span>Get a reply within minutes!</span>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="site-footer" aria-label="Site footer">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <div className="site-logo footer-logo-circle">
                <LottieAnimation
                  className="site-logo-lottie"
                  src={getAssetPath("/lottie/logo.lottie")}
                  ariaLabel="Errand logo"
                />
              </div>
              <span className="brand-name footer-brand-name">Errand</span>
            </div>
            <p>We run errands, so you don&apos;t have to.</p>
            <div className="footer-socials">
              <a
                href="https://www.instagram.com/errandservice"
                target="_blank"
                rel="noreferrer"
                aria-label="Follow Errand on Instagram"
              >
                <LibraryIcon name="instagram" />
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat with Errand on WhatsApp"
              >
                <LibraryIcon name="whatsapp" />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Email Errand">
                <LibraryIcon name="email" />
              </a>
            </div>
          </div>

          <nav className="footer-column" aria-label="Quick links">
            <h3>Quick Links</h3>
            {footerQuickLinks.map((l) => (
              <a key={l.label} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="footer-column">
            <h3>Popular Services</h3>
            {footerServices.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>

          <address className="footer-column" style={{ fontStyle: "normal" }}>
            <h3>Contact Us</h3>
            <a href={PHONE_TEL}>
              <LibraryIcon name="phone" className="inline-icon" /> {PHONE_NUM}
            </a>
            <a href={`mailto:${EMAIL}`}>
              <LibraryIcon name="email" className="inline-icon" /> {EMAIL}
            </a>
            <p>
              <LibraryIcon name="location" className="inline-icon" /> Chennai, Tamil Nadu
            </p>
            <WaButton className="footer-wa-btn" label="WhatsApp Us" />
          </address>

          <div className="footer-bottom">
            <span>&copy; {currentYear} Errand. All Rights Reserved.</span>
            <div className="footer-policies">
              <a href="#contact">Terms &amp; Conditions</a>
              <a href="#contact">Privacy Policy</a>
            </div>
          </div>
        </footer>

        {/* STICKY WHATSAPP FAB */}
        <a
          className="sticky-whatsapp-btn"
          href={WA_LINK}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <LibraryIcon name="whatsapp" />
          <span>Chat on WhatsApp</span>
        </a>

        {/* Analytics event listeners — no DOM output */}
        <AnalyticsEvents />
      </main>
    </>
  );
}