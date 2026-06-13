import { Link2, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";

const BASE_PATH = "/errand";
const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://errand.ltd").replace(/\/$/, "");
const PAGE_URL = `${SITE_URL}${BASE_PATH}/founders/`;

const founders = [
  {
    id: "founder-1",
    initials: "DR",
    photo: `${BASE_PATH}/images/divakaran_rajendran.jpg`,
    name: "Divakaran Rajendran",
    role: "Founder",
    bio: "Passionate about simplifying everyday life by providing fast, reliable, and trustworthy errand services. Dedicated to helping individuals and businesses save time through efficient pickups, deliveries, and personal assistance. Committed to professionalism, transparency, and customer satisfaction in every task. Focused on ensuring each errand is handled with care, punctuality, and attention to detail. Driven by the belief that no task is too small when it helps make life easier.",
    email: "errandsupport@gmail.com",
    linkedin: "https://in.linkedin.com/in/divakaran-rajendran-697970266",
    expertise: ["Product", "Technology", "Innovation"]
  }
];

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Founder | Errand Service Leadership",
  description: "Meet the founder behind Errand Service and learn about the mission, values, and leadership driving reliable local delivery.",
  keywords: [
    "Errand Service founder",
    "local delivery founder",
    "delivery company leadership",
    "Errand Service team",
    "same day delivery company"
  ],
  alternates: {
    canonical: `${BASE_PATH}/founders/`
  },
  openGraph: {
    type: "profile",
    title: "Founder | Errand Service Leadership",
    description: "Meet the founder behind Errand Service and learn about the mission behind fast, reliable local delivery.",
    url: PAGE_URL,
    siteName: "Errand Service",
    images: [
      {
        url: `${BASE_PATH}/images/divakaran_rajendran.jpg`,
        width: 1200,
        height: 630,
        alt: "Divakaran Rajendran - Founder of Errand Service"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Founder | Errand Service Leadership",
    description: "Meet the founder behind Errand Service and the mission driving local delivery.",
    images: [`${BASE_PATH}/images/divakaran_rajendran.jpg`]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function FoundersPage() {
  const founder = founders[0];
  const founderJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: founder.name,
    jobTitle: founder.role,
    image: `${SITE_URL}${founder.photo}`,
    url: PAGE_URL,
    email: founder.email,
    sameAs: [founder.linkedin],
    worksFor: {
      "@type": "Organization",
      name: "Errand Service",
      url: `${SITE_URL}${BASE_PATH}/`
    },
    description: founder.bio
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}${BASE_PATH}/`
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Founders",
        item: PAGE_URL
      }
    ]
  };

  return (
    <main className="site-v2 founders-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founderJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="founders-hero" aria-label="Founder introduction">
        <p className="eyebrow">Founder</p>
        <h1>Meet The Founder</h1>
        <p className="founders-hero-copy">
          Leadership focused on trust, speed, and consistency so every errand feels simple for customers.
        </p>
        <div className="founders-hero-meta" aria-label="Founder and company highlights">
          <span>People-first operations</span>
          <span>Reliable city deliveries</span>
          <span>Transparent service standards</span>
        </div>
      </section>

      <section className="founders-grid" aria-label="Founder profile">
        {founders.map((founder) => (
          <article key={founder.id} className="founder-card">
            <div className="founder-head">
              <div className="founder-photo-wrap">
                <Image
                  className="founder-photo"
                  src={founder.photo}
                  alt={`${founder.name} profile`}
                  width={320}
                  height={320}
                  sizes="(max-width: 480px) 96px, 116px"
                />
                <span className="founder-avatar-badge" aria-hidden="true">{founder.initials}</span>
              </div>
              <div>
                <p className="founder-role">{founder.role}</p>
                <h2>{founder.name}</h2>
              </div>
            </div>

            <p className="founder-bio">{founder.bio}</p>

            <div className="founder-tags" aria-label="Founder strengths">
              {(founder.expertise || []).map((item) => (
                <span key={`${founder.id}-${item}`}>{item}</span>
              ))}
            </div>

            <div className="founder-links">
              <a href={`mailto:${founder.email}`}>
                <Mail size={16} aria-hidden="true" />
                {founder.email}
              </a>
              <a href={founder.linkedin} target="_blank" rel="noreferrer">
                <Link2 size={16} aria-hidden="true" />
                LinkedIn Profile
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="founders-actions" aria-label="Founders page actions">
        <a className="btn-dark" href={`${BASE_PATH}/`}>Back to Home</a>
        <a className="btn-brand" href="https://wa.me/919944006016" target="_blank" rel="noreferrer">
          <MessageCircle size={16} aria-hidden="true" />
          Contact Team
        </a>
      </section>
    </main>
  );
}
