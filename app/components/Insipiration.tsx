'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function InspirationSocialProof() {
  const [activeTab, setActiveTab] = useState('all')

  const projects = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=900&q=80",
      title: "Modern Living Room",
      category: "real-homes",
      type: "Living Room",
      color: "Sage Whisper",
      location: "Mumbai",
      likes: 234
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=900&q=80",
      title: "Minimal Bedroom",
      category: "designer",
      type: "Bedroom",
      color: "Dove Grey",
      designer: "Studio Essence",
      likes: 189
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?w=900&q=80",
      title: "Bright Kitchen",
      category: "real-homes",
      type: "Kitchen",
      color: "Sand Echo",
      location: "Delhi",
      likes: 312
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=900&q=80",
      title: "Textured Wall Feature",
      category: "instagram",
      type: "Living Room",
      color: "Terracotta Rust",
      username: "@homedesignstudio",
      likes: 567
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1615873968403-89e068629265?w=900&q=80",
      title: "Industrial Chic",
      category: "designer",
      type: "Office",
      color: "Concrete",
      designer: "Mehra Associates",
      likes: 421
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=900&q=80",
      title: "Cozy Reading Nook",
      category: "instagram",
      type: "Corner Space",
      color: "Warm Clay",
      username: "@interiorlovers",
      likes: 298
    }
  ]

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'real-homes', label: 'Real Homes', count: projects.filter(p => p.category === 'real-homes').length },
    { id: 'designer', label: 'Designer Collab', count: projects.filter(p => p.category === 'designer').length },
    { id: 'instagram', label: 'Instagram', count: projects.filter(p => p.category === 'instagram').length }
  ]

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab)

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider uppercase bg-black/5 text-black rounded-full">
            Inspiration Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-black">
            Real Spaces, Real Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Discover how our paints transform homes through real projects, designer collaborations, and customer stories
          </p>
        </div>

        {/* Social Proof Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-4 rounded-2xl bg-gray-50 border-2 border-gray-100">
            <div className="text-3xl font-bold text-black mb-1">2.5K+</div>
            <div className="text-sm text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-gray-50 border-2 border-gray-100">
            <div className="text-3xl font-bold text-black mb-1">50+</div>
            <div className="text-sm text-gray-600 font-medium">Designer Partners</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-gray-50 border-2 border-gray-100">
            <div className="text-3xl font-bold text-black mb-1">15K+</div>
            <div className="text-sm text-gray-600 font-medium">Instagram Followers</div>
          </div>
          <div className="text-center p-4 rounded-2xl bg-gray-50 border-2 border-gray-100">
            <div className="text-3xl font-bold text-black mb-1">98%</div>
            <div className="text-sm text-gray-600 font-medium">Customer Satisfaction</div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-black text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-black hover:scale-105'
              }`}
            >
              {cat.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeTab === cat.id
                  ? 'bg-white/20'
                  : 'bg-gray-100'
              }`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Masonry Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 hover:border-black transition-all duration-500 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)]"
            >
              {/* Image */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-black">
                  {project.category === 'real-homes' && '🏠 Real Home'}
                  {project.category === 'designer' && '✨ Designer'}
                  {project.category === 'instagram' && '📸 Instagram'}
                </div>

                {/* Like Button */}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 shadow-lg">
                  <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                {/* Hover Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-serif font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-sm mb-2">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {project.likes}
                    </span>
                    <span>•</span>
                    <span>{project.type}</span>
                  </div>
                  <div className="text-sm opacity-90">
                    <span className="font-semibold">Color:</span> {project.color}
                  </div>
                  {project.location && (
                    <div className="text-sm opacity-90">
                      <span className="font-semibold">Location:</span> {project.location}
                    </div>
                  )}
                  {project.designer && (
                    <div className="text-sm opacity-90">
                      <span className="font-semibold">By:</span> {project.designer}
                    </div>
                  )}
                  {project.username && (
                    <div className="text-sm opacity-90">
                      <span className="font-semibold">Via:</span> {project.username}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center bg-gray-50 rounded-3xl p-12 border-2 border-gray-200">
          <div className="max-w-2xl mx-auto">
            <div className="inline-block p-4 bg-white rounded-2xl shadow-lg mb-6">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-serif font-bold text-black mb-3">
              Follow Us on Instagram
            </h3>
            <p className="text-gray-600 mb-6 font-light">
              Join 15K+ followers for daily inspiration, color tips, and exclusive behind-the-scenes content
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-semibold hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              @ecoluxurypaints
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
