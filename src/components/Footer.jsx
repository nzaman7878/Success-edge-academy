import React from 'react'
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import Button from './ui/Button'
import { academyInfo } from '../data/academyInfo'
import { coursesData } from '../data/coursesData'

export default function Footer({ onBookDemoClick }) {
  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-12 relative overflow-hidden text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1 & 2: Brand Story */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20">
                <GraduationCap className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold font-display tracking-tight text-white">
                  SUCCESS EDGE
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-amber-400 uppercase -mt-1">
                  ACADEMY • EXCELLENCE
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Empowering school and competitive exam aspirants with small batch sizes (capped at 25),
              direct IITian & Medical mentorship, and zero syllabus backlog since 2011.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={academyInfo.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-red-600 hover:text-white text-slate-300 flex items-center justify-center border border-white/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href={academyInfo.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-pink-600 hover:text-white text-slate-300 flex items-center justify-center border border-white/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={academyInfo.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-blue-600 hover:text-white text-slate-300 flex items-center justify-center border border-white/10 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.5 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              <a
                href={`https://wa.me/${academyInfo.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Community"
                className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-emerald-600 hover:text-white text-slate-300 flex items-center justify-center border border-white/10 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                icon={Sparkles}
                onClick={onBookDemoClick}
              >
                Book Free Demo Class
              </Button>
            </div>
          </div>

          {/* Col 3: Programs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Academic Programs
            </h4>
            <ul className="space-y-2 text-xs">
              {coursesData.map((course) => (
                <li key={course.id}>
                  <a
                    href="#courses"
                    onClick={(e) => handleLinkClick(e, '#courses')}
                    className="hover:text-amber-400 transition-colors line-clamp-1"
                  >
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, '#about')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Our Mentorship Philosophy
                </a>
              </li>
              <li>
                <a
                  href="#results"
                  onClick={(e) => handleLinkClick(e, '#results')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Hall of Fame 2025
                </a>
              </li>
              <li>
                <a
                  href="#faculty"
                  onClick={(e) => handleLinkClick(e, '#faculty')}
                  className="hover:text-amber-400 transition-colors"
                >
                  IIT & Medical Faculty
                </a>
              </li>
              <li>
                <a
                  href="#scholarship"
                  onClick={(e) => handleLinkClick(e, '#scholarship')}
                  className="hover:text-amber-400 transition-colors"
                >
                  SETSE Scholarship Test
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  onClick={(e) => handleLinkClick(e, '#testimonials')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Parent & Student Reviews
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  onClick={(e) => handleLinkClick(e, '#gallery')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Campus Infrastructure
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  onClick={(e) => handleLinkClick(e, '#faqs')}
                  className="hover:text-amber-400 transition-colors"
                >
                  Admission FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Hotline */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Campus Helpline
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <a
                href={`tel:${academyInfo.phone}`}
                className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{academyInfo.phone}</span>
              </a>
              <a
                href={`mailto:${academyInfo.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span className="truncate">{academyInfo.email}</span>
              </a>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0 mt-0.5" />
                <span className="leading-snug">{academyInfo.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400 pt-1">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Open Mon–Sat 8am–8:30pm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Success Edge Academy. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300">
              Privacy Policy
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">
              Admission Terms
            </a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300">
              Batch Refund Guidelines
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
