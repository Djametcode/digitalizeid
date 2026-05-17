import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import './Navigation.css'

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Beranda' },
    { id: 'features', label: 'Fitur' },
    { id: 'templates', label: 'Template' },
    { id: 'pricing', label: 'Harga' },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      className="navbar glass-strong"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-container">
        <div className="navbar-brand">
          <span className="brand-icon">✨</span>
          <span className="brand-text">digitalizeID</span>
        </div>

        <div className="navbar-menu">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="navbar-actions">
          <button className="btn btn-glass">Masuk</button>
          <button className="btn btn-primary">Mulai Gratis</button>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          className="navbar-mobile"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link-mobile ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button className="btn btn-primary" style={{ width: '100%' }}>
            Mulai Gratis
          </button>
        </motion.div>
      )}
    </motion.nav>
  )
}
