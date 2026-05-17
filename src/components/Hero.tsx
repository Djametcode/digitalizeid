import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import './Hero.css'

interface HeroProps {
  setActiveSection: (section: string) => void
}

export default function Hero({ setActiveSection }: HeroProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-grid">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-eyebrow">✨ Undangan Digital #1 Indonesia</div>
            <h1 className="hero-title">
              Wujudkan Undangan <span className="script">Impian</span> dalam 10 Menit
            </h1>
            <p className="hero-description">
              Buat undangan pernikahan digital yang elegan dan berkesan. Ratusan template premium, 
              fitur lengkap, dan mudah dibagikan ke semua tamu undangan.
            </p>
            <div className="hero-buttons">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => scrollToSection('templates')}
              >
                Buat Undangan Gratis
                <ArrowRight size={18} />
              </button>
              <button
                className="btn btn-outline btn-lg"
                onClick={() => window.open('/demo/golden-elegance', '_blank')}
              >
                <Play size={18} />
                Lihat Demo
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">15K+</span>
                <span className="stat-label">Pasangan Bahagia</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100+</span>
                <span className="stat-label">Template Premium</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Rating Pengguna</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-image-main">
              <img 
                src="/images/hero/hero-1.jpg" 
                alt="Wedding couple"
                loading="eager"
              />
            </div>
            <div className="hero-image-float float-1">
              <img 
                src="/images/hero/hero-2.jpg" 
                alt="Wedding detail"
                loading="eager"
              />
            </div>
            <div className="hero-image-float float-2">
              <img 
                src="/images/hero/hero-3.jpg" 
                alt="Wedding moment"
                loading="eager"
              />
            </div>
            <div className="hero-badge">
              <span className="badge-number">500+</span>
              <span className="badge-text">Undangan Bulan Ini</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
