"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

// Limitado a 4 imágenes para el Paquete Esencial
const photos = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
]

export function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const openPhoto = (index: number) => setSelectedIndex(index)
  const closePhoto = () => setSelectedIndex(null)

  const goNext = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % photos.length)
  }

  const goPrev = () => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length)
  }

  return (
    <section className="px-6 py-20 bg-[#fdfcf9]">
      <motion.div
        className="mx-auto max-w-2xl" // Achicamos el contenedor para 2 columnas
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="mb-2 text-center font-sans text-[10px] tracking-[0.3em] text-accent uppercase font-bold">
          Recuerdos
        </p>
        <h2 className="mb-10 text-center font-serif text-3xl font-light tracking-wide text-primary italic">
          Mis Momentos
        </h2>

        {/* Grilla de 2x2 para el Esencial */}
        <div className="grid grid-cols-2 gap-3 md:gap-4">
          {photos.map((src, i) => (
            <motion.button
              key={src}
              className="group relative aspect-square overflow-hidden rounded-md shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              onClick={() => openPhoto(i)}
            >
              <Image
                src={src}
                alt={`Momento ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Lightbox - Se mantiene igual porque es funcional */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePhoto}
          >
            <button className="absolute top-4 right-4 z-10 text-white" onClick={closePhoto}>
              <X className="h-6 w-6" />
            </button>
            <button className="absolute left-4 z-10 text-white" onClick={(e) => { e.stopPropagation(); goPrev() }}>
              <ChevronLeft className="h-8 w-8" />
            </button>
            <button className="absolute right-4 z-10 text-white" onClick={(e) => { e.stopPropagation(); goNext() }}>
              <ChevronRight className="h-8 w-8" />
            </button>
            <motion.div key={selectedIndex} className="relative h-[70vh] w-full max-w-3xl" initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
              <Image src={photos[selectedIndex]} alt="Foto" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}