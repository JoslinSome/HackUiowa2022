import React from 'react'
import "./TextMessage.css"
function TextMessage(props) {
  const {text} = props
  return (
    <div className="">
      <input className="text-bubble" placeholder={text} />
        <br/>
        <br/>
        <br/>

    </div>
  )
}

export default TextMessage