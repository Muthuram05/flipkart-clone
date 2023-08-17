import React from 'react'
import './MoreData.css'
const MoreData = ({ data }) => {
  console.log(data)
  return (
    <>
      {data.map(e => (
        <div className='tippydata' >
          <li>{e[0]}</li>
          <span >{e[1]}</span>
        </div>
      ))}
    </>
  )
}

export default MoreData