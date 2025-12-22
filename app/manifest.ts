import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Limeria Colours',
    short_name: 'Limeria',
    description: 'Nano-mineral sustainable premium paints',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAF8F5',
    theme_color: '#A8B4A5',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
