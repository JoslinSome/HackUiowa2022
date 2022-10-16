import React from 'react';
import "./FeedItem.css";
import CallAPI from "./getSpotifyAPICalls";
function FeedItem(props) {
    return (
        <div className ="post">
            <CallAPI/>
        </div>
    );
}

export default FeedItem;