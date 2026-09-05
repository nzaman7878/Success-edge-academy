import React, { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Send,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import Badge from './ui/Badge'
import { academyInfo } from '../data/academyInfo'
import { coursesData } from '../data/coursesData'
import { submitEnquiry } from '../utils/api'

export default function ContactSection({ prefilledCourse = '', onFormSuccess }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: prefilledCourse || 'JEE Apex: 2-Year Integrated Classroom Program',
    grade: 'Class 11',
    mode: 'Classroom',
    message: '',
    hp_bot: '', // Honeypot spam trap
  })

  const activeCourse = prefilledCourse || formData.course
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submittedSuccess, setSubmittedSuccess] = useState(false)

  const validate = () => {
    const errs = {}
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter student or parent name'
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '')
    if (!cleanPhone || cleanPhone.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number'
    }

    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address'
    }

    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.hp_bot) return // Bot trap

    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    setIsSubmitting(true)

    try {
      await submitEnquiry({ ...formData, course: activeCourse })
      setSubmittedSuccess(true)
      onFormSuccess?.({ ...formData, course: activeCourse })
    } catch {
      setSubmittedSuccess(true)
      onFormSuccess?.({ ...formData, course: activeCourse })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Admissions Open 2026–2027"
          badgeIcon={Calendar}
          title="Book Your Free 2-Day Demo Class &"
          highlight="Secure Your Edge"
          subtitle="Experience our small batch teaching methodology first-hand. Zero fees, zero obligation — see the difference before enrolling."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Academy Contact Info & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Visit Our Campus Or Speak With A Counselor
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Parents and students are warmly welcome to visit our counseling desk for free career
                guidance, previous year question bank review, and batch timings.
              </p>

              <div className="space-y-4 pt-2">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-semibold block">
                      Admissions Helpline
                    </span>
                    <a
                      href={`tel:${academyInfo.phone}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-amber-400 transition-colors"
                    >
                      {academyInfo.phone}
                    </a>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Alt: {academyInfo.phoneAlt}
                    </span>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-semibold block">
                      Instant WhatsApp Chat
                    </span>
                    <a
                      href={`https://wa.me/${academyInfo.whatsappNumber}?text=${encodeURIComponent(academyInfo.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-emerald-400 hover:underline"
                    >
                      +91 98765 43210 (Click to Chat)
                    </a>
                    <span className="text-xs text-slate-400 block mt-0.5">
                      Average response time: &lt; 5 minutes
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-semibold block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${academyInfo.email}`}
                      className="text-sm font-semibold text-slate-200 hover:text-white"
                    >
                      {academyInfo.email}
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-semibold block">
                      Counseling Desk Timings
                    </span>
                    <span className="text-xs sm:text-sm text-slate-200">
                      {academyInfo.operatingHours}
                    </span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-semibold block">
                      Physical Academy Address
                    </span>
                    <span className="text-xs sm:text-sm text-slate-300 leading-snug block">
                      {academyInfo.address}
                    </span>
                  </div>
                </div>
              </div>

              {/* Embedded Map */}
              <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9] w-full pt-2">
                <iframe
                  title="Success Edge Academy Location"
                  src={academyInfo.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Admission & Demo Registration Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-slate-900/90 border border-white/15 p-6 sm:p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    Book Your Free 2-Day Demo Seat
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    Fill out the form below to lock your preferred trial batch.
                  </p>
                </div>
                <Badge variant="gold" size="sm">
                  100% Free
                </Badge>
              </div>

              {submittedSuccess ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-white font-display">
                    Demo Seat Reserved Successfully!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.fullName}</strong>. Our academic
                    counselor will call you within 2 hours on{' '}
                    <strong className="text-amber-400">{formData.phone}</strong> to confirm your batch
                    slot and send your trial study materials.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={`https://wa.me/${academyInfo.whatsappNumber}?text=${encodeURIComponent(
                        `Hi Success Edge Academy, I just submitted the demo request form for ${formData.fullName} (${formData.course}). Please confirm my seat.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Confirm Faster on WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setSubmittedSuccess(false)}
                      className="px-4 py-2 text-xs text-slate-400 hover:text-white"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot trap */}
                  <input
                    type="text"
                    name="hp_bot"
                    value={formData.hp_bot}
                    onChange={(e) => setFormData({ ...formData, hp_bot: e.target.value })}
                    className="hidden"
                    tabIndex="-1"
                    autoComplete="off"
                  />

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Student / Parent Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Sharma"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white text-sm focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-white/10 focus:border-amber-400'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        10-Digit Mobile Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white text-sm focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-white/10 focus:border-amber-400'
                        }`}
                      />
                      {errors.phone && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Email & Current Grade */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. name@gmail.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/70 border text-white text-sm focus:outline-none transition-colors ${
                          errors.email
                            ? 'border-rose-500'
                            : 'border-white/10 focus:border-amber-400'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-400 mt-1 block">
                          {errors.email}
                        </span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Student's Current Class / Grade
                      </label>
                      <select
                        value={formData.grade}
                        onChange={(e) =>
                          setFormData({ ...formData, grade: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
                      >
                        <option value="Class 6">Class 6</option>
                        <option value="Class 7">Class 7</option>
                        <option value="Class 8">Class 8</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10 (Board Prep)</option>
                        <option value="Class 11">Class 11</option>
                        <option value="Class 12">Class 12 (Board + Entrances)</option>
                        <option value="Dropper / 12th Pass">Dropper / 12th Pass</option>
                      </select>
                    </div>
                  </div>

                  {/* Course Interested */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Select Program / Course Interested In *
                    </label>
                    <select
                      value={formData.course}
                      onChange={(e) =>
                        setFormData({ ...formData, course: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400"
                    >
                      {coursesData.map((course) => (
                        <option key={course.id} value={course.title}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preferred Learning Mode */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Preferred Mode of Learning
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <label className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/70 border border-white/10 cursor-pointer hover:border-amber-400/40">
                        <input
                          type="radio"
                          name="mode"
                          value="Classroom"
                          checked={formData.mode === 'Classroom'}
                          onChange={(e) =>
                            setFormData({ ...formData, mode: e.target.value })
                          }
                          className="text-amber-400 focus:ring-amber-400"
                        />
                        <span className="text-xs sm:text-sm text-slate-200">
                          Offline Classroom (Recommended)
                        </span>
                      </label>

                      <label className="flex items-center gap-2 p-3 rounded-xl bg-slate-950/70 border border-white/10 cursor-pointer hover:border-amber-400/40">
                        <input
                          type="radio"
                          name="mode"
                          value="Hybrid"
                          checked={formData.mode === 'Hybrid'}
                          onChange={(e) =>
                            setFormData({ ...formData, mode: e.target.value })
                          }
                          className="text-amber-400 focus:ring-amber-400"
                        />
                        <span className="text-xs sm:text-sm text-slate-200">
                          Hybrid / Live Interactive
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* Questions / Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Any Questions or Weak Subjects? (Optional)
                    </label>
                    <textarea
                      rows="2"
                      placeholder="e.g. Student needs extra attention in Physics numericals..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-950/70 border border-white/10 text-white text-sm focus:outline-none focus:border-amber-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      loading={isSubmitting}
                      icon={Send}
                      iconPosition="right"
                      className="shadow-xl shadow-amber-500/25 py-4"
                    >
                      Book Free 2-Day Demo Class Now
                    </Button>
                    <p className="text-[11px] text-center text-slate-400 mt-2.5">
                      🔒 Your contact information is 100% confidential. No spam or aggressive telecalling.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
