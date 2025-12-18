import type { Metadata } from 'next'
import { getColorBySlug, getAllColorSlugs } from '../../lib/data'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = await getAllColorSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const color = await getColorBySlug(params.slug)
  if (!color) return {}
  return {
    title: `${color.name} - ${color.collection} Collection`,
    description: color.description,
  }
}

export default async function ColorDetailPage({ params }: { params: { slug: string } }) {
  const color = await getColorBySlug(params.slug)
  if (!color) notFound()

  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="aspect-square rounded-2xl shadow-2xl" style={{ backgroundColor: color.hex }} />
        <div>
          <h1 className="text-h1 font-serif mb-2">{color.name}</h1>
          <p className="text-xl text-gray-600 mb-6 font-light">{color.collection} Collection</p>
          <p className="text-gray-700 mb-8 font-light">{color.description}</p>
          <div className="space-y-3 mb-8">
            <div><span className="font-medium">Color Code:</span> {color.hex}</div>
            <div><span className="font-medium">Finish:</span> {color.finish}</div>
            <div><span className="font-medium">Best For:</span> {color.bestFor.join(', ')}</div>
          </div>
          {/* <button className="w-full bg-brand-sage text-white py-4 rounded-lg font-medium">
            Request Free Sample
          </button> */}
        </div>
      </div>
    </div>
  )
}
