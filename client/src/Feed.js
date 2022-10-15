import React from 'react';
import MessageBox from "./messageBox";
import "./Feed.css"
import Post from "./Post";
function Feed(props) {
    return (
        <div>
            <div className ="message">
                <Post/>
                <Feed/>
            </div>
        </div>
    );
}

export default Feed;