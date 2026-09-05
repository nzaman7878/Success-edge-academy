import React from 'react'
import {
  Users2,
  CheckCircle2,
  XCircle,
  HelpCircle,
  BarChart3,
  BookOpenCheck,
  GraduationCap,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Card from './ui/Card'
import Button from './ui/Button'
import Badge from './ui/Badge'
import { academyInfo } from '../data/academyInfo'

export default function AboutSection({ onBookDemoClick }) {
  const comparisonItems = [
    {
      feature: 'Batch Size',
      traditional: '80 to 150+ students packed into auditoriums',
      edge: 'Strictly capped at 25 students per class',
    },
    {
      feature: 'Doubt Resolution',
      traditional: 'Endless token lines; often handled by interns',
      edge: 'Dedicated daily 1-on-1 desk with senior faculty',
    },
    {
      feature: 'Teaching Faculty',
      traditional: 'Star teachers only for top batch; others get beginners',
      edge: 'All batches taught directly by IITian & MBBS mentors',
    },
    {
      feature: 'Parent Communication',
      traditional: 'Generic SMS or once-a-year chaotic PTM',
      edge: 'Bi-weekly WhatsApp scorecards & personalized counseling',
    },
    {
      feature: 'Study Material',
      traditional: 'Generic bulky modules with zero localized focus',
      edge: 'Custom printed modules + NCERT line-by-line boosters',
    },
  ]

  const pillars = [
    {
      title: 'Batch Size Capped at 25',
      desc: 'Zero backbenchers. Every student is within direct eye contact of the mentor, ensuring high focus and active participation.',
      icon: Users2,
      badge: 'Core Principle',
    },
    {
      title: 'Daily 1-on-1 Doubt Desk',
      desc: 'Never go to sleep with an unsolved question. Faculty are available before and after class to resolve doubts patiently.',
      icon: HelpCircle,
      badge: 'Zero Backlog',
    },
    {
      title: 'Concept-First Mastery',
      desc: 'Formulas are derived and understood, not crammed. We build foundational intuition before tackling Olympiad & JEE Advanced problems.',
      icon: BookOpenCheck,
      badge: 'Deep Learning',
    },
    {
      title: 'Continuous Metric Tracking',
      desc: 'Bi-weekly tests on exact NTA CBT patterns with AI error analysis so students know exactly where they lost marks.',
      icon: BarChart3,
      badge: 'Data-Driven',
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Why Success Edge Academy"
          badgeIcon={GraduationCap}
          title="The Methodology That Turns"
          highlight="Aspirants Into Toppers"
          subtitle="We founded Success Edge Academy to replace impersonal mass coaching with an empathetic, high-standard mentoring model where no student is left behind."
        />

        {/* Founder Story Callout */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-950/40 border border-white/10 p-6 sm:p-10 mb-16 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <Badge variant="gold" size="sm">
                Director’s Commitment
              </Badge>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                "Every child possesses immense potential when given the right mentor, not just a lecture."
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Over the past 15 years, we witnessed thousands of capable students get demoralized in
                giant coaching factories where batches exceeded 120 students. A student who has one
                unresolved doubt in kinematics ends up struggling in rotational motion, then electromagnetism,
                and eventually gives up on physics altogether.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At Success Edge, we capped our batches at 25 so our teachers can look every student in the
                eye, spot hesitation immediately, and correct foundational gaps before they turn into score
                drops. That is why our selection percentage is unmatched.
              </p>
              <div className="pt-2 flex items-center gap-4">
                <div>
                  <div className="font-bold text-white font-display text-base">Dr. Rajeshwar Rao</div>
                  <div className="text-xs text-amber-400">Founder & Academic Director (Ex-IIT Roorkee)</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-slate-950/60 border border-white/10 text-center">
              <div className="text-5xl font-black font-display text-amber-400">25</div>
              <div className="text-sm font-bold text-white mt-1 uppercase tracking-wider">
                Max Batch Size
              </div>
              <p className="text-xs text-slate-400 mt-2">
                While others pack 100+ students, we guarantee small classes for guaranteed personal attention.
              </p>
              <div className="mt-5 w-full">
                <Button variant="primary" size="sm" fullWidth onClick={onBookDemoClick}>
                  Experience The Difference
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <Card key={idx} hover={true} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge variant="blue" size="sm">
                      {pillar.badge}
                    </Badge>
                  </div>
                  <h4 className="text-lg font-bold text-white font-display mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Traditional Coaching vs Success Edge Comparison Table */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              How We Compare To Traditional Mass Coaching
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              See why parents and rankers switch to Success Edge Academy
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-slate-400">
                  <th className="py-3.5 px-4 font-semibold">Key Feature</th>
                  <th className="py-3.5 px-4 font-semibold text-rose-400">Traditional Mass Coaching</th>
                  <th className="py-3.5 px-4 font-bold text-amber-400 bg-amber-500/5 rounded-t-xl">
                    ⭐ Success Edge Academy
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {comparisonItems.map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-semibold text-white whitespace-nowrap">
                      {item.feature}
                    </td>
                    <td className="py-4 px-4 text-slate-400">
                      <div className="flex items-start gap-2">
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                        <span>{item.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-slate-200 bg-amber-500/5 font-medium">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-white font-semibold">{item.edge}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
