'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { SearchOverlay } from '@/components/search/search-overlay'

export function PageShell({ children }: { children: React.ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <>
      <Header onSearchClick={() => setIsSearchOpen(true)} />
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <main className="min-h-screen bg-background">
        {children}
      </main>
    </>
  )
}
