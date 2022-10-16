import React from 'react';
import "./FeedItem.css";
import CallAPI from "./getSpotifyAPICalls";
function FeedItem(props) {
    const {side,margin} =props
    let root = document.querySelector(':root');
    let rootStyles = getComputedStyle(root);
    root.style.setProperty('--side',side)
    root.style.setProperty('--margin',margin)

    return (
        <div className ="post">
            <CallAPI/>
        </div>
    );
}

export default FeedItem;