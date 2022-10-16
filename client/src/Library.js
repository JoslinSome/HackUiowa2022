import React from 'react';
import "./Library.css"
import FeedItem from "./FeedItem";
import TextMessage from "./TextMessage";
function Library(props) {
    return (
        <div>
            <br/>
                <div className="row">
                    <div className="column"><FeedItem side={'15vw'}/></div>
                    <div className="column"><FeedItem side={'15vw'}/></div>
                    <div className="column"><FeedItem side={'15vw'}/></div>
                    <div className="column"><FeedItem side={'15vw'}/></div>
                </div>
                <br/>
                <br/>

            <div className="row">
                    <div className="column"><FeedItem side={'15vw'}/></div>
                    <div className="column"><FeedItem side={'15vw'}/></div>
                    <div className="column"><FeedItem side={'15vw'}/></div>
                    <div className="column"><FeedItem side={'15vw'}/></div>
                </div>
            <br/>
            <br/>
                <div className="row">
                    <div className="column"><FeedItem side={'15vw'}/></div>
                    <div className="column"><FeedItem side={'15vw'}/></div>
                    <div className="column"><FeedItem side={'15vw'}/></div>
                    <div className="column"><FeedItem side={'15vw'}/></div>
                </div>
        </div>
    );
}

export default Library;