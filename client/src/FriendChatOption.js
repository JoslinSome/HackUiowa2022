import React from 'react';
import HorizontalLine from "./horizontalLine";
import "./FriendChatOption.css"
import Circle from "./Circle";
function FriendChatOption(props) {
    return (
        <div>
            <div onClick={()=>console.log("hello")} className="option" >
            <Circle/>
            </div>
            <HorizontalLine/>
        </div>
    );
}

export default FriendChatOption;