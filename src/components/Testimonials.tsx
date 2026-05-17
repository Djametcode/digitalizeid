import { useState } from 'react'
import { motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import './Testimonials.css'

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: 'Sarah & Andi',
      location: 'Jakarta',
      image: '/images/couples/c1.jpg',
      text: 'Undangan dari digitalizeID bener-bener bikin kami kaget. Desainnya elegan dan tamu-tamu kami banyak yang tanya bikin di mana. Worth it banget!',
      rating: 5,
    },
    {
      name: 'Maya & Reza',
      location: 'Bandung',
      image: '/images/couples/c2.jpg',
      text: 'Proses bikinnya gampang banget, support team-nya juga responsif. Fitur RSVP-nya membantu banget buat manage tamu. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Diana & Bayu',
      location: 'Surabaya',
      image: '/images/couples/c3.jpg',
      text: 'Suka banget sama detail desainnya. Background music dan love story timeline bikin undangan kami feel personal banget. Terima kasih digitalizeID!',
      rating: 5,
    },
  ]

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="testimonials">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Cerita <span className="accent script">Pasangan</span>
          </h2>
          <p className="section-subtitle">
            Dengarkan langsung dari pasangan yang telah mempercayai kami
          </p>
        </motion.div>

        <div className="testimonial-wrapper">
          <motion.div
            key={activeIndex}
            className="testimonial-card"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="testimonial-image">
              <img src={testimonials[activeIndex].image} alt={testimonials[activeIndex].name} />
            </div>
            <div className="testimonial-content">
              <Quote size={48} className="quote-icon" />
              <p className="testimonial-text">"{testimonials[activeIndex].text}"</p>
              <div className="testimonial-rating">
                {Array.from({ length: testimonials[activeIndex].rating }).map((_, i) => (
                  <span key={i} className="star">★</span>
                ))}
              </div>
              <div className="testimonial-author">
                <h4 className="author-name">{testimonials[activeIndex].name}</h4>
                <p className="author-location">{testimonials[activeIndex].location}</p>
              </div>
            </div>
          </motion.div>

          <div className="testimonial-controls">
            <button className="control-btn" onClick={prev} aria-label="Previous">
              <ChevronLeft size={24} />
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${activeIndex === i ? 'active' : ''}`}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
            <button className="control-btn" onClick={next} aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
