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
      id: "m4",
      name: "motorola edge 40",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/2/m/o/edge-40-pay40030in-motorola-original-imagpqzchzhg6fex.jpeg?q=70",
      rating: "4.2",
      prize: "29999",
      stock: 10,
    },
    {
      id: "m5",
      name: "apple iphone 14 plus",
      image:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70",
      rating: "4.7",
      prize: "80999",
      stock: 10,
    },
  ],
  setloginWindow: () => set((state) => ({ loginWindow: !state.loginWindow })),
  setCart: (data) => set((state) => ({ cartData: [...state.cartData, data] })),
}));

export const userStore = create((set, get) => ({
  currentUser: null,
  users: [],
  getUser: (data) => {
    set((state) => ({ users: data }));
  },
  setUser: (data) => {
    set((state) => ({ currentUser: data }));
  },
  newUser: (data) => {
    console.log(get());
    set((state) => ({ users: [...state.users, data] }));
  },
  isUserPresent: (user) => {
    const data = get().users;
    return data.includes(user);
  },
}));
