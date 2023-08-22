import React, { useEffect } from 'react'
import ImageSlider from './ImageSlider'
import './Home.css';
import { images } from '../data/Data';
import { productsStore } from '../store/store';
import ListData from './ListData'
const Home = () => {
  useEffect(()=>{
    document.title = "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!";
  },[]);
  const {MobilesList,Electronic,Beauty,Furniture} = 
  productsStore((state => ({ MobilesList: state.Mobiles, Electronic: state.Electronic,Beauty : state.Beauty,Furniture : state.Furniture}) ))
  return (
    <div className='Home'>    
      <ImageSlider images={images} />
      <ListData list={MobilesList} name={"Mobiles"}/>
      <ListData list={Electronic} name={"Electronic"}/>
      <ListData list={Beauty} name={"Beauty"}/>
      <ListData list={Furniture} name={"Furniture"}/>
      
    </div>
  )
}

export default Home






