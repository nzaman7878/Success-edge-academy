import React, { useState } from 'react'
import {
  Maximize2,
  Building,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Badge from './ui/Badge'
import Modal from './ui/Modal'
import { galleryData } from '../data/galleryData'

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="gallery" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Campus & Infrastructure"
          badgeIcon={Building}
          title="A Learning Environment Designed For"
          highlight="Peak Academic Focus"
          subtitle="Explore our air-conditioned interactive classrooms, high-tech STEM discovery laboratories, peaceful study library, and student celebration ceremonies."
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 cursor-pointer shadow-lg hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Text Information on Card */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <Badge variant="blue" size="sm">
                    {item.category}
                  </Badge>
                  <div className="w-8 h-8 rounded-full bg-slate-900/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          title={selectedImage.title}
          subtitle={selectedImage.category}
          maxWidth="max-w-4xl"
        >
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden max-h-[65vh] flex items-center justify-center bg-black/40 border border-white/10">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[60vh] object-contain"
              />
            </div>
            <p className="text-sm text-slate-300 bg-slate-950/50 p-4 rounded-xl border border-white/5">
              {selectedImage.caption}
            </p>
          </div>
        </Modal>
      )}
    </section>
  )
}
