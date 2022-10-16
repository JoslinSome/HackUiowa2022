import React from 'react';
import MessageBox from "./messageBox";
import "./Post.css"
function Post(props) {
    const{setPost,setArtist,setClicked} = props
    return (
        <div>
            <h2>Share your vibes:</h2>
            <MessageBox setPost={setPost}/>
            <input className="rounded-input3" onChange={(event)=>setArtist(event.target.value)} placeholder='Artist Name'/>
            <button className="postbtn" onClick={()=>setClicked(true)}>Post</button>
        </div>
    );
}

export default Post;