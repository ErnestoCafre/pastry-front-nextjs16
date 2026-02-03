import Link from 'next/link'
import { sections, contactInfo } from '@/data'
import { SocialIcon, getSocialPlatformLabel } from '@/components/ui/social-icons'

export function Footer() {
  const storeName = contactInfo.store_name
  const tagline = contactInfo.tagline
  const address = contactInfo.address
  const phone = contactInfo.phone
  const email = contactInfo.email
  const socialNetworks = contactInfo.social_networks

  return (
    <footer id="contacto" className="mt-32 md:mt-48 border-t border-border">
      <div className="mx-auto max-w-7xl px-8 md:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
          {/* Branding */}
          <div>
            <h4 className="text-2xl md:text-3xl font-light tracking-[0.3em] uppercase text-primary mb-6">
              {storeName}
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              {tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h5 className="text-xs tracking-[0.2em] uppercase text-primary/60 mb-6">
              Navegación
            </h5>
            <nav className="flex flex-col gap-3">
              {sections.map((section) => (
                <Link
                  key={section.slug}
                  href={`/catalogo/${section.slug}`}
                  className="text-sm text-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
                >
                  {section.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs tracking-[0.2em] uppercase text-primary/60 mb-6">
              Contacto
            </h5>
            <div className="flex flex-col gap-3 text-sm text-foreground">
              <p>{address.line1}</p>
              {address.line2 && <p>{address.line2}</p>}
              <p>
                {address.postal_code} {address.city}
              </p>
              <p className="mt-2">
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="hover:text-primary transition-colors"
                >
                  {phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${email}`}
                  className="hover:text-primary transition-colors"
                >
                  {email}
                </a>
              </p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h5 className="text-xs tracking-[0.2em] uppercase text-primary/60 mb-6">
              Síguenos
            </h5>
            <div className="flex flex-col gap-3">
              {socialNetworks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors duration-300"
                >
                  <SocialIcon platform={social.platform} className="size-4" />
                  <span>
                    {social.handle || getSocialPlatformLabel(social.platform)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-[0.2em] text-muted-foreground">
            &copy; {new Date().getFullYear()} {storeName.toUpperCase()}. Todos
            los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
