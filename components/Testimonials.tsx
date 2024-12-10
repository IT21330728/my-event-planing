import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  { name: 'Sarah L.', content: 'TeamUp Events made my daughter\'s birthday unforgettable! The cake was beautiful and delicious.', avatar: 'SL' },
  { name: 'Mike R.', content: 'Their event planning service took all the stress out of our corporate event. Highly recommended!', avatar: 'MR' },
  { name: 'Emily T.', content: 'The decorations were stunning and the photographer captured every special moment. Thank you!', avatar: 'ET' },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-blue-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={`/placeholder.svg?text=${testimonial.avatar}`} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{testimonial.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

