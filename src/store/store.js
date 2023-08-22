import { create } from "zustand";
import { Mobiles, Electronic, Beauty, Furniture, allData } from "../data/Data";

export const productsStore = create((set, get) => ({
  loginWindow: false,
  items: [],
  fetchData: (product) => {
    set((state) => ({ ...state, items: allData[product] }));
  },
  Mobiles,
  Electronic,
  Beauty,
  Furniture,
  cartData: [
    {
      id: "b6",
      name: "himalaya paste",
      image:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/toothpaste/d/1/y/300-complete-care-toothpaste-2nx150g-2-herbal-himalaya-original-imagn2w6xzyxhfgh.jpeg?q=70",
      rating: "4.3",
      prize: "90",
      stock: 7,
    },
  ],
  setloginWindow: () => set((state) => ({ loginWindow: !state.loginWindow })),
  setCart: (data) => set((state) => ({ cartData: [...state.cartData, data] })),
}));

export const userStore = create((set, get) => ({
  currentUser: null,
  users: ["7639490537", "9791563562", "8056591833"],
  setUser: (data) => {
    set((state) => ({ currentUser: data }));
  },
  newUser: (data) => {
    set((state) => ({ users: [...state.users, data] }));
  },
  isUserPresent: (user) => {
    const data = get().users;
    return data.includes(user);
  },
}));
