import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle, CheckCircle, Instagram, ExternalLink } from 'lucide-react'

const WA_NUMBER = '971553604706'
const WA_LINK = `https://wa.me/${WA_NUMBER}?text=Hello%20Black%20Mustache%20Gents%20Salon%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName%3A%0AService%3A%0APreferred%20Date%3A%0APreferred%20Time%3A%0A%0AThank%20you.`

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hello%20Black%20Mustache%20Gents%20Salon%2C%0A%0AI%27m%20reaching%20out%20via%20your%20website.%0A%0AName%3A%20${encodeURIComponent(form.name)}%0APhone%3A%20${encodeURIComponent(form.phone)}%0AMessage%3A%20${encodeURIComponent(form.message)}`
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  const inputClass = 'w-full bg-charcoal border border-gold/20 text-white placeholder-gray-600 px-4 py-3 rounded focus:outline-none focus:border-gold/60 transition-colors text-sm'

  return (
    <>
      <Helmet>
        <title>Contact | Black Mustache Gents Salon — Emerald Tower JVC Dubai</title>
        <meta name="description" content="Contact Black Mustache Gents Salon. Call +971 4 589 6390, send a WhatsApp, or visit us at Emerald Tower, G Floor, JVC District 18, Jumeirah Village Circle, Dubai." />
        <link rel="canonical" href="https://blackmustache.ae/contact" />
      </Helmet>

      <div className="pt-20">
        <section className="bg-charcoal py-20 px-4 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold text-xs tracking-widest uppercase mb-3">
            Get In Touch
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-5xl text-white mb-4">
            Contact <span className="text-gold">Us</span>
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-6xl mx-auto">

            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-charcoal border border-gold/20 rounded p-5">
                <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center mb-3">
                  <MapPin size={18} className="text-gold" />
                </div>
                <p className="text-white text-sm font-medium mb-1">Address</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Emerald Tower, G Floor<br />
                  JVC District 18<br />
                  Jumeirah Village Circle<br />
                  Dubai, UAE
                </p>
                <a href="https://maps.app.goo.gl/Vi2ugZtHECqDVFFy9" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-3 text-gold text-xs hover:underline">
                  <ExternalLink size={11} /> Get Directions
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="bg-charcoal border border-gold/20 rounded p-5">
                <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center mb-3">
                  <Phone size={18} className="text-gold" />
                </div>
                <p className="text-white text-sm font-medium mb-1">Phone</p>
                <a href="tel:+97145896390" className="text-gold text-sm hover:text-gold-light transition-colors">+971 4 589 6390</a>
                <p className="text-gray-600 text-xs mt-1">Call us directly</p>
                <a href="tel:+97145896390" className="inline-flex items-center gap-1.5 mt-3 bg-gold/10 text-gold border border-gold/30 text-xs px-3 py-1.5 rounded hover:bg-gold hover:text-black transition-colors">
                  <Phone size={11} /> Call Now
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-charcoal border border-gold/20 rounded p-5">
                <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center mb-3">
                  <MessageCircle size={18} className="text-gold" />
                </div>
                <p className="text-white text-sm font-medium mb-1">WhatsApp</p>
                <p className="text-gray-500 text-xs">Book & enquire instantly</p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 mt-3 bg-gold text-black text-xs font-bold px-3 py-1.5 rounded hover:bg-gold-light transition-colors">
                  <MessageCircle size={11} /> Open WhatsApp
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="bg-charcoal border border-gold/20 rounded p-5">
                <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center mb-3">
                  <Clock size={18} className="text-gold" />
                </div>
                <p className="text-white text-sm font-medium mb-1">Opening Hours</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Every Day<br />
                  <span className="text-gold">9:00 AM – 10:00 PM</span>
                </p>
                <p className="text-gray-600 text-xs mt-2">Open 7 days a week</p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Map + buttons */}
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-2xl text-white mb-6">Find Us</h2>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <a href="tel:+97145896390" className="flex items-center justify-center gap-2 border border-gold text-gold px-4 py-3 text-sm rounded hover:bg-gold/10 transition-colors font-medium">
                    <Phone size={15} /> Call Now
                  </a>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-gold text-black px-4 py-3 text-sm rounded hover:bg-gold-light transition-colors font-bold">
                    <MessageCircle size={15} /> WhatsApp
                  </a>
                  <a href="https://maps.app.goo.gl/Vi2ugZtHECqDVFFy9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-gold/30 text-gray-400 px-4 py-3 text-sm rounded hover:border-gold/60 hover:text-gold transition-colors col-span-2">
                    <ExternalLink size={15} /> Get Directions on Maps
                  </a>
                  <a href="https://www.instagram.com/black.mustache.gents.salon" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 border border-gold/20 text-gray-500 px-4 py-3 text-sm rounded hover:border-gold/40 hover:text-gold transition-colors col-span-2">
                    <Instagram size={15} /> @black.mustache.gents.salon
                  </a>
                </div>
                <div className="rounded overflow-hidden border border-gold/20">
                  <iframe
                    title="Black Mustache Gents Salon — Emerald Tower JVC Dubai"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5!2d55.2065!3d25.0516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJumeirah%20Village%20Circle%2C%20Dubai!5e0!3m2!1sen!2sae!4v1"
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>

              {/* Form */}
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="font-serif text-2xl text-white mb-6">Send Us a Message</h2>
                {submitted ? (
                  <div className="bg-charcoal border border-gold/30 rounded p-10 text-center">
                    <CheckCircle size={48} className="text-gold mx-auto mb-4" />
                    <h3 className="font-serif text-xl text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 text-sm mb-6">
                      You've been redirected to WhatsApp. We'll reply shortly!
                    </p>
                    <button onClick={() => setSubmitted(false)} className="border border-gold text-gold px-6 py-2.5 text-sm rounded hover:bg-gold/10 transition-colors">
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="bg-charcoal border border-gold/20 rounded p-8 space-y-5">
                    <div>
                      <label className="block text-xs text-gray-400 tracking-widest uppercase mb-2">Your Name *</label>
                      <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 tracking-widest uppercase mb-2">Phone Number *</label>
                      <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+971 50 000 0000" className={inputClass} />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 tracking-widest uppercase mb-2">Message *</label>
                      <textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="How can we help you?" className={`${inputClass} resize-none`} />
                    </div>
                    <button type="submit" className="w-full bg-gold text-black font-bold py-4 text-sm tracking-widest uppercase rounded hover:bg-gold-light transition-colors flex items-center justify-center gap-2">
                      <MessageCircle size={16} />
                      Send via WhatsApp
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
