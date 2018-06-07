import React from "react";
const Scroll=(props)=>{
  return (
      <div style={{overflowY: 'scroll', border: '1px solid green', height: '40rem'}}>
      {props.children}
      </div>
  )

}

export default Scroll;