import React from 'react'
import './Nav.css'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css';
import MoreData from './MoreData';
const Nav = () => {
  return (
    <>
      <div className='Nav'>
        <div className='logo'>
          <a href='#'>
            <img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' width="75"/>
            <p>Explore <span>Plus</span><img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' width="10"/></p> 
          </a>
          <input type='text' placeholder='Search for products,brands and more'/>
          <div className='search'>
          <svg width="20" height="20" viewBox="0 0 17 18" xmlns="http://www.w3.org/2000/svg">
            <g fill="#2874F1" fill-rule="evenodd">
              <path d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path>
              <path d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path>
            </g>
          </svg>         
          </div>
        </div>
        <div className='links'>
          <button>Login</button>
          <a href='#'>Become a Seller</a>
          <a href='#'>More</a>
          <a href='#'>Cart</a>
        </div>
        
      </div> 
      <div className='bottom-nav'>
        <Tippy content={<MoreData />}>
          <div>
          <img src='https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png' />
            <h1>Grocery</h1>
          </div>
        </Tippy>
      <div>
        <img src='https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png'/>
          <h1>Mobiles</h1>
      </div>
      <div>
        <img src='https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png'/>
          <h1>Fashion</h1>
      </div>
      <div>
        <img src='https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png'/>
          <h1>Electronics</h1>   
      </div>
      <div>
        <img src='https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100'/>
          <h1>Home & Furniture</h1>
      </div>
      <div>
        <img src='https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png'/>
          <h1>Appliances</h1>
      </div>
      <div>
        <img src='https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100'/>
          <h1>Travel</h1>
      </div>
      <div>
        <img src="https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"/>
          <h1>Beauty,Toys & More</h1>
      </div>
      <div>
        <img src='https://rukminim2.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100'/>
          <h1>Two Wheelers</h1>
      </div>
    </div>
    <br></br>
    </>
  )
}

export default Nav