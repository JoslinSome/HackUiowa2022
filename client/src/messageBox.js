import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import "./MessageBox.css"
function MessageBox(props) {
    const {setPost} =props
    return (
        <div>
            <input className="rounded-input" onChange={(event)=>setPost(event.target.value)}/>

        </div>
    );
}

export default MessageBox;