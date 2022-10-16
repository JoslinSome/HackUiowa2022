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
import FriendIcon from './addFriend.png';
import React, {useState} from 'react';



function FriendsPage(props) {
    const [friends, setFriends] = useState([]);
    const [friendName, setFriendName] = useState('');
    const [messages, setMessages] = useState([])
    const [selected, setSelected] = useState('');
    const [message, setMessage] = useState('');

    function handleClick(){
        setFriends(friends => [...friends, friendName])
        console.log(friends)
    }
    function addMessage(){
        console.log("sdadx")
        setMessages(messages => [...messages, message])

        console.log(messages)
    }
    return (
        <div className="content">
            <div className="row">
                <h3>Add Friend</h3>
                <input className="rounded-input2" onChange={(event)=>setFriendName(event.target.value)}></input>
                <button className="addFriend" onClick={handleClick}><img className="icon" src={FriendIcon}/></button>
            </div>
          <div className="scrollable-div">
              {friends.map((item,index)=>{
                  return <FriendChatOption item={item} setSelected={setSelected}/>
              })}

        </div>

        <div className="text-conversation">
            {messages.slice(0).reverse().map((item,index)=>{
                return <TextMessage text={item}/>
            })}
        </div>

        <Line/>

        <div className="hr2">
        </div>
        <div className="msg">
            <input className="rounded-input" onChange={(event)=>setMessage(event.target.value)}/>
            <button className="btn2" onClick={addMessage}>
                <img src={Arrow} className="arrow"/>
            </button>

        </div>

    </div>
    );
}

export default FriendsPage;