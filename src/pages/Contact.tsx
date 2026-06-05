import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, MessageCircle, CheckCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hello Black Mustache! I'm reaching out via your website.%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`
    window.open(`https://wa.me/971045896390?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  const inputClass = 'w-full bg-charcoal border border-gold/20 text-white placeholder-gray-600 px-4 py-3 rounded focus:outline-none focus:border-gold/60 transition-colors text-sm'

  return (
    <>
      <Helmet>
        <title>Contact | Black Mustache Gents Salon — JVC Dubai</title>
        <meta name="description" content="Contact Black Mustache Gents Salon in JVC Dubai. Call 04 589 6390, send a WhatsApp, or visit us at Lazuward S W, Jumeirah Village Circle, Dubai." />
        <link rel="canonical" href="https://blackmustache.ae/contact" />
      </Helmet>

      <div className="pt-20">
        <section className="bg-charcoal py-20 px-4 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold text-xs tracking-widest uppercase mb-3">
            {t('Get In Touch', 'Ponte En Contacto')}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-5xl text-white mb-4">
            {t('Contact ', 'Contacto ')}<span className="text-gold">{t('Us', 'Nosotros')}</span>
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-2xl text-white mb-8">
                {t('Find Us', 'Encuéntranos')}
              </h2>
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">Black Mustache Gents Salon</p>
                    <p className="text-gray-500 text-sm">JVC - Lazuward S W<br />Jumeirah Village Circle, Dubai, UAE</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">{t('Phone', 'Teléfono')}</p>
                    <a href="tel:045896390" className="text-gold hover:text-gold-light text-sm transition-colors">04 589 6390</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm mb-1">{t('Opening Hours', 'Horario de Apertura')}</p>
                    <p className="text-gray-500 text-sm">{t('Every Day: 9:00 AM – 10:00 PM', 'Todos los días: 9:00 AM – 10:00 PM')}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:045896390"
                  className="flex items-center justify-center gap-2 border border-gold text-gold px-6 py-3 text-sm rounded hover:bg-gold/10 transition-colors font-medium"
                >
                  <Phone size={16} /> {t('Call Us', 'Llamar')}
                </a>
                <a
                  href="https://wa.me/971045896390"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-gold text-black px-6 py-3 text-sm rounded hover:bg-gold-light transition-colors font-bold"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>

              {/* Map */}
              <div className="mt-8 rounded overflow-hidden border border-gold/20">
                <iframe
                  title="Black Mustache Gents Salon Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.5!2d55.2065!3d25.0516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJVC%20Dubai!5e0!3m2!1sen!2sae!4v1"
                  width="100%"
                  height="240"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-serif text-2xl text-white mb-8">
                {t('Send Us a Message', 'Envíanos un Mensaje')}
              </h2>
              {submitted ? (
                <div className="bg-charcoal border border-gold/30 rounded p-10 text-center">
                  <CheckCircle size={48} className="text-gold mx-auto mb-4" />
                  <h3 className="font-serif text-xl text-white mb-2">{t('Message Sent!', '¡Mensaje Enviado!')}</h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {t("You've been redirected to WhatsApp. We'll reply shortly!", '¡Has sido redirigido a WhatsApp. Te responderemos pronto!')}
                  </p>
                  <button onClick={() => setSubmitted(false)} className="border border-gold text-gold px-6 py-2.5 text-sm rounded hover:bg-gold/10 transition-colors">
                    {t('Send Another', 'Enviar Otro')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-charcoal border border-gold/20 rounded p-8 space-y-5">
                  <div>
                    <label className="block text-xs text-gray-400 tracking-widest uppercase mb-2">{t('Your Name', 'Tu Nombre')} *</label>
                    <input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder={t('John Doe', 'Juan García')} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 tracking-widest uppercase mb-2">{t('Phone Number', 'Número de Teléfono')} *</label>
                    <input required type="tel" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+971 50 000 0000" className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-400 tracking-widest uppercase mb-2">{t('Message', 'Mensaje')} *</label>
                    <textarea required rows={5} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder={t('How can we help you?', '¿Cómo podemos ayudarte?')} className={`${inputClass} resize-none`} />
                  </div>
                  <button type="submit" className="w-full bg-gold text-black font-bold py-4 text-sm tracking-widest uppercase rounded hover:bg-gold-light transition-colors">
                    {t('Send via WhatsApp', 'Enviar por WhatsApp')}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}
