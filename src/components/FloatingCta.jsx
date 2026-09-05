import React from 'react'
import { MessageCircle, Phone, Sparkles } from 'lucide-react'
import { academyInfo } from '../data/academyInfo'

export default function FloatingCta({ onBookDemoClick }) {
  const whatsappUrl = `https://wa.me/${academyInfo.whatsappNumber}?text=${encodeURIComponent(
    academyInfo.whatsappMessage
  )}`

  return (
    <>
      {/* Floating WhatsApp Bubble */}
      <aside
        aria-label="Contact options"
        className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex items-center group"
      >
        {/* Tooltip on hover for desktop */}
        <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-xl bg-slate-900 border border-emerald-500/30 text-xs font-semibold text-emerald-300 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Chat with Admissions Counselor (Online)
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Success Edge Academy on WhatsApp"
          className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-400 text-white flex items-center justify-center shadow-xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all duration-200 border-2 border-white/20"
        >
          {/* Animated pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
          <MessageCircle className="w-7 h-7 fill-white stroke-none relative z-10" />
        </a>
      </aside>

      {/* Sticky Bottom Action Bar for Mobile Screens */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-slate-950/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 flex items-center gap-3 shadow-2xl">
        <a
          href={`tel:${academyInfo.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-slate-900 text-slate-100 border border-white/10 font-bold text-xs active:bg-slate-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call Helpline</span>
        </a>

        <button
          type="button"
          onClick={onBookDemoClick}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/25 active:scale-95 transition-all"
        >
          <Sparkles className="w-4 h-4" />
          <span>Book Free Demo</span>
        </button>
      </div>
    </>
  )
}
