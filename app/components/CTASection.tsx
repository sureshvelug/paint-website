import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-brand-sage">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-h2 text-white mb-6">Bring Eco-Luxury Into Your Space</h2>
        <p className="text-xl text-white/90 mb-8">Let&apos;s co-create a world where sustainability is the new standard of beauty.</p>
        <Link href="/contact#samples" className="inline-block bg-white text-brand-sage px-10 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Request a Free Sample
        </Link>
      </div>
    </section>
  )
}
