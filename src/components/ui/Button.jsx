import React from 'react'
import { Loader2 } from 'lucide-react'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon: Icon,
  iconPosition = 'left',
  loading = false,
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const baseStyles =
    'relative inline-flex items-center justify-center font-semibold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-[0.98]'

  const variants = {
    primary:
      'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 hover:from-amber-400 hover:to-amber-300 shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 focus:ring-amber-400 border border-amber-300/40',
    secondary:
      'bg-slate-900/90 text-slate-100 hover:bg-slate-800 border border-white/10 hover:border-amber-400/40 shadow-sm focus:ring-slate-400',
    outline:
      'bg-transparent text-amber-400 border-2 border-amber-500/60 hover:bg-amber-500/10 hover:border-amber-400 focus:ring-amber-400',
    ghost:
      'bg-transparent text-slate-300 hover:text-white hover:bg-white/5 focus:ring-slate-400',
    emerald:
      'bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/25 focus:ring-emerald-400 border border-emerald-400/30',
  }

  const sizes = {
    sm: 'text-xs px-3.5 py-2 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5 font-bold',
  }

  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`
        ${baseStyles}
        ${variants[variant] || variants.primary}
        ${sizes[size] || sizes.md}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      {...props}
    >
      {loading && <Loader2 className="w-4 h-4 animate-spin text-current" />}
      {!loading && Icon && iconPosition === 'left' && (
        <Icon className="w-4 h-4 shrink-0" />
      )}
      <span>{children}</span>
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className="w-4 h-4 shrink-0" />
      )}
    </button>
  )
}
