import { motion } from 'framer-motion'
import { Palette, Smartphone, Share2, Music, MapPin, Gift } from 'lucide-react'
import './Features.css'

export default function Features() {
  const features = [
    {
      icon: <Palette size={28} />,
      title: 'Desain Glassmorphism',
      description: 'Tampilan modern dengan efek blur dan transparansi yang memukau',
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Responsive Design',
      description: 'Tampil sempurna di semua perangkat, dari mobile hingga desktop',
    },
    {
      icon: <Share2 size={28} />,
      title: 'Mudah Dibagikan',
      description: 'Bagikan undangan via WhatsApp, Instagram, atau link langsung',
    },
    {
      icon: <Music size={28} />,
      title: 'Background Music',
      description: 'Tambahkan musik favorit untuk suasana yang lebih berkesan',
    },
    {
      icon: <MapPin size={28} />,
      title: 'Google Maps',
      description: 'Integrasi lokasi acara dengan Google Maps untuk kemudahan tamu',
    },
    {
      icon: <Gift size={28} />,
      title: 'Gift Registry',
      description: 'Terima hadiah digital dengan mudah melalui transfer bank',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="features" className="features">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Fitur <span className="gradient-text">Unggulan</span>
          </h2>
          <p className="section-subtitle">
            Semua yang kamu butuhkan untuk membuat undangan digital yang sempurna
          </p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card glass"
              variants={itemVariants}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
