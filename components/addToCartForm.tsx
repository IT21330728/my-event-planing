"use client"

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from 'react-hot-toast'

interface AddToCartFormProps {
  item: { name: string, price: number }
}

export default function AddToCartForm({ item }: AddToCartFormProps) {
  const [quantity, setQuantity] = useState(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    })
    setQuantity(1)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full bg-blue-500 hover:bg-blue-600">Add to Cart</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add {item.name} to Cart</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Input
              type="number"
              placeholder="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              min={1}
              required
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="text-lg font-semibold">
              Total: ${(item.price * quantity).toFixed(2)}
            </div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}