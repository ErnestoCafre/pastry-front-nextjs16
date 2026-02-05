import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { Section } from '@/types'

interface SectionHeaderProps {
  section: Section
  className?: string
}

export function SectionHeader({ section, className = '' }: SectionHeaderProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {/* Breadcrumb */}
      <nav
        className="flex items-center gap-2 text-sm"
        aria-label="Breadcrumb"
      >
        <Link
          href="/"
          className="text-muted-foreground hover:text-primary transition-colors duration-300"
        >
          Inicio
        </Link>
        <ChevronRight
          className="size-3 text-muted-foreground/50"
          strokeWidth={1.5}
        />
        <span className="text-foreground">{section.name}</span>
      </nav>

      {/* Title Section */}
      <div className="space-y-4">
        <div className="h-px bg-border" />

        <div className="py-6 md:py-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.3em] uppercase text-foreground font-light">
            {section.name}
          </h1>
          <div className="mt-4 h-0.5 w-16 bg-primary" />
        </div>

        {section.description && (
          <p className="text-base md:text-lg text-muted-foreground font-light max-w-2xl leading-relaxed">
            {section.description}
          </p>
        )}

        <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground/70 pt-2">
          {section.products_count}{' '}
          {section.products_count === 1 ? 'producto' : 'productos'}
        </p>

        <div className="h-px bg-border" />
      </div>
    </div>
  )
}
