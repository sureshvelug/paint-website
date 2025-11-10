import Link from 'next/link'
import type { Color } from '../lib/data.ts'

interface ColorGridProps {
  colors: Color[]
}

export default function ColorGrid({ colors }: ColorGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {colors.map((color) => (
        <Link key={color.id} href={`/colors/${color.slug}`} className="group">
          <div 
            className="aspect-square rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl mb-3"
            style={{ backgroundColor: color.hex }}
          />
          <div className="text-center">
            <p className="font-medium text-gray-900">{color.name}</p>
            <p className="text-sm text-gray-600">{color.collection}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}
