import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Event Planning | TeamUp Events',
  description: 'Let us handle the details of your special day with our event planning services.',
}

export default function EventPlanningPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">Event Planning</h1>
      <p className="text-lg mb-8">
        Our experienced team can handle all aspects of your event, from concept to execution.
      </p>
      {/* Add more content about event planning here */}
    </div>
  )
}

