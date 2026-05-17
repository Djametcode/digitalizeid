import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Heart, MapPin, Calendar, Users, Clock, Camera, ChevronDown, Copy, Check } from 'lucide-react'
import MusicPlayer from '../components/MusicPlayer'
import './DemoTemplate.css'

export default function DemoTemplate() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [guestName, setGuestName] = useState('')
  const [attendance, setAttendance] = useState('hadir')
  const [guestCount, setGuestCount] = useState(1)
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3])

  // Wedding date countdown
  useEffect(() => {
    const weddingDate = new Date('2026-09-15T09:00:00').getTime()
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = weddingDate - now
      setCountdown({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const copyAccount = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const galleryImages = [
    '/images/gallery/g1.jpg',
    '/images/gallery/g2.jpg',
    '/images/gallery/g3.jpg',
    '/images/gallery/g4.jpg',
    '/images/hero/hero-1.jpg',
    '/images/hero/hero-2.jpg',
  ]

  const loveStory = [
    { date: 'Januari 2022', title: 'Pertemuan Pertama', desc: 'Kami pertama kali bertemu di sebuah kafe di Jakarta. Pandangan pertama yang tak akan terlupakan.' },
    { date: 'Juni 2022', title: 'Resmi Berpacaran', desc: 'Setelah enam bulan saling mengenal, kami memutuskan untuk memulai hubungan yang lebih serius.' },
    { date: 'Desember 2024', title: 'Lamaran', desc: 'Di bawah langit Bali yang indah, dia melamarku dengan cincin yang sempurna.' },
    { date: 'September 2026', title: 'Hari Bahagia', desc: 'Insya Allah, kami akan mengikat janji suci di hadapan keluarga dan sahabat.' },
  ]

  if (!isOpen) {
    return (
      <div className="demo-cover-screen">
        <div className="cover-bg-image">
          <img src="/images/hero/hero-1.jpg" alt="Wedding" />
          <div className="cover-gradient" />
        </div>
        <motion.div
          className="cover-content-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="cover-greeting">The Wedding Of</p>
          <h1 className="cover-couple-name">Rina <span className="amp">&</span> Doni</h1>
          <p className="cover-date-text">15 . 09 . 2026</p>
          <div className="cover-divider">
            <span></span>
            <Heart size={16} />
            <span></span>
          </div>
          <p className="cover-guest-label">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <p className="cover-guest-name">Tamu Undangan</p>
          <button className="btn-open-invitation" onClick={() => setIsOpen(true)}>
            <Heart size={16} fill="white" />
            Buka Undangan
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="demo-template" ref={containerRef}>
      <MusicPlayer autoplay={true} />
      {/* Hero with Parallax */}
      <section className="demo-hero">
        <motion.div className="demo-hero-bg" style={{ y: heroY, opacity: heroOpacity }}>
          <img src="/images/hero/hero-1.jpg" alt="Hero" />
          <div className="demo-hero-overlay" />
        </motion.div>
        <motion.div
          className="demo-hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="demo-hero-subtitle">Bismillahirrahmanirrahim</p>
          <h1 className="demo-hero-title">Rina <span>&</span> Doni</h1>
          <p className="demo-hero-tagline">Akan Melangsungkan Pernikahan</p>
          <div className="demo-hero-date">
            <span>SABTU</span>
            <div className="date-large">15</div>
            <span>SEPTEMBER 2026</span>
          </div>
          <ChevronDown className="scroll-indicator" size={32} />
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="demo-quote">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <p className="quote-arabic">وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا</p>
            <p className="quote-text">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri 
              dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, 
              dan dijadikan-Nya di antaramu rasa kasih dan sayang."
            </p>
            <p className="quote-source">— QS. Ar-Rum: 21</p>
          </motion.div>
        </div>
      </section>

      {/* Couple Section with Parallax */}
      <section className="demo-couple">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-greeting">Dengan memohon rahmat dan ridho Allah SWT, kami mengundang Anda untuk hadir di acara pernikahan kami</p>
          </motion.div>

          <div className="couple-grid-detailed">
            <motion.div
              className="couple-card-detailed"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="couple-image-frame">
                <img src="/images/couples/c1.jpg" alt="Bride" />
              </div>
              <p className="couple-label-text">Calon Mempelai Wanita</p>
              <h2 className="couple-fullname">Rina Kusumawardani, S.Si</h2>
              <p className="couple-parents">
                Putri Kedua dari<br/>
                <strong>Bapak H. Bambang Kusuma</strong> &<br/>
                <strong>Ibu Hj. Siti Rahmawati</strong>
              </p>
              <div className="couple-socials">
                <a href="#" className="social-icon">📷</a>
              </div>
            </motion.div>

            <motion.div
              className="couple-divider"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Heart size={32} />
            </motion.div>

            <motion.div
              className="couple-card-detailed"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="couple-image-frame">
                <img src="/images/couples/c2.jpg" alt="Groom" />
              </div>
              <p className="couple-label-text">Calon Mempelai Pria</p>
              <h2 className="couple-fullname">Doni Pratama, S.T</h2>
              <p className="couple-parents">
                Putra Pertama dari<br/>
                <strong>Bapak H. Andi Pratama</strong> &<br/>
                <strong>Ibu Hj. Dewi Lestari</strong>
              </p>
              <div className="couple-socials">
                <a href="#" className="social-icon">📷</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="demo-countdown">
        <div className="countdown-bg">
          <img src="/images/hero/hero-2.jpg" alt="Background" />
          <div className="countdown-overlay" />
        </div>
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="countdown-title">Menuju Hari Bahagia</h2>
            <p className="countdown-subtitle">Sabtu, 15 September 2026</p>
            <div className="countdown-grid">
              <div className="countdown-item">
                <div className="countdown-number">{countdown.days}</div>
                <div className="countdown-label">Hari</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-number">{countdown.hours}</div>
                <div className="countdown-label">Jam</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-number">{countdown.minutes}</div>
                <div className="countdown-label">Menit</div>
              </div>
              <div className="countdown-item">
                <div className="countdown-number">{countdown.seconds}</div>
                <div className="countdown-label">Detik</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Events Section */}
      <section className="demo-events">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-eyebrow-center">Save The Date</p>
            <h2 className="section-title-demo">Acara Pernikahan</h2>
          </motion.div>

          <div className="events-grid-detailed">
            <motion.div
              className="event-card-detailed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="event-icon-circle">
                <Heart size={28} />
              </div>
              <h3>Akad Nikah</h3>
              <div className="event-info-row">
                <Calendar size={16} />
                <span>Sabtu, 15 September 2026</span>
              </div>
              <div className="event-info-row">
                <Clock size={16} />
                <span>09.00 - 11.00 WIB</span>
              </div>
              <div className="event-info-row">
                <MapPin size={16} />
                <span>Masjid Agung Al-Azhar, Jakarta</span>
              </div>
              <div className="event-address">
                Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan
              </div>
              <button className="btn btn-outline btn-sm">
                <MapPin size={14} /> Buka Maps
              </button>
            </motion.div>

            <motion.div
              className="event-card-detailed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="event-icon-circle">
                <Users size={28} />
              </div>
              <h3>Resepsi Pernikahan</h3>
              <div className="event-info-row">
                <Calendar size={16} />
                <span>Sabtu, 15 September 2026</span>
              </div>
              <div className="event-info-row">
                <Clock size={16} />
                <span>13.00 - 17.00 WIB</span>
              </div>
              <div className="event-info-row">
                <MapPin size={16} />
                <span>Grand Ballroom, Hotel Mulia</span>
              </div>
              <div className="event-address">
                Jl. Asia Afrika Senayan, Jakarta Pusat
              </div>
              <button className="btn btn-outline btn-sm">
                <MapPin size={14} /> Buka Maps
              </button>
            </motion.div>
          </div>

          <motion.button
            className="btn btn-primary btn-lg btn-calendar"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Calendar size={18} /> Tambah ke Google Calendar
          </motion.button>
        </div>
      </section>

      {/* Love Story Timeline */}
      <section className="demo-story">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-eyebrow-center">Our Journey</p>
            <h2 className="section-title-demo">Kisah Cinta Kami</h2>
          </motion.div>

          <div className="timeline">
            {loveStory.map((item, i) => (
              <motion.div
                key={i}
                className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="timeline-content">
                  <div className="timeline-date">{item.date}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="timeline-dot"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="demo-gallery">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-eyebrow-center">Memories</p>
            <h2 className="section-title-demo">Galeri Foto</h2>
          </motion.div>

          <div className="gallery-grid-detailed">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                className={`gallery-item-detailed item-${i + 1}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <img src={img} alt={`Gallery ${i + 1}`} />
                <div className="gallery-overlay">
                  <Camera size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Section */}
      <section className="demo-gift">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-eyebrow-center">Wedding Gift</p>
            <h2 className="section-title-demo">Kirim Hadiah</h2>
            <p className="section-desc">
              Doa restu Anda merupakan hadiah terindah bagi kami. Namun jika Anda ingin memberikan tanda kasih, 
              kami menerimanya dengan senang hati melalui:
            </p>
          </motion.div>

          <div className="gift-cards">
            <motion.div
              className="gift-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="bank-logo">BCA</div>
              <p className="account-number">1234567890</p>
              <p className="account-name">a.n Rina Kusumawardani</p>
              <button className="btn-copy" onClick={() => copyAccount('1234567890')}>
                {copied ? <><Check size={14} /> Tersalin</> : <><Copy size={14} /> Salin</>}
              </button>
            </motion.div>

            <motion.div
              className="gift-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="bank-logo">Mandiri</div>
              <p className="account-number">0987654321</p>
              <p className="account-name">a.n Doni Pratama</p>
              <button className="btn-copy" onClick={() => copyAccount('0987654321')}>
                {copied ? <><Check size={14} /> Tersalin</> : <><Copy size={14} /> Salin</>}
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="demo-rsvp">
        <div className="rsvp-bg">
          <img src="/images/hero/hero-3.jpg" alt="Background" />
          <div className="rsvp-overlay" />
        </div>
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-eyebrow-center light">RSVP</p>
            <h2 className="section-title-demo light">Konfirmasi Kehadiran</h2>
            <p className="section-desc light">
              Mohon kesediaan Anda untuk mengonfirmasi kehadiran melalui form di bawah ini
            </p>
          </motion.div>

          <motion.div
            className="rsvp-form-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {!submitted ? (
              <form onSubmit={handleSubmit}>
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
                  <label>Konfirmasi Kehadiran</label>
                  <div className="radio-group">
                    {['hadir', 'tidak-hadir', 'masih-ragu'].map((opt) => (
                      <label key={opt} className={`radio-label ${attendance === opt ? 'active' : ''}`}>
                        <input
                          type="radio"
                          name="attendance"
                          value={opt}
                          checked={attendance === opt}
                          onChange={(e) => setAttendance(e.target.value)}
                        />
                        <span>{opt === 'hadir' ? 'Hadir' : opt === 'tidak-hadir' ? 'Tidak Hadir' : 'Masih Ragu'}</span>
                      </label>
                    ))}
                  </div>
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
                  <label>Pesan & Doa untuk Pengantin</label>
                  <textarea
                    placeholder="Tulis ucapan dan doa untuk pengantin..."
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-full">
                  <Heart size={18} /> Kirim Konfirmasi
                </button>
              </form>
            ) : (
              <motion.div
                className="thank-you"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              >
                <div className="thank-you-icon">
                  <Check size={48} />
                </div>
                <h3>Terima Kasih, {guestName}!</h3>
                <p>Konfirmasi Anda telah kami terima. Sampai jumpa di hari bahagia kami.</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Messages Wall */}
      <section className="demo-messages">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="section-eyebrow-center">Wishes</p>
            <h2 className="section-title-demo">Ucapan & Doa</h2>
          </motion.div>

          <div className="messages-list">
            {[
              { name: 'Sarah & Andi', msg: 'Selamat menempuh hidup baru, semoga menjadi keluarga sakinah, mawaddah, dan warahmah. Barakallahu lakuma!' },
              { name: 'Maya Putri', msg: 'Congrats Rina dan Doni! Bahagia selalu untuk kalian berdua. Sampai jumpa di hari H!' },
              { name: 'Reza Pratama', msg: 'Selamat ya bro! Akhirnya nyusul juga. Semoga lancar sampai hari H dan langgeng selamanya.' },
            ].map((msg, i) => (
              <motion.div
                key={i}
                className="message-card"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="message-avatar">{msg.name.charAt(0)}</div>
                <div className="message-content">
                  <div className="message-name">{msg.name}</div>
                  <div className="message-text">{msg.msg}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <footer className="demo-footer-detailed">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="closing-text">
              Merupakan suatu kebahagiaan dan kehormatan bagi kami<br/>
              apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu.
            </p>
            <p className="closing-greeting">Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
            <h2 className="closing-couple">Rina <span>&</span> Doni</h2>
            <p className="closing-thanks">Terima kasih atas perhatiannya</p>
            <div className="footer-credit-line">
              <p>Made with <Heart size={12} fill="currentColor" /> by digitalizeID</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
