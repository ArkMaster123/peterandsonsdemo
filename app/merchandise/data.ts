export type Product = {
  id: string
  name: string
  description: string
  price: number
  category: 'apparel' | 'accessories' | 'collectibles'
  images: string[]
  sizes?: string[]
  colors?: string[]
  inStock: boolean
  featured?: boolean
}

export const products: Product[] = [
  {
    id: 'ps-tee-classic',
    name: 'Classic P&S Logo T-Shirt',
    description: 'Premium cotton t-shirt featuring the iconic Peter & Sons mountain logo in gold embroidery.',
    price: 29.99,
    category: 'apparel',
    images: ['/shop/tshirt.png'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'White'],
    inStock: true,
    featured: true
  },
  {
    id: 'ps-tee-special',
    name: 'Special Edition Gaming T-Shirt',
    description: 'Limited edition t-shirt with special P&S gaming-inspired design.',
    price: 34.99,
    category: 'apparel',
    images: ['/shop/tshirt2.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy'],
    inStock: true,
    featured: true
  },
  {
    id: 'ps-hoodie-tech',
    name: 'Tech Series Hoodie',
    description: 'Premium gaming hoodie with reflective P&S branding and tech-inspired design elements.',
    price: 59.99,
    category: 'apparel',
    images: ['/shop/hoodie.png'],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Deep Navy'],
    inStock: true,
    featured: true
  },
  {
    id: 'ps-cap-pro',
    name: 'Pro Gaming Cap',
    description: 'Adjustable cap with embroidered P&S logo, perfect for gaming sessions.',
    price: 24.99,
    category: 'accessories',
    images: ['/shop/tshirt.png'],
    colors: ['Black', 'Navy', 'Gold'],
    inStock: true
  },
  {
    id: 'ps-mousepad-xl',
    name: 'XL Gaming Mousepad',
    description: 'Professional-grade extended mousepad with P&S design and non-slip base.',
    price: 34.99,
    category: 'accessories',
    images: ['/shop/tshirt2.png'],
    inStock: true,
    featured: true
  },
  {
    id: 'ps-keychain-gold',
    name: 'Gold Edition Keychain',
    description: 'Limited edition metal keychain featuring the P&S mountain logo in gold finish.',
    price: 14.99,
    category: 'accessories',
    images: ['/shop/keychain.png'],
    inStock: true,
    featured: true
  },
  {
    id: 'ps-figurine-mascot',
    name: 'P&S Mascot Figurine',
    description: 'Collectible figurine of the Peter & Sons mascot, hand-painted and detailed.',
    price: 49.99,
    category: 'collectibles',
    images: ['/shop/tshirt.png'],
    inStock: true,
    featured: true
  },
  {
    id: 'ps-mug-premium',
    name: 'Premium Gaming Mug',
    description: 'High-quality ceramic mug with P&S branding, perfect for gaming sessions.',
    price: 19.99,
    category: 'accessories',
    images: ['/shop/tshirt2.png'],
    inStock: true
  },
  {
    id: 'ps-backpack-pro',
    name: 'Pro Gaming Backpack',
    description: 'Water-resistant backpack with dedicated laptop compartment and P&S branding.',
    price: 79.99,
    category: 'accessories',
    images: ['/shop/hoodie.png'],
    inStock: true,
    featured: true
  }
] 