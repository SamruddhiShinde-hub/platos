import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  customizations: {
    protein?: string;
    extras?: Array<{ name: string; price: number }>;
  };
  imageUrl: string;
  thumbnail: string;
}

interface CartState {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  tax: number;
  total: number;
  addItem: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const DELIVERY_FEE = 7.50;
const TAX_RATE = 0.08875; // Example NY Tax

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      subtotal: 0,
      deliveryFee: DELIVERY_FEE,
      tax: 0,
      total: 0,

      addItem: (newItem) => {
        const { items } = get();
        const existingItemIndex = items.findIndex(
          (item) => 
            item.id === newItem.id && 
            JSON.stringify(item.customizations) === JSON.stringify(newItem.customizations)
        );

        let updatedItems;
        if (existingItemIndex > -1) {
          updatedItems = [...items];
          updatedItems[existingItemIndex].quantity += newItem.quantity;
        } else {
          updatedItems = [...items, newItem];
        }

        const subtotal = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const tax = subtotal * TAX_RATE;
        const total = subtotal + DELIVERY_FEE + tax;

        set({ items: updatedItems, subtotal, tax, total });
      },

      updateQuantity: (id, quantity) => {
        const { items } = get();
        if (quantity <= 0) {
          get().removeItem(id);
          return;
        }
        
        const updatedItems = items.map((item) => 
          item.id === id ? { ...item, quantity } : item
        );

        const subtotal = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const tax = subtotal * TAX_RATE;
        const total = subtotal + DELIVERY_FEE + tax;

        set({ items: updatedItems, subtotal, tax, total });
      },

      removeItem: (id) => {
        const { items } = get();
        const updatedItems = items.filter((item) => item.id !== id);

        const subtotal = updatedItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const tax = subtotal * TAX_RATE;
        const total = updatedItems.length > 0 ? subtotal + DELIVERY_FEE + tax : 0;

        set({ items: updatedItems, subtotal, tax, total });
      },

      clearCart: () => set({ items: [], subtotal: 0, tax: 0, total: 0 }),
    }),
    {
      name: 'savor-cart-storage',
    }
  )
);
