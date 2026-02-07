import Link from 'next/link'
import { sections } from '@/data'

export default function NotFound() {
  const firstSection = sections[0]

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-8">
      <div className="text-center max-w-lg">
        <p className="text-xs tracking-[0.3em] uppercase text-primary/60 mb-8">
          Página no encontrada
        </p>

        <h1 className="text-6xl md:text-8xl font-light text-foreground mb-4">
          404
        </h1>

        <div className="h-0.5 w-16 bg-primary mx-auto mb-8" />

        <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed mb-12">
          Lo sentimos, la página que buscas no existe o ha sido movida. Te
          invitamos a descubrir nuestra selección.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-colors duration-300"
          >
            Volver al Inicio
          </Link>
          <Link
            href={`/catalogo/${firstSection.slug}`}
            className="px-8 py-4 border border-border text-sm tracking-[0.2em] uppercase text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
          >
            Ver Catálogo
          </Link>
        </div>
      </div>
    </div>
  )
}
