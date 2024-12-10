'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { toast } from 'react-hot-toast' // Import the toast function
import AddToCartForm from '@/components/addToCartForm'

const cakes = [
  {
    name: "Lemon Zest Delight",
    description: "Tangy lemon cake with citrus glaze",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LemonZest.jpg-UVEYXGpyIyVPoEP4zMJcCU7KdPvwkC.jpeg",
    price: 39.99
  },
  {
    name: "Classic Red Velvet",
    description: "Rich red velvet with cream cheese frosting",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RedVelvet.jpg-W9FYRiRSxaNyC1LC0GNwxKqqz77e2z.jpeg",
    price: 44.99
  },
  {
    name: "Black Forest",
    description: "Chocolate cake with cherries and cream",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BlackForest.jpg-Y8QOc41YOaqSw7RH4dHEvy5H5dDTGh.jpeg",
    price: 49.99
  },
  {
    name: "Strawberry Bliss",
    description: "Fresh strawberry topped sheet cake",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/StrawberryBliss.jpg-0A5diW8ca5iPdGUPKmRuwnq9RWkVJx.jpeg",
    price: 34.99
  },
  {
    name: "Carrot Cake",
    description: "Classic carrot cake with cream cheese frosting",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CarrotCake.jpg-kcjgekEbP3ZP2EwYf4EnCdmo6Vsj3F.jpeg",
    price: 39.99
  },
  {
    name: "Chocolate Delight",
    description: "Layered chocolate cake with ganache",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/chocalte_delight.jpg-M767Mlpwe2rR8raWil8ildr9eUGnP5.jpeg",
    price: 54.99
  },
  {
    name: "Vanilla Dream",
    description: "Classic vanilla cake with coconut frosting",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vanilla-Dream_Unstyled_Grey.jpg-lTlzf48Om4Hml684Fa3mX64SKqHqIx.jpeg",
    price: 29.99
  }
]

export default function CakesPage() {
  const [cart, setCart] = useState<string[]>([])

  const addToCart = (cakeName: string) => {
    setCart([...cart, cakeName])
    toast({
      title: "Added to cart",
      description: `${cakeName} has been added to your cart.`,
    })
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Custom Cakes</h1>
      <p className="text-lg mb-8">
        Discover our delicious range of custom cakes, perfect for birthdays, weddings, and all special occasions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cakes.map((cake, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                src={cake.image}
                alt={cake.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-600">{cake.name}</h3>
                <p className="text-gray-600 mb-2">{cake.description}</p>
                <p className="text-blue-600 font-semibold mb-4">${cake.price.toFixed(2)}</p>
                <AddToCartForm item={{ name: cake.name, price: cake.price }} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}