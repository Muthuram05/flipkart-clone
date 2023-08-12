import { create } from 'zustand'
import { MobilesList,ElectronicList } from '../data/Data'

export const productsStore = create((set) => ({
  user: null,
  MobilesList,
  ElectronicList
}))