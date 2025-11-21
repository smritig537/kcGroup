import { 
  Mail, 
  MapPin, 
  Instagram, 
  Linkedin, 
  X, 
  Facebook, 
  Youtube, 
  MessageCircle,   // Perfect icon for Threads
  Link2             // Clean, elegant icon for Linktree
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Name */}
        <h3 style={{ fontSize: '2.8rem', marginBottom: '2rem', letterSpacing: '-1px' }}>
          Khushbu Chauhan
        </h3>

        {/* Contact Info */}
        <div style={{ 
          marginBottom: '3.5rem', 
          fontSize: '1.15rem', 
          lineHeight: '2.2',
          opacity: 0.9
        }}>
          <p>
            <Mail size={22} style={{ display: 'inline', marginRight: '12px', verticalAlign: '-2px' }} />
            kctaxkhushbuchauhan@gmail.com
          </p>
          <p>
            <MapPin size={22} style={{ display: 'inline', marginRight: '12px', verticalAlign: '-2px' }} />
            Delhi, India, 110001
          </p>
        </div>

        {/* Social Links – All Platforms with Perfect Icons */}
        <div className="social-links" style={{ marginBottom: '4rem', gap: '2rem' }}>
          <a 
            href="https://www.instagram.com/official_khushbuchauhan" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <Instagram size={32} />
          </a>

          <a 
            href="https://www.threads.net/@official_khushbuchauhan" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Threads"
          >
            <MessageCircle size={32} />
          </a>

          <a 
            href="https://x.com/khushbu281" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <X size={32} />
          </a>

          <a 
            href="https://www.linkedin.com/in/khushbu-chauhan28" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>

          <a 
            href="https://youtube.com/@khushbuchauhan-w7z" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <Youtube size={32} />
          </a>

          <a 
            href="https://www.facebook.com/share/1EwesMVnBc/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <Facebook size={32} />
          </a>

          <a 
            href="https://linktr.ee/KctaxKhushbuChauhan" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Linktree - All Links"
            style={{ 
              padding: '8px', 
              background: 'rgba(255,215,0,0.1)', 
              borderRadius: '50%', 
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.background = 'rgba(255,215,0,0.2)'}
            onMouseLeave={(e) => e.target.style.background = 'rgba(255,215,0,0.1)'}
          >
            <Link2 size={32} />
          </a>
        </div>

        {/* Copyright */}
        <p style={{ 
          marginTop: '3rem', 
          opacity: 0.7, 
          fontSize: '1rem',
          letterSpacing: '0.5px'
        }}>
          © {new Date().getFullYear()} Khushbu Chauhan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}