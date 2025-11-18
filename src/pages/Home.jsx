// src/pages/Home.jsx
import '../styles/global.css';
import '../styles/home.css';

export default function Home() {
  return (
    <section className="hero">
      <div className="container">
        <h1 style={{fontSize:'7.5rem', marginBottom:'1rem', background:'linear-gradient(to right, #ffd700, #ffed4e)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>
          Khushbu Chauhan
        </h1>
        
        <p style={{fontSize:'1.7rem', color:'#f7d35aff', letterSpacing:'2px', marginBottom:'2rem', textTransform:'uppercase'}}>
          Luxury Brand Consultant • Creative Director
        </p>

        <p style={{fontSize:'1.9rem', maxWidth:'900px', margin:'0 auto 4rem', color:'#ddd', lineHeight:'1.7', fontFamily:'Libre Baskerville'}}>
          Crafting timeless identities for visionary brands, luxury hotels, and exceptional individuals.
        </p>

        <div style={{margin:'4rem 0'}}>
          <a href="/portfolio" className="btn btn-primary">View Portfolio</a>
          <a href="/contact" className="btn btn-outline" style={{marginLeft:'1.5rem'}}>Begin Your Journey</a>
        </div>

        <p style={{color:'#aaa', fontStyle:'italic'}}>
          Trusted by Taj Hotels • Fashion Houses • Global Leaders
        </p>
      </div>
    </section>
  );
}