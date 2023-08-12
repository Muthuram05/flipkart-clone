import React from 'react'
import './Nav.css'
import MoreData from './MoreData';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { MyAccount, moreData } from '../data/Data';
import 'tippy.js/themes/light.css'
import BottomNav from './BottomNav';
const Nav = () => {
  return (
    <>
      <div className='Nav'>
        <div className='logo'>
          <a href='#'>
            <img alt='nav' src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png' width="75" />
            <p>Explore <span>Plus</span><img src='https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png' width="10" /></p>
          </a>
          <input type='text' placeholder='Search for products,brands and more' />
          <div className='search'>
            <img src='./image/search.svg' />
          </div>
        </div>
        <div className='links'>
          <Tippy content={<MoreData data={MyAccount} />} interactive={true} theme='light' className='tippy'>
            <div>
              <a href='#'>My Account</a>
              <img src='./image/arrow.svg' style={{ transform: "rotate(-90deg)", marginLeft: "10px" }} />
            </div>
          </Tippy>
          <a href='#'>Become a Seller</a>
          <Tippy content={<MoreData data={moreData} />} interactive={true} theme='light' className='tippy'>
            <div>
              <a href='#'>More</a>
              <img src='./image/arrow.svg' style={{ transform: "rotate(-90deg)", marginLeft: "10px" }} />
            </div>
          </Tippy>
          <a href='#'>Cart</a>
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