import React from 'react'

const FooterItem = ({items}) => {
  return (
    <>
        {items.map(e=>(
            <a href='#'>{e}</a>
        ))}
    </>
  )
}

export default FooterItem