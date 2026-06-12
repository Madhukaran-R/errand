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

const topPills = ["Fast & Reliable", "Safe & Secure", "Doorstep Convenience", "Trusted Locally"];

const serviceCards = [
  {
    title: "Shopping & Essentials",
    items: [
      "Grocery pickup",
      "Supermarket shopping",
      "Milk and dairy delivery",
      "Snacks and beverages",
      "Household essentials"
    ]
  },
  {
    title: "Medicines & Healthcare",
    items: [
      "Medicine pickup from pharmacies",
      "Prescription delivery",
      "Lab report collection",
      "Health supplement delivery",
      "Emergency medicine errands"
    ]
  },
  {
    title: "Documents & Parcels",
    items: [
      "Document pickup and drop",
      "Office file delivery",
      "Courier assistance",
      "Cheque collection and drop",
      "ID and document collection"
    ]
  },
  {
    title: "Pickup & Drop Services",
    items: [
      "Key pickup and drop",
      "Forgotten item delivery",
      "Lunchbox delivery",
      "Bag and package transfer",
      "Home-to-office item transfer"
    ]
  },
  {
    title: "Food & Beverages",
    items: [
      "Restaurant pickup",
      "Tea and coffee delivery",
      "Homemade food pickup",
      "Bulk office food pickup",
      "Cake and dessert pickup"
    ]
  },
  {
    title: "Gifts & Surprises",
    items: [
      "Gift delivery",
      "Flower pickup and delivery",
      "Birthday surprise delivery",
      "Last-minute gift errands",
      "Greeting card delivery"
    ]
  },
  {
    title: "Local Shopping Assistance",
    items: [
      "Hardware item purchase",
      "Electrical item purchase",
      "Mobile accessories purchase",
      "Printer and office supplies",
      "Laundry pickup and drop"
    ]
  },
  {
    title: "Returns & Exchanges",
    items: [
      "Product return assistance",
      "Exchange pickup and drop",
      "Marketplace return support",
      "Store return handling",
      "Replacement collection"
    ]
  }
];

const pricing = [
  { range: "0 - 2 KMS", fare: "Rs 49", note: "Perfect for quick pick-ups and drop-offs" },
  { range: "2 - 5 KMS", fare: "Rs 69", note: "Ideal for local errands and deliveries" },
  { range: "5 - 8 KMS", fare: "Rs 99", note: "For farther errands within the city" }
];

const addOnServices = [
  "Express delivery",
  "Scheduled delivery",
  "Multiple pickups",
  "Multiple drops",
  "Bulk orders",
  "Corporate monthly plans"
];

const trustPoints = [
  "No hidden charges. Just honest pricing.",
  "No apps. No waiting. Just results.",
  "Great service. Every step of the way.",
  "Fast reply. Zero hassle."
];

const whyChoose = [
  "Saves you time",
  "Safe and trusted",
  "Affordable",
  "Local and reliable"
];

export default function HomePage() {
  return (
    <>
    <main className="site-v2">
      <div className="glow glow-a" aria-hidden="true" />
      <div className="glow glow-b" aria-hidden="true" />

      <section className="top-contact-bar" aria-label="Top contact">
        <div className="site-logo" aria-label="Errand delivery service logo">
          <LottieAnimation
            className="site-logo-lottie"
            src="/lottie/logo.lottie"
            ariaLabel="Errand scooter logo animation"
          />
        </div>
        <p>Text or WhatsApp us now</p>
        <a href="tel:+919944006016">99 44 00 6016</a>
        <a
          className="top-whatsapp-btn"
          href="https://wa.me/919944006016"
          target="_blank"
          rel="noreferrer"
        >
          Open WhatsApp
        </a>
      </section>

      <section className="hero-v2" aria-label="Hero">
        <div>
          <p className="eyebrow">Anything. Anytime. We have got it done.</p>
          <h1>
            We Run Errands,
            <br />
            So You Don&apos;t Have To.
          </h1>
          <p className="subcopy">
            From pickups and deliveries to everyday tasks, we have got it handled.
            Fast, reliable, and hassle-free.
          </p>
          <div className="action-row">
            <a className="btn-dark" href="#contact">
              WhatsApp Us
            </a>
            <a className="btn-outline" href="#services">
              View Services
            </a>
          </div>
          <div className="chips">
            {topPills.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className="hero-side">
          <div className="hero-image-wrap">
            <LottieAnimation
              className="hero-lottie"
              src="/lottie/hero.lottie"
              ariaLabel="Hero delivery animation"
            />
          </div>
        </div>
      </section>

      <div className="hero-bottom-border-wrapper" aria-hidden="true">
        <div className="hero-bottom-border">
          <Image
            src={getAssetPath("/illustrations/hero-bottom-border.svg")}
            alt=""
            fill
            sizes="100vw"
            className="hero-bottom-border-image"
            priority
            unoptimized
          />
        </div>
      </div>

      <section id="services" className="section-v2" aria-label="Services">
        <header className="section-head">
          <span className="section-icon">✨</span>
          <p>Our Services Catalogue</p>
          <h2>We Do It All For You</h2>
        </header>
        <div className="service-grid-v2">
          {serviceCards.map((card, index) => (
            <article key={card.title} className="service-card-v2">
              <p className="service-number">{String(index + 1).padStart(2, "0")}</p>
              <h3>{card.title}</h3>
              <ul>
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
          <article className="service-card-v2 addon-special">
            <p className="service-number">09</p>
            <h3>Add-On Services</h3>
            <ul>
              {addOnServices.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="pricing" className="section-v2" aria-label="Pricing">
        <header className="section-head">
          <span className="section-icon">💰</span>
          <p>Delivery Pricing (Distance-Based)</p>
          <h2>Simple, Fair and Transparent Pricing</h2>
        </header>
        <div className="price-grid-v2">
          {pricing.map((item) => (
            <article key={item.range} className="price-card-v2">
              <p>{item.range}</p>
              <strong>{item.fare}</strong>
              <span>{item.note}</span>
            </article>
          ))}
        </div>
        <p className="price-note">More than 8 kms? Contact us for the best fare.</p>
        <div className="charge-row">
          <p>Rain/Night Surcharge: Rs 10 - Rs 20</p>
          <p>Waiting Charge: first 10 mins free, then Rs 10 for every 10 mins</p>
          <p>Multiple Stops: extra charges applicable</p>
        </div>
      </section>

      <section className="why-v2" aria-label="Why choose Errand">
        <h2><span className="why-icon">⭐</span> Why Choose Errand?</h2>
        <div className="why-grid">
          {whyChoose.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="trust-list">
          {trustPoints.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-v2" aria-label="Contact">
        <div className="contact-main">
          <p className="contact-title">Ready When You Are</p>
          <h2 className="contact-heading">Text or WhatsApp us now</h2>
          <a className="contact-number" href="tel:+919944006016" aria-label="Call 99 44 00 6016">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8C8.1 13.8 10.2 15.9 13.2 17.4L15.5 15.1C15.8 14.8 16.2 14.7 16.6 14.8C17.9 15.2 19.3 15.4 20.8 15.4C21.4 15.4 22 15.9 22 16.6V20.8C22 21.4 21.4 22 20.8 22C10.4 22 2 13.6 2 3.2C2 2.6 2.6 2 3.2 2H7.4C8.1 2 8.6 2.6 8.6 3.2C8.6 4.7 8.8 6.1 9.2 7.4C9.3 7.8 9.2 8.2 8.9 8.5L6.6 10.8Z" fill="currentColor"/>
            </svg>
            99 44 00 6016
          </a>
          <p className="contact-tag">One message can get it done. Fast reply, zero hassle.</p>

          <div className="contact-actions" aria-label="Contact actions">
            <a
              className="contact-action contact-action-primary"
              href="https://wa.me/919944006016"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.5 3.5C18.2 1.2 15.2 0 12 0C5.4 0 0 5.4 0 12C0 14.1 0.6 16.1 1.7 17.9L0 24L6.3 22.3C8 23.3 10 24 12 24H12C18.6 24 24 18.6 24 12C24 8.8 22.8 5.8 20.5 3.5ZM12 21.9C10.2 21.9 8.5 21.4 7 20.5L6.6 20.3L2.9 21.3L3.9 17.7L3.7 17.3C2.7 15.7 2.1 13.9 2.1 12C2.1 6.5 6.5 2.1 12 2.1C14.7 2.1 17.2 3.1 19.1 5C21 6.9 21.9 9.4 21.9 12C21.9 17.5 17.5 21.9 12 21.9ZM17.6 14.4C17.3 14.2 15.9 13.5 15.6 13.4C15.3 13.3 15 13.2 14.8 13.5C14.6 13.8 14 14.5 13.8 14.7C13.6 14.9 13.4 14.9 13.1 14.8C12.8 14.6 11.8 14.3 10.6 13.2C9.7 12.4 9.1 11.4 8.9 11.1C8.7 10.8 8.9 10.6 9 10.4C9.2 10.2 9.3 10.1 9.5 9.9C9.6 9.7 9.7 9.6 9.8 9.4C9.9 9.2 9.8 9 9.7 8.8C9.6 8.6 9 7.2 8.7 6.5C8.4 5.8 8.1 5.9 7.9 5.9H7.2C7 5.9 6.7 6 6.5 6.2C6.3 6.4 5.7 7 5.7 8.2C5.7 9.4 6.6 10.6 6.7 10.8C6.8 11 8.4 13.5 10.9 14.6C13.4 15.7 13.4 15.3 14.1 15.2C14.8 15.1 16.5 14.5 16.8 13.9C17.1 13.3 17.1 12.8 17 12.7C16.9 12.6 16 12.2 15.7 12.1Z" fill="currentColor"/>
              </svg>
              WhatsApp
            </a>

            <a className="contact-action" href="mailto:errandsupport@gmail.com">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 5C2 3.9 2.9 3 4 3H20C21.1 3 22 3.9 22 5V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19V5ZM4 6.3V19H20V6.3L12 12L4 6.3ZM5.2 5L12 9.9L18.8 5H5.2Z" fill="currentColor"/>
              </svg>
              Email
            </a>

            <a className="contact-action" href="https://www.errandserve.com" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H16.9C16.8 8.7 16.3 6.6 15.5 5C17.8 6.1 19.5 8.3 19.9 11ZM12 4.1C13.1 5.4 13.9 8 14 11H10C10.1 8 10.9 5.4 12 4.1ZM8.5 5C7.7 6.6 7.2 8.7 7.1 11H4.1C4.5 8.3 6.2 6.1 8.5 5ZM4.1 13H7.1C7.2 15.3 7.7 17.4 8.5 19C6.2 17.9 4.5 15.7 4.1 13ZM12 19.9C10.9 18.6 10.1 16 10 13H14C13.9 16 13.1 18.6 12 19.9ZM15.5 19C16.3 17.4 16.8 15.3 16.9 13H19.9C19.5 15.7 17.8 17.9 15.5 19Z" fill="currentColor"/>
              </svg>
              Website
            </a>
          </div>

          <form
            className="email-intake-form"
            action="mailto:errandsupport@gmail.com"
            method="post"
            encType="text/plain"
          >
            <p className="email-intake-title">Send us your request by email</p>
            <div className="email-intake-grid">
              <label>
                Name
                <input type="text" name="Name" required />
              </label>
              <label>
                Phone
                <input type="tel" name="Phone" required />
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
            <button type="submit" className="contact-action contact-action-primary email-intake-submit">
              Open Email App With Details
            </button>
          </form>
        </div>

        <div className="contact-visual">
          <Image
            src={getAssetPath("/illustrations/chat-card.svg")}
            alt="Illustrated WhatsApp chat example"
            width={640}
            height={430}
            className="chat-image"
          />
          <span className="contact-badge">Trusted Local Support</span>
        </div>
      </section>

      <a
        className="sticky-whatsapp-btn"
        href="https://wa.me/919944006016"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 3.5C18.2 1.2 15.2 0 12 0C5.4 0 0 5.4 0 12C0 14.1 0.6 16.1 1.7 17.9L0 24L6.3 22.3C8 23.3 10 24 12 24H12C18.6 24 24 18.6 24 12C24 8.8 22.8 5.8 20.5 3.5ZM12 21.9C10.2 21.9 8.5 21.4 7 20.5L6.6 20.3L2.9 21.3L3.9 17.7L3.7 17.3C2.7 15.7 2.1 13.9 2.1 12C2.1 6.5 6.5 2.1 12 2.1C14.7 2.1 17.2 3.1 19.1 5C21 6.9 21.9 9.4 21.9 12C21.9 17.5 17.5 21.9 12 21.9ZM17.6 14.4C17.3 14.2 15.9 13.5 15.6 13.4C15.3 13.3 15 13.2 14.8 13.5C14.6 13.8 14 14.5 13.8 14.7C13.6 14.9 13.4 14.9 13.1 14.8C12.8 14.6 11.8 14.3 10.6 13.2C9.7 12.4 9.1 11.4 8.9 11.1C8.7 10.8 8.9 10.6 9 10.4C9.2 10.2 9.3 10.1 9.5 9.9C9.6 9.7 9.7 9.6 9.8 9.4C9.9 9.2 9.8 9 9.7 8.8C9.6 8.6 9 7.2 8.7 6.5C8.4 5.8 8.1 5.9 7.9 5.9H7.2C7 5.9 6.7 6 6.5 6.2C6.3 6.4 5.7 7 5.7 8.2C5.7 9.4 6.6 10.6 6.7 10.8C6.8 11 8.4 13.5 10.9 14.6C13.4 15.7 13.4 15.3 14.1 15.2C14.8 15.1 16.5 14.5 16.8 13.9C17.1 13.3 17.1 12.8 17 12.7C16.9 12.6 16 12.2 15.7 12.1Z" fill="currentColor"/>
        </svg>
        <span>Chat on WhatsApp</span>
      </a>
    </main>
    </>
  );
}
