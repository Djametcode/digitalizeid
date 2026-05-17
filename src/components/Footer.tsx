import { Mail } from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer glass">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="brand-logo">
              <span className="brand-icon">✨</span>
              <span className="brand-text">digitalizeID</span>
            </div>
            <p className="brand-tagline">
              Undangan digital modern untuk momen spesialmu
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="link-group">
              <h4 className="link-title">Produk</h4>
              <ul className="link-list">
                <li><a href="#features">Fitur</a></li>
                <li><a href="#templates">Template</a></li>
                <li><a href="#pricing">Harga</a></li>
                <li><a href="#">Demo</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h4 className="link-title">Perusahaan</h4>
              <ul className="link-list">
                <li><a href="#">Tentang Kami</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Karir</a></li>
                <li><a href="#">Kontak</a></li>
              </ul>
            </div>

            <div className="link-group">
              <h4 className="link-title">Bantuan</h4>
              <ul className="link-list">
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Tutorial</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Syarat & Ketentuan</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} digitalizeID. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
