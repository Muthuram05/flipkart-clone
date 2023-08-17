import React from 'react'
import { useLocation } from 'react-router-dom';
import './ShowProducts.css'
const ShowProduct = () => {
  const {state} = useLocation();
  console.log(state)
  return (
    <div className='ShowProducts'>
      <div className='filters'>

      </div>
      <div className='products'>
        {state.map((e=>(
          <div key={e.id} className='product'>
            <img src={e.image}/>
            <h1>{e.name}</h1>
            <div>
            <span id='rating'>{e.rating}</span>
            <span>({e.stock})</span>
            </div>
            
            <span>{e.prize}</span>
            
          </div>
        )))}
      </div>
    </div>
  )
}

export default ShowProduct