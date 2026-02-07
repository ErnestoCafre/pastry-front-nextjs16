'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { SearchOverlay } from '@/components/search/search-overlay'

export function ProductClient({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Header onSearchClick={() => setIsSearchOpen(true)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      {children}
    </main>
  )
}
