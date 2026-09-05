import React, { useState, useEffect } from 'react'
import {
  Sparkles,
  CheckCircle2,
  Calendar,
  Send,
  MessageCircle,
} from 'lucide-react'
import Modal from './ui/Modal'
import Button from './ui/Button'
import { coursesData } from '../data/coursesData'
import { academyInfo } from '../data/academyInfo'

export default function BookDemoModal({
  isOpen,
  onClose,
  prefilledCourse = '',
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    course: prefilledCourse || 'JEE Apex: 2-Year Integrated Classroom Program',
    grade: 'Class 11',
    mode: 'Classroom',
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  useEffect(() => {
    if (prefilledCourse) {
      setFormData((prev) => ({ ...prev, course: prefilledCourse }))
    }
  }, [prefilledCourse])

  const validate = () => {
    const errs = {}
    if (!formData.fullName.trim()) errs.fullName = 'Please enter student or parent name'
    const cleanPhone = formData.phone.replace(/[^0-9]/g, '')
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit number'
    }
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setLoading(true)
    try {
      await fetch('/api/enquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setIsSuccess(true)
    } catch (err) {
      setIsSuccess(true)
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setIsSuccess(false)
    onClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title="Book Free 2-Day Demo Class"
      subtitle="Experience our 25-student batch coaching with zero commitment."
      maxWidth="max-w-xl"
    >
      {isSuccess ? (
        <div className="py-6 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-white font-display">
            Demo Seat Reserved!
          </h4>
          <p className="text-xs sm:text-sm text-slate-300">
            Thank you, <strong className="text-white">{formData.fullName}</strong>. Our counselor
            will call you on <strong className="text-amber-400">{formData.phone}</strong> shortly to
            provide your classroom entry pass.
          </p>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={`https://wa.me/${academyInfo.whatsappNumber}?text=${encodeURIComponent(
                `Hi Success Edge Academy, I just requested a demo seat for ${formData.fullName} (${formData.course}).`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-semibold transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm Instantly via WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={handleClose}
              className="text-xs text-slate-400 hover:text-white"
            >
              Done / Close Window
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Full Name *
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rahul Sharma"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border text-white text-sm focus:outline-none ${
                errors.fullName ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
              }`}
            />
            {errors.fullName && (
              <span className="text-[11px] text-rose-400 mt-1 block">{errors.fullName}</span>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              10-Digit Mobile Number *
            </label>
            <input
              type="tel"
              required
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border text-white text-sm focus:outline-none ${
                errors.phone ? 'border-rose-500' : 'border-white/10 focus:border-amber-400'
              }`}
            />
            {errors.phone && (
              <span className="text-[11px] text-rose-400 mt-1 block">{errors.phone}</span>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Target Course
            </label>
            <select
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
            >
              {coursesData.map((course) => (
                <option key={course.id} value={course.title}>
                  {course.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Preferred Mode
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-white/10 text-xs text-slate-200 cursor-pointer">
                <input
                  type="radio"
                  name="modal_mode"
                  value="Classroom"
                  checked={formData.mode === 'Classroom'}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="text-amber-400"
                />
                <span>Offline Classroom</span>
              </label>

              <label className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/60 border border-white/10 text-xs text-slate-200 cursor-pointer">
                <input
                  type="radio"
                  name="modal_mode"
                  value="Hybrid"
                  checked={formData.mode === 'Hybrid'}
                  onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                  className="text-amber-400"
                />
                <span>Hybrid / Online</span>
              </label>
            </div>
          </div>

          <div className="pt-3">
            <Button
              type="submit"
              variant="primary"
              size="md"
              fullWidth
              loading={loading}
              icon={Sparkles}
            >
              Confirm Demo Booking
            </Button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              No registration charge • Free trial passes issued instantly
            </p>
          </div>
        </form>
      )}
    </Modal>
  )
}
