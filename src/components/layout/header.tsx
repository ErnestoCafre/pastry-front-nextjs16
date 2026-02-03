'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ChevronDown, Search, X } from 'lucide-react'
import { sections } from '@/data'
import { useScrollDirection } from '@/hooks/use-scroll-direction'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

interface HeaderProps {
  storeName?: string
  onSearchClick?: () => void
}

export function Header({ storeName = 'Malva', onSearchClick }: HeaderProps) {
  const { isVisible, isAtTop } = useScrollDirection()
  const pathname = usePathname()
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsMobileMenuOpen(false)

    const scrollToContact = () => {
      const contactElement = document.getElementById('contacto')
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' })
      }
    }

    if (pathname === '/') {
      scrollToContact()
    } else {
      router.push('/')
      setTimeout(scrollToContact, 100)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isAtTop
            ? 'bg-transparent'
            : 'bg-background/95 backdrop-blur-sm'
        }`}
      >
        <div className="mx-auto max-w-7xl px-8 md:px-16">
          <div className="flex items-center justify-between py-6 md:py-8">
            <Link href="/" className="group">
              <h1
                className={`text-2xl md:text-3xl font-light tracking-[0.3em] uppercase transition-colors duration-500 ${
                  isAtTop
                    ? 'text-foreground group-hover:text-primary'
                    : 'text-primary group-hover:text-accent'
                }`}
              >
                {storeName}
              </h1>
            </Link>

            <nav className="hidden md:flex items-center gap-12">
              <DropdownMenu>
                <DropdownMenuTrigger
                  className={`group flex items-center gap-1 text-sm tracking-[0.2em] uppercase transition-all duration-300 outline-none cursor-pointer ${
                    isAtTop
                      ? 'text-foreground/70 hover:text-foreground'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  <span className="relative">
                    Cat&aacute;logo
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
                  </span>
                  <ChevronDown className="size-4 transition-transform duration-300 group-hover:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="min-w-[200px]">
                  {sections.map((section) => (
                    <DropdownMenuItem key={section.slug} asChild>
                      <Link
                        href={`/catalogo/${section.slug}`}
                        className="tracking-[0.1em] uppercase text-xs"
                      >
                        {section.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <button
                onClick={handleContactClick}
                className={`group relative text-sm tracking-[0.2em] uppercase transition-all duration-300 ${
                  isAtTop
                    ? 'text-foreground/70 hover:text-foreground'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                Contacto
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </button>

              <button
                onClick={onSearchClick}
                className={`p-2 -m-2 transition-colors duration-500 ${
                  isAtTop
                    ? 'text-foreground/70 hover:text-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                aria-label="Buscar"
              >
                <Search className="size-5" strokeWidth={1.5} />
              </button>
            </nav>

            {/* Mobile: Search + Menu */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={onSearchClick}
                className="text-foreground p-2 -m-2"
                aria-label="Buscar"
              >
                <Search className="size-5" strokeWidth={1.5} />
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-foreground p-2 -m-2"
                aria-label="Abrir menú de navegación"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`h-px transition-opacity duration-500 ${
            isAtTop ? 'opacity-0' : 'opacity-100 bg-border'
          }`}
        />
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60]">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-full max-w-xs bg-background border-l border-border shadow-xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between p-6 border-b border-border">
              <span className="text-xs tracking-[0.3em] uppercase text-primary/60">
                Navegación
              </span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 -m-2 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Cerrar menú"
              >
                <X className="size-5" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-col p-6 gap-1">
              <p className="text-xs tracking-[0.2em] uppercase text-primary/60 mb-3">
                Catálogo
              </p>
              {sections.map((section) => (
                <Link
                  key={section.slug}
                  href={`/catalogo/${section.slug}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="py-3 px-3 text-sm tracking-[0.15em] uppercase text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  {section.name}
                </Link>
              ))}

              <div className="h-px bg-border my-4" />

              <button
                onClick={handleContactClick}
                className="py-3 px-3 text-left text-sm tracking-[0.15em] uppercase text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                Contacto
              </button>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}
