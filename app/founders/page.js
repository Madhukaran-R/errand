const BASE_PATH = "/errand";

const founders = [
  {
    id: "founder-1",
    initials: "DR",
    photo: `${BASE_PATH}/illustrations/founder-placeholder.svg`,
    name: "Divakaran Rajendran",
    role: "Founder",
    bio: "Founder profile details can be expanded here once final content is available.",
    email: "errandsupport@gmail.com",
    linkedin: "https://www.linkedin.com/",
    expertise: ["Product", "Technology", "Innovation"]
  }
];

export const metadata = {
  title: "Founder | Errand Service",
  description: "Meet the founder behind Errand Service.",
  alternates: {
    canonical: "https://yourdomain.com/errand/founders/"
  }
};

export default function FoundersPage() {
  return (
    <main className="site-v2 founders-page">
      <section className="founders-hero" aria-label="Founder introduction">
        <p className="eyebrow">Founder</p>
        <h1>Meet The Founder</h1>
        <p className="founders-hero-copy">
          This page is prepared as a hardcoded template and currently lists the active founder profile.
        </p>
      </section>

      <section className="founders-grid" aria-label="Founder profile">
        {founders.map((founder) => (
          <article key={founder.id} className="founder-card">
            <div className="founder-head">
              <div className="founder-photo-wrap">
                <img className="founder-photo" src={founder.photo} alt={`${founder.name} profile`} loading="lazy" />
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
                <i className="fa-solid fa-envelope" aria-hidden="true" />
                {founder.email}
              </a>
              <a href={founder.linkedin} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin" aria-hidden="true" />
                LinkedIn Profile
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="founders-actions" aria-label="Founders page actions">
        <a className="btn-dark" href={`${BASE_PATH}/`}>Back to Home</a>
        <a className="btn-brand" href="https://wa.me/919944006016" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-whatsapp" aria-hidden="true" />
          Contact Team
        </a>
      </section>
    </main>
  );
}
