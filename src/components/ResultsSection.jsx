import React, { useState } from 'react'
import {
  Trophy,
  Sparkles,
  Quote,
  CheckCircle2,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Card from './ui/Card'
import Button from './ui/Button'
import Badge from './ui/Badge'
import { toppersData, topperFilters } from '../data/toppersData'

export default function ResultsSection({ onBookDemoClick }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredToppers =
    activeFilter === 'all'
      ? toppersData
      : toppersData.filter((topper) => topper.category === activeFilter)

  return (
    <section id="results" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Hall of Fame • 2025 Results"
          badgeIcon={Trophy}
          title="Results That Speak Louder Than"
          highlight="Advertisements"
          subtitle="Real students, verified All-India Ranks, and authentic scores. Our small batch mentorship produces toppers in every major engineering, medical, and board examination."
        />

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12">
          {topperFilters.map((filter) => {
            const isActive = activeFilter === filter.id
            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white border border-white/10'
                }`}
              >
                {filter.label}
              </button>
            )
          })}
        </div>

        {/* Toppers Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredToppers.map((topper) => (
            <Card
              key={topper.id}
              className="flex flex-col justify-between border-white/15 bg-gradient-to-b from-slate-900/90 to-slate-950/95"
            >
              <div>
                {/* Top header: Exam & Year */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="blue" size="sm">
                    {topper.exam} • {topper.year}
                  </Badge>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold font-display">{topper.rank}</span>
                  </div>
                </div>

                {/* Student Info & Score Banner */}
                <div className="flex items-center gap-4 mb-5">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-16 h-16 rounded-2xl object-cover border-2 border-amber-400/40 shadow-md shrink-0"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      {topper.name}
                    </h3>
                    <div className="text-amber-400 font-extrabold text-sm sm:text-base tracking-tight">
                      {topper.score}
                    </div>
                    <div className="text-xs text-emerald-400 font-medium">
                      {topper.college}
                    </div>
                  </div>
                </div>

                {/* Batch Taken Pill */}
                <div className="text-[11px] font-medium text-slate-400 bg-white/5 px-3 py-1.5 rounded-lg mb-4 inline-block">
                  Program: <span className="text-slate-200">{topper.program}</span>
                </div>

                {/* Quote */}
                <div className="relative pl-4 border-l-2 border-amber-400/50 py-1">
                  <Quote className="w-4 h-4 text-amber-400/40 mb-1" />
                  <p className="text-xs sm:text-sm text-slate-300 italic leading-relaxed">
                    "{topper.quote}"
                  </p>
                </div>
              </div>

              {/* Verified Ribbon */}
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Score Card
                </span>
                <span>Success Edge Alumni</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Conversion Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 border border-amber-400/30 p-8 text-center max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
            Want Your Child’s Name on Our Next Hall of Fame?
          </h3>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-6">
            Admissions for 2026–2027 classroom batches are strictly on a first-come, first-evaluated
            merit basis. Reserve a seat in our free 2-day demo class today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="md"
              icon={Sparkles}
              onClick={onBookDemoClick}
            >
              Book Free Demo Class
            </Button>
            <a
              href="#courses"
              className="text-xs sm:text-sm font-semibold text-amber-400 hover:text-amber-300 hover:underline"
            >
              View Available Batches & Schedule →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
