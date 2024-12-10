import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | TeamUp Events',
  description: 'Learn more about TeamUp Events and our passion for creating unforgettable experiences.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-pink-600 mb-6">About TeamUp Events</h1>
      <p className="text-lg mb-4">
        TeamUp Events is your premier partner in creating unforgettable experiences. Founded with a passion for 
        bringing people together, we specialize in a wide range of event services, from custom cakes to full-scale 
        event planning and decoration.
      </p>
      <p className="text-lg mb-4">
        Our team of experienced professionals is dedicated to turning your vision into reality. Whether you're 
        planning a birthday party, corporate event, or wedding, we're here to ensure every detail is perfect.
      </p>
      <p className="text-lg">
        At TeamUp Events, we believe that every occasion is an opportunity to create lasting memories. Let us help 
        you make your next event truly special.
      </p>
    </div>
  )
}

