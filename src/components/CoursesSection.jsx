import React, { useState } from 'react'
import {
  BookOpen,
  Calendar,
  Clock,
  CheckCircle2,
  Users,
  Sparkles,
  ArrowRight,
  Download,
  Layers,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Card from './ui/Card'
import Button from './ui/Button'
import Badge from './ui/Badge'
import { coursesData, courseCategories } from '../data/coursesData'

export default function CoursesSection({ onSelectCourse, onEnquireCourse }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredCourses =
    activeCategory === 'all'
      ? coursesData
      : coursesData.filter((course) => course.category === activeCategory)

  return (
    <section id="courses" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Academic Programs 2026–2027"
          badgeIcon={BookOpen}
          title="Goal-Driven Courses Built For"
          highlight="Maximum Ranks"
          subtitle="Explore our comprehensive classroom and hybrid coaching programs. Small batches of 25 students ensure you are always mentored, never overlooked."
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {courseCategories.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-105'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="flex flex-col justify-between border-white/15 bg-gradient-to-b from-slate-900/90 to-slate-950/95"
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant={course.badgeVariant || 'gold'} size="sm">
                    {course.badge}
                  </Badge>
                  <span className="text-[11px] font-semibold text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    {course.seatsLeft} Seats Remaining
                  </span>
                </div>

                {/* Course Title & Target */}
                <h3 className="text-xl font-bold font-display text-white mb-2 leading-snug">
                  {course.title}
                </h3>
                <p className="text-xs font-medium text-amber-400 mb-4">
                  Target: {course.targetAudience}
                </p>

                {/* Quick details pill row */}
                <div className="flex flex-wrap items-center gap-2 pb-4 mb-4 border-b border-white/10 text-xs text-slate-300">
                  <div className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-lg">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    <span>Starts {course.batchStarts}</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/5 px-2.5 py-1 rounded-lg">
                    <Layers className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{course.mode}</span>
                  </div>
                </div>

                {/* Overview excerpt */}
                <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
                  {course.overview}
                </p>

                {/* Highlights list */}
                <div className="space-y-2 mb-6">
                  {course.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                <Button
                  variant="primary"
                  size="sm"
                  fullWidth
                  icon={Sparkles}
                  iconPosition="right"
                  onClick={() => onEnquireCourse?.(course)}
                >
                  Book Demo For This Course
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  fullWidth
                  icon={BookOpen}
                  iconPosition="left"
                  onClick={() => onSelectCourse?.(course)}
                >
                  View Full Syllabus & Topics
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
