import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()
  const location = useLocation()

  const links = [
    { to: '/', label: t('Home', 'Inicio') },
    { to: '/services', label: t('Services', 'Servicios') },
    { to: '/book', label: t('Book Now', 'Reservar') },
    { to: '/about', label: t('About', 'Nosotros') },
    { to: '/gallery', label: t('Gallery', 'Galería') },
    { to: '/faq', label: t('FAQ', 'FAQ') },
    { to: '/contact', label: t('Contact', 'Contacto') },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-serif text-xl text-gold font-bold tracking-wide">
            BLACK MUSTACHE
          </Link>
          <div className="hidden lg:flex items-center gap-8">
            {links.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium tracking-wider transition-colors ${
                  location.pathname === link.to
                    ? 'text-gold'
                    : 'text-gray-300 hover:text-gold'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
              className="text-xs border border-gold/40 text-gold px-3 py-1 rounded hover:bg-gold/10 transition-colors"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </div>
          <button className="lg:hidden text-gold" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-black border-t border-gold/20 px-4 py-6 flex flex-col gap-4">
          {links.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`text-sm font-medium tracking-wider ${
                location.pathname === link.to ? 'text-gold' : 'text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="text-xs border border-gold/40 text-gold px-3 py-1 rounded self-start"
          >
            {lang === 'en' ? 'Español' : 'English'}
          </button>
        </div>
      )}
    </nav>
  )
}
