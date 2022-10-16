import React from 'react';
import "./FeedItem.css";
import CallAPI from "./getSpotifyAPICalls";
function FeedItem(props) {
    const {side,margin,query,type,name,post} =props
    let root = document.querySelector(':root');
    let rootStyles = getComputedStyle(root);
    root.style.setProperty('--side',side)
    root.style.setProperty('--margin',margin)

    return (
        <div className ="post">
            <h3 className='display'>{name}</h3>
            <h3 className='display'>{post}</h3>

            <CallAPI query={query} type={type}/>

        </div>
    );
}

export default FeedItem;