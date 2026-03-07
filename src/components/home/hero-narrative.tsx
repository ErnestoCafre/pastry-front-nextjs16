'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import type { HeroConfig } from '@/types'

function smoothScrollTo(targetPosition: number, duration: number) {
  const startPosition = window.scrollY
  const distance = targetPosition - startPosition
  let startTime: number | null = null

  const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3)

  function animation(currentTime: number) {
    if (startTime === null) startTime = currentTime
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)

    const easedProgress = easeOutCubic(progress)
    window.scrollTo(0, startPosition + distance * easedProgress)

    if (elapsed < duration) {
      requestAnimationFrame(animation)
    }
  }

  requestAnimationFrame(animation)
}

interface HeroNarrativeProps {
  heroData: HeroConfig
}

export function HeroNarrative({ heroData }: HeroNarrativeProps) {
  const words = heroData.tagline.split(' ')

  return (
    <HeroContent
      words={words}
      subtitle={heroData.subtitle}
      heroImage={heroData.image}
      ctaText={heroData.cta_text}
      ctaUrl={heroData.cta_url}
    />
  )
}

function HeroContent({
  words,
  subtitle,
  heroImage,
  ctaText,
  ctaUrl,
}: {
  words: string[]
  subtitle?: string
  heroImage?: string
  ctaText?: string
  ctaUrl?: string
}) {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const timeouts = words.map((_, index) =>
      setTimeout(() => setVisibleCount(index + 1), 800 + index * 200)
    )
    return () => timeouts.forEach(clearTimeout)
  }, [words.length])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        {heroImage ? (
          <Image
            src={heroImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-muted" />
        )}

        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/95" />

        {/* Malva tint overlay with multiply blend */}
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 md:px-16">
        {/* Main Title with Stagger Reveal */}
        <h1 className="max-w-5xl text-center text-4xl font-light leading-tight text-foreground md:text-6xl lg:text-7xl xl:text-8xl drop-shadow-sm">
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block mr-[0.3em] transition-all duration-700 ease-out ${
                index < visibleCount
                  ? 'opacity-100 translate-y-0 blur-0'
                  : 'opacity-0 translate-y-8 blur-sm'
              }`}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-8 max-w-xl text-center text-base md:text-lg text-foreground/80 font-light italic animate-fade-in-delayed">
            {subtitle}
          </p>
        )}

        {/* Scroll indicator */}
        {ctaText && ctaUrl && (
          <button
            onClick={() => {
              const targetId = ctaUrl.replace('#', '')
              const element = document.getElementById(targetId)
              if (element) {
                const headerOffset = 80
                const elementPosition = element.getBoundingClientRect().top
                const offsetPosition =
                  elementPosition + window.scrollY - headerOffset

                smoothScrollTo(offsetPosition, 1200)
              }
            }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in-delayed-long hover:opacity-80 transition-opacity cursor-pointer"
          >
            <span className="text-xs tracking-[0.25em] uppercase text-primary">
              {ctaText}
            </span>
            <div className="h-12 w-px bg-gradient-to-b from-primary to-transparent animate-pulse-slow" />
          </button>
        )}
      </div>
    </section>
  )
}
