import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Heart, Target, Star, MapPin } from 'lucide-react'

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us | Black Mustache Gents Salon — Premium Barber JVC Dubai</title>
        <meta name="description" content="Learn about Black Mustache Gents Salon — Dubai's premier men's grooming destination inside Emerald Tower, Jumeirah Village Circle. Expert barbers, premium experience." />
        <link rel="canonical" href="https://blackmustache.ae/about" />
      </Helmet>

      <div className="pt-20">
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
              Our Story
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-5xl text-white mb-6">
              About <span className="text-gold">Black Mustache</span>
            </motion.h1>
            <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
            <p className="text-gray-300 leading-relaxed text-lg mb-4">
              Born from a passion for precision and a commitment to craft, Black Mustache Gents Salon was created for the modern Dubai gentleman who demands nothing but the best.
            </p>
            <p className="flex items-center justify-center gap-2 text-gold/70 text-sm">
              <MapPin size={14} />
              Emerald Tower, G Floor, JVC District 18, Jumeirah Village Circle, Dubai
            </p>
          </div>
        </section>

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
              <p className="text-gold text-xs tracking-widest uppercase mb-4">The Black Mustache Way</p>
              <h2 className="font-serif text-3xl text-white mb-6">Precision. Style. Confidence.</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Located inside Emerald Tower, G Floor, JVC District 18, Jumeirah Village Circle — our salon is more than just a place to get a haircut. It's a sanctuary for men who understand that how you present yourself matters.
                </p>
                <p>
                  Our barbers are not just skilled tradespeople — they are artists trained in the latest techniques from London, New York, and the Middle East's finest grooming academies.
                </p>
                <p>
                  From the moment you walk through our doors at Emerald Tower, every detail — the music, the atmosphere, the tools, the products — is curated to deliver an exceptional experience.
                </p>
              </div>

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
                    Get Directions →
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-charcoal py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                Our <span className="text-gold">Mission & Values</span>
              </h2>
              <div className="w-16 h-0.5 bg-gold mx-auto" />
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Our Mission',
                  text: "To redefine men's grooming in Dubai. We don't just cut hair — we build confidence, one appointment at a time, at the heart of Jumeirah Village Circle.",
                },
                {
                  icon: Star,
                  title: 'Our Standard',
                  text: 'Zero compromises. We use only premium products, sterilized tools, and methods refined through years of mastery and international training.',
                },
                {
                  icon: Heart,
                  title: 'Our Promise',
                  text: "You leave looking better than you arrived — every single time. If you're not satisfied, we make it right. No questions asked.",
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

        <section className="bg-black py-16 px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-white mb-4">Experience the Difference</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Visit us at Emerald Tower, JVC and discover what premium grooming truly means.
          </p>
          <Link to="/book" className="inline-block bg-gold text-black font-bold px-8 py-4 text-sm tracking-widest uppercase hover:bg-gold-light transition-colors rounded">
            Book Your Visit
          </Link>
        </section>
      </div>
    </>
  )
}
