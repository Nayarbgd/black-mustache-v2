import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Phone, ChevronRight, Clock, Award, Scissors, Shield, MessageCircle, MapPin } from 'lucide-react'

const WA_LINK = `https://wa.me/971553604706?text=Hello%20Black%20Mustache%20Gents%20Salon%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName%3A%0AService%3A%0APreferred%20Date%3A%0APreferred%20Time%3A%0A%0AThank%20you.`

const services = [
  { name: 'Signature Haircut', price: 'AED 60+', duration: '45 min' },
  { name: 'Beard Trim & Shape', price: 'AED 40+', duration: '30 min' },
  { name: 'Hair + Beard Combo', price: 'AED 90+', duration: '75 min' },
  { name: 'Hot Towel Shave', price: 'AED 70+', duration: '45 min' },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Black Mustache Gents Salon | Premium Barber Shop JVC Dubai</title>
        <meta name="description" content="Black Mustache Gents Salon — Dubai's premier men's grooming experience in Jumeirah Village Circle. Expert haircuts, beard trims, hot towel shaves & VIP packages. Book via WhatsApp." />
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

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6"
          >
            More Than A Haircut.
            <br />
            <span className="text-gold">A Statement.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-10"
          >
            Dubai's premium grooming experience at Emerald Tower, JVC. Walk in as a man. Walk out as a legend.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-black font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-all duration-300 rounded"
            >
              <MessageCircle size={16} />
              Book via WhatsApp
            </a>
            <a
              href="tel:+97145896390"
              className="inline-flex items-center justify-center gap-2 border border-gold text-gold font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold/10 transition-all duration-300 rounded"
            >
              <Phone size={16} />
              Call Now
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-gray-600 text-xs flex items-center justify-center gap-1.5"
          >
            <MapPin size={12} className="text-gold/50" />
            Emerald Tower, G Floor, JVC District 18, Jumeirah Village Circle, Dubai
          </motion.p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight size={24} className="text-gold/50 rotate-90" />
        </div>
      </section>

      {/* Credibility */}
      <section className="bg-charcoal py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs tracking-widest uppercase mb-3">Trusted by Dubai Gentlemen</p>
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">
            Professional Grooming in the Heart of JVC
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm leading-relaxed mb-10">
            Professional grooming, premium service, and attention to detail inside Emerald Tower, Jumeirah Village Circle. Your go-to barber shop for every occasion.
          </p>
          <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
            {[
              { value: '200+', label: 'Happy Clients' },
              { value: '8+', label: 'Services Offered' },
              { value: '7', label: 'Days a Week' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-serif text-3xl text-gold font-bold">{value}</p>
                <p className="text-gray-500 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-black py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Why Choose <span className="text-gold">Black Mustache</span>
            </h2>
            <div className="w-16 h-0.5 bg-gold mx-auto" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Scissors, title: 'Expert Barbers', desc: 'Years of mastery in classic and modern techniques.' },
              { icon: Award, title: 'Luxury Experience', desc: 'Every detail crafted for an exceptional grooming ritual.' },
              { icon: Clock, title: 'On Your Time', desc: 'Flexible scheduling. Book easily via WhatsApp or call.' },
              { icon: Shield, title: 'Premium Hygiene', desc: 'Hospital-grade sterilization and single-use tools.' },
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
              Our <span className="text-gold">Signature Services</span>
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
              View All Services <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gold py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-black font-bold mb-4">
            Ready to Elevate Your Look?
          </h2>
          <p className="text-black/70 mb-2">
            Book your appointment today and experience Dubai's finest grooming.
          </p>
          <p className="text-black/50 text-sm mb-8 flex items-center justify-center gap-1.5">
            <MapPin size={13} />
            Emerald Tower, G Floor, JVC District 18, Dubai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-gold font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-charcoal transition-colors rounded"
            >
              <MessageCircle size={16} />
              Book via WhatsApp
            </a>
            <a
              href="tel:+97145896390"
              className="inline-flex items-center justify-center gap-2 border border-black text-black font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-black/10 transition-colors rounded"
            >
              <Phone size={16} /> +971 4 589 6390
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
