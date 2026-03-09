'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { X } from 'lucide-react'
import { useDebounce } from '@/hooks/use-debounce'
import { sections, searchProducts } from '@/data'
import { formatPrice } from '@/lib/format'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [searchValue, setSearchValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const debouncedSearch = useDebounce(searchValue, 300)

  const filteredProducts =
    debouncedSearch.length >= 2 ? searchProducts(debouncedSearch, 6) : []

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    } else {
      setSearchValue('')
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/98 backdrop-blur-md animate-in fade-in duration-300"
        onClick={onClose}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-32 md:pt-48 px-8 h-full overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-8 right-8 p-2 text-muted-foreground hover:text-foreground transition-colors duration-300 animate-in fade-in duration-500"
          aria-label="Cerrar búsqueda"
        >
          <X className="size-6" strokeWidth={1} />
        </button>

        {/* Search Input */}
        <div className="w-full max-w-2xl animate-in fade-in slide-in-from-top-4 duration-500">
          <p className="text-xs tracking-[0.3em] uppercase text-primary/60 mb-6 text-center">
            &iquest;Qu&eacute; est&aacute;s buscando?
          </p>

          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="w-full bg-transparent border-0 border-b border-border py-4 text-center text-2xl md:text-4xl font-light text-foreground placeholder:text-muted-foreground/40 placeholder:font-light focus:outline-none transition-colors duration-500"
              placeholder="Tarta de chocolate..."
            />

            <div
              className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-accent transition-all duration-700 ${
                isFocused || searchValue ? 'w-full' : 'w-0'
              }`}
            />
          </div>
        </div>

        {/* Search Results */}
        {filteredProducts.length > 0 && (
          <div className="w-full max-w-2xl mt-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">
              {filteredProducts.length} resultado
              {filteredProducts.length !== 1 ? 's' : ''}
            </p>

            <div className="space-y-4">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/producto/${product.id}`}
                  onClick={onClose}
                  className="group flex items-center gap-6 py-4 border-b border-border/50 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="relative size-16 overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="64px"
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-light text-foreground group-hover:text-primary transition-colors duration-300">
                      {product.name}
                    </p>
                    <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mt-1">
                      {product.section_name} &middot;{' '}
                      {formatPrice(product.base_price)}
                    </p>
                  </div>
                  <span className="text-xs tracking-[0.2em] uppercase text-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* No Results */}
        {debouncedSearch.length > 1 && filteredProducts.length === 0 && (
          <div className="mt-16 text-center">
            <p className="text-muted-foreground font-light italic">
              No encontramos &ldquo;{debouncedSearch}&rdquo;
            </p>
            <p className="text-sm text-muted-foreground/60 mt-2">
              Prueba con otro t&eacute;rmino
            </p>
          </div>
        )}

        {/* Quick Categories */}
        {searchValue.length < 2 && (
          <div className="w-full max-w-2xl mt-16 animate-in fade-in duration-700">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8 text-center">
              O explora nuestras categorías
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {sections.map((section) => (
                <Link
                  key={section.slug}
                  href={`/catalogo/${section.slug}`}
                  onClick={onClose}
                  className="px-6 py-3 border border-border text-sm tracking-[0.2em] uppercase text-muted-foreground hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  {section.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
