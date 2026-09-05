import React, { useState } from 'react'
import {
  BookOpen,
  Clock,
  CheckCircle2,
  Download,
  Sparkles,
  Phone,
  Check,
} from 'lucide-react'
import Modal from './ui/Modal'
import Button from './ui/Button'
import { academyInfo } from '../data/academyInfo'

export default function CourseDetailModal({
  course,
  isOpen,
  onClose,
  onEnquireNow,
}) {
  const [downloading, setDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  if (!course) return null

  const handleDownloadBrochure = () => {
    setDownloading(true)
    setTimeout(() => {
      setDownloading(false)
      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 4000)
    }, 900)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={course.title}
      subtitle={`Target: ${course.targetAudience} • Batch Starts ${course.batchStarts}`}
      maxWidth="max-w-3xl"
    >
      <div className="space-y-6">
        {/* Quick specs pill strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 text-center">
            <span className="text-[11px] text-slate-400 block uppercase font-medium">Duration</span>
            <span className="text-sm font-bold text-white font-display">{course.duration}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 text-center">
            <span className="text-[11px] text-slate-400 block uppercase font-medium">Batch Limit</span>
            <span className="text-sm font-bold text-amber-400 font-display">25 Students Max</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 text-center">
            <span className="text-[11px] text-slate-400 block uppercase font-medium">Schedule</span>
            <span className="text-sm font-bold text-white font-display">{course.schedule}</span>
          </div>
          <div className="p-3 rounded-xl bg-slate-950/60 border border-white/10 text-center">
            <span className="text-[11px] text-slate-400 block uppercase font-medium">Delivery Mode</span>
            <span className="text-sm font-bold text-emerald-400 font-display">{course.mode}</span>
          </div>
        </div>

        {/* Program Overview */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-2">
            Program Overview
          </h4>
          <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/40 p-4 rounded-xl border border-white/5">
            {course.overview}
          </p>
        </div>

        {/* Syllabus Subject Breakdown */}
        {course.curriculum && course.curriculum.length > 0 && (
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-amber-400" />
              <span>Curriculum & Subject Coverage</span>
            </h4>
            <div className="space-y-3">
              {course.curriculum.map((curr, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-950/70 border border-white/10"
                >
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wide mb-1">
                    {curr.subject}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-200">{curr.topics}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Key Inclusions */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300 mb-3">
            What's Included in This Program
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {course.features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 p-2.5 rounded-lg bg-white/[0.02]"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* In-Modal Action Bar */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              disabled={downloading}
              onClick={handleDownloadBrochure}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 transition-colors"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Brochure Saved!</span>
                </>
              ) : downloading ? (
                <>
                  <Clock className="w-4 h-4 animate-spin text-amber-400" />
                  <span>Preparing PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Download Brochure</span>
                </>
              )}
            </button>

            <a
              href={`tel:${academyInfo.phone}`}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/10 transition-colors shrink-0"
              title="Call Academic Advisor"
            >
              <Phone className="w-4 h-4 text-amber-400" />
            </a>
          </div>

          <Button
            variant="primary"
            size="md"
            icon={Sparkles}
            onClick={() => {
              onClose()
              onEnquireNow?.(course)
            }}
            className="w-full sm:w-auto"
          >
            Reserve Seat & Book Free Demo
          </Button>
        </div>
      </div>
    </Modal>
  )
}
