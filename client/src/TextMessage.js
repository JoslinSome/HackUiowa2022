import React from 'react'
import "./TextMessage.css"
function TextMessage(props) {
  const {text} = props
  return (
    <div className="text-content">
      <input className="text-bubble" placeholder={text} />
        <br/>
        <br/>

    </div>
  )
}

export default TextMessage