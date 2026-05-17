import { motion } from 'framer-motion'
import { Heart, Calendar, Users } from 'lucide-react'
import './Templates.css'

export default function Templates() {
  const templates = [
    {
      id: 1,
      name: 'Romantic Blush',
      category: 'Pernikahan',
      icon: <Heart size={20} />,
      gradient: 'linear-gradient(135deg, #ffeef8 0%, #ffe0f0 100%)',
      preview: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=600&fit=crop',
    },
    {
      id: 2,
      name: 'Modern Elegance',
      category: 'Pernikahan',
      icon: <Heart size={20} />,
      gradient: 'linear-gradient(135deg, #e8f4f8 0%, #d4e8f0 100%)',
      preview: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=600&fit=crop',
    },
    {
      id: 3,
      name: 'Birthday Celebration',
      category: 'Ulang Tahun',
      icon: <Calendar size={20} />,
      gradient: 'linear-gradient(135deg, #fff8e1 0%, #ffe9b3 100%)',
      preview: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=600&fit=crop',
    },
    {
      id: 4,
      name: 'Corporate Event',
      category: 'Event',
      icon: <Users size={20} />,
      gradient: 'linear-gradient(135deg, #f0f0f5 0%, #e0e0eb 100%)',
      preview: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=400&h=600&fit=crop',
    },
    {
      id: 5,
      name: 'Garden Wedding',
      category: 'Pernikahan',
      icon: <Heart size={20} />,
      gradient: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)',
      preview: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=600&fit=crop',
    },
    {
      id: 6,
      name: 'Minimalist Chic',
      category: 'Pernikahan',
      icon: <Heart size={20} />,
      gradient: 'linear-gradient(135deg, #fafafa 0%, #eeeeee 100%)',
      preview: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=600&fit=crop',
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
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
            Template <span className="gradient-text">Premium</span>
          </h2>
          <p className="section-subtitle">
            Pilih dari koleksi template yang dirancang khusus untuk momen spesialmu
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
              className="template-card glass"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="template-preview" style={{ background: template.gradient }}>
                <img src={template.preview} alt={template.name} loading="lazy" />
                <div className="template-overlay">
                  <button className="btn btn-primary btn-sm">Lihat Demo</button>
                </div>
              </div>
              <div className="template-info">
                <div className="template-category">
                  {template.icon}
                  <span>{template.category}</span>
                </div>
                <h3 className="template-name">{template.name}</h3>
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
          <button className="btn btn-primary">Lihat Semua Template</button>
        </motion.div>
      </div>
    </section>
  )
}
