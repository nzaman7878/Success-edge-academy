import React, { useState, useEffect } from 'react'
import {
  Menu,
  X,
  Phone,
  Sparkles,
  ChevronRight,
  GraduationCap,
  MessageCircle,
} from 'lucide-react'
import Button from './ui/Button'
import { academyInfo } from '../data/academyInfo'

export default function Navbar({ onBookDemoClick }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Toppers', href: '#results' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'Scholarship', href: '#scholarship' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Campus', href: '#gallery' },
    { name: 'FAQ', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
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
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 text-slate-950 px-4 py-1.5 text-xs font-semibold shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 truncate">
            <span className="bg-slate-950 text-amber-300 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">
              Admissions Open 2026–27
            </span>
            <span className="hidden sm:inline text-slate-950/90 font-medium">
              Join the Top 1% — Avail up to 90% Merit Scholarship via SETSE!
            </span>
          </div>
          <div className="flex items-center gap-4 shrink-0 text-slate-950 font-bold">
            <a
              href={`tel:${academyInfo.phone}`}
              className="flex items-center gap-1.5 hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{academyInfo.phone}</span>
              <span className="md:hidden">Call Now</span>
            </a>
            <span className="text-slate-950/40 hidden sm:inline">|</span>
            <a
              href={`https://wa.me/${academyInfo.whatsappNumber}?text=${encodeURIComponent(academyInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled ? 'glass-nav py-3' : 'bg-slate-950/80 backdrop-blur-md py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-transform group-hover:scale-105">
              <GraduationCap className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold font-display tracking-tight text-white group-hover:text-amber-300 transition-colors">
                SUCCESS EDGE
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest text-amber-400 uppercase -mt-1">
                ACADEMY • EXCELLENCE
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-amber-400 hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${academyInfo.phone}`}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              title="Call Academy Helpline"
            >
              <Phone className="w-4 h-4 text-amber-400" />
            </a>
            <Button
              variant="primary"
              size="sm"
              icon={Sparkles}
              iconPosition="right"
              onClick={onBookDemoClick}
            >
              Book Free Demo
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <Button
              variant="primary"
              size="sm"
              onClick={onBookDemoClick}
              className="px-3 py-1.5 text-xs"
            >
              Demo Class
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-slate-900 border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-white font-display">
                    Success Edge
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="py-6 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="flex items-center justify-between px-3.5 py-3 rounded-xl text-sm font-medium text-slate-300 hover:text-amber-400 hover:bg-white/5 transition-colors"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <Button
                variant="primary"
                fullWidth
                icon={Sparkles}
                onClick={() => {
                  setMobileMenuOpen(false)
                  onBookDemoClick?.()
                }}
              >
                Book Free Demo Class
              </Button>

              <a
                href={`tel:${academyInfo.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-medium bg-slate-800 text-slate-200 hover:bg-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {academyInfo.phone}</span>
              </a>

              <a
                href={`https://wa.me/${academyInfo.whatsappNumber}?text=${encodeURIComponent(academyInfo.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-medium bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Admissions</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
