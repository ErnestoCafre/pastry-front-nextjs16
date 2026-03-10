'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Product } from '@/types'
import { formatPrice } from '@/lib/format'

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const images =
    product.gallery.length > 0
      ? product.gallery
      : [{ src: product.image, alt: product.name }]
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
      {/* Image section */}
      <div className="space-y-4">
        <div className="relative aspect-square bg-muted overflow-hidden">
          <Image
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {images.length > 1 && (
          <div className="flex gap-3">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative size-20 overflow-hidden border-2 transition-colors duration-300 ${
                  selectedImage === index
                    ? 'border-primary'
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Info section */}
      <div className="flex flex-col justify-center">
        <div className="space-y-6">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-primary/60 mb-3">
              {product.section_name}
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.1em] text-foreground">
              {product.name}
            </h1>
          </div>

          <div className="h-px bg-border" />

          <p className="text-2xl md:text-3xl font-light text-primary">
            {formatPrice(product.base_price)}
          </p>

          <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  )
}
