// src/pages/Portfolio.jsx
import '../styles/global.css';
import '../styles/portfolio.css';

export default function Portfolio() {
  const works = [
    { title: "Taj Hotels Campaign 2024", category: "Branding • Photography" },
    { title: "Luxury Brand Identity", category: "Brand Design" },
    { title: "Minimal Web Experience", category: "UI/UX • Web" },
    { title: "Fashion Editorial", category: "Photography • Creative Direction" },
    { title: "Corporate Rebranding", category: "Strategy • Identity" },
    { title: "Digital Art Series", category: "Visual Art • Motion" }
  ];

  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio-grid">
          {works.map((work, i) => (
            <div className="portfolio-card" key={i}>
              <div className="img-placeholder"></div>
              <h3>{work.title}</h3>
              <p className="portfolio-category">{work.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}