import React from 'react';
import "./FriendsPage.css"
import Line from "./line";
import HorizontalLine from "./horizontalLine";
import FriendChatOption from "./FriendChatOption";
import Arrow from "./arrow.png"
import MessageBox from "./messageBox";
function FriendsPage(props) {
    return (
        <div>

            <h2>Add a Friend</h2>
            <input/>
            <button className="btn">add</button>
                <div className="scrollable-div2">
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                </div>

                <div className="scrollable-div">
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                    <FriendChatOption/>
                </div>
            <Line/>

            <div className="hr2">
            </div>
            <div className="msg">
                <input className="rounded-input"/>
                <button className="btn2">
                    <img src={Arrow} className="arrow"/>
                </button>
            </div>

        </div>
    );
}

export default FriendsPage;