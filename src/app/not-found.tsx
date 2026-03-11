import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-8 bg-background">
      <p className="text-xs tracking-[0.3em] uppercase text-primary/60 mb-6">
        Página no encontrada
      </p>
      <h1 className="text-5xl md:text-7xl font-light tracking-[0.2em] text-foreground mb-4">
        404
      </h1>
      <div className="h-0.5 w-16 bg-primary mb-8" />
      <p className="text-base md:text-lg text-muted-foreground font-light text-center max-w-md mb-12">
        Lo sentimos, la página que buscas no existe o ha sido trasladada.
      </p>
      <Link
        href="/"
        className="px-8 py-4 border border-primary text-primary text-sm tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
      >
        Volver al inicio
      </Link>
    </div>
  )
}
