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

        <FeedItem side={'30vw'} margin={'50vh'} query={'KSI'} type={"artist"} name={"Joslin"} post={"I LOVE JJ"}/>

            <FeedItem side={'30vw'} margin={'50vh'} query={'Shakira'} type={"artist"} name={"Marshall"} post={"Shakira is the reason I wake up in the morning"}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'} query={'Bob Marley'} type={"artist"} name={"Adnane"} post={"Dont worry be happy"}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'} query={'Katy Perry'} type={"artist"}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'} query={'21 Savage'} type={"artist"}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'} query={'Kesha'} type={"artist"}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'} query={'Drake'} type={"artist"}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'} query={'Booba'} type={"artist"}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'} query={'Pitbull'} type={"artist"}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'} query={'eminem'} type={"artist"}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'} query={'Snoop dog'} type={"artist"}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'} query={'Lil pump'} type={"artist"}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'} query={'billie eilish'} type={"artist"}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'} query={'Gucci mane'} type={"artist"}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'} query={'Yuno Miles'} type={"artist"}/>
            <br/>
            <FeedItem side={'30vw'} margin={'50vh'} query={'Bruno Mars'} type={"artist"}/>
            <br/>

        </div>
    );
}

export default Feed;