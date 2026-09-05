import React from 'react'
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Award,
  Star,
  Flame,
  BookOpen,
} from 'lucide-react'
import Button from './ui/Button'
import Badge from './ui/Badge'

export default function Hero({ onBookDemoClick, onExploreCoursesClick }) {
  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      {/* Background glow decorations */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 -left-32 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-0 w-[500px] h-[300px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & High-Conversion Copy */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold mb-6 animate-pulse">
              <Flame className="w-4 h-4 text-amber-400" />
              <span>Admissions Open for 2026–2027 Batches</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-amber-200/80 font-normal">Early Bird Merit Discount</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-white tracking-tight leading-[1.12]">
              Give Your Child The{' '}
              <span className="gradient-text-gold">Winning Edge</span> in Boards,
              JEE & NEET.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              India's premier focused coaching institute with batches{' '}
              <strong className="text-white font-semibold">strictly capped at 25 students</strong>.
              Learn directly from veteran Ex-IITian & Medical mentors who turn potential into top
              ranks.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                variant="primary"
                size="lg"
                icon={Sparkles}
                iconPosition="right"
                onClick={onBookDemoClick}
                className="w-full sm:w-auto shadow-xl shadow-amber-500/25"
              >
                Book Free 2-Day Demo Class
              </Button>

              <Button
                variant="secondary"
                size="lg"
                icon={BookOpen}
                iconPosition="left"
                onClick={onExploreCoursesClick}
                className="w-full sm:w-auto"
              >
                Explore Courses & Syllabi
              </Button>
            </div>

            {/* Micro Trust Proof */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Free Demo Session</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Max 25 Students per Batch</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Up to 90% Scholarship Test</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Card & Social Proof Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Feature Showcase Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-7 border border-white/15 relative z-10 shadow-2xl shadow-black/60">
                {/* Header status */}
                <div className="flex items-center justify-between gap-3 pb-5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Seats Filling Fast
                    </span>
                  </div>
                  <Badge variant="gold" size="sm">
                    New Batches: April 2026
                  </Badge>
                </div>

                {/* Card Main Highlight */}
                <div className="py-5 space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400">All-India Rank 142 (JEE Adv)</div>
                      <div className="text-base font-bold text-white font-display">Aarav Sharma — IIT Bombay</div>
                      <div className="text-xs text-amber-400 font-medium mt-0.5">2-Year Integrated Classroom Student</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400">NEET 710 / 720 (AIR 318)</div>
                      <div className="text-base font-bold text-white font-display">Ananya Deshmukh — AIIMS</div>
                      <div className="text-xs text-emerald-400 font-medium mt-0.5">NEET Pulse Classroom Batch</div>
                    </div>
                  </div>
                </div>

                {/* Instant Action in Card */}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={onBookDemoClick}
                    className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-amber-500/25 transition-all group"
                  >
                    <span>Reserve Your Demo Seat Today</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2.5">
                    ⚡ Takes under 60 seconds • Only 6 seats left in next demo batch
                  </p>
                </div>

                {/* Floating parent review badge */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-300">
                    <strong className="text-white">4.9/5</strong> Parent Satisfaction
                  </span>
                </div>
              </div>

              {/* Decorative background border effect */}
              <div
                className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/20 via-blue-500/20 to-emerald-500/20 blur-sm -z-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
