import type { Metadata } from 'next'
import ColorGrid from '../components/ColorGrid'
import { getAllColors } from '../lib/data'

export const metadata: Metadata = {
  title: 'Color Explorer - 200+ Nano-Mineral Paint Shades',
  description: 'Explore our complete range of eco-luxury paint colors.',
}

export default async function ColorsPage() {
  const colors = await getAllColors()

  return (
    <div className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
      <h1 className="text-h1 font-serif mb-4">Explore Our Colors</h1>
      <p className="text-xl text-gray-600 mb-12 font-light">
        200+ nano-mineral shades designed for timeless elegance
      </p>
      <ColorGrid colors={colors} />
    </div>
  )
}
