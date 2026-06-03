import type { MetadataRoute } from 'next'
import { getAllSlugs, getStateCounts } from '@/lib/data'
import { CATEGORIES } from '@/lib/types'

const BASE_URL = 'https://www.findglp1clinic.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [slugs, stateCounts] = await Promise.all([
    getAllSlugs().catch(() => [] as string[]),
    getStateCounts().catch(() => [] as { state: string; count: number }[]),
  ])

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/listings`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/submit`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${BASE_URL}/categories/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const statePages: MetadataRoute.Sitemap = stateCounts.map(({ state }) => ({
    url: `${BASE_URL}/listings?state=${state}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  const listingPages: MetadataRoute.Sitemap = slugs.map((slug) => ({
    url: `${BASE_URL}/listings/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [...staticPages, ...categoryPages, ...statePages, ...listingPages]
}
