"use client"

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import AddToCartForm from '@/components/addToCartForm'

const products = [
  { 
    name: 'Custom Birthday Cake', 
    price: '$149.99', 
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CustomBirthday%20Cake.jpg-MGdmq0KqSvinXrt0G112HmG4bAaEkH.jpeg',
    description: 'Luxury themed custom birthday cake'
  },
  { 
    name: 'Party Food Platter', 
    price: '$79.99', 
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PartyFoodPlatter.jpg-OtjOVPv7Ff3T322xd2kCsWlLj1hkWf.jpeg',
    description: 'Assorted wraps, quesadillas, and chips'
  },
  { 
    name: 'Decoration Package', 
    price: '$299.99', 
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DecorationPackage.jpg-06D4mZB9XdT2kV1dfJ5PNfdtDfYnf7.jpeg',
    description: 'Complete party decoration setup'
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  width={400} 
                  height={300} 
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
                <p className="text-blue-600 font-semibold mt-2">{product.price}</p>
              </CardContent>
              <CardFooter>
                <AddToCartForm item={{ name: product.name, price: parseFloat(product.price.replace('$', '')) }} />
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}