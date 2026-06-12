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

function ServiceIcon({ type }) {
  const p = {
    cart:      <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>,
    medicine:  <><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></>,
    doc:       <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></>,
    car:       <><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
    food:      <><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8Z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></>,
    gift:      <><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7Z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z"/></>,
    bag:       <><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></>,
    returns:   <><polyline points="1 4 1 10 7 10"/><polyline points="23 20 23 14 17 14"/><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10M23 14l-4.64 4.36A9 9 0 0 1 3.51 15"/></>,
    briefcase: <><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></>,
    elderly:   <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {p[type] || p.bag}
    </svg>
  );
}

function WhyIcon({ type }) {
  if (type === "phone")    return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.38 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>;
  if (type === "whatsapp") return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.7 5.9L0 24l6.3-1.7C8 23.4 10 24 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5ZM12 21.9c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.7 2.1 13.9 2.1 12 2.1 6.5 6.5 2.1 12 2.1c2.7 0 5.2 1 7.1 2.9 1.9 1.9 2.8 4.4 2.8 7 0 5.5-4.4 9.9-9.9 9.9Z"/></svg>;
  if (type === "bolt")     return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
  if (type === "rupee")    return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="6" y1="3" x2="18" y2="3"/><line x1="6" y1="8" x2="18" y2="8"/><line x1="15.25" y1="3" x2="9" y2="21"/></svg>;
  if (type === "shield")   return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5ZM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5Z"/></svg>;
}

function TrustIcon({ type }) {
  if (type === "shield") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>;
  if (type === "bolt")   return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
  if (type === "rupee")  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="6" y1="3" x2="18" y2="3"/><line x1="6" y1="8" x2="18" y2="8"/><line x1="15.25" y1="3" x2="9" y2="21"/></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/></svg>;
}

function HowItWorksIcon({ type }) {
  if (type === "whatsapp") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.7 5.9L0 24l6.3-1.7C8 23.4 10 24 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5ZM12 21.9c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4C2.7 15.7 2.1 13.9 2.1 12 2.1 6.5 6.5 2.1 12 2.1c2.7 0 5.2 1 7.1 2.9 1.9 1.9 2.8 4.4 2.8 7 0 5.5-4.4 9.9-9.9 9.9Zm5.6-7.5c-.3-.2-1.7-.9-2-.9-.3-.1-.6-.2-.8.1-.2.3-.8 1-.9 1.2-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.2-.2.3-.3.5-.5.1-.2.2-.3.3-.5.1-.2 0-.4-.1-.6-.1-.2-.7-1.6-1-2.3-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.5.1-.7.3-.2.2-.8.8-.8 2s.9 2.4 1 2.6c.1.2 1.7 2.7 4.2 3.8 2.5 1.1 2.5.7 3.2.6.7-.1 2.4-.7 2.7-1.3.3-.6.3-1.1.2-1.2-.1-.1-1-.5-1.3-.7Z" fill="currentColor"/>
      </svg>
    );
  }

  if (type === "rider") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="4.5" r="2" fill="currentColor"/>
        <path d="M18.5 8.5c-.4-.8-1.2-1.3-2.1-1.3h-1.8l-1-2H10c-.8 0-1.5.4-2 1L6.5 8.8C5.6 9.3 5 10.3 5 11.4V15a1 1 0 0 0 1 1h.2a2.5 2.5 0 0 0 4.6 0h2.4a2.5 2.5 0 0 0 4.6 0H18a1 1 0 0 0 1-1v-3.5c0-.7-.2-1.4-.5-2Zm-11 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm7 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1.5-4H7v-1.1c0-.5.3-1 .7-1.3l1.1-2h5.4l.8 1.6h1.5c.3 0 .5.1.7.3l.8 1.5H16Z" fill="currentColor"/>
      </svg>
    );
  }

  // package
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 8.5 12 4 3 8.5V16l9 4.5 9-4.5V8.5ZM12 6.2l5.6 2.8-2.1 1-5.6-2.8 2.1-1ZM12 11 6.4 8.2l2.1-1.1L14.1 10 12 11Zm-8 1 7 3.5v5.2L4 17.2V12Zm9 8.7V15.5l7-3.5v5.2l-7 3.5Z" fill="currentColor"/>
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
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
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{width:"1rem",height:"1rem"}}>
            <path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.7 5.9L0 24l6.3-1.7C8 23.4 10 24 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5Z"/>
          </svg>
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
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{width:"1.1rem",height:"1.1rem"}}>
                <path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.7 5.9L0 24l6.3-1.7C8 23.4 10 24 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5Z"/>
              </svg>
              WhatsApp Now
            </a>
            <a className="btn-outline-light" href="#services">View Services &rarr;</a>
          </div>
          <div className="hero-trust">
            {topPills.map(pill => (
              <div key={pill.label} className="trust-pill">
                <span className="trust-pill-icon"><TrustIcon type={pill.icon} /></span>
                {pill.label}
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src={getAssetPath("/illustrations/rider-scene.svg")}
            alt="Errand rider delivering on scooter"
            width={1200}
            height={760}
            className="hero-img"
            priority
          />
        </div>
      </section>

      <section id="services" className="services-v2" aria-label="Services">
        <div className="services-heading">
          <span className="rule" aria-hidden="true" /><h2>Our Services</h2><span className="rule" aria-hidden="true" />
        </div>
        <div className="service-grid-v2">
          {serviceCards.map(card => (
            <article key={card.title} className="service-card-v2">
              <span className="service-icon-wrap" aria-hidden="true"><ServiceIcon type={card.icon} /></span>
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
                  <span className="how-icon" aria-hidden="true">
                    <HowItWorksIcon type={item.icon} />
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
              <span className="why-card-icon" aria-hidden="true"><WhyIcon type={item.icon} /></span>
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
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 10.8C8.1 13.8 10.2 15.9 13.2 17.4L15.5 15.1C15.8 14.8 16.2 14.7 16.6 14.8C17.9 15.2 19.3 15.4 20.8 15.4C21.4 15.4 22 15.9 22 16.6V20.8C22 21.4 21.4 22 20.8 22C10.4 22 2 13.6 2 3.2C2 2.6 2.6 2 3.2 2H7.4C8.1 2 8.6 2.6 8.6 3.2C8.6 4.7 8.8 6.1 9.2 7.4C9.3 7.8 9.2 8.2 8.9 8.5L6.6 10.8Z" fill="currentColor"/></svg>
            99 44 00 6016
          </a>
          <p className="contact-tag">One message can get it done. Fast reply, zero hassle.</p>
          <div className="contact-actions" aria-label="Contact actions">
            <a className="contact-action contact-action-primary" href="https://wa.me/919944006016" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5C18.2 1.2 15.2 0 12 0C5.4 0 0 5.4 0 12C0 14.1 0.6 16.1 1.7 17.9L0 24L6.3 22.3C8 23.3 10 24 12 24H12C18.6 24 24 18.6 24 12C24 8.8 22.8 5.8 20.5 3.5Z" fill="currentColor"/></svg>
              WhatsApp
            </a>
            <a className="contact-action" href="mailto:errandsupport@gmail.com">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 5C2 3.9 2.9 3 4 3H20C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5ZM4 6.3V19H20V6.3L12 12L4 6.3ZM5.2 5L12 9.9L18.8 5H5.2Z" fill="currentColor"/></svg>
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
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.7 5.9L0 24l6.3-1.7C8 23.4 10 24 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5Z"/>
          </svg>
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
              <svg viewBox="0 0 24 24" fill="currentColor"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z" fill="none" stroke="#101010" strokeWidth="2"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="#101010" strokeWidth="2" strokeLinecap="round"/></svg>
            </a>
            <a href="https://wa.me/919944006016" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.1 1.7 5.9L0 24l6.3-1.7C8 23.4 10 24 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5Z"/></svg>
            </a>
            <a href="mailto:errandsupport@gmail.com" aria-label="Email">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 5C2 3.9 2.9 3 4 3H20C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5ZM4 6.3V19H20V6.3L12 12L4 6.3ZM5.2 5L12 9.9L18.8 5H5.2Z"/></svg>
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
          <a href="tel:+919944006016">&#128222; 99 44 00 6016</a>
          <a href="mailto:errandsupport@gmail.com">&#9993; errandsupport@gmail.com</a>
          <p>&#128205; Chennai, Tamil Nadu</p>
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
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 3.5C18.2 1.2 15.2 0 12 0C5.4 0 0 5.4 0 12C0 14.1 0.6 16.1 1.7 17.9L0 24L6.3 22.3C8 23.3 10 24 12 24H12C18.6 24 24 18.6 24 12C24 8.8 22.8 5.8 20.5 3.5ZM12 21.9C10.2 21.9 8.5 21.4 7 20.5L6.6 20.3L2.9 21.3L3.9 17.7L3.7 17.3C2.7 15.7 2.1 13.9 2.1 12C2.1 6.5 6.5 2.1 12 2.1C14.7 2.1 17.2 3.1 19.1 5C21 6.9 21.9 9.4 21.9 12C21.9 17.5 17.5 21.9 12 21.9Z" fill="currentColor"/></svg>
        <span>Chat on WhatsApp</span>
      </a>
    </main>
    </>
  );
}
