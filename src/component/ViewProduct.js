import React from 'react'
import { useLocation } from 'react-router-dom'
const ViewProduct = () => {
  const {state} = useLocation();
  console.log(state)
  return (
    <div>ViewProduct</div>
  )
}

export default ViewProduct