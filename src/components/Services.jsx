import React from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    desc: "Responsive and dynamic websites built using HTML, CSS, JavaScript, and React.",
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true">
        <path d="M3 4h18v2H3zM3 10h18v2H3zM3 16h18v2H3z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "UI/UX Design",
    desc: "Creative design systems with focus on accessibility and user experience.",
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true">
        <circle cx="12" cy="8" r="3" />
        <path d="M6 20c1.5-4 5.5-6 6-6s4.5 2 6 6H6z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Performance Optimization",
    desc: "Speed-focused development with modern bundling and optimization strategies.",
    icon: (
      <svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true">
        <path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z" />
      </svg>
    ),
  },
];

export default function ServicesThreeCard() {
  return (
    <section
      id="services"
      className="services-section"
      aria-label="Our Services"
    >
      <div className="container">
        <div className="services-inner">
          <header className="services-header">
            <h2>Services</h2>
            <p className="services-sub">
              <br />
              Delivering high-quality solutions that make your brand stand out.
            </p>
          </header>

          <div className="cards">
            {services.map((s) => (
              <article
                key={s.id}
                className="card"
                tabIndex={0}
                aria-labelledby={`card-title-${s.id}`}
              >
                <div className="card-icon" aria-hidden="true">
                  {s.icon}
                </div>
                <h3 id={`card-title-${s.id}`} className="card-title">
                  {s.title}
                </h3>
                <p className="card-desc">{s.desc}</p>
                <button className="card-btn">See More</button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
