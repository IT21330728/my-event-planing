'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Camera, Video, ImageIcon, Heart } from 'lucide-react'


const services = [
  {
    title: "Event Photography",
    description: "Professional photography coverage for your entire event",
    icon: Camera,
    features: ["Multiple photographers", "High-resolution images", "Same-day previews"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EventPhotography.jpg-8I53jZRFTxDiLJDbRwveKypm3cRFw2.jpeg",
    price: 999
  },
  {
    title: "Videography",
    description: "Cinematic video coverage of your special moments",
    icon: Video,
    features: ["4K recording", "Highlight reels", "Full event coverage"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Videography.jpg-EAfrRqr3zSIwwNAPI5jMbpvYxCGto6.jpeg",
    price: 1499
  },
  {
    title: "Photo Booth",
    description: "Fun and interactive photo booth experience",
    icon: ImageIcon,
    features: ["Props included", "Instant prints", "Digital copies"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PhotoBooth.jpg-5K2jRiX5LqUimiOytlRzBhKquLBhGB.jpeg",
    price: 599
  },
  {
    title: "Special Moments",
    description: "Capturing candid and precious moments",
    icon: Heart,
    features: ["Candid shots", "Group photos", "Detail shots"],
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Candidshots.jpg-lYxc4XLZRRKOTgcEjgeVpj9MUH0BXT.jpeg",
    price: 799
  }
]

interface BookingFormData {
  name: string;
  email: string;
  date: string;
  eventType: string;
  message: string;
}

export default function PhotographyPage() {
  const [selectedService, setSelectedService] = useState<(typeof services)[0] | null>(null)
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    email: '',
    date: '',
    eventType: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Booking request submitted",
      description: `We'll contact you soon about your ${selectedService?.title} booking.`,
    })
    setFormData({
      name: '',
      email: '',
      date: '',
      eventType: '',
      message: ''
    })
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Photography Services</h1>
      <p className="text-lg mb-8">
        Our professional photographers will capture every special moment of your event, creating lasting 
        memories that you can treasure forever.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <service.icon className="w-8 h-8 text-blue-500" />
                  <CardTitle className="text-blue-600">{service.title}</CardTitle>
                </div>
                <div className="text-lg font-semibold text-blue-600">
                  ${service.price}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className="w-full bg-blue-500 hover:bg-blue-600"
                    onClick={() => setSelectedService(service)}
                  >
                    Book Now
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Book {service.title}</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Input
                        placeholder="Event Type"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Additional Details"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-semibold">
                        Total: ${selectedService?.price}
                      </div>
                      <Button type="submit">Submit Booking</Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

