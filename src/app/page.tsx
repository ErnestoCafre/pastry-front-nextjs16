import { sections, heroConfig, getProductsBySection } from '@/data'
import { HomeClient } from '@/components/home/home-client'
import { HeroNarrative } from '@/components/home/hero-narrative'
import { CategorySection } from '@/components/home/category-section'
import { Footer } from '@/components/layout/footer'

export default function HomePage() {
  return (
    <HomeClient>
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
    </HomeClient>
  )
}
