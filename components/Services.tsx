import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Cake, UtensilsCrossed, CalendarDays, Palette, Camera } from 'lucide-react'

const services = [
  { title: 'Online Cake Ordering', description: 'Choose from our delicious range of custom cakes', icon: Cake },
  { title: 'Party Food', description: 'Catering options for all types of events', icon: UtensilsCrossed },
  { title: 'Event Planning', description: 'Let us handle the details of your special day', icon: CalendarDays },
  { title: 'Decorations', description: 'Transform your venue with our decoration services', icon: Palette },
  { title: 'Photography', description: 'Capture your memories with our professional photographers', icon: Camera },
]

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <service.icon className="w-12 h-12 text-blue-500 mb-4" />
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

