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
          className="cta-card"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="cta-content">
            <h2 className="cta-title">
              Siap Membuat Undangan <span className="accent script">Impian Kalian?</span>
            </h2>
            <p className="cta-subtitle">
              Bergabung dengan 2,500+ pasangan yang telah mempercayai digitalizeID untuk momen spesial mereka
            </p>
            <div className="cta-buttons">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('templates')}
              >
                Mulai Sekarang
                <ArrowRight size={18} />
              </button>
              <button className="btn btn-outline">
                Lihat Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
