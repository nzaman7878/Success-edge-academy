import React, { useState } from 'react'
import {
  MessageSquare,
  Star,
  Quote,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Card from './ui/Card'
import Button from './ui/Button'
import Badge from './ui/Badge'
import { testimonialsData } from '../data/testimonialsData'

export default function TestimonialsSection({ onBookDemoClick }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1))
  }

  return (
    <section id="testimonials" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Verified Parent & Student Reviews"
          badgeIcon={MessageSquare}
          title="Hear From Families Whose"
          highlight="Lives Were Transformed"
          subtitle="Read honest reviews from parents and students who chose personal mentorship over impersonal mass coaching."
        />

        {/* Testimonials Grid for Desktop / Featured Carousel for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonialsData.map((item) => (
            <Card
              key={item.id}
              className="flex flex-col justify-between border-white/15 bg-gradient-to-b from-slate-900/90 to-slate-950/95"
            >
              <div>
                {/* Header: Stars & Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Badge variant="gold" size="sm">
                    {item.tag}
                  </Badge>
                </div>

                {/* Quote Content */}
                <div className="relative pl-4 border-l-2 border-amber-400/50 mb-6">
                  <Quote className="w-5 h-5 text-amber-400/40 mb-2" />
                  <p className="text-sm text-slate-300 leading-relaxed italic">
                    "{item.comment}"
                  </p>
                </div>
              </div>

              {/* Author details */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white font-display">
                    {item.author}
                  </h4>
                  <p className="text-xs text-amber-400 font-medium">{item.relation}</p>
                </div>
                <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Social Proof Bar */}
        <div className="rounded-2xl bg-slate-900/60 border border-white/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-black text-xl font-display shrink-0">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-400 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                Rated <strong className="text-white font-semibold">4.9 / 5</strong> across 1,200+
                verified student and parent reviews.
              </p>
            </div>
          </div>

          <Button
            variant="primary"
            size="sm"
            icon={Sparkles}
            onClick={onBookDemoClick}
            className="shrink-0"
          >
            Experience It For Yourself
          </Button>
        </div>
      </div>
    </section>
  )
}
