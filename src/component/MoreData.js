import React from 'react'

const MoreData = ({data}) => {
  return (
    <div>
      {data.map(e=>(
        <div>
          {e[0]} 
          <li color='#fff'>{e[1]}</li>        
        </div>
      ))}
    </div>
  )
}

export default MoreData