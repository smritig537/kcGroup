// Updated Portfolio.jsx with added horizontal gallery section
import '../styles/global.css';
import '../styles/portfolio.css';
import galleryBg from '../assets/gallery.avif';

// Existing images
import img1 from '../assets/kc1.jpeg';
import img2 from '../assets/kc2.jpeg';
import img3 from '../assets/Kc3.jpeg';
import img4 from '../assets/kc4.jpeg';
import img5 from '../assets/kc5.jpeg';

// // New gallery images
// import kh1 from '../assets/khushbu1.jpg';
// import kh3 from '../assets/khushbu3.jpg';
// import kh6 from '../assets/khushbu6.jpg';
// import kh7 from '../assets/khushbu7.jpg';
// import kh8 from '../assets/khushbu8.jpg';
// import kh9 from '../assets/khushbu9.jpg';
// import kh10 from '../assets/khushbu10.jpg';

export default function Portfolio() {
  const works = [
    { image: img1, title: "Taj Hotels Campaign 2024" },
    { image: img2, title: "Luxury Brand Identity" },
    { image: img3, title: "Minimal Web Experience" },
    { image: img4, title: "Fashion Editorial" },
    { image: img5, title: "Corporate Rebranding" }
  ];

  const galleryImages = [
    img1, img2, img3, img4, img5,
    img1, img2, img3, img4, img5,
  ];

  return (
    <>
      {/* <section
        className="portfolio-section"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.88), rgba(0,0,0,0.75)), url(${galleryBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="portfolio-overlay" />

        <div className="container">
          <h2 className="section-title">Gallery</h2>

          <div className="portfolio-grid">
            {works.map((work, i) => (
              <div className="portfolio-card" key={i}>
                <div className="portfolio-image-wrapper">
                  <img src={work.image} alt={work.title} className="portfolio-image" />
                </div>
                <div className="golden-line"></div>
              </div>
            ))}
          </div>

          <div className="portfolio-cta">
            <p>Want to see the full collection?</p>
            <a href="/contact" className="btn-gold">Get in Touch</a>
          </div>
        </div>
      </section> */}

      {/* Added Horizontal Scroll Gallery */}
      <section id="gallery" style={{ background: "#000", padding: "60px 0" }}>
        <div className="container">
          <h2 className="section-title">Gallery</h2>

          <div className="gallery-grid">
            {galleryImages.map((img, i) => (
              <div className="gallery-item" key={i}>
                <img src={img} alt="gallery-img" />
              </div>
            ))}
          </div>
         
        </div>


          
      </section>
    </>
  );
}

/* Add in portfolio.css */
/*
.gallery-grid {
  display: flex;
  overflow-x: auto;
  gap: 30px;
  padding: 20px 0;
  scroll-snap-type: x mandatory;
  scrollbar-width: thin;
}
.gallery-grid::-webkit-scrollbar { height: 10px; background: #222; }
.gallery-grid::-webkit-scrollbar-thumb { background: var(--orange); border-radius: 10px; }

.gallery-item {
  flex: 0 0 340px;
  height: 280px;
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0,0,0,0.7);
  border: 4px solid rgba(255,102,0,0.2);
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.6s;
}
.gallery-item:hover img { transform: scale(1.2); }

.md-photo {
  max-width: 420px;
  width: 90%;
  margin: 50px auto;
  display: block;
  border-radius: 30px;
  border: 7px solid var(--orange);
  box-shadow: 0 25px 60px rgba(255,102,0,0.4);
}
*/
