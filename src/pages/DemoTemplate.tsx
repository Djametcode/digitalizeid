import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, MapPin, Calendar, Users, ChevronDown } from 'lucide-react'
import './DemoTemplate.css'

export default function DemoTemplate() {
  const [activeTab, setActiveTab] = useState('cover')
  const [guestName, setGuestName] = useState('')
  const [guestCount, setGuestCount] = useState(1)

  const sections = [
    { id: 'cover', label: 'Cover', icon: '🎀' },
    { id: 'intro', label: 'Intro', icon: '💕' },
    { id: 'couple', label: 'Pasangan', icon: '👰' },
    { id: 'events', label: 'Acara', icon: '📅' },
    { id: 'gallery', label: 'Galeri', icon: '🖼️' },
    { id: 'rsvp', label: 'RSVP', icon: '✋' },
  ]

  return (
    <div className="demo-template">
      {/* Navigation Tabs */}
      <div className="demo-nav">
        <div className="container">
          <div className="nav-tabs">
            {sections.map((section) => (
              <button
                key={section.id}
                className={`nav-tab ${activeTab === section.id ? 'active' : ''}`}
                onClick={() => setActiveTab(section.id)}
              >
                <span className="tab-icon">{section.icon}</span>
                <span className="tab-label">{section.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cover Section */}
      {activeTab === 'cover' && (
        <motion.section className="demo-section cover-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="cover-bg">
            <img src="/images/hero/hero-1.jpg" alt="Cover" />
            <div className="cover-overlay" />
          </div>
          <div className="cover-content">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
              <p className="cover-subtitle">Dengan Hormat Kami Mengundang Anda</p>
              <h1 className="cover-title">Rina & Doni</h1>
              <p className="cover-date">Sabtu, 15 Juni 2024</p>
              <button className="btn btn-primary btn-lg" onClick={() => setActiveTab('intro')}>
                Buka Undangan <ChevronDown size={18} />
              </button>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Intro Section */}
      {activeTab === 'intro' && (
        <motion.section className="demo-section intro-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="container">
            <motion.div className="intro-content" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
              <div className="intro-header">
                <Heart size={32} className="intro-icon" />
                <h2>Undangan Pernikahan</h2>
              </div>
              <p className="intro-text">
                Dengan segala kerendahan hati dan rasa syukur kepada Allah SWT, kami mengundang Anda 
                untuk hadir dan memberikan doa restu pada acara pernikahan kami.
              </p>
              <div className="intro-couple-names">
                <div className="couple-name">
                  <p className="label">Mempelai Pria</p>
                  <h3>Doni Pratama</h3>
                  <p className="parents">Putra dari Bapak & Ibu Pratama</p>
                </div>
                <div className="divider">
                  <Heart size={24} />
                </div>
                <div className="couple-name">
                  <p className="label">Mempelai Wanita</p>
                  <h3>Rina Kusuma</h3>
                  <p className="parents">Putri dari Bapak & Ibu Kusuma</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      )}

      {/* Couple Section */}
      {activeTab === 'couple' && (
        <motion.section className="demo-section couple-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="container">
            <div className="couple-grid">
              <motion.div className="couple-card" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <div className="couple-image">
                  <img src="/images/couples/c1.jpg" alt="Groom" />
                </div>
                <h3>Doni Pratama</h3>
                <p className="couple-bio">Seorang profesional muda yang bersemangat dan penuh mimpi</p>
              </motion.div>
              <motion.div className="couple-card" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <div className="couple-image">
                  <img src="/images/couples/c2.jpg" alt="Bride" />
                </div>
                <h3>Rina Kusuma</h3>
                <p className="couple-bio">Wanita cerdas, cantik, dan penuh kasih sayang</p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Events Section */}
      {activeTab === 'events' && (
        <motion.section className="demo-section events-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="container">
            <h2 className="section-title">Acara Pernikahan</h2>
            <div className="events-list">
              {[
                { name: 'Akad Nikah', time: '09:00 - 11:00', location: 'Masjid Al-Ikhlas' },
                { name: 'Resepsi', time: '13:00 - 17:00', location: 'Ballroom Grand Hotel' },
              ].map((event, i) => (
                <motion.div key={i} className="event-card" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: i * 0.1 }}>
                  <div className="event-icon">
                    <Calendar size={24} />
                  </div>
                  <div className="event-details">
                    <h3>{event.name}</h3>
                    <p className="event-time">
                      <Calendar size={16} /> {event.time}
                    </p>
                    <p className="event-location">
                      <MapPin size={16} /> {event.location}
                    </p>
                  </div>
                  <button className="btn btn-sm btn-outline">Lihat Lokasi</button>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Gallery Section */}
      {activeTab === 'gallery' && (
        <motion.section className="demo-section gallery-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="container">
            <h2 className="section-title">Galeri Foto</h2>
            <div className="gallery-grid">
              {[1, 2, 3, 4].map((i) => (
                <motion.div key={i} className="gallery-item" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: i * 0.1 }}>
                  <img src={`/images/gallery/g${i}.jpg`} alt={`Gallery ${i}`} />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* RSVP Section */}
      {activeTab === 'rsvp' && (
        <motion.section className="demo-section rsvp-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="container">
            <h2 className="section-title">Konfirmasi Kehadiran</h2>
            <div className="rsvp-card">
              <form className="rsvp-form" onSubmit={(e) => { e.preventDefault(); alert('Terima kasih atas konfirmasi Anda!'); }}>
                <div className="form-group">
                  <label>Nama Lengkap</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Jumlah Tamu</label>
                  <select value={guestCount} onChange={(e) => setGuestCount(Number(e.target.value))}>
                    <option value={1}>1 Orang</option>
                    <option value={2}>2 Orang</option>
                    <option value={3}>3 Orang</option>
                    <option value={4}>4 Orang</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Pesan (Opsional)</label>
                  <textarea placeholder="Tulis ucapan atau doa untuk pengantin" rows={4} />
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                  <Users size={18} /> Konfirmasi Kehadiran
                </button>
              </form>
            </div>
          </div>
        </motion.section>
      )}

      {/* Footer */}
      <footer className="demo-footer">
        <div className="container">
          <p>Terima kasih telah menjadi bagian dari kebahagiaan kami</p>
          <p className="footer-credit">Dibuat dengan ❤️ menggunakan digitalizeID</p>
        </div>
      </footer>
    </div>
  )
}
