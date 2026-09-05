import React from 'react'
import {
  GraduationCap,
  Award,
  BookOpen,
  Sparkles,
  CheckCircle,
  Briefcase,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Card from './ui/Card'
import Button from './ui/Button'
import Badge from './ui/Badge'
import { facultyData } from '../data/facultyData'

export default function FacultySection({ onBookDemoClick }) {
  return (
    <section id="faculty" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Expert Educators"
          badgeIcon={GraduationCap}
          title="Learn From Teachers Who Have"
          highlight="Mastered The Exam"
          subtitle="No junior interns or rotating substitutes. Our core faculty has 10+ years of dedicated mentoring experience producing top 100 ranks year after year."
        />

        {/* Faculty Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyData.map((faculty) => (
            <Card
              key={faculty.id}
              className="flex flex-col justify-between border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/95"
            >
              <div>
                {/* Faculty Photo */}
                <div className="relative mb-5 overflow-hidden rounded-2xl aspect-square border border-white/10 group">
                  <img
                    src={faculty.image}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <Badge variant="gold" size="sm">
                      {faculty.experience}
                    </Badge>
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-white font-display">
                  {faculty.name}
                </h3>
                <div className="text-xs font-semibold text-amber-400 mb-1">
                  {faculty.role}
                </div>
                <div className="text-[11px] text-slate-400 font-medium pb-3 mb-3 border-b border-white/10">
                  {faculty.qualification}
                </div>

                <div className="text-xs text-slate-300 leading-relaxed mb-4">
                  {faculty.bio}
                </div>

                <div className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 text-[11px] text-slate-300 mb-4">
                  <span className="text-slate-400 block font-semibold mb-0.5">Specialization:</span>
                  <span className="text-amber-300 font-medium">{faculty.specialization}</span>
                </div>
              </div>

              {/* Action */}
              <div className="pt-2">
                <Button
                  variant="secondary"
                  size="sm"
                  fullWidth
                  icon={Sparkles}
                  iconPosition="right"
                  onClick={onBookDemoClick}
                >
                  Book Demo With Faculty
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
