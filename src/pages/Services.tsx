import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Clock, ChevronRight, MessageCircle } from 'lucide-react'

const WA_LINK = `https://wa.me/97145896390?text=Hello%20Black%20Mustache%20Gents%20Salon%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName%3A%0AService%3A%0APreferred%20Date%3A%0APreferred%20Time%3A%0A%0AThank%20you.`

const services = [
  {
    name: 'Signature Haircut',
    desc: 'A precision cut tailored to your face shape and style. Includes consultation, wash, cut, and styling.',
    duration: '45 min',
    price: 'AED 60',
    tag: 'Popular',
  },
  {
    name: 'Beard Trim & Shape',
    desc: 'Expert beard shaping and trimming that defines your jawline and completes your look.',
    duration: '30 min',
    price: 'AED 40',
    tag: '',
  },
  {
    name: 'Hair + Beard Combo',
    desc: 'The complete package. Haircut and beard grooming for a head-to-toe transformation.',
    duration: '75 min',
    price: 'AED 90',
    tag: 'Best Value',
  },
  {
    name: 'Skin Fade',
    desc: 'Ultra-precise skin fade that transitions seamlessly from skin to your desired length.',
    duration: '45 min',
    price: 'AED 70',
    tag: '',
  },
  {
    name: 'Hot Towel Shave',
    desc: 'An indulgent traditional wet shave. Hot towel, pre-shave oil, straight razor, and soothing balm.',
    duration: '45 min',
    price: 'AED 70',
    tag: 'Luxury',
  },
  {
    name: 'Hair Coloring',
    desc: 'Professional hair coloring using premium products. From natural enhancement to bold transformations.',
    duration: '90 min',
    price: 'AED 120',
    tag: '',
  },
  {
    name: 'Kids Haircut',
    desc: 'Gentle and patient haircut service for young gentlemen aged 3-12.',
    duration: '30 min',
    price: 'AED 45',
    tag: '',
  },
  {
    name: 'VIP Grooming Package',
    desc: 'The ultimate grooming ritual. Haircut + beard + hot towel shave + face treatment + scalp massage.',
    duration: '2 hrs',
    price: 'AED 200',
    tag: 'Premium',
  },
]

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services | Black Mustache Gents Salon Dubai — Haircut, Beard, Shave JVC</title>
        <meta name="description" content="Explore premium barbershop services at Black Mustache Gents Salon, Emerald Tower JVC Dubai. Haircuts, beard trims, hot towel shaves, skin fades & VIP grooming packages from AED 40." />
        <link rel="canonical" href="https://blackmustache.ae/services" />
      </Helmet>

      <div className="pt-20">
        <section className="bg-charcoal py-20 px-4 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold text-xs tracking-widest uppercase mb-3">
            What We Offer
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-5xl text-white mb-4">
            Our <span className="text-gold">Services</span>
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Crafted for the modern gentleman at Emerald Tower, JVC. Each service is a ritual designed to leave you looking and feeling your absolute best.
          </p>
        </section>

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
                <h2 className="font-serif text-lg text-white mb-2">{s.name}</h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
                <div className="flex items-center justify-between border-t border-gold/10 pt-4">
                  <span className="text-gold font-bold">{s.price}</span>
                  <span className="text-gray-600 text-xs flex items-center gap-1">
                    <Clock size={12} /> {s.duration}
                  </span>
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center justify-center gap-1.5 bg-gold/10 text-gold border border-gold/30 text-xs py-2.5 rounded tracking-wider uppercase hover:bg-gold hover:text-black transition-all duration-300"
                >
                  <MessageCircle size={13} />
                  Book Now
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-charcoal py-16 px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Ready to Book?</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Message us on WhatsApp and we'll confirm your slot in minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-black font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors rounded"
            >
              <MessageCircle size={16} />
              Book via WhatsApp
            </a>
            <a
              href="/book"
              className="inline-flex items-center justify-center gap-2 border border-gold text-gold px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold/10 transition-colors rounded"
            >
              Online Form <ChevronRight size={16} />
            </a>
          </div>
        </section>
      </div>
    </>
  )
}
