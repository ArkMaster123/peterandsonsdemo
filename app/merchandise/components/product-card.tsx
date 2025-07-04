'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Product } from '../data'
import { CartItem, useCartStore } from '../store'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

type ProductCardProps = {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>(product.sizes?.[0])
  const [selectedColor, setSelectedColor] = useState<string | undefined>(product.colors?.[0])
  const addItem = useCartStore((state) => state.addItem)
  const { toast } = useToast()

  const handleAddToCart = () => {
    const cartItem: CartItem = {
      product,
      quantity: 1,
      size: selectedSize,
      color: selectedColor,
    }
    
    addItem(cartItem)
    toast({
      title: 'Added to cart',
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="p-0">
        <div className="aspect-square relative overflow-hidden rounded-t-lg bg-muted">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={product.featured}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-6">
        <CardTitle className="mb-2 line-clamp-2">{product.name}</CardTitle>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <p className="text-lg font-semibold mb-4">${product.price.toFixed(2)}</p>
        
        <div className="space-y-4">
          {product.sizes && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Size</label>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger>
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
          
          {product.colors && (
            <div className="space-y-2">
              <label className="text-sm font-medium">Color</label>
              <Select value={selectedColor} onValueChange={setSelectedColor}>
                <SelectTrigger>
                  <SelectValue placeholder="Select color" />
                </SelectTrigger>
                <SelectContent>
                  {product.colors.map((color) => (
                    <SelectItem key={color} value={color}>
                      {color}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full" 
          onClick={handleAddToCart}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </Button>
      </CardFooter>
    </Card>
  )
} 