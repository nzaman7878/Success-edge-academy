import React from 'react'

export default function Card({
  children,
  className = '',
  hover = true,
  glow = false,
  onClick,
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`
        rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900/90 to-slate-950/90 
        p-6 backdrop-blur-xl relative overflow-hidden
        ${hover ? 'transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400/40 hover:shadow-xl hover:shadow-amber-500/10' : ''}
        ${glow ? 'ring-1 ring-amber-400/30 shadow-lg shadow-amber-500/10' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  )
}
