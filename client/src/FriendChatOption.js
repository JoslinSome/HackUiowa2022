import React from 'react';
import HorizontalLine from "./horizontalLine";
import "./FriendChatOption.css"
import Circle from "./Circle";
function FriendChatOption(props) {
    const {item,setSelected} = props
    return (
        <div>
            <div onClick={()=>setSelected(item)} className="option" >
            <Circle item={item}/>
                <h3 className="name">{item}</h3>
            </div>
            <HorizontalLine/>
        </div>
    );
}

export default FriendChatOption;