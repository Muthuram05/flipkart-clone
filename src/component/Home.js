import React from 'react'
import ImageSlider from './ImageSlider'
import './Home.css';
import { images } from '../data/Data';
import { productsStore } from '../store/srore';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const MobilesList = productsStore((state) => state.MobilesList)

  return (
    <div className='Home'>
      <ImageSlider images={images} />
      <ListData list={MobilesList}/>
    </div>

  )
}

export default Home



export const ListData = ({list}) => {
  const data = "my-data";
  const navigate = useNavigate();
  const handleNavigate = ()=>[
    navigate('/products',{state:'data'})
  ]
  return (
    <div>
      <button onClick={handleNavigate}>VIEW ALL</button>
      {list.map((e,index)=>(
        <div> 
          {e.name}
          <img src={e.image} alt={e.image} />
        </div>
      ))}
    </div>
  )
}


