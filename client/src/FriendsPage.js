import React from 'react';
import "./FriendsPage.css"
import Line from "./line";
import HorizontalLine from "./horizontalLine";
import FriendChatOption from "./FriendChatOption";
function FriendsPage(props) {
    return (
        <div>
            <h2>Chat:</h2>
            <HorizontalLine/>
            <Line/>
            <div className="scrollable-div">
                <FriendChatOption/>
                <FriendChatOption/>
                <FriendChatOption/>
                <FriendChatOption/>
                <FriendChatOption/>
                <FriendChatOption/>
                <FriendChatOption/>
                <FriendChatOption/>
            </div>

        </div>
    );
}

export default FriendsPage;