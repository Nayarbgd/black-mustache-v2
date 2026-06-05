import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Phone, Star, ChevronRight, Clock, Award, Scissors, Shield } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const reviews = [
  { name: 'Ahmed K.', rating: 5, text: 'Best barber in JVC. The skin fade is immaculate every time.', date: 'Nov 2024' },
  { name: 'Carlos M.', rating: 5, text: 'Outstanding service. The hot towel shave was an experience I keep coming back for.', date: 'Oct 2024' },
  { name: 'Omar F.', rating: 5, text: 'Premium salon, premium results. My beard has never looked better.', date: 'Oct 2024' },
]

const services = [
  { name: 'Signature Haircut', price: 'AED 60+', duration: '45 min' },
  { name: 'Beard Trim & Shape', price: 'AED 40+', duration: '30 min' },
  { name: 'Hair + Beard Combo', price: 'AED 90+', duration: '75 min' },
  { name: 'Hot Towel Shave', price: 'AED 70+', duration: '45 min' },
]

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>Black Mustache Gents Salon | Premium Barber Shop JVC Dubai</title>
        <meta name="description" content="Dubai's premier men's grooming salon in JVC. Expert haircuts, beard trims, hot towel shaves & VIP packages. Book your appointment at Black Mustache today." />
        <link rel="canonical" href="https://blackmustache.ae/" />
      </Helmet>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-charcoal/30 to-black" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-sm font-semibold tracking-widest uppercase mb-6"
          >
            {t('JVC Dubai • Premium Gents Salon', 'JVC Dubai • Salón Premium de Caballeros')}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
          >
            {t('More Than A Haircut.', 'Más Que Un Corte.')}
            <br />
            <span className="text-gold">{t('A Statement.', 'Una Declaración.')}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            {t(
              "Dubai's premium grooming experience. Walk in as a man. Walk out as a legend.",
              'La experiencia premium de grooming en Dubai. Entra como hombre. Sal como leyenda.'
            )}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/book"
              className="bg-gold text-black font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 rounded"
            >
              {t('Book Appointment', 'Reservar Cita')}
            </Link>
            <a
              href="tel:045896390"
              className="border border-gold text-gold font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold/10 transition-all duration-300 rounded flex items-center justify-center gap-2"
            >
              <Phone size={16} />
              {t('Call Now', 'Llamar Ahora')}
            </a>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight size={24} className="text-gold/50 rotate-90" />
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-charcoal py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={20} className="text-gold fill-gold" />)}
            </div>
            <p className="text-gray-400 text-sm">{t('5.0 Rating • 200+ Happy Clients', 'Calificación 5.0 • 200+ Clientes Satisfechos')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black border border-gold/20 p-6 rounded"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} size={14} className="text-gold fill-gold" />)}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="flex justify-between items-center">
                  <span className="text-gold text-sm font-semibold">{r.name}</span>
                  <span className="text-gray-600 text-xs">{r.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              {t('Why Choose ', 'Por Qué Elegir ')}<span className="text-gold">{t('Black Mustache', 'Black Mustache')}</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Scissors, title: t('Expert Barbers', 'Barberos Expertos'), desc: t('Years of mastery in classic and modern techniques.', 'Años de maestría en técnicas clásicas y modernas.') },
              { icon: Award, title: t('Luxury Experience', 'Experiencia de Lujo'), desc: t('Every detail crafted for an exceptional grooming ritual.', 'Cada detalle diseñado para un ritual excepcional.') },
              { icon: Clock, title: t('On Your Time', 'A Tu Hora'), desc: t('Flexible scheduling. Book easily via WhatsApp or call.', 'Horarios flexibles. Reserva por WhatsApp o llamada.') },
              { icon: Shield, title: t('Premium Hygiene', 'Higiene Premium'), desc: t('Hospital-grade sterilization and single-use tools.', 'Esterilización de grado hospitalario y herramientas de un solo uso.') },
            ].map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center p-6"
              >
                <div className="w-14 h-14 border border-gold/40 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className="font-serif text-lg text-white mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="bg-charcoal py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              {t('Our ', 'Nuestros ')}<span className="text-gold">{t('Signature Services', 'Servicios Signature')}</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {services.map((s) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-black border border-gold/20 p-6 rounded group hover:border-gold/60 transition-colors"
              >
                <h3 className="font-serif text-lg text-white mb-2">{s.name}</h3>
                <p className="text-gray-500 text-xs mb-4 flex items-center gap-1"><Clock size={12} /> {s.duration}</p>
                <p className="text-gold font-bold text-lg">{s.price}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="inline-flex items-center gap-2 text-gold border border-gold px-6 py-3 text-sm tracking-wider hover:bg-gold/10 transition-colors rounded">
              {t('View All Services', 'Ver Todos los Servicios')} <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-black font-bold mb-4">
            {t('Ready to Elevate Your Look?', '¿Listo Para Elevar Tu Imagen?')}
          </h2>
          <p className="text-black/70 mb-8">
            {t('Book your appointment today and experience Dubai\'s finest grooming.', 'Reserva tu cita hoy y experimenta el mejor grooming de Dubai.')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book" className="bg-black text-gold font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-charcoal transition-colors rounded">
              {t('Book Appointment', 'Reservar Cita')}
            </Link>
            <a href="tel:045896390" className="border border-black text-black font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-black/10 transition-colors rounded flex items-center justify-center gap-2">
              <Phone size={16} /> 04 589 6390
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
