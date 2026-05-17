import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import './CTA.css'

interface CTAProps {
  setActiveSection: (section: string) => void
}

export default function CTA({ setActiveSection }: CTAProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <section className="cta">
      <div className="container">
        <motion.div
          className="cta-card glass-strong"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2 className="cta-title">
              Siap Membuat Undangan <span className="gradient-text">Impianmu?</span>
            </h2>
            <p className="cta-subtitle">
              Bergabung dengan 10,000+ pengguna yang telah mempercayai digitalizeID
              untuk momen spesial mereka
            </p>
            <div className="cta-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('templates')}
              >
                Mulai Sekarang
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-glass">
                Lihat Demo
              </button>
            </div>
          </div>

          <div className="cta-decoration decoration-1" />
          <div className="cta-decoration decoration-2" />
        </motion.div>
      </div>
    </section>
  )
}
