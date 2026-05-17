import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import './Templates.css'

export default function Templates() {
  const templates = [
    {
      id: 'golden-elegance',
      name: 'Golden Elegance',
      category: 'Luxury',
      image: '/images/templates/t1.jpg',
      price: 'Rp 149K',
    },
    {
      id: 'modern-minimalist',
      name: 'Modern Minimalist',
      category: 'Contemporary',
      image: '/images/templates/t2.jpg',
      price: 'Rp 149K',
    },
    {
      id: 'classic-romance',
      name: 'Classic Romance',
      category: 'Traditional',
      image: '/images/templates/t3.jpg',
      price: 'Rp 149K',
    },
    {
      id: 'rustic-charm',
      name: 'Rustic Charm',
      category: 'Natural',
      image: '/images/templates/t4.jpg',
      price: 'Rp 149K',
    },
    {
      id: 'bohemian-dream',
      name: 'Bohemian Dream',
      category: 'Artistic',
      image: '/images/templates/t5.jpg',
      price: 'Rp 149K',
    },
    {
      id: 'royal-luxury',
      name: 'Royal Luxury',
      category: 'Premium',
      image: '/images/templates/t6.jpg',
      price: 'Rp 199K',
    },
    {
      id: 'floral-bliss',
      name: 'Floral Bliss',
      category: 'Garden',
      image: '/images/templates/t7.jpg',
      price: 'Rp 149K',
    },
    {
      id: 'timeless-white',
      name: 'Timeless White',
      category: 'Classic',
      image: '/images/templates/t8.jpg',
      price: 'Rp 149K',
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
    <section id="templates" className="templates">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">100+ Template Premium</span>
          <h2 className="section-title">
            Pilih <span className="script">Desain Favorit</span> Anda
          </h2>
          <p className="section-subtitle">
            Setiap template dirancang dengan detail dan bisa dikustomisasi sesuai keinginan Anda
          </p>
        </motion.div>

        <motion.div
          className="templates-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {templates.map((template) => (
            <motion.div
              key={template.id}
              className="template-card"
              variants={itemVariants}
            >
              <div className="template-image">
                <img src={template.image} alt={template.name} loading="lazy" />
                <div className="template-overlay">
                  <a
                    href={`/demo/${template.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <ExternalLink size={16} />
                    Lihat Demo
                  </a>
                </div>
              </div>
              <div className="template-info">
                <div className="template-header">
                  <div>
                    <h3 className="template-name">{template.name}</h3>
                    <span className="template-category">{template.category}</span>
                  </div>
                  <span className="template-price">{template.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="templates-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="cta-text">Tidak menemukan yang cocok?</p>
          <button className="btn btn-ghost">Request Custom Design</button>
        </motion.div>
      </div>
    </section>
  )
}
