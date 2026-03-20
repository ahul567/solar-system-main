import React from 'react'

function Circle({image}) {
  return (
    <div>
      <div
       style = {{
        width: 43,
        height: 43,
        display:"flex",
        opacity: 1,
        marginTop:"7%",
        borderRadius:"50%",
        background: "#FFFFFF",
        boxShadow: "0px 4px 4px 0px #00000040"
       }}
      >
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default Circle
