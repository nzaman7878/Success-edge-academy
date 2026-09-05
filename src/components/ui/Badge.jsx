import React from 'react'

export default function Badge({
  children,
  variant = 'gold',
  size = 'md',
  icon: Icon,
  className = '',
}) {
  const variants = {
    gold: 'bg-amber-400/10 text-amber-300 border-amber-400/30',
    blue: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    rose: 'bg-rose-500/10 text-rose-300 border-rose-500/30',
    neutral: 'bg-slate-800/80 text-slate-300 border-slate-700/60',
  }

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1 font-medium',
    md: 'text-xs px-3 py-1 gap-1.5 font-semibold',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-semibold',
  }

  return (
    <span
      className={`
        inline-flex items-center rounded-full border tracking-wide uppercase font-sans
        ${variants[variant] || variants.gold}
        ${sizes[size] || sizes.md}
        ${className}
      `}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
      {children}
    </span>
  )
}
