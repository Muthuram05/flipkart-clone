import React, { useState } from 'react'
import Login from './Login'
import Register from './Register';


const Auth = () => {
  const [loginWindow,setLoginWindow] = useState(true);
  
  const handleWindow = () =>{
    setLoginWindow(!loginWindow);
  }
  return (
    <div>
        {loginWindow ? <Login data={handleWindow}/> : <Register data={handleWindow}/>}
    </div>
  )
}

export default Auth