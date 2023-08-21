import React from 'react'
import './Nav.css'
import MoreData from './MoreData';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { MyAccount, moreData } from '../data/Data';
import 'tippy.js/themes/light.css'
import BottomNav from './BottomNav';
import { Link } from 'react-router-dom';
import { productsStore } from '../store/srore';

const Nav = () => {
  const user = productsStore((state) => state.user);
  const setloginWindow = productsStore((state) => state.setloginWindow);

  return (
    <>
      <div className='Nav'>
        <div className='logo'>
          <Link to='/'>
            <img alt='nav' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' width="75" />
            <p>Explore <span>Plus</span><img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' width="10" alt='plus'/></p>
          </Link>
          <input type='text' placeholder='Search for products,brands and more' />
          <div className='search'>
            <img src='./image/search.svg' alt='search'/>
          </div>
        </div>
        <div className='links'>
          {user ? 
          <Tippy content={<MoreData data={MyAccount} />} interactive={true} theme='light'  className='tippy'>
            <div className='moreData'>
              <a href='#'>My Account</a>
              <img src='./image/NavArrow.svg' alt='arrow'  />
            </div>
          </Tippy> : <button onClick={setloginWindow}>Login</button>
          }
          <a href='#'>Become a Seller</a>
          <Tippy content={<MoreData data={moreData} />} interactive={true} theme='light' className='tippy'>
            <div className='moreData'>
              <a href='#'>More</a>
              <img src='./image/NavArrow.svg'  alt='arrow'/>
            </div>
          </Tippy>
          <Link to='/cart'>Cart</Link>
        </div>
      </div>
      <div className='bottom-nav'>
        <BottomNav />
      </div>
      <br></br>
    </>
  )
}

export default Nav