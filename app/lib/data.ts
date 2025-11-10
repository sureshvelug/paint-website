/**
 * Data Layer - Colors and Collections
 * File: lib/data.ts
 */

// TYPE DEFINITIONS
export interface Color {
    id: string
    slug: string
    name: string
    hex: string
    rgb: { r: number; g: number; b: number }
    collection: string
    finish: 'Matte' | 'Satin' | 'Texture' | 'Moisture Barrier Satin'
    bestFor: string[]
    roomPhotos: string[]
    description: string
    lrv: number // Light Reflectance Value
    undertones: string[]
  }
  
  export interface Collection {
    id: string
    slug: string
    name: string
    tagline: string
    description: string
    features: string[]
    coverage: string
    finish: string
    dryingTime: string
    colors: string[]
    imageUrl: string
    price: {
      perLiter: number
      currency: string
    }
  }
  
  // COLORS DATA (15 colors)
  export const colors: Color[] = [
    {
      id: '1',
      slug: 'sage-whisper',
      name: 'Sage Whisper',
      hex: '#A8B4A5',
      rgb: { r: 168, g: 180, b: 165 },
      collection: 'Elysian Matte',
      finish: 'Matte',
      bestFor: ['Living rooms', 'Bedrooms', 'Home offices'],
      roomPhotos: [
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80'
      ],
      description: 'A calming sage green with subtle grey undertones.',
      lrv: 45,
      undertones: ['Grey', 'Green', 'Blue']
    },
    // ... (See downloaded file for all 15 colors)
  ]
  
  export const collections: Collection[] = [
    {
      id: '1',
      slug: 'elysian-matte',
      name: 'Elysian Matte',
      tagline: 'Velvety finish for calm, modern interiors',
      description: 'Ultra-smooth finish enhanced with nano-silica particles.',
      features: [
        'Ultra-smooth velvety texture',
        'Washability: ISO 11998 Class 1',
        'VOC: <5 g/L'
      ],
      coverage: 'Up to 14 m²/liter per coat',
      finish: 'Flat Matte',
      dryingTime: '30 minutes touch dry',
      colors: ['sage-whisper', 'dove-grey', 'sand-echo', 'whisper-white'],
      imageUrl: 'https://images.unsplash.com/photo-1615875221248-cab979f985ad?w=1200&q=80',
      price: { perLiter: 899, currency: 'INR' }
    },
    // ... (See downloaded file for all 4 collections)
  ]
  
  // HELPER FUNCTIONS
  export async function getAllColors(): Promise<Color[]> {
    return colors
  }
  
  export async function getColorBySlug(slug: string): Promise<Color | null> {
    return colors.find(color => color.slug === slug) || null
  }
  
  export async function getAllColorSlugs(): Promise<string[]> {
    return colors.map(color => color.slug)
  }
  
  export async function getColorsByCollection(collectionName: string): Promise<Color[]> {
    return colors.filter(color => color.collection === collectionName)
  }
  
  export async function getAllCollections(): Promise<Collection[]> {
    return collections
  }
  
  export async function getCollectionBySlug(slug: string): Promise<Collection | null> {
    return collections.find(collection => collection.slug === slug) || null
  }
  
  export async function getAllCollectionSlugs(): Promise<string[]> {
    return collections.map(collection => collection.slug)
  }
  
  export async function searchColors(query: string): Promise<Color[]> {
    const lowerQuery = query.toLowerCase()
    return colors.filter(color =>
      color.name.toLowerCase().includes(lowerQuery) ||
      color.hex.toLowerCase().includes(lowerQuery) ||
      color.description.toLowerCase().includes(lowerQuery)
    )
  }
  
  // ... more helper functions (see full file)
  