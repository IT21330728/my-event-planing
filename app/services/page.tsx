import { Metadata } from 'next'
import Services from '@/components/Services'

export const metadata: Metadata = {
  title: 'Our Services | TeamUp Events',
  description: 'Explore the range of services offered by TeamUp Events, from custom cakes to full event planning.',
}

export default function ServicesPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Our Services</h1>
      <p className="text-lg mb-8">
        At TeamUp Events, we offer a comprehensive range of services to make your event truly special. 
        From delicious cakes to full event planning, we've got you covered.
      </p>
      <Services />
    </div>
  )
}

