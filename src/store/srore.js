import { create } from 'zustand'
import { Mobiles,Electronic} from '../data/Data'

export const productsStore = create((set) => ({
  user: null,
  Mobiles,
  Electronic,
  loginWindow: false,
  setloginWindow:() => set((state) => ({ loginWindow : !state.loginWindow })),
  setUser : ()=>{}
}))

export const products = create((set,get) =>{
  
})