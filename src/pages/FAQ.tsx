import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Link as LinkIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const faqs = [
  {
    q: 'Do I need an appointment?',
    qEs: '¿Necesito una cita?',
    a: 'We welcome both appointments and walk-ins. However, booking in advance guarantees your preferred time slot, chosen barber, and a waiting-free experience.',
    aEs: 'Aceptamos tanto citas como clientes sin cita previa. Sin embargo, reservar con anticipación garantiza tu horario preferido, tu barbero elegido y una experiencia sin esperas.',
  },
  {
    q: 'How long does a haircut take?',
    qEs: '¿Cuánto tiempo dura un corte de cabello?',
    a: 'A standard haircut typically takes 30-45 minutes. A Hair + Beard Combo takes 60-75 minutes. Our VIP Grooming Package is a full 2-hour experience.',
    aEs: 'Un corte estándar suele durar entre 30 y 45 minutos. El Combo Cabello + Barba tarda entre 60 y 75 minutos. Nuestro Paquete VIP de Grooming es una experiencia completa de 2 horas.',
  },
  {
    q: 'Do you accept walk-ins?',
    qEs: '¿Aceptan clientes sin cita previa?',
    a: 'Yes, we do! Walk-ins are welcome based on barber availability. To avoid waiting, we recommend booking in advance via our booking page or WhatsApp.',
    aEs: '¡Sí, lo hacemos! Los clientes sin cita son bienvenidos según la disponibilidad del barbero. Para evitar esperas, recomendamos reservar con anticipación a través de nuestra página de reservas o WhatsApp.',
  },
  {
    q: 'What payment methods do you accept?',
    qEs: '¿Qué métodos de pago aceptan?',
    a: 'We accept cash (AED), all major credit/debit cards (Visa, Mastercard), and contactless payments. Apple Pay and Google Pay are also accepted.',
    aEs: 'Aceptamos efectivo (AED), las principales tarjetas de crédito/débito (Visa, Mastercard) y pagos sin contacto. Apple Pay y Google Pay también son aceptados.',
  },
  {
    q: 'Is parking available?',
    qEs: '¿Hay estacionamiento disponible?',
    a: 'Yes, free parking is available at the Lazuward building in JVC. You will find ample parking directly at the location.',
    aEs: 'Sí, hay estacionamiento gratuito disponible en el edificio Lazuward en JVC. Encontrarás amplio estacionamiento directamente en el local.',
  },
  {
    q: 'What are your opening hours?',
    qEs: '¿Cuáles son sus horarios de apertura?',
    a: 'We are open 7 days a week, from 9:00 AM to 10:00 PM. We are available on all public holidays so you can always look your best.',
    aEs: 'Estamos abiertos los 7 días de la semana, de 9:00 a.m. a 10:00 p.m. Estamos disponibles en todos los días festivos para que siempre puedas lucir lo mejor.',
  },
  {
    q: 'Which products do you use?',
    qEs: '¿Qué productos utilizan?',
    a: 'We use only premium international grooming brands known for quality and skin safety. Our shelves carry top-tier products for every hair type and skin concern.',
    aEs: 'Usamos solo marcas premium internacionales de grooming conocidas por su calidad y seguridad para la piel. Nuestras estanterías llevan productos de primer nivel para todo tipo de cabello y preocupaciones de la piel.',
  },
  {
    q: 'Do you offer children\'s haircuts?',
    qEs: '¿Ofrecen cortes de cabello para niños?',
    a: 'Absolutely! We offer a dedicated Kids Haircut service for young gentlemen aged 3-12, with patient and gentle barbers who make the experience fun and comfortable.',
    aEs: '¡Por supuesto! Ofrecemos un servicio dedicado de Corte para Niños para jóvenes caballeros de 3 a 12 años, con barberos pacientes y amables que hacen la experiencia divertida y cómoda.',
  },
  {
    q: 'How can I book an appointment?',
    qEs: '¿Cómo puedo reservar una cita?',
    a: 'You can book through our online booking form on this website, send us a WhatsApp message, or call us directly at 04 589 6390. It\'s quick and easy.',
    aEs: 'Puedes reservar a través de nuestro formulario de reserva en línea en este sitio web, enviarnos un mensaje de WhatsApp o llamarnos directamente al 04 589 6390. Es rápido y fácil.',
  },
]

export default function FAQ() {
  const { lang, t } = useLanguage()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <>
      <Helmet>
        <title>FAQ | Black Mustache Gents Salon Dubai — Common Questions Answered</title>
        <meta name="description" content="Got questions about Black Mustache Gents Salon in JVC Dubai? Find answers about appointments, opening hours, parking, payment methods, and our services." />
        <link rel="canonical" href="https://blackmustache.ae/faq" />
      </Helmet>

      <div className="pt-20">
        <section className="bg-charcoal py-20 px-4 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold text-xs tracking-widest uppercase mb-3">
            {t('Got Questions?', '¿Tienes Preguntas?')}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-5xl text-white mb-4">
            <span className="text-gold">FAQ</span>
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            {t('Everything you need to know before your visit.', 'Todo lo que necesitas saber antes de tu visita.')}
          </p>
        </section>

        <section className="bg-black py-16 px-4">
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-charcoal border border-gold/20 rounded overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                >
                  <span className="text-white font-medium text-sm leading-snug">
                    {lang === 'es' ? faq.qEs : faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-gold shrink-0 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-gold/10 pt-4">
                        {lang === 'es' ? faq.aEs : faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 bg-charcoal border border-gold/20 rounded p-8 text-center">
            <LinkIcon size={24} className="text-gold mx-auto mb-3" />
            <h2 className="font-serif text-xl text-white mb-2">
              {t('Still have questions?', '¿Aún tienes preguntas?')}
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              {t("We're always happy to help. Reach out to us directly.", 'Siempre estamos felices de ayudar. Contáctanos directamente.')}
            </p>
            <Link to="/contact" className="inline-block bg-gold text-black font-bold px-6 py-3 text-sm tracking-wider uppercase rounded hover:bg-gold-light transition-colors">
              {t('Contact Us', 'Contáctanos')}
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
