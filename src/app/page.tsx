import { sections, heroConfig, getProductsBySection } from '@/data'
import { PageShell } from '@/components/catalog/catalog-client'
import { HeroNarrative } from '@/components/home/hero-narrative'
import { CategorySection } from '@/components/home/category-section'
import { Footer } from '@/components/layout/footer'

export default function HomePage() {
  return (
    <PageShell>
      <HeroNarrative heroData={heroConfig} />

      <div className="space-y-24 md:space-y-32 pb-16">
        {sections.map((section, index) => (
          <CategorySection
            key={section.id}
            section={section}
            products={getProductsBySection(section.slug)}
            className={index === 0 ? 'pt-16 md:pt-24' : ''}
          />
        ))}
      </div>

      <Footer />
    </PageShell>
  )
}
