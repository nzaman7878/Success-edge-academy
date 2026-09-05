import React from 'react'
import Badge from './Badge'

export default function SectionHeading({
  badge,
  badgeIcon,
  title,
  highlight,
  subtitle,
  centered = true,
  className = '',
}) {
  return (
    <div
      className={`mb-12 sm:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'} ${className}`}
    >
      {badge && (
        <div className="mb-4">
          <Badge variant="gold" icon={badgeIcon} size="md">
            {badge}
          </Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white tracking-tight leading-tight">
        {title}{' '}
        {highlight && (
          <span className="gradient-text-gold inline-block">{highlight}</span>
        )}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
