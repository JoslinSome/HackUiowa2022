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

                <FeedItem/>
            </div>
            <FeedItem/>
            <br/>
            <FeedItem/>
            <br/>
            <FeedItem/>
            <br/>
            <FeedItem/>
            <br/>
            <FeedItem/>
            <br/>

        </div>
    );
}

export default Feed;