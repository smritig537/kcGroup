// src/pages/Contact.jsx
import { useState } from 'react';
import '../styles/global.css';
import '../styles/contact.css';
import contactBg from '../assets/contact.avif'; // ← Your background image

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! I will get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      className="contact-section"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.88), rgba(0,0,0,0.75)),
          url(${contactBg})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="contact-overlay" />

      <div className="container">
        <h2 className="section-title">
          Let’s Connect
        </h2>

        <div className="contact-content">
          <p className="contact-intro">
            Have a vision? Let’s bring it to life with elegance and intention.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                required
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn-submit">
              <span>Send Message</span>
              <div className="golden-arrow">→</div>
            </button>
          </form>

          <div className="contact-signature">
            <span>— Khushbu Chauhan</span>
            <div className="golden-line"></div>
          </div>
        </div>
      </div>
    </section>
  );
}