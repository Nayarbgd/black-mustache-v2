import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  { src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&q=80', category: 'haircut', alt: 'Premium haircut at Black Mustache Dubai' },
  { src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&q=80', category: 'beard', alt: 'Expert beard grooming in JVC Dubai' },
  { src: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&q=80', category: 'haircut', alt: 'Skin fade haircut Dubai barbershop' },
  { src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80', category: 'beard', alt: 'Beard trim and shape at Black Mustache' },
  { src: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?w=800&q=80', category: 'beard', alt: 'Hot towel shave premium barbershop' },
  { src: 'https://res.cloudinary.com/djepsudop/image/upload/v1780636127/Gemini_Generated_Image_hc7kwehc7kwehc7k_ehso6l.png', category: 'interior', alt: 'Black Mustache Gents Salon ambience Dubai' },
  { src: 'https://res.cloudinary.com/djepsudop/image/upload/v1780636103/2026-06-05_06h50_46_p7jkfy.png', category: 'haircut', alt: 'Premium haircut service at Black Mustache JVC' },
  { src: 'https://res.cloudinary.com/djepsudop/image/upload/v1780636105/2026-06-05_06h51_34_ydsj7f.png', category: 'transformation', alt: 'Grooming transformation at Black Mustache Dubai' },
]

const categories = [
  { key: 'all', label: 'All' },
  { key: 'haircut', label: 'Haircuts' },
  { key: 'beard', label: 'Beard Work' },
  { key: 'interior', label: 'Salon' },
  { key: 'transformation', label: 'Transformations' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = activeCategory === 'all' ? images : images.filter(i => i.category === activeCategory)

  const navigate = (dir: 1 | -1) => {
    if (lightbox === null) return
    setLightbox((lightbox + dir + filtered.length) % filtered.length)
  }

  return (
    <>
      <Helmet>
        <title>Gallery | Black Mustache Gents Salon — Haircuts & Transformations Dubai</title>
        <meta name="description" content="Browse our gallery of premium haircuts, beard work, and grooming transformations at Black Mustache Gents Salon in JVC Dubai. See the results for yourself." />
        <link rel="canonical" href="https://blackmustache.ae/gallery" />
      </Helmet>

      <div className="pt-20">
        <section className="bg-charcoal py-20 px-4 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gold text-xs tracking-widest uppercase mb-3">
            Our Work
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-serif text-4xl md:text-5xl text-white mb-4">
            The <span className="text-gold">Gallery</span>
          </motion.h1>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </section>

        <section className="bg-black py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex gap-3 flex-wrap justify-center mb-10">
              {categories.map(c => (
                <button
                  key={c.key}
                  onClick={() => setActiveCategory(c.key)}
                  className={`px-5 py-2 text-xs tracking-widest uppercase rounded border transition-all duration-300 ${
                    activeCategory === c.key
                      ? 'bg-gold text-black border-gold font-bold'
                      : 'border-gold/30 text-gray-400 hover:border-gold/60 hover:text-gold'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-3">
              <AnimatePresence>
                {filtered.map((img, i) => (
                  <motion.div
                    key={img.src}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    onClick={() => setLightbox(i)}
                    className="cursor-pointer overflow-hidden rounded group aspect-square bg-charcoal relative"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ filter: 'brightness(0.82) contrast(1.08) saturate(0.75) sepia(0.18)' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none group-hover:from-black/30 transition-all duration-500" />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-4 right-4 text-white hover:text-gold" onClick={() => setLightbox(null)}>
              <X size={32} />
            </button>
            <button
              className="absolute left-4 text-white hover:text-gold p-2"
              onClick={(e) => { e.stopPropagation(); navigate(-1) }}
            >
              <ChevronLeft size={40} />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              className="max-w-3xl w-full max-h-[85vh] object-contain rounded"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute right-4 text-white hover:text-gold p-2"
              onClick={(e) => { e.stopPropagation(); navigate(1) }}
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
