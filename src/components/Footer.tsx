import { Link } from 'react-router-dom'
import { Phone, MapPin, Instagram, MessageCircle, ExternalLink } from 'lucide-react'

const logo = '/logo/logo.png'

const WA_LINK = `https://wa.me/971553604706?text=Hello%20Black%20Mustache%20Gents%20Salon%2C%0A%0AI%20would%20like%20to%20book%20an%20appointment.%0A%0AName%3A%0AService%3A%0APreferred%20Date%3A%0APreferred%20Time%3A%0A%0AThank%20you.`

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gold/20 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <Link to="/">
            <img
              src={logo}
              alt="Black Mustache Gents Salon"
              className="h-20 w-auto object-contain mb-4"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-2">
            Dubai's premier gents salon in Jumeirah Village Circle. Where precision meets luxury grooming.
          </p>
          <p className="text-gray-600 text-xs mb-6">
            Emerald Tower, G Floor, JVC District 18 — Dubai, UAE
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/black.mustache.gents.salon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-gold/60 hover:text-gold transition-colors"
            >
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">Navigation</h4>
          <ul className="space-y-3">
            {[
              ['/services', 'Services'],
              ['/book', 'Book Appointment'],
              ['/about', 'About Us'],
              ['/gallery', 'Gallery'],
              ['/faq', 'FAQ'],
              ['/contact', 'Contact'],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-gray-400 hover:text-gold text-sm transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">Contact</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              <span>
                Emerald Tower, G Floor<br />
                JVC District 18<br />
                Jumeirah Village Circle<br />
                Dubai, UAE
              </span>
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <Phone size={16} className="text-gold shrink-0" />
              <a href="tel:+97145896390" className="hover:text-gold transition-colors">+971 4 589 6390</a>
            </li>
            <li>
              <a
                href="https://go.2gis.com/s6ioj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-500 text-xs hover:text-gold transition-colors"
              >
                <ExternalLink size={12} /> Get Directions
              </a>
            </li>
          </ul>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-gold text-black text-sm font-semibold px-5 py-2.5 rounded hover:bg-gold-light transition-colors"
          >
            <MessageCircle size={15} />
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Black Mustache Gents Salon. All rights reserved.
        </p>
        <p className="text-gray-600 text-xs">
          Barber Shop Dubai | JVC | Gents Salon | Emerald Tower
        </p>
      </div>
    </footer>
  )
}
