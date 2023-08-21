import React, { useEffect } from 'react'
import ImageSlider from './ImageSlider'
import './Home.css';
import { images } from '../data/Data';
import { productsStore } from '../store/srore';
import ListData from './ListData'
import Login from './Login';
const Home = () => {
  useEffect(()=>{
    document.title = "Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!";
  },[]);
  const MobilesList = productsStore((state) => state.Mobiles)
  const setloginWindow = productsStore((state) => state.setloginWindow);
  const Electronic = productsStore((state) => state.Electronic)
  const login= productsStore((state)=>state.loginWindow)
  console.log(login)
  return (
    <div className='Home'>
      {login ? 
      <div className='login'><Login/><i onClick={setloginWindow} class="fa-solid fa-xmark"></i></div>
      : null}
      <ImageSlider images={images} />
      <ListData list={MobilesList} name={"Mobiles"}/>
      <ListData list={Electronic} name={"Electronic"}/>
    </div>

  )
}

export default Home






