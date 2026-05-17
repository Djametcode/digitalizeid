import { useState } from 'react'
import { motion } from 'framer-motion'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Features from './components/Features'
import Templates from './components/Templates'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import DemoTemplate from './pages/DemoTemplate'
import './App.css'

function HomePage() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero setActiveSection={setActiveSection} />
      <Features />
      <Templates />
      <Testimonials />
      <Pricing />
      <CTA setActiveSection={setActiveSection} />
      <Footer />
    </motion.div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/demo/:templateId" element={<DemoTemplate />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  )
}

export default App
