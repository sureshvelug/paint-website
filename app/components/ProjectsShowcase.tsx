import Image from 'next/image'
import Link from 'next/link'

export default function ProjectsShowcase() {
  const projects = [
    { name: 'Modern Villa', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80' },
    { name: 'Boutique Hotel', image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=600&q=80' }
  ]

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-h2 text-center mb-12">Featured Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div key={idx} className="relative h-80 rounded-2xl overflow-hidden shadow-xl group">
            <Image src={project.image} alt={project.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              <h3 className="text-white text-2xl font-semibold">{project.name}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/projects" className="text-brand-sage font-medium hover:underline">View All Projects →</Link>
      </div>
    </section>
  )
}
