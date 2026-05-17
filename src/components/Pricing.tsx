import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import './Pricing.css'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '99K',
      period: 'sekali bayar',
      description: 'Cocok untuk acara kecil dan sederhana',
      features: [
        '1 Template Premium',
        'Unlimited Tamu',
        'RSVP & Konfirmasi',
        'Google Maps',
        'Background Music',
        'Aktif 30 hari',
      ],
      popular: false,
    },
    {
      name: 'Premium',
      price: '199K',
      period: 'sekali bayar',
      description: 'Pilihan terbaik untuk acara spesial',
      features: [
        'Semua Template Premium',
        'Unlimited Tamu',
        'RSVP & Konfirmasi',
        'Google Maps',
        'Background Music',
        'Gift Registry',
        'Photo Gallery',
        'Custom Domain',
        'Aktif 90 hari',
        'Revisi Unlimited',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'hubungi kami',
      description: 'Untuk event besar dan korporat',
      features: [
        'Semua Fitur Premium',
        'Custom Design',
        'Dedicated Support',
        'Analytics Dashboard',
        'API Integration',
        'White Label',
        'Aktif Selamanya',
      ],
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Harga <span className="gradient-text">Terjangkau</span>
          </h2>
          <p className="section-subtitle">
            Pilih paket yang sesuai dengan kebutuhanmu
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card glass ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Sparkles size={14} />
                  <span>Paling Populer</span>
                </div>
              )}

              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
                <p className="plan-description">{plan.description}</p>
              </div>

              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i} className="feature-item">
                    <Check size={18} className="check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-glass'} btn-full`}>
                {plan.price === 'Custom' ? 'Hubungi Kami' : 'Pilih Paket'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
