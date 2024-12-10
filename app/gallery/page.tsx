import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Event Gallery | TeamUp Events',
  description: 'View our gallery of past events and get inspired for your next celebration with TeamUp Events.',
}

const galleryImages = [
  { src: '/placeholder.svg?height=300&width=400', alt: 'Birthday party setup' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Wedding decoration' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Corporate event' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Custom birthday cake' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Party food spread' },
  { src: '/placeholder.svg?height=300&width=400', alt: 'Event photography' },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Event Gallery</h1>
      <p className="text-lg mb-8">
        Take a look at some of the amazing events we've helped create. From intimate gatherings to large-scale 
        celebrations, our gallery showcases the diversity and quality of our work.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <Image src={image.src} alt={image.alt} width={400} height={300} className="w-full h-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}

