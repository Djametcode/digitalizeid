import { motion } from 'framer-motion'
import { Edit3, Upload, Share2, CheckCircle } from 'lucide-react'
import './HowItWorks.css'

export default function HowItWorks() {
  const steps = [
    {
      icon: <Edit3 size={32} />,
      title: 'Pilih Template',
      description: 'Pilih dari 50+ template premium yang sesuai dengan tema acaramu',
    },
    {
      icon: <Upload size={32} />,
      title: 'Kustomisasi',
      description: 'Edit teks, foto, warna, dan musik sesuai keinginanmu',
    },
    {
      icon: <Share2 size={32} />,
      title: 'Bagikan',
      description: 'Bagikan undangan via WhatsApp, Instagram, atau link langsung',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Selesai',
      description: 'Pantau konfirmasi kehadiran tamu secara real-time',
    },
  ]

  return (
    <section id="how-it-works" className="how-it-works">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Cara <span className="gradient-text">Kerja</span>
          </h2>
          <p className="section-subtitle">
            Buat undangan digital dalam 4 langkah mudah
          </p>
        </motion.div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="step-number glass">{index + 1}</div>
              <div className="step-content glass">
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
