import React, { useState } from 'react'
import { productsStore,userStore } from '../store/store'
import { toast } from "react-toastify";

const Register = (props) => {
  const [data,setData ]= useState('');
  const setUser = userStore((state) => state.setUser)
  const setloginWindow = productsStore((state) => state.setloginWindow)
  const newUser = userStore((state)=> state.newUser)
  const handleRegister = () =>{
    if(data.length === 10){
      newUser(data)
      toast("Register Sucessfully");
      setloginWindow();
      setUser(data)
      const preUser = localStorage.getItem('users')
      console.log(preUser);
      localStorage.setItem('users',[preUser,data])
      localStorage.setItem('currentUser',data)
    }
    else{
      toast('Enter valid number')
    }
   
  }
  return (
    <div className="Login">
    <div className="left">
      <h1>Looks like you're new here!</h1>
      <p>Sign up with your mobile number to get started</p>
      <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png" alt="login"/>
    </div>
    <div className="right">
      <input placeholder="Enter Phone Number" value={data} onChange={(e)=> setData(e.target.value)}/>
      <p>By continuing, you agree to Flipkart's <span>Terms of Use</span> and <span>Privacy Policy.</span></p>
      <button onClick={handleRegister}>Continue</button>
      <div onClick={props.data}>Existing user? Log in</div>
    </div>
  </div>
  )
}

export default Register