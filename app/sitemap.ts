import type { MetadataRoute } from 'next'
import { getAllColorSlugs, getAllCollectionSlugs } from './lib/data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ecoluxurypaints.com'

  // Static pages

  const staticPages = [
    '',
    '/colors',
    '/collections',
    '/technology',
    '/sustainability',
    '/projects',
    '/about',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic color pages
  const colorSlugs = await getAllColorSlugs()
  const colorPages = colorSlugs.map((slug) => ({
    url: `${baseUrl}/colors/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Dynamic collection pages
  const collectionSlugs = await getAllCollectionSlugs()
  const collectionPages = collectionSlugs.map((slug) => ({
    url: `${baseUrl}/collections/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...colorPages, ...collectionPages]
}
