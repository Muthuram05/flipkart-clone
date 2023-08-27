import { create } from "zustand";

export const productsStore = create((set, get) => ({
  loginWindow: false,
  productList :{
    // Mobiles,
    // Electronic,
    // Beauty,
    // Furniture
  },
  cartData: [],
  setProduct : (data) => set((state) => ({productList : {...data}})),
  setloginWindow: () => set((state) => ({ loginWindow: !state.loginWindow })),
  setCart: (data) => set((state) => ({ cartData: [ ...data] })),
  setEmptyCart: () => set(()=> ({cartData: []})),
  setAllCart: (data) => set(() => ({ cartData: data })),
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
