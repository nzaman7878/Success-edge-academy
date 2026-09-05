import React, { useState } from 'react'
import {
  HelpCircle,
  ChevronDown,
  Phone,
  MessageCircle,
  Sparkles,
} from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import Button from './ui/Button'
import { faqsData } from '../data/faqsData'
import { academyInfo } from '../data/academyInfo'

export default function FaqSection({ onBookDemoClick }) {
  const [openId, setOpenId] = useState(1) // first item open by default

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="faqs" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Clear Transparency"
          badgeIcon={HelpCircle}
          title="Frequently Asked"
          highlight="Questions"
          subtitle="Everything you need to know about our demo classes, small batch policies, doubt clearing support, and fee structures."
        />

        {/* Accordion List */}
        <div className="space-y-4 mb-14">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-amber-400/40 bg-slate-900/90 shadow-lg shadow-amber-500/5'
                    : 'border-white/10 bg-slate-900/50 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-amber-400"
                >
                  <span className="font-bold text-base sm:text-lg text-white font-display">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-amber-500 text-slate-950 rotate-180'
                        : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Help Banner */}
        <div className="rounded-3xl bg-slate-900/80 border border-white/10 p-6 sm:p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white font-display">
              Have a specific question not listed here?
            </h4>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Speak directly with an academic counselor today.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${academyInfo.whatsappNumber}?text=${encodeURIComponent(academyInfo.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-600/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>

            <Button variant="primary" size="sm" onClick={onBookDemoClick}>
              Book Demo Class
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
