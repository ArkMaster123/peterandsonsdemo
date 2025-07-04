'use client'

import { Header } from "@/app/components/header"
import { products } from "./data"
import { ProductCard } from "./components/product-card"
import { CartSheet } from "./components/cart-sheet"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MerchandisePage() {
  const categories = ['all', ...new Set(products.map(p => p.category))]

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-24 lg:pt-28 pb-8 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Merchandise</h1>
            <p className="text-xl text-muted-foreground">
              Official Peter & Sons merchandise and branded items
            </p>
          </div>
          <CartSheet />
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-4">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="capitalize">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products
                  .filter((p) => category === 'all' || p.category === category)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  )
} 