import React from 'react'
import ImageSlider from './ImageSlider'
import './Home.css';
import { images } from '../data/Data';
import { productsStore } from '../store/srore';
import ListData from './ListData'
const Home = () => {
  const MobilesList = productsStore((state) => state.Mobiles)

  const Electronic = productsStore((state) => state.Electronic)

  return (
    <div className='Home'>
      <ImageSlider images={images} />
      <ListData list={MobilesList} name={"Mobiles"}/>
      <ListData list={Electronic} name={"Electronic"}/>
    </div>

  )
}

export default Home






