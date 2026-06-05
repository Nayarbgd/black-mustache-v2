import { Link } from 'react-router-dom'
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-black border-t border-gold/20 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl text-gold font-bold mb-4">BLACK MUSTACHE</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {t(
              "Dubai's premier gents salon in JVC. Where precision meets luxury grooming.",
              'El salón de caballeros premium de Dubai en JVC. Donde la precisión se une al grooming de lujo.'
            )}
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="text-gold/60 hover:text-gold transition-colors"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook" className="text-gold/60 hover:text-gold transition-colors"><Facebook size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">{t('Navigation', 'Navegación')}</h4>
          <ul className="space-y-3">
            {[
              ['/services', t('Services', 'Servicios')],
              ['/book', t('Book Appointment', 'Reservar Cita')],
              ['/about', t('About Us', 'Nosotros')],
              ['/gallery', t('Gallery', 'Galería')],
              ['/faq', 'FAQ'],
              ['/contact', t('Contact', 'Contacto')],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-gray-400 hover:text-gold text-sm transition-colors">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">{t('Contact', 'Contacto')}</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-400 text-sm">
              <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
              JVC - Lazuward S W, Dubai, UAE
            </li>
            <li className="flex items-center gap-3 text-gray-400 text-sm">
              <Phone size={16} className="text-gold shrink-0" />
              <a href="tel:045896390" className="hover:text-gold transition-colors">04 589 6390</a>
            </li>
          </ul>
          <a
            href="https://wa.me/971045896390"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 bg-gold text-black text-sm font-semibold px-5 py-2.5 rounded hover:bg-gold-light transition-colors"
          >
            {t('WhatsApp Us', 'WhatsApp')}
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-600 text-xs">
          © {new Date().getFullYear()} Black Mustache Gents Salon. {t('All rights reserved.', 'Todos los derechos reservados.')}
        </p>
        <p className="text-gray-600 text-xs">
          {t('Barber Shop Dubai | JVC | Gents Salon', 'Barber Shop Dubai | JVC | Salón de Caballeros')}
        </p>
      </div>
    </footer>
  )
}
