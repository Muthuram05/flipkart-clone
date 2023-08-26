import { create } from "zustand";
import { Mobiles, Electronic, Beauty, Furniture, allData } from "../data/Data";

export const productsStore = create((set, get) => ({
  loginWindow: false,
  items: [],
  fetchData: (product) => {
    set((state) => ({ ...state, items: allData[product] }));
  },
  productList :{
    Mobiles,
    Electronic,
    Beauty,
    Furniture
  },
  cartData: [],
  setloginWindow: () => set((state) => ({ loginWindow: !state.loginWindow })),
  setCart: (data) => set((state) => ({ cartData: [ ...data] })),
  setEmptyCart: () => set((state)=> ({cartData: []})),
  setAllCart: (data) => set((state) => ({ cartData: data })),
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
