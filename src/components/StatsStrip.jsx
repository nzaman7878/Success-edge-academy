import React, { useState, useEffect, useRef } from 'react'
import {
  Users,
  Award,
  Trophy,
  Clock,
  ShieldCheck,
  BookMarked,
  HelpCircle,
} from 'lucide-react'
import { academyInfo } from '../data/academyInfo'

// Lightweight counter hook with requestAnimationFrame
function useCountUp(target, duration = 1800, decimals = 0, isVisible = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let startTimestamp = null
    const startVal = 0

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3)
      const current = startVal + (target - startVal) * easeProgress
      setCount(current)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }

    const animId = window.requestAnimationFrame(step)
    return () => window.cancelAnimationFrame(animId)
  }, [target, duration, isVisible])

  return count.toFixed(decimals)
}

function StatItem({ stat, isVisible }) {
  const animatedValue = useCountUp(stat.value, 1800, stat.decimals || 0, isVisible)

  const iconMap = {
    Users: Users,
    Award: Award,
    Trophy: Trophy,
    Clock: Clock,
  }
  const Icon = iconMap[stat.icon] || Award

  return (
    <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-400/30 transition-all hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
        <Icon className="w-6 h-6" />
      </div>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight">
        {animatedValue}
        <span className="text-amber-400">{stat.suffix}</span>
      </div>
      <div className="mt-1 text-xs sm:text-sm font-medium text-slate-300">
        {stat.label}
      </div>
    </div>
  )
}

export default function StatsStrip() {
  const [isVisible, setIsVisible] = useState(false)
  const stripRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (stripRef.current) {
      observer.observe(stripRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const trustBadges = [
    { text: 'NTA & CBSE Curriculum Aligned', icon: ShieldCheck },
    { text: 'Strict Batch Limit of 25', icon: Users },
    { text: 'Complete Printed Concept Kits', icon: BookMarked },
    { text: 'Daily 1-on-1 Doubt Desk', icon: HelpCircle },
  ]

  return (
    <section
      ref={stripRef}
      className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="rounded-3xl bg-gradient-to-b from-slate-900/95 to-slate-950/95 border border-white/15 p-6 sm:p-8 backdrop-blur-2xl shadow-2xl shadow-black/80">
        {/* Animated Numerical Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {academyInfo.stats.map((stat, idx) => (
            <StatItem key={idx} stat={stat} isVisible={isVisible} />
          ))}
        </div>

        {/* Supporting Trust Indicators Row */}
        <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-300">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 justify-center sm:justify-start"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-medium text-slate-200">{badge.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
