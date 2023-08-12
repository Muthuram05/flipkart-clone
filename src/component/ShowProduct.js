import React from 'react'
import { useLocation } from 'react-router-dom';
const ShowProduct = () => {
  const {state} = useLocation();
  
  return (
    <div>
      <h2>Received Data:</h2>
      <pre>{state}</pre>
    </div>
  )
}

export default ShowProduct