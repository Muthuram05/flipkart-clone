import React from 'react'
import ImageSlider from './ImageSlider'
import './Home.css';
import { images } from '../data/Data';
import Tippy from '@tippyjs/react';
const Home = () => {
  return (
    <div className='Home'>
      <ImageSlider images={images} />
    </div>

  )
}

export default Home