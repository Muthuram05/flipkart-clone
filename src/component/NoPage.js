import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div>
      <img alt='error' src='https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png'></img>
      <h3>Unfortunately the page you are looking for has been moved or deleted</h3>
      <Link to='/' >Click me</Link>
    </div>
  )
}

export default NoPage