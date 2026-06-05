import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Clock, ChevronRight, MessageCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const WA_NUMBER = '97145896390'
const WA_EN = `https://wa.me/${WA_NUMBER}?text=Hello%20Black%20Mustache%20Gents%20Salon%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName%3A%0AService%3A%0APreferred%20Date%3A%0APreferred%20Time%3A%0A%0AThank%20you.`
const WA_ES = `https://wa.me/${WA_NUMBER}?text=Hola%20Black%20Mustache%20Gents%20Salon%2C%0A%0AMe%20gustar%C3%ADa%20reservar%20una%20cita.%0A%0ANombre%3A%0AServicio%3A%0AFecha%3A%0AHora%3A%0A%0AGracias.`

const services = [
  {
    name: 'Signature Haircut',
    nameEs: 'Corte de Cabello Signature',
    desc: 'A precision cut tailored to your face shape and style. Includes consultation, wash, cut, and styling.',
    descEs: 'Corte de precisión adaptado a tu forma de rostro y estilo. Incluye consulta, lavado, corte y peinado.',
    duration: '45 min',
    price: 'AED 60',
    tag: 'Popular',
  },
  {
    name: 'Beard Trim & Shape',
    nameEs: 'Recorte y Modelado de Barba',
    desc: 'Expert beard shaping and trimming that defines your jawline and completes your look.',
    descEs: 'Modelado experto de barba que define tu mandíbula y completa tu imagen.',
    duration: '30 min',
    price: 'AED 40',
    tag: '',
  },
  {
    name: 'Hair + Beard Combo',
    nameEs: 'Combo Cabello + Barba',
    desc: 'The complete package. Haircut and beard grooming for a head-to-toe transformation.',
    descEs: 'El paquete completo. Corte de cabello y arreglo de barba para una transformación total.',
    duration: '75 min',
    price: 'AED 90',
    tag: 'Best Value',
  },
  {
    name: 'Skin Fade',
    nameEs: 'Skin Fade',
    desc: 'Ultra-precise skin fade that transitions seamlessly from skin to your desired length.',
    descEs: 'Degradado ultra preciso que transiciona perfectamente de la piel a tu longitud deseada.',
    duration: '45 min',
    price: 'AED 70',
    tag: '',
  },
  {
    name: 'Hot Towel Shave',
    nameEs: 'Afeitado con Toalla Caliente',
    desc: 'An indulgent traditional wet shave. Hot towel, pre-shave oil, straight razor, and soothing balm.',
    descEs: 'Un afeitado húmedo tradicional indulgente. Toalla caliente, aceite pre-afeitado, navaja recta y bálsamo calmante.',
    duration: '45 min',
    price: 'AED 70',
    tag: 'Luxury',
  },
  {
    name: 'Hair Coloring',
    nameEs: 'Coloración de Cabello',
    desc: 'Professional hair coloring using premium products. From natural enhancement to bold transformations.',
    descEs: 'Coloración profesional con productos premium. Desde realzar lo natural hasta transformaciones atrevidas.',
    duration: '90 min',
    price: 'AED 120',
    tag: '',
  },
  {
    name: 'Kids Haircut',
    nameEs: 'Corte para Niños',
    desc: 'Gentle and patient haircut service for young gentlemen aged 3-12.',
    descEs: 'Servicio de corte gentil y paciente para jóvenes caballeros de 3 a 12 años.',
    duration: '30 min',
    price: 'AED 45',
    tag: '',
  },
  {
    name: 'VIP Grooming Package',
    nameEs: 'Paquete VIP de Grooming',
    desc: 'The ultimate grooming ritual. Haircut + beard + hot towel shave + face treatment + scalp massage.',
    descEs: 'El ritual definitivo de grooming. Corte + barba + afeitado con toalla + tratamiento facial + masaje de cuero cabelludo.',
    duration: '2 hrs',
    price: 'AED 200',
    tag: 'Premium',
  },
]

export default function Services() {
  const { lang, t } = useLanguage()
  const waLink = lang === 'es' ? WA_ES : WA_EN

  return (
    <>
      <Helmet>
        <title>Services | Black Mustache Gents Salon Dubai — Haircut, Beard, Shave JVC</title>
        <meta name="description" content="Explore premium barbershop services at Black Mustache Gents Salon, Emerald Tower JVC Dubai. Haircuts, beard trims, hot towel shaves, skin fades & VIP grooming packages from AED 40." />
        <link rel="canonical" href="https://blackmustache.ae/services" />
      </Helmet>

      <div className="pt-20">
        {/* Header */}
        <section className="bg-charcoal py-20 px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gold text-xs tracking-widest uppercase mb-3"
          >
            {t('What We Offer', 'Lo Que Ofrecemos')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl text-white mb-4"
          >
            {t('Our ', 'Nuestros ')}<span className="text-gold">{t('Services', 'Servicios')}</span>
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            {t(
              'Crafted for the modern gentleman at Emerald Tower, JVC. Each service is a ritual designed to leave you looking and feeling your absolute best.',
              'Diseñado para el caballero moderno en Emerald Tower, JVC. Cada servicio es un ritual para que te veas y sientas en tu mejor versión.'
            )}
          </p>
        </section>

        {/* Services Grid */}
        <section className="bg-black py-16 px-4">
          <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-charcoal border border-gold/20 p-6 rounded group hover:border-gold/50 transition-all duration-300 flex flex-col"
              >
                {s.tag && (
                  <span className="text-xs text-black bg-gold px-2 py-0.5 rounded self-start mb-3 font-semibold">
                    {s.tag}
                  </span>
                )}
                <h2 className="font-serif text-lg text-white mb-2">{lang === 'es' ? s.nameEs : s.name}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{lang === 'es' ? s.descEs : s.desc}</p>
                <div className="flex items-center justify-between border-t border-gold/10 pt-4">
                  <span className="text-gold font-bold">{s.price}</span>
                  <span className="text-gray-600 text-xs flex items-center gap-1">
                    <Clock size={12} /> {s.duration}
                  </span>
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-1.5 bg-gold/10 text-gold border border-gold/30 text-xs py-2.5 rounded tracking-wider uppercase hover:bg-gold hover:text-black transition-all duration-300"
                >
                  <MessageCircle size={13} />
                  {t('Book Now', 'Reservar')}
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-charcoal py-16 px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            {t('Ready to Book?', '¿Listo Para Reservar?')}
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            {t('Message us on WhatsApp and we\'ll confirm your slot in minutes.', 'Escríbenos por WhatsApp y confirmaremos tu cita en minutos.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-black font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors rounded"
            >
              <MessageCircle size={16} />
              {t('Book via WhatsApp', 'Reservar por WhatsApp')}
            </a>
            <a
              href="/book"
              className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold/10 transition-colors rounded"
            >
              {t('Online Form', 'Formulario en Línea')} <ChevronRight size={16} />
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
