import React from 'react';
import "./Library.css"
import FeedItem from "./FeedItem";
import TextMessage from "./TextMessage";
function Library(props) {
    return (
        <div>
            <br/>
                <div className="row">
                    <div className="column"><FeedItem side={'15vw'} query={'Bob Marley'} type={"artist"}/></div>
                    <div className="column"><FeedItem side={'15vw'} query={"Shakira"} type={"artist"}/></div>
                    <div className="column"><FeedItem side={'15vw'} query={"KSI"} type={"artist"}/></div>
                    <div className="column"><FeedItem side={'15vw'} query={'Katy Perry'} type={"artist"}/></div>
                </div>
                <br/>
                <br/>

            <div className="row">
                    <div className="column"><FeedItem side={'15vw'} query={'Yuno Miles'} type={"artist"}/></div>
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