import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { sections, getSectionBySlug, getProductsBySection } from '@/data'
import { SectionHeader } from '@/components/catalog/section-header'
import { SectionContent } from '@/components/catalog/section-content'
import { Footer } from '@/components/layout/footer'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return sections.map((section) => ({
    slug: section.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const section = getSectionBySlug(slug)
  if (!section) return { title: 'No encontrado' }
  return {
    title: `${section.name} — Malva`,
    description: section.description,
  }
}

export default async function CatalogoPage({ params }: PageProps) {
  const { slug } = await params
  const section = getSectionBySlug(slug)

  if (!section) {
    notFound()
  }

  const products = getProductsBySection(slug)

  return (
    <>
      <div className="pt-24 md:pt-32 px-8 md:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionHeader section={section} />
          <SectionContent products={products} />
        </div>
      </div>
      <Footer />
    </>
  )
}
