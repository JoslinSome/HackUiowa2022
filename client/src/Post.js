import React from 'react';
import MessageBox from "./messageBox";
import "./Post.css"
function Post(props) {
    return (
        <div>
            <h2>Share your vibes:</h2>
            <MessageBox/>
            <button className="postbtn">Post</button>
        </div>
    );
}

export default Post;