import { motion } from 'framer-motion'
import { Smartphone, Share2, Music, MapPin, Gift, Heart, Calendar, Users } from 'lucide-react'
import './Features.css'

export default function Features() {
  const features = [
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Friendly',
      description: 'Tampil sempurna di semua perangkat, dari HP hingga desktop',
    },
    {
      icon: <Share2 size={24} />,
      title: 'Mudah Dibagikan',
      description: 'Kirim via WhatsApp, Instagram, atau salin link langsung',
    },
    {
      icon: <Music size={24} />,
      title: 'Background Music',
      description: 'Tambahkan lagu favorit untuk suasana yang lebih romantis',
    },
    {
      icon: <MapPin size={24} />,
      title: 'Lokasi Terintegrasi',
      description: 'Google Maps otomatis untuk memudahkan tamu menemukan lokasi',
    },
    {
      icon: <Gift size={24} />,
      title: 'Amplop Digital',
      description: 'Terima hadiah dan ucapan dari tamu secara online',
    },
    {
      icon: <Heart size={24} />,
      title: 'Love Story',
      description: 'Ceritakan perjalanan cinta kalian dengan timeline interaktif',
    },
    {
      icon: <Calendar size={24} />,
      title: 'Countdown Timer',
      description: 'Hitung mundur menuju hari bahagia kalian',
    },
    {
      icon: <Users size={24} />,
      title: 'RSVP Online',
      description: 'Kelola konfirmasi kehadiran tamu dengan mudah',
    },
  ]

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
            Fitur <span className="accent script">Lengkap</span>
          </h2>
          <p className="section-subtitle">
            Semua yang kalian butuhkan untuk undangan pernikahan digital yang sempurna
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
