'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { ProductImage } from '@/types'

interface ProductGalleryProps {
  images: ProductImage[]
  productName: string
  className?: string
}

export function ProductGallery({
  images,
  productName,
  className = '',
}: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (images.length === 0) {
    return (
      <div
        className={`aspect-square bg-muted flex items-center justify-center ${className}`}
      >
        <span className="text-muted-foreground text-sm">Sin imagen</span>
      </div>
    )
  }

  const selectedImage = images[selectedIndex]

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Main image */}
      <div className="relative aspect-square bg-muted overflow-hidden group">
        <Image
          src={selectedImage.src}
          alt={selectedImage.alt || productName}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          priority
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 mix-blend-multiply transition-colors duration-500" />
        <div className="absolute inset-0 border border-border/0 group-hover:border-border transition-colors duration-500" />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div
          className="flex gap-2 justify-center"
          role="group"
          aria-label="Miniaturas de imagen"
        >
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Ver imagen ${index + 1} de ${images.length}`}
              aria-current={index === selectedIndex ? 'true' : undefined}
              className={`relative w-16 h-16 md:w-20 md:h-20 overflow-hidden transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                index === selectedIndex
                  ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <Image
                src={image.src}
                alt={image.alt || `${productName} - ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
