import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, Phone, MapPin, MessageCircle, ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const WA_NUMBER = '97145896390'

const services = [
  'Signature Haircut / Corte Signature',
  'Beard Trim & Shape / Recorte de Barba',
  'Hair + Beard Combo / Combo Cabello + Barba',
  'Skin Fade',
  'Hot Towel Shave / Afeitado con Toalla',
  'Hair Coloring / Coloración',
  'Kids Haircut / Corte Niños',
  'VIP Grooming Package / Paquete VIP',
]

const barbers = [
  'No Preference / Sin Preferencia',
  'Barber 1',
  'Barber 2',
  'Barber 3',
]

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
]

export default function BookAppointment() {
  const { lang, t } = useLanguage()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    barber: '',
    date: '',
    time: '',
    notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const buildWhatsAppMessage = () => {
    if (lang === 'es') {
      const msg = `Hola%20Black%20Mustache%20Gents%20Salon%2C%0A%0AMe%20gustar%C3%ADa%20reservar%20una%20cita.%0A%0ANombre%3A%20${encodeURIComponent(form.name)}%0AServicio%3A%20${encodeURIComponent(form.service)}%0AFecha%3A%20${encodeURIComponent(form.date)}%0AHora%3A%20${encodeURIComponent(form.time)}%0A%0AGracias.`
      return `https://wa.me/${WA_NUMBER}?text=${msg}`
    }
    const msg = `Hello%20Black%20Mustache%20Gents%20Salon%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName%3A%20${encodeURIComponent(form.name)}%0AService%3A%20${encodeURIComponent(form.service)}%0APreferred%20Date%3A%20${encodeURIComponent(form.date)}%0APreferred%20Time%3A%20${encodeURIComponent(form.time)}%0A%0AThank%20you.`
    return `https://wa.me/${WA_NUMBER}?text=${msg}`
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(buildWhatsAppMessage(), '_blank')
    setSubmitted(true)
  }

  const inputClass = 'w-full bg-charcoal border border-gold/20 text-white placeholder-gray-600 px-4 py-3 rounded focus:outline-none focus:border-gold/60 transition-colors text-sm'
  const labelClass = 'block text-xs text-gray-400 tracking-widest uppercase mb-2'

  return (
    <>
      <Helmet>
        <title>Book Appointment | Black Mustache Gents Salon — JVC Dubai</title>
        <meta name="description" content="Book your appointment at Black Mustache Gents Salon in Jumeirah Village Circle, Dubai. Choose your service, preferred barber, date and time. Easy WhatsApp booking." />
        <link rel="canonical" href="https://blackmustache.ae/book" />
      </Helmet>

      <div className="pt-20">
        <section className="bg-charcoal py-20 px-4 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold text-xs tracking-widest uppercase mb-3">
            {t('Reserve Your Spot', 'Reserva Tu Lugar')}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-5xl text-white mb-4">
            {t('Book An ', 'Reservar ')}<span className="text-gold">{t('Appointment', 'Una Cita')}</span>
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            {t(
              "Fill in your details and we'll open WhatsApp with your booking pre-filled. We confirm within the hour.",
              'Completa tus datos y abriremos WhatsApp con tu reserva pre-rellenada. Confirmamos en la hora.'
            )}
          </p>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">

            {/* Contact sidebar */}
            <div className="space-y-4">
              <h2 className="font-serif text-xl text-white mb-6">{t('Quick Contact', 'Contacto Rápido')}</h2>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=${lang === 'es' ? 'Hola%20Black%20Mustache%20Gents%20Salon%2C%0A%0AMe%20gustar%C3%ADa%20reservar%20una%20cita.%0A%0ANombre%3A%0AServicio%3A%0AFecha%3A%0AHora%3A%0A%0AGracias.' : 'Hello%20Black%20Mustache%20Gents%20Salon%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName%3A%0AService%3A%0APreferred%20Date%3A%0APreferred%20Time%3A%0A%0AThank%20you.'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gold text-black px-4 py-3.5 rounded font-bold text-sm hover:bg-gold-light transition-colors w-full"
              >
                <MessageCircle size={18} />
                {t('Book via WhatsApp', 'Reservar por WhatsApp')}
              </a>

              <a
                href="tel:+97145896390"
                className="flex items-center gap-3 border border-gold text-gold px-4 py-3.5 rounded font-medium text-sm hover:bg-gold/10 transition-colors w-full"
              >
                <Phone size={18} />
                +971 4 589 6390
              </a>

              <a
                href="https://go.2gis.com/s6ioj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border border-gold/20 text-gray-400 px-4 py-3.5 rounded text-sm hover:border-gold/40 hover:text-gold transition-colors w-full"
              >
                <ExternalLink size={18} />
                {t('Get Directions', 'Cómo Llegar')}
              </a>

              <div className="bg-charcoal border border-gold/10 rounded p-4 mt-4">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white text-sm font-medium mb-1">Black Mustache Gents Salon</p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      Emerald Tower, G Floor<br />
                      JVC District 18<br />
                      Jumeirah Village Circle<br />
                      Dubai, UAE
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-charcoal border border-gold/10 rounded p-4">
                <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-1">{t('Confirmation', 'Confirmación')}</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  {t(
                    'We confirm all bookings via WhatsApp within the hour. Same-day appointments available based on barber availability.',
                    'Confirmamos todas las reservas por WhatsApp en la hora. Citas el mismo día según disponibilidad.'
                  )}
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center bg-charcoal border border-gold/30 rounded p-12"
                >
                  <CheckCircle size={56} className="text-gold mx-auto mb-6" />
                  <h2 className="font-serif text-2xl text-white mb-4">
                    {t('Appointment Requested!', '¡Cita Solicitada!')}
                  </h2>
                  <p className="text-gray-400 mb-6">
                    {t(
                      'We have received your appointment request and will confirm your booking shortly via WhatsApp.',
                      'Hemos recibido tu solicitud de cita y confirmaremos tu reserva en breve por WhatsApp.'
                    )}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="border border-gold text-gold px-6 py-3 text-sm rounded hover:bg-gold/10 transition-colors"
                    >
                      {t('Book Another', 'Reservar Otra')}
                    </button>
                    <a
                      href="tel:+97145896390"
                      className="flex items-center justify-center gap-2 bg-gold text-black font-bold px-6 py-3 text-sm rounded hover:bg-gold-light transition-colors"
                    >
                      <Phone size={16} /> +971 4 589 6390
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubmit}
                  className="bg-charcoal border border-gold/20 rounded p-8 md:p-10 space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>{t('Full Name', 'Nombre Completo')} *</label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder={t('Your full name', 'Tu nombre completo')} className={inputClass} />
                    </div>
                    <div>
                      <label className={labelClass}>{t('Phone Number', 'Número de Teléfono')} *</label>
                      <input name="phone" required type="tel" value={form.phone} onChange={handleChange} placeholder="+971 50 000 0000" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{t('Email Address', 'Correo Electrónico')}</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder={t('your@email.com', 'tu@correo.com')} className={inputClass} />
                  </div>

                  <div>
                    <label className={labelClass}>{t('Service', 'Servicio')} *</label>
                    <select name="service" required value={form.service} onChange={handleChange} className={inputClass}>
                      <option value="">{t('Select a service', 'Selecciona un servicio')}</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>{t('Preferred Barber', 'Barbero Preferido')}</label>
                    <select name="barber" value={form.barber} onChange={handleChange} className={inputClass}>
                      <option value="">{t('No preference', 'Sin preferencia')}</option>
                      {barbers.map(b => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>{t('Preferred Date', 'Fecha Preferida')} *</label>
                      <input
                        name="date"
                        type="date"
                        required
                        value={form.date}
                        onChange={handleChange}
                        min={new Date().toISOString().split('T')[0]}
                        className={`${inputClass} [color-scheme:dark]`}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>{t('Preferred Time', 'Hora Preferida')} *</label>
                      <select name="time" required value={form.time} onChange={handleChange} className={inputClass}>
                        <option value="">{t('Select a time', 'Selecciona una hora')}</option>
                        {timeSlots.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{t('Additional Notes', 'Notas Adicionales')}</label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={form.notes}
                      onChange={handleChange}
                      placeholder={t('Any special requests or notes...', 'Solicitudes especiales o notas...')}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold text-black font-bold py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors rounded flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={16} />
                    {t('Confirm via WhatsApp', 'Confirmar por WhatsApp')}
                  </button>

                  <p className="text-center text-gray-600 text-xs">
                    {t(
                      "You'll be redirected to WhatsApp with your booking details pre-filled. We reply within the hour.",
                      'Serás redirigido a WhatsApp con los detalles de tu reserva pre-rellenados. Respondemos en la hora.'
                    )}
                  </p>
                </motion.form>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
