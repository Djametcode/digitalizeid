import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
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
      <div className="container hero-content">
        <motion.div
          className="hero-badge glass"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={16} />
          <span>Undangan Digital Modern & Elegan</span>
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Buat Undangan Digital{' '}
          <span className="gradient-text">Impianmu</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Platform undangan digital dengan desain glassmorphism yang memukau.
          Sempurna untuk pernikahan, ulang tahun, dan momen spesial lainnya.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            className="btn btn-primary"
            onClick={() => scrollToSection('templates')}
          >
            Lihat Template
            <ArrowRight size={18} />
          </button>
          <button
            className="btn btn-glass"
            onClick={() => scrollToSection('pricing')}
          >
            Cek Harga
          </button>
        </motion.div>

        <motion.div
          className="hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Undangan Dibuat</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Template Premium</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.9/5</span>
            <span className="stat-label">Rating Pengguna</span>
          </div>
        </motion.div>
      </div>

      <div className="hero-decoration decoration-1" />
      <div className="hero-decoration decoration-2" />
    </section>
  )
}
