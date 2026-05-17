import { motion } from 'framer-motion'
import './Templates.css'

export default function Templates() {
  const templates = [
    {
      id: 1,
      name: 'Romantic Garden',
      category: 'Pernikahan',
      image: '/images/templates/t1.jpg',
      price: 'Rp 149K',
    },
    {
      id: 2,
      name: 'Modern Minimalist',
      category: 'Pernikahan',
      image: '/images/templates/t2.jpg',
      price: 'Rp 149K',
    },
    {
      id: 3,
      name: 'Classic Elegance',
      category: 'Pernikahan',
      image: '/images/templates/t3.jpg',
      price: 'Rp 149K',
    },
    {
      id: 4,
      name: 'Rustic Charm',
      category: 'Pernikahan',
      image: '/images/templates/t4.jpg',
      price: 'Rp 149K',
    },
    {
      id: 5,
      name: 'Bohemian Dream',
      category: 'Pernikahan',
      image: '/images/templates/t5.jpg',
      price: 'Rp 149K',
    },
    {
      id: 6,
      name: 'Luxury Gold',
      category: 'Pernikahan',
      image: '/images/templates/t6.jpg',
      price: 'Rp 199K',
    },
    {
      id: 7,
      name: 'Floral Bliss',
      category: 'Pernikahan',
      image: '/images/templates/t7.jpg',
      price: 'Rp 149K',
    },
    {
      id: 8,
      name: 'Timeless White',
      category: 'Pernikahan',
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
          <h2 className="section-title">
            Template <span className="accent script">Pilihan</span>
          </h2>
          <p className="section-subtitle">
            Desain yang dibuat khusus untuk momen spesial kalian. Setiap template bisa dikustomisasi sesuai keinginan.
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
                  <button className="btn btn-primary btn-sm">Lihat Demo</button>
                </div>
              </div>
              <div className="template-info">
                <div className="template-header">
                  <h3 className="template-name">{template.name}</h3>
                  <span className="template-price">{template.price}</span>
                </div>
                <span className="template-category">{template.category}</span>
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
          <button className="btn btn-outline">Request Custom Design</button>
        </motion.div>
      </div>
    </section>
  )
}
