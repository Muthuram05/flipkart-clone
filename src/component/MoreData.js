import React from 'react'
import './MoreData.css'
import { userStore } from '../store/store'
import { toast } from 'react-toastify';
const MoreData = ({ data }) => {
  const setUser = userStore((state)=> state.setUser);
  const logout = () =>{
    toast("Logout Sucessfully");
    setUser(null);
  
  }
  return (
    <>
      {data.map((e,index) => (
        <div className='tippydata' key={index} onClick={() =>setUser(null)}>
          <li>{e[0]}</li>
          <span onClick={() =>e[1] === 'Logout' ? logout : null}>{e[1]}</span>
        </div>
      ))}
    </>
  )
}

export default MoreData