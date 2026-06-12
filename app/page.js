import Image from "next/image";
import LottieAnimation from "./components/LottieAnimation";

const BASE_PATH = "/errand";

const getAssetPath = (path) => {
  if (typeof window === "undefined") {
    // Server-side: always use basePath
    return `${BASE_PATH}${path}`;
  }
  // Client-side: check if already has basePath
  return path.startsWith(BASE_PATH) ? path : `${BASE_PATH}${path}`;
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Errand Service",
    "url": "https://yourdomain.com/errand",
    "logo": "https://yourdomain.com/errand/logo.png",
    "description": "Fast, reliable and transparent local errand and delivery service. Same-day pickup and drop-off with 24/7 support.",
    "sameAs": [
      "https://www.facebook.com/errandservice",
      "https://www.instagram.com/errandservice",
      "https://twitter.com/errandservice",
      "https://www.whatsapp.com/send?phone=919944006016"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+91-9944006016",
      "email": "support@yourdomain.com",
      "hoursAvailable": "24/7"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "Your City",
      "addressRegion": "Your State"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Errand Service",
    "@id": "https://yourdomain.com/errand",
    "url": "https://yourdomain.com/errand",
    "image": "https://yourdomain.com/errand/hero-image.png",
    "description": "Fast, reliable, and transparent local errand delivery service with same-day pickup and drop-off.",
    "priceRange": "₹49-₹99",
    "areaServed": {
      "@type": "City",
      "name": "Your City",
      "sameAs": "https://en.wikipedia.org/wiki/Your_City"
    },
    "serviceArea": {
      "@type": "City",
      "name": "Your City"
    },
    "serviceType": ["Delivery", "Courier Service", "Errand Service"],
    "telephone": "+91-9944006016",
    "email": "support@yourdomain.com",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "telephone": "+91-9944006016",
      "availableLanguage": "en",
      "hoursAvailable": "24/7"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Errand Delivery Service",
    "description": "Fast, reliable, and transparent local delivery service for shopping, medicines, parcels, food, and more.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Errand Service"
    },
    "areaServed": "IN",
    "availableLanguage": "en",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Delivery Distance Pricing",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "0-2 KMS Delivery",
          "description": "Perfect for quick pick-ups & drop-offs",
          "price": "49",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "2-5 KMS Delivery",
          "description": "Ideal for local errands & deliveries",
          "price": "69",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        {
          "@type": "Offer",
          "name": "5-8 KMS Delivery",
          "description": "For farther errands within the city",
          "price": "99",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Errand Service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Errand Service is a fast, reliable, and transparent local delivery service offering same-day pickup and drop-off for shopping, medicines, documents, food, gifts, and more."
        }
      },
      {
        "@type": "Question",
        "name": "What is the minimum delivery charge?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our minimum delivery charge is ₹49 for distances up to 2 KMs."
        }
      },
      {
        "@type": "Question",
        "name": "How long does delivery take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer same-day delivery with quick turnaround times. Exact timing depends on your location and order complexity."
        }
      },
      {
        "@type": "Question",
        "name": "Are your riders trusted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our riders are thoroughly verified and trained. We prioritize safety and reliability."
        }
      },
      {
        "@type": "Question",
        "name": "Is 24/7 support available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our customer support team is available 24/7 to assist with any queries or issues."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://yourdomain.com/errand/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://yourdomain.com/errand/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Pricing",
        "item": "https://yourdomain.com/errand/#pricing"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "How It Works",
        "item": "https://yourdomain.com/errand/#how-it-works"
      }
    ]
  }
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Become a Rider", href: "#rider" },
  { label: "Contact Us", href: "#contact" }
];

const topPills = [
  { icon: "shield", label: "Trusted Riders" },
  { icon: "bolt",   label: "Fast & Reliable" },
  { icon: "rupee",  label: "Transparent Pricing" },
  { icon: "chat",   label: "24/7 Support" }
];

const serviceCards = [
  { icon: "cart",      title: "Shopping & Essentials",     desc: "Grocery, supermarket & essential item pickup" },
  { icon: "medicine",  title: "Medicines & Healthcare",    desc: "Pharmacy pickup & medicine delivery" },
  { icon: "doc",       title: "Documents & Parcels",       desc: "Document pickup, drop & courier services" },
  { icon: "car",       title: "Pickup & Drop Services",    desc: "Item pickup & drop across Chennai" },
  { icon: "food",      title: "Food & Beverages",          desc: "Restaurant pickup & food delivery" },
  { icon: "gift",      title: "Gifts & Surprises",         desc: "Surprise your loved ones with timely delivery" },
  { icon: "bag",       title: "Local Shopping Assistance", desc: "Buy and deliver items from local stores" },
  { icon: "returns",   title: "Returns & Exchanges",       desc: "Product returns & exchanges made easy" },
  { icon: "briefcase", title: "Business Errands",          desc: "Office tasks & business support" },
  { icon: "elderly",   title: "Elderly Assistance",        desc: "Helping seniors with their daily needs" }
];

const pricing = [
  { range: "0 – 2 KMS", fare: "₹49", note: "Perfect for quick pick-ups & drop-offs" },
  { range: "2 – 5 KMS", fare: "₹69", note: "Ideal for local errands & deliveries" },
  { range: "5 – 8 KMS", fare: "₹99", note: "For farther errands within the city" }
];

const whyChoose = [
  { icon: "phone",    title: "No App Required",           desc: "Just WhatsApp us and we'll take care of the rest." },
  { icon: "whatsapp", title: "WhatsApp Based",            desc: "Easy communication and real-time updates." },
  { icon: "bolt",     title: "Quick Response",            desc: "We respond fast and act even faster." },
  { icon: "rupee",    title: "Affordable Pricing",        desc: "Honest pricing with no hidden charges." },
  { icon: "shield",   title: "Trusted & Verified Riders", desc: "Background verified riders you can rely on." },
  { icon: "support",  title: "Customer Support",          desc: "We\'re here to help you anytime." }
];

const testimonials = [
  { quote: "Super convenient and very reliable. Saved me so much time!", name: "Priya S.", role: "Home Maker" },
  { quote: "Got my important documents delivered within 30 minutes. Amazing service!", name: "Karthik R.", role: "Business Owner" },
  { quote: "Very professional and polite riders. Highly recommended!", name: "Anitha M.", role: "Private Employee" }
];

const footerQuickLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Become a Rider", href: "#rider" },
  { label: "Contact Us", href: "#contact" }
];

const footerServices = ["Shopping & Essentials", "Medicines & Healthcare", "Documents & Parcels", "Pickup & Drop Services", "Food & Beverages", "Business Errands"];

const currentYear = new Date().getFullYear();

const howItWorks = [
  {
    step: "01",
    title: "Message Us",
    icon: "whatsapp",
    text: "Tell us what you need, where to pick it up from, and where to deliver it."
  },
  {
    step: "02",
    title: "We Assign a Rider",
    icon: "rider",
    text: "Our team finds the nearest available rider and confirms the job quickly."
  },
  {
    step: "03",
    title: "Done, Fast",
    icon: "package",
    text: "Track the task through WhatsApp while we complete the errand and update you."
  }
];

const ICON_CLASSES = {
  shield: "fa-shield-heart",
  bolt: "fa-bolt",
  rupee: "fa-indian-rupee-sign",
  chat: "fa-comments",
  cart: "fa-cart-shopping",
  medicine: "fa-prescription-bottle-medical",
  doc: "fa-file-lines",
  car: "fa-car-side",
  food: "fa-burger",
  gift: "fa-gift",
  bag: "fa-bag-shopping",
  returns: "fa-rotate-left",
  briefcase: "fa-briefcase",
  elderly: "fa-hands-holding-circle",
  phone: "fa-phone-volume",
  whatsapp: "fa-whatsapp",
  support: "fa-headset",
  rider: "fa-motorcycle",
  package: "fa-box-open",
  instagram: "fa-instagram",
  email: "fa-envelope",
  location: "fa-location-dot"
};

const ICON_TONES = {
  shield: { color: "#2dd4bf", bg: "rgba(45, 212, 191, 0.18)" },
  bolt: { color: "#f59e0b", bg: "rgba(245, 158, 11, 0.2)" },
  rupee: { color: "#22c55e", bg: "rgba(34, 197, 94, 0.18)" },
  chat: { color: "#38bdf8", bg: "rgba(56, 189, 248, 0.18)" },
  cart: { color: "#f97316", bg: "rgba(249, 115, 22, 0.16)" },
  medicine: { color: "#ef4444", bg: "rgba(239, 68, 68, 0.14)" },
  doc: { color: "#0ea5e9", bg: "rgba(14, 165, 233, 0.14)" },
  car: { color: "#6366f1", bg: "rgba(99, 102, 241, 0.14)" },
  food: { color: "#f59e0b", bg: "rgba(245, 158, 11, 0.15)" },
  gift: { color: "#ec4899", bg: "rgba(236, 72, 153, 0.14)" },
  bag: { color: "#10b981", bg: "rgba(16, 185, 129, 0.14)" },
  returns: { color: "#14b8a6", bg: "rgba(20, 184, 166, 0.14)" },
  briefcase: { color: "#a855f7", bg: "rgba(168, 85, 247, 0.14)" },
  elderly: { color: "#eab308", bg: "rgba(234, 179, 8, 0.16)" },
  phone: { color: "#fb7185", bg: "rgba(251, 113, 133, 0.16)" },
  whatsapp: { color: "#22c55e", bg: "rgba(34, 197, 94, 0.16)" },
  support: { color: "#06b6d4", bg: "rgba(6, 182, 212, 0.16)" },
  rider: { color: "#f97316", bg: "rgba(249, 115, 22, 0.16)" },
  package: { color: "#3b82f6", bg: "rgba(59, 130, 246, 0.16)" }
};

const getIconTone = (name) => ICON_TONES[name] || { color: "#f3b308", bg: "rgba(243, 179, 8, 0.16)" };

function LibraryIcon({ name, className = "" }) {
  const family = name === "whatsapp" || name === "instagram" ? "fa-brands" : "fa-solid";
  const icon = ICON_CLASSES[name] || "fa-circle";
  return <i className={`${family} ${icon} ${className}`.trim()} aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <>
    {structuredData.map((schema, index) => (
      <script
        key={index}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    ))}
    <header className="site-header">
      <div className="header-inner">
        <div className="header-brand">
          <div className="site-logo">
            <LottieAnimation className="site-logo-lottie" src="/lottie/logo.lottie" ariaLabel="Errand logo" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Errand</span>
            <span className="brand-tagline">We run errands, so you don&apos;t have to.</span>
          </div>
        </div>
        <nav className="header-nav" aria-label="Primary navigation">
          {navLinks.map(l => <a key={l.label} href={l.href}>{l.label}</a>)}
        </nav>
        <a className="header-cta" href="https://wa.me/919944006016" target="_blank" rel="noreferrer">
          <LibraryIcon name="whatsapp" />
          WhatsApp Us
        </a>
      </div>
    </header>

    <main className="site-v2">
      <div className="glow glow-a" aria-hidden="true" />
      <div className="glow glow-b" aria-hidden="true" />

      <section className="hero-v2" aria-label="Hero">
        <div className="hero-content">
          <p className="eyebrow">Anything. Anytime. We have got it done.</p>
          <h1>
            We Run Errands,<br />
            So <span className="hero-accent">You Don&apos;t Have To.</span>
          </h1>
          <p className="subcopy">
            From pickups and deliveries to everyday tasks, we have got it handled.
            Fast, reliable, and hassle-free.
          </p>
          <div className="action-row">
            <a className="btn-brand" href="https://wa.me/919944006016" target="_blank" rel="noreferrer">
                <LibraryIcon name="whatsapp" />
              WhatsApp Now
            </a>
            <a className="btn-outline-light" href="#services">View Services &rarr;</a>
          </div>
          <div className="hero-trust">
            {topPills.map(pill => (
              <div key={pill.label} className="trust-pill">
                <span className="trust-pill-icon" style={getIconTone(pill.icon)}><LibraryIcon name={pill.icon} /></span>
                {pill.label}
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <LottieAnimation
            className="hero-img"
            src="/lottie/hero.lottie"
            ariaLabel="Errand rider delivering on scooter"
          />
          <div className="hero-price-card hero-price-top-left">
            <div className="hero-price-left">
              <p className="hero-price-label">Starting From</p>
              <div className="hero-price-amount">₹49</div>
            </div>
            <div className="chat-tail chat-tail-left"></div>
          </div>
          <div className="hero-text-card hero-text-bottom-right">
            <p className="hero-text-content">Quick pick-up & drop-off<br />Delivery at your doorstep</p>
            <div className="chat-tail chat-tail-right"></div>
          </div>
        </div>
      </section>

      <section id="services" className="services-v2" aria-label="Services">
        <div className="services-heading">
          <span className="rule" aria-hidden="true" /><h2>Our Services</h2><span className="rule" aria-hidden="true" />
        </div>
        <div className="service-grid-v2">
          {serviceCards.map(card => (
            <article key={card.title} className="service-card-v2">
              <span className="service-icon-wrap" aria-hidden="true" style={getIconTone(card.icon)}><LibraryIcon name={card.icon} /></span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </article>
          ))}
        </div>
        <div className="services-cta">
          <a className="btn-brand" href="#contact">Explore All Services &rarr;</a>
        </div>
      </section>

      <section id="pricing" className="pricing-v2" aria-label="Pricing">
        <h2 className="pricing-heading">Simple, Fair &amp; Transparent Pricing</h2>
        <div className="pricing-layout">
          <div className="price-cards-row">
            {pricing.map(item => (
              <article key={item.range} className="price-card-v2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="price-pin" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <p className="price-range">{item.range}</p>
                <strong className="price-amount">{item.fare}</strong>
                <span className="price-note">{item.note}</span>
              </article>
            ))}
          </div>
          <div className="pricing-notes">
            <ul>
              <li><strong>Waiting Charge:</strong> &curren;10 per 10 mins</li>
              <li><strong>Multiple Stops:</strong> Extra charges applicable</li>
              <li><strong>Rain/Night Charges:</strong> Applicable</li>
            </ul>
            <a className="btn-outline pricing-details-btn" href="#contact">View Full Pricing Details &rarr;</a>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="how-v2" aria-label="How it works">
        <h2 className="how-heading">How It Works</h2>
        <div className="how-grid">
          {howItWorks.map((item, idx) => (
            <div key={item.step} className="how-grid-slot">
              <article className="how-card">
                <div className="how-card-top">
                  <p className="how-step">{item.step}</p>
                  <span className="how-icon" aria-hidden="true" style={getIconTone(item.icon)}>
                    <LibraryIcon name={item.icon} />
                  </span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
              {idx < howItWorks.length - 1 && (
                <div className="how-connector" aria-hidden="true">
                  <span /><span /><span />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="why-v2" aria-label="Why choose Errand">
        <h2 className="why-heading">Why Choose Errand?</h2>
        <div className="why-grid">
          {whyChoose.map(item => (
            <div key={item.title} className="why-card">
              <span className="why-card-icon" aria-hidden="true" style={getIconTone(item.icon)}><LibraryIcon name={item.icon} /></span>
              <strong>{item.title}</strong>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="rider" className="rider-v2" aria-label="Become a rider">
        <div className="rider-inner">
          <p className="rider-label">Become a Rider</p>
          <h2>Earn More. Ride Flexible.</h2>
          <p>Join Chennai&apos;s growing errand network and earn on your own terms.</p>
          <a className="btn-dark rider-btn" href="#contact">Apply Now &rarr;</a>
        </div>
      </section>

      <section className="testimonials-v2" aria-label="What our customers say">
        <h2 className="testimonials-heading">What Our Customers Say</h2>
        <div className="testimonial-grid">
          {testimonials.map(item => (
            <article key={item.name} className="testimonial-card">
              <div className="testimonial-stars" aria-label="5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p className="testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-v2" aria-label="Contact">
        <div className="contact-main">
          <p className="contact-title">Ready When You Are</p>
          <h2 className="contact-heading">Text or WhatsApp us now</h2>
          <a className="contact-number" href="tel:+919944006016" aria-label="Call 99 44 00 6016">
            <LibraryIcon name="phone" />
            99 44 00 6016
          </a>
          <p className="contact-tag">One message can get it done. Fast reply, zero hassle.</p>
          <div className="contact-actions" aria-label="Contact actions">
            <a className="contact-action contact-action-primary" href="https://wa.me/919944006016" target="_blank" rel="noreferrer">
              <LibraryIcon name="whatsapp" />
              WhatsApp
            </a>
            <a className="contact-action" href="mailto:errandsupport@gmail.com">
              <LibraryIcon name="email" />
              Email
            </a>
          </div>
          <form className="email-intake-form" action="mailto:errandsupport@gmail.com" method="post" encType="text/plain">
            <p className="email-intake-title">Send us your request by email</p>
            <div className="email-intake-grid">
              <label>Name<input type="text" name="Name" required /></label>
              <label>Phone<input type="tel" name="Phone" required /></label>
            </div>
            <label>What do you need help with?<textarea name="Request" rows="3" required placeholder="Pickup groceries from ABC store and deliver to my home by 7 PM." /></label>
            <button type="submit" className="contact-action contact-action-primary email-intake-submit">Open Email App With Details</button>
          </form>
        </div>
        <div className="contact-visual">
          <Image src={getAssetPath("/illustrations/chat-card.svg")} alt="Illustrated WhatsApp chat example" width={640} height={430} className="chat-image" />
          <span className="contact-badge">Trusted Local Support</span>
        </div>
      </section>

      <section className="cta-strip-v2" aria-label="WhatsApp call to action">
        <div className="cta-strip-icon" aria-hidden="true">
          <LibraryIcon name="whatsapp" />
        </div>
        <div className="cta-strip-text">
          <p>Need Something Done?</p>
          <h2>Message Us On WhatsApp</h2>
        </div>
        <div className="cta-strip-phone">
          99 44 00 60 16
          <span>Get a reply within minutes!</span>
        </div>
      </section>

      <footer className="site-footer" aria-label="Footer">
        <div className="footer-brand">
          <div className="footer-logo-row">
            <div className="site-logo footer-logo-circle">
              <LottieAnimation className="site-logo-lottie" src="/lottie/logo.lottie" ariaLabel="Errand logo" />
            </div>
            <span className="brand-name footer-brand-name">Errand</span>
          </div>
          <p>We run errands, so you don&apos;t have to.</p>
          <div className="footer-socials">
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <LibraryIcon name="instagram" />
            </a>
            <a href="https://wa.me/919944006016" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <LibraryIcon name="whatsapp" />
            </a>
            <a href="mailto:errandsupport@gmail.com" aria-label="Email">
              <LibraryIcon name="email" />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          {footerQuickLinks.map(l => <a key={l.label} href={l.href}>{l.label}</a>)}
        </div>
        <div className="footer-column">
          <h3>Popular Services</h3>
          {footerServices.map(s => <span key={s}>{s}</span>)}
        </div>
        <div className="footer-column">
          <h3>Contact Us</h3>
          <a href="tel:+919944006016"><LibraryIcon name="phone" className="inline-icon" /> 99 44 00 6016</a>
          <a href="mailto:errandsupport@gmail.com"><LibraryIcon name="email" className="inline-icon" /> errandsupport@gmail.com</a>
          <p><LibraryIcon name="location" className="inline-icon" /> Chennai, Tamil Nadu</p>
          <a className="footer-wa-btn" href="https://wa.me/919944006016" target="_blank" rel="noreferrer">WhatsApp Us</a>
        </div>
        <div className="footer-bottom">
          <span>&copy; {currentYear} Errand. All Rights Reserved.</span>
          <div className="footer-policies">
            <a href="#contact">Terms &amp; Conditions</a>
            <a href="#contact">Privacy Policy</a>
          </div>
        </div>
      </footer>

      <a className="sticky-whatsapp-btn" href="https://wa.me/919944006016" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <LibraryIcon name="whatsapp" />
        <span>Chat on WhatsApp</span>
      </a>
    </main>
    </>
  );
}
