import React from 'react'
import { useLocation } from 'react-router-dom';
import './ShowProducts.css'
const ShowProduct = () => {
  const {state} = useLocation();
  
  return (
    <div className='ShowProducts'>
      <div className='filters'>

      </div>
      <div className='products'>

      </div>
    </div>
  )
}

export default ShowProduct