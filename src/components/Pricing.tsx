import { motion } from 'framer-motion'
import './Pricing.css'

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '99',
      period: 'sekali bayar',
      description: 'Cocok untuk acara sederhana',
      features: [
        '1 Template Premium',
        'Unlimited Tamu',
        'RSVP & Konfirmasi',
        'Google Maps',
        'Aktif 30 hari',
      ],
      featured: false,
    },
    {
      name: 'Premium',
      price: '199',
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
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'hubungi kami',
      description: 'Untuk event besar & korporat',
      features: [
        'Semua Fitur Premium',
        'Custom Design',
        'Dedicated Support',
        'Analytics Dashboard',
        'API Integration',
        'White Label',
        'Aktif Selamanya',
      ],
      featured: false,
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
            Harga <span className="accent script">Terjangkau</span>
          </h2>
          <p className="section-subtitle">
            Pilih paket yang sesuai dengan kebutuhan dan budget kalian
          </p>
        </motion.div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {plan.featured && <div className="pricing-badge">Paling Populer</div>}

              <div className="pricing-header">
                <h3 className="pricing-name">{plan.name}</h3>
                <div className="pricing-price">
                  <span className="pricing-price-currency">Rp </span>
                  {plan.price}K
                </div>
                <div className="pricing-period">{plan.period}</div>
                <p className="pricing-description">{plan.description}</p>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="pricing-feature">
                    <span className="check-icon">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`btn pricing-cta ${plan.featured ? 'btn-secondary' : 'btn-primary'}`}>
                {plan.price === 'Custom' ? 'Hubungi Kami' : 'Pilih Paket'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
