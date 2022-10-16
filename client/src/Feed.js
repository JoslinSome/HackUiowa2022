import React from 'react';
import MessageBox from "./messageBox";
import "./Feed.css"
import Post from "./Post";
import FeedItem from "./FeedItem";
function Feed(props) {
    return (
        <div>
            <div className ="message">
                <Post/>

            </div>
            <FeedItem side={'30vw'} margin={'50vh'}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'}/>
            <br/>

        </div>
    );
}

export default Feed;