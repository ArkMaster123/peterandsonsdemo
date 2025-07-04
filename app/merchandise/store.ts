import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Product } from './data'

export type CartItem = {
  product: Product
  quantity: number
  size?: string
  color?: string
}

type CartStore = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  total: number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (item) => {
        const items = get().items
        const existingItem = items.find(
          (i) => 
            i.product.id === item.product.id && 
            i.size === item.size && 
            i.color === item.color
        )

        if (existingItem) {
          set({
            items: items.map((i) =>
              i === existingItem
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            ),
          })
        } else {
          set({ items: [...items, item] })
        }
      },
      removeItem: (productId) =>
        set((state) => ({
          items: state.items.filter((i) => i.product.id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        })),
      clearCart: () => set({ items: [] }),
      get total() {
        return get().items.reduce(
          (total, item) => total + item.product.price * item.quantity,
          0
        )
      },
    }),
    {
      name: 'cart-storage',
    }
  )
) 