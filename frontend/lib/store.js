import { create } = require('zustand');

export const useStore = create((set) => ({
  user: null,
  token: null,
  products: [],
  cart: [],

  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setProducts: (products) => set({ products }),
  addToCart: (product) => set((state) => ({
    cart: [...state.cart, product],
  })),
  clearCart: () => set({ cart: [] }),
}));
