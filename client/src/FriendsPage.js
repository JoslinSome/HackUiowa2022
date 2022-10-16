import React from 'react';
import "./FriendsPage.css"
import ReactDOM from "react-dom";
import Line from "./line";
import HorizontalLine from "./horizontalLine";
import FriendChatOption from "./FriendChatOption";
import Arrow from "./arrow.png"
import MessageBox from "./messageBox";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TextMessage from './TextMessage';



function FriendsPage(props) {

    return (
        <div className="content">
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

        <div className="text-conversation">

        </div>
        <Line/>

        <div className="hr2">
        </div>
        <div className="msg">
            <input className="rounded-input"/>
            <button className="btn2" onClick={()=>console.log('hi')}>
                <img src={Arrow} className="arrow"/>
            </button>
        </div>       

    </div>
    );
}

export default FriendsPage;