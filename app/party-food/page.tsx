import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { UtensilsCrossed, Coffee, Pizza, Sandwich } from 'lucide-react'

const foodCategories = [
  {
    title: "Appetizers & Snacks",
    description: "Mini sandwiches, spring rolls, and finger foods",
    icon: UtensilsCrossed,
    image: "/assets/AppetizerSnacks.jpg"
  },
  {
    title: "Main Courses",
    description: "Buffet-style mains including vegetarian options",
    icon: Pizza,
    image: "/assets/MainCourses.jpg"
  },
  {
    title: "Dessert Station",
    description: "Mini desserts, fruit platters, and sweet treats",
    icon: Coffee,
    image: "/assets/DesserStation.png"
  },
  {
    title: "Special Dietary Options",
    description: "Gluten-free, vegan, and allergen-free choices",
    icon: Sandwich,
    image: "/assets/SpecialDietaryOptions.jpg"
  }
]

export default function PartyFoodPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Party Food</h1>
      <p className="text-lg mb-8">
        From finger foods to full meals, we offer a wide range of catering options for all types of events.
        Our experienced chefs create delicious menus that cater to all dietary requirements.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {foodCategories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
            <Image
              src={category.image}
              alt={category.title}
              width={150}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <div className="flex items-center gap-4">
                <category.icon className="w-8 h-8 text-blue-500" />
                <CardTitle className="text-blue-600">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{category.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}