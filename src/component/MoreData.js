import React from 'react'
import './MoreData.css'
const MoreData = ({ data }) => {
  return (
    <>
      {data.map((e,index) => (
        <div className='tippydata' key={index}>
          <li>{e[0]}</li>
          <span >{e[1]}</span>
        </div>
      ))}
    </>
  )
}

export default MoreData