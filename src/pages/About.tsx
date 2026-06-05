import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Target, Star, MapPin } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { t } = useLanguage()

  return (
    <>
      <Helmet>
        <title>About Us | Black Mustache Gents Salon — Premium Barber JVC Dubai</title>
        <meta name="description" content="Learn about Black Mustache Gents Salon — Dubai's premier men's grooming destination inside Emerald Tower, Jumeirah Village Circle. Expert barbers, premium experience." />
        <link rel="canonical" href="https://blackmustache.ae/about" />
      </Helmet>

      <div className="pt-20">
        {/* Hero */}
        <section className="relative bg-charcoal py-24 px-4 overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="relative max-w-3xl mx-auto text-center">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold text-xs tracking-widest uppercase mb-3">
              {t('Our Story', 'Nuestra Historia')}
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-5xl text-white mb-6">
              {t('About ', 'Sobre ')}<span className="text-gold">Black Mustache</span>
            </motion.h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              {t(
                "Born from a passion for precision and a commitment to craft, Black Mustache Gents Salon was created for the modern Dubai gentleman who demands nothing but the best.",
                "Nacido de la pasión por la precisión y el compromiso con el oficio, Black Mustache Gents Salon fue creado para el caballero moderno de Dubai que exige lo mejor."
              )}
            </p>
            <p className="flex items-center justify-center gap-2 text-gold/70 text-sm">
              <MapPin size={14} />
              Emerald Tower, G Floor, JVC District 18, Jumeirah Village Circle, Dubai
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="bg-black py-20 px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div
                className="rounded aspect-[4/5] bg-charcoal overflow-hidden"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-gold text-xs tracking-widest uppercase mb-4">{t('The Black Mustache Way', 'El Camino Black Mustache')}</p>
              <h2 className="font-serif text-3xl text-white mb-6">
                {t('Precision. Style. Confidence.', 'Precisión. Estilo. Confianza.')}
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  {t(
                    "Located inside Emerald Tower, G Floor, JVC District 18, Jumeirah Village Circle — our salon is more than just a place to get a haircut. It's a sanctuary for men who understand that how you present yourself matters.",
                    "Ubicado en el interior de Emerald Tower, Planta Baja, Distrito JVC 18, Jumeirah Village Circle — nuestro salón es más que un lugar para cortarse el pelo. Es un santuario para hombres que entienden que la presentación importa."
                  )}
                </p>
                <p>
                  {t(
                    "Our barbers are not just skilled tradespeople — they are artists trained in the latest techniques from London, New York, and the Middle East's finest grooming academies.",
                    "Nuestros barberos no son solo artesanos habilidosos — son artistas entrenados en las últimas técnicas de Londres, Nueva York y las mejores academias de grooming de Medio Oriente."
                  )}
                </p>
                <p>
                  {t(
                    "From the moment you walk through our doors at Emerald Tower, every detail — the music, the atmosphere, the tools, the products — is curated to deliver an exceptional experience.",
                    "Desde el momento en que entras por nuestras puertas en Emerald Tower, cada detalle — la música, el ambiente, las herramientas, los productos — está diseñado para ofrecer una experiencia excepcional."
                  )}
                </p>
              </div>

              {/* Address card */}
              <div className="mt-8 bg-charcoal border border-gold/20 rounded p-5 flex items-start gap-3">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <p className="text-white text-sm font-medium mb-1">Black Mustache Gents Salon</p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Emerald Tower, G Floor, 15/7, 8 Street<br />
                    JVC District 18, Jumeirah Village Circle<br />
                    Dubai, United Arab Emirates
                  </p>
                  <a
                    href="https://go.2gis.com/s6ioj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-gold text-xs hover:underline"
                  >
                    {t('Get Directions', 'Cómo Llegar')} →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="bg-charcoal py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                {t('Our ', 'Nuestros ')}<span className="text-gold">{t('Mission & Values', 'Misión y Valores')}</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: t('Our Mission', 'Nuestra Misión'),
                  text: t(
                    "To redefine men's grooming in Dubai. We don't just cut hair — we build confidence, one appointment at a time, at the heart of Jumeirah Village Circle.",
                    "Redefinir el grooming masculino en Dubai. No solo cortamos cabello — construimos confianza, una cita a la vez, en el corazón de Jumeirah Village Circle."
                  ),
                },
                {
                  icon: Star,
                  title: t('Our Standard', 'Nuestro Estándar'),
                  text: t(
                    "Zero compromises. We use only premium products, sterilized tools, and methods refined through years of mastery and international training.",
                    "Cero compromisos. Usamos solo productos premium, herramientas esterilizadas y métodos refinados durante años de maestría y formación internacional."
                  ),
                },
                {
                  icon: Heart,
                  title: t('Our Promise', 'Nuestra Promesa'),
                  text: t(
                    "You leave looking better than you arrived — every single time. If you're not satisfied, we make it right. No questions asked.",
                    "Sales mejor de lo que llegaste — cada vez. Si no estás satisfecho, lo arreglamos. Sin preguntas."
                  ),
                },
              ].map(({ icon: Icon, title, text }) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-black border border-gold/20 p-8 rounded"
                >
                  <div className="w-12 h-12 border border-gold/40 rounded-full flex items-center justify-center mb-4">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="font-serif text-xl text-white mb-3">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black py-16 px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            {t('Experience the Difference', 'Experimenta la Diferencia')}
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            {t(
              'Visit us at Emerald Tower, JVC and discover what premium grooming truly means.',
              'Visítanos en Emerald Tower, JVC y descubre lo que el grooming premium realmente significa.'
            )}
          </p>
          <Link to="/book" className="inline-block bg-gold text-black font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors rounded">
            {t('Book Your Visit', 'Reservar Tu Visita')}
          </Link>
        </section>
      </div>
    </>
  )
}
