import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const faqs = [
  {
    q: 'Do I need an appointment?',
    a: 'We welcome both appointments and walk-ins. However, booking in advance guarantees your preferred time slot, chosen barber, and a waiting-free experience.',
  },
  {
    q: 'How long does a haircut take?',
    a: 'A standard haircut typically takes 30-45 minutes. A Hair + Beard Combo takes 60-75 minutes. Our VIP Grooming Package is a full 2-hour experience.',
  },
  {
    q: 'Do you accept walk-ins?',
    a: 'Yes, we do! Walk-ins are welcome based on barber availability. To avoid waiting, we recommend booking in advance via our booking page or WhatsApp.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept cash (AED), all major credit/debit cards (Visa, Mastercard), and contactless payments. Apple Pay and Google Pay are also accepted.',
  },
  {
    q: 'Is parking available?',
    a: 'Yes, free parking is available at Emerald Tower in JVC. You will find ample parking directly at the location.',
  },
  {
    q: 'What are your opening hours?',
    a: 'We are open 7 days a week, from 9:00 AM to 10:00 PM. We are available on all public holidays so you can always look your best.',
  },
  {
    q: 'Which products do you use?',
    a: 'We use only premium international grooming brands known for quality and skin safety. Our shelves carry top-tier products for every hair type and skin concern.',
  },
  {
    q: "Do you offer children's haircuts?",
    a: "Absolutely! We offer a dedicated Kids Haircut service for young gentlemen aged 3-12, with patient and gentle barbers who make the experience fun and comfortable.",
  },
  {
    q: 'How can I book an appointment?',
    a: "You can book through our online booking form on this website, send us a WhatsApp message, or call us directly at +971 4 589 6390. It's quick and easy.",
  },
  {
    q: 'Where exactly is Black Mustache located?',
    a: 'We are inside Emerald Tower, G Floor, JVC District 18, Jumeirah Village Circle, Dubai. Use the directions link on our Contact page for precise navigation.',
  },
]

export default function FAQ() {
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
            Got Questions?
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-5xl text-white mb-4">
            <span className="text-gold">FAQ</span>
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-4" />
          <p className="text-gray-400 max-w-xl mx-auto">
            Everything you need to know before your visit.
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
                  <span className="text-white font-medium text-sm leading-snug">{faq.q}</span>
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
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto mt-12 bg-charcoal border border-gold/20 rounded p-8 text-center">
            <h2 className="font-serif text-xl text-white mb-2">Still have questions?</h2>
            <p className="text-gray-500 text-sm mb-6">We're always happy to help. Reach out to us directly.</p>
            <Link to="/contact" className="inline-block bg-gold text-black font-bold px-6 py-3 text-sm tracking-wider uppercase rounded hover:bg-gold-light transition-colors">
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
