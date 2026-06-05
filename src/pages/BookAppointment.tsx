import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, Phone } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

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
  const { t } = useLanguage()
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
    const isEs = document.documentElement.lang === 'es'
    const msg = isEs
      ? `Hola Black Mustache! Me gustaría reservar una cita:%0A%0ANombre: ${form.name}%0ATeléfono: ${form.phone}%0AEmail: ${form.email}%0AServicio: ${form.service}%0ABarbero: ${form.barber}%0AFecha: ${form.date}%0AHora: ${form.time}%0ANotas: ${form.notes || 'Ninguna'}%0A%0AGracias!`
      : `Hello Black Mustache! I'd like to book an appointment:%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AEmail: ${form.email}%0AService: ${form.service}%0ABarber: ${form.barber}%0ADate: ${form.date}%0ATime: ${form.time}%0ANotes: ${form.notes || 'None'}%0A%0AThank you!`
    return `https://wa.me/971045896390?text=${msg}`
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
        <title>Book Appointment | Black Mustache Gents Salon Dubai</title>
        <meta name="description" content="Book your appointment at Black Mustache Gents Salon in JVC Dubai. Choose your service, preferred barber, date and time. Easy WhatsApp booking." />
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
              'Fill in your details and we\'ll confirm your booking via WhatsApp.',
              'Completa tus datos y confirmaremos tu reserva por WhatsApp.'
            )}
          </p>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-2xl mx-auto">
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
                    href="tel:045896390"
                    className="flex items-center justify-center gap-2 bg-gold text-black font-bold px-6 py-3 text-sm rounded hover:bg-gold-light transition-colors"
                  >
                    <Phone size={16} /> 04 589 6390
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
                  className="w-full bg-gold text-black font-bold py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors rounded"
                >
                  {t('Confirm via WhatsApp', 'Confirmar por WhatsApp')}
                </button>

                <p className="text-center text-gray-600 text-xs">
                  {t(
                    'You\'ll be redirected to WhatsApp to confirm your booking. We\'ll reply within the hour.',
                    'Serás redirigido a WhatsApp para confirmar tu reserva. Te responderemos en la hora.'
                  )}
                </p>
              </motion.form>
            )}
          </div>
        </section>
      </div>
    </>
  )
}
